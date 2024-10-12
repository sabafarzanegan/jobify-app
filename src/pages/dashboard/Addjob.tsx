import FormSelect from "@/components/main/FormSelect";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addJobSchema } from "@/Utils/Type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { customFetch } from "@/lib/helper";
import { useSelector } from "react-redux";
import { RootState } from "@/Store";

function Addjob() {
  const { user } = useSelector((state: RootState) => state.userState);
  const form = useForm<z.infer<typeof addJobSchema>>({
    resolver: zodResolver(addJobSchema),
    defaultValues: {
      position: "",
      company: "",
      jobLocation: "",
      jobType: "full-time",
      status: "interview",
    },
  });
  async function onSubmit(values: z.infer<typeof addJobSchema>) {
    console.log(values);
    try {
      const res = await customFetch.post(
        "/jobs",
        {
          position: values?.position,
          company: values?.company,
          jobLocation: values?.jobLocation,
          jobType: values?.jobType,
          status: values?.status,
        },
        {
          headers: {
            authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (res.status >= 200 && res.status < 300) {
        toast.success("شغل با موفقیت اضافه شد", {
          position: "bottom-right",
        });
      } else {
        toast.error("لطفا دوباره تلاش کنید", {
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
        <CardTitle>اضافه کردن موقعیت شغلی</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>موقعیت شغلی</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام شرکت</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>موقعیت شرکت</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormSelect
                      {...field}
                      value={field.value}
                      name="وضعیت"
                      list={["interview", "declined", "pending"]}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormSelect
                      {...field}
                      value={field.value}
                      name="نوع کار"
                      list={["full-time", "part-time", "remote", "internship"]}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-8" type="submit">
              {form.formState.isSubmitting ? "...در حال ساختن" : "ساختن"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default Addjob;
