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

function Addjob() {
  const form = useForm<z.infer<typeof addJobSchema>>({
    resolver: zodResolver(addJobSchema),
    defaultValues: {
      position: "",
      company: "",
      jobLocation: "",
      jobType: "تمام وقت",
      status: "مصاحبه",
    },
  });
  function onSubmit(values: z.infer<typeof addJobSchema>) {
    console.log(values);
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
                      list={["مصاحبه", "رد شده", "درانتظار"]}
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
                      list={["تمام وقت", "باره وقت", "دورکاری", "کارآموزی"]}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-8" type="submit">
              ارسال
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default Addjob;
