import { useSelector } from "react-redux";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { RootState } from "@/Store";
import { customFetch } from "@/lib/helper";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { Trash } from "lucide-react";

function Deletebtn({ id }: { id: string }) {
  const { user } = useSelector((state: RootState) => state.userState);
  const deletJobHandler = async () => {
    try {
      const res = await customFetch.delete(`/jobs/${id}`, {
        headers: {
          authorization: `Bearer ${user?.token}`,
        },
      });
      if (res.status >= 200 && res.status < 300) {
        toast.success("محصول حذف شد", {
          position: "top-center",
        });
      } else {
        toast.error("عملیات بامشکل مواجه شد", {
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
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="destructive" className="flex items-center gap-x-2">
          <Trash className="w-3 h-3" />
          <span>حذف</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex items-center justify-center">
        <AlertDialogHeader>
          <AlertDialogTitle>آیا از حذف کردن اطمینان دارید؟</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="ml-2">نه</AlertDialogCancel>
          <AlertDialogAction onClick={deletJobHandler}>بله</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Deletebtn;
