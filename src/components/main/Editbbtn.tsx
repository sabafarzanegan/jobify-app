import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { addJobSchema, Job } from "@/Utils/Type";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSelect from "./FormSelect";
import { customFetch } from "@/lib/helper";
import { useSelector } from "react-redux";
import { RootState } from "@/Store";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { Pencil } from "lucide-react";
type jobProps = Job;
function Editbbtn({
  _id,
  status,
  jobType,
  jobLocation,
  company,
  position,
}: jobProps) {
  const { user } = useSelector((state: RootState) => state.userState);
  async function onSubmit(values: z.infer<typeof addJobSchema>) {
    console.log(values);
    const { position, company, jobLocation, jobType, status } = values;
    try {
      const res = await customFetch.patch(
        `/jobs/${_id}`,
        { position, company, jobLocation, jobType, status },
        {
          headers: {
            authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (res.status >= 200 && res.status < 300) {
        toast.success("به روز رسانی با موفقیت انجام شد", {
          position: "bottom-right",
        });
      } else {
        toast.error(" به روز رسانی با مشکل مواجه شد", {
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
  const form = useForm({
    resolver: zodResolver(addJobSchema),
    defaultValues: {
      position: position,
      company: company,
      jobLocation: jobLocation,
      jobType: jobType,
      status: status,
    },
  });
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" className="flex items-center gap-x-2">
          <Pencil className="w-3 h-3" />
          <span>اصلاح</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>موارد موردنظر خودرا اصلاح کنید</DialogTitle>
        </DialogHeader>
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
              {form.formState.isSubmitting ? "...در حال " : "ادیت"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default Editbbtn;
