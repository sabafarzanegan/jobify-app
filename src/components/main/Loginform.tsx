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
import { Link } from "react-router-dom";

function Loginform() {
  const form = useForm<z.infer<typeof LoginformSchema>>({
    resolver: zodResolver(LoginformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof LoginformSchema>) {
    console.log(values);
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
              ورود
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
