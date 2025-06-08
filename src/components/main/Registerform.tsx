import RegisterformSchema from "@/Utils/Type";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { customFetch } from "@/lib/helper";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

function Registerform() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof RegisterformSchema>>({
    resolver: zodResolver(RegisterformSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterformSchema>) {
    const name = values.username;
    const email = values.email;
    const password = values.password;
    try {
      const res = await customFetch.post("/auth/register", {
        name,
        email,
        password,
      });
      if (res.status === 201) {
        toast.success("ثبت نام شما باموفیت انجام شد", {
          position: "top-right",
        });
        navigate("/login");
      }
      console.log(res);
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error?.response?.data?.msg
          : "Registration Failed";
      console.log(error);

      toast.error(errorMsg, { position: "top-center" });
    }
  }

  return (
    <Card className="w-[80%] md:max-w-[700px]">
      <CardHeader>
        <CardTitle>فرم ثبت نام</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام کاربری</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ایمیل</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رمزعبور</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="text-white">
              {form.formState.isSubmitting ? "در حال ارسال" : "ثبت نام"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-between flex-wrap gap-y-2">
        <p className="text-sm font-semibold">آیا حساب کاربری دارید؟</p>
        <Link to="/login">
          <Button variant="ghost">ورود</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Registerform;
