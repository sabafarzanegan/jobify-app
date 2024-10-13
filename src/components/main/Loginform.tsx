import { LoginformSchema } from "@/Utils/Type";
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
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { customFetch } from "@/lib/helper";
import { useDispatch } from "react-redux";
import { loginUser } from "@/Feature/user/userSlice";
import { useSelector } from "react-redux";

function Loginform() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof LoginformSchema>>({
    resolver: zodResolver(LoginformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof LoginformSchema>) {
    console.log(values);
    const email = values.email;
    const password = values.password;
    try {
      const res = await customFetch.post("/auth/login", { email, password });
      console.log(res.data.user.email);

      if (res.status === 200) {
        toast("ورود شماباموفقیت انجام شد", { position: "bottom-right" });
        navigate("/dashboard");
        dispatch(loginUser(res?.data?.user));
      }
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error?.response?.data?.msg
          : "ورود با شکست مواجه شد";
      console.log(error);

      toast.error(errorMsg, { position: "top-center" });
    }
  }

  return (
    <Card className=" w-[60%] md:w-[50%] lg:w-[40%]">
      <CardHeader>
        <CardTitle>فرم ورود</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            <Button type="submit" className="text-white">
              {form.formState.isSubmitting ? "..." : "ورود"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-between flex-wrap gap-y-2">
        <p className="text-sm font-semibold">آیا حساب کاربری ندارید؟</p>
        <Link to="/register">
          <Button variant="ghost">ثبت نام</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Loginform;
