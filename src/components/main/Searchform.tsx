import { filterSchema } from "@/Utils/Type";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSelect from "./FormSelect";
import { z } from "zod";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addfilter } from "@/Feature/job/jobSlice";

function Searchform() {
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      search: "",
      status: "",
      type: "",
      sort: "",
    },
  });
  function onSubmit(values: z.infer<typeof filterSchema>) {
    console.log(values);
    dispatch(
      addfilter({
        search: values.search,
        sort: values.sort,
        type: values.type,
        status: values.status,
      })
    );
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormLabel>جستجو</FormLabel>
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
                  value={field.value}
                  name="وضعیت"
                  list={["all", "interview", "declined", "pending"]}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FormSelect
                  value={field.value}
                  name="نوع شغل"
                  list={[
                    "all",
                    "full-time",
                    "part-time",
                    "remote",
                    "internship",
                  ]}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sort"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FormSelect
                  value={field.value}
                  name="دسته یندی"
                  list={["all", "latest", "oldest", "a-z", "z-a"]}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-8" type="submit">
          جست وجو
        </Button>
      </form>
    </Form>
  );
}

export default Searchform;
