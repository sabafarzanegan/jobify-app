import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RootState } from "@/Store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { profileFormSchema } from "@/Utils/Type";
import { customFetch } from "@/lib/helper";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { loginUser } from "@/Feature/user/userSlice";

function Profile() {
  const { user } = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user?.name,
      lastName: user?.lastName,
      email: user?.email,
      location: user?.location,
    },
  });

  async function onSubmit(values: z.infer<typeof profileFormSchema>) {
    console.log(values);
    try {
      const res = await customFetch.patch(
        "/auth/updateUser",
        {
          name: values?.name,
          lastName: values?.lastName,
          email: values?.email,
          location: values?.location,
        },
        {
          headers: {
            authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (res.status >= 200 && res.status < 300) {
        dispatch(loginUser(res.data.user));
        toast.success("به روز رسانی با موفقیت انجام شد", {
          position: "bottom-right",
        });
      } else {
        toast.error("به روز رسانی با مشکل مواجه شد", {
          position: "bottom-right",
        });
      }
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error?.response?.data?.msg
          : "Registration Failed";
      toast.error(errorMsg);
      console.log(error);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>مشخصات کاربر</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام کاربر</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام خانوادگی</FormLabel>
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
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>موقعیت</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              {form.formState.isSubmitting ? "...در حال انجام" : "به روز رسانی"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default Profile;
