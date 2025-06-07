import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserRoundPen } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { ListChecks } from "lucide-react";

import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/Feature/user/userSlice";
import { toast } from "react-toastify";

function Sidebar() {
  const location = useLocation();
  console.log(location.pathname);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <aside className="h-svh w-[300px] border-l px-2 relative hidden md:block">
      <ul className="flex flex-col gap-y-4 ">
        <li>
          <Link
            to="/dashboard/profile"
            className={`flex items-center justify-between p-2  ${
              location.pathname === "/dashboard/profile"
                ? "bg-primary rounded-md dark:text-gray-950 "
                : ""
            }`}>
            <span>پروفایل</span>
            <UserRoundPen className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/add-job"
            className={`flex items-center justify-between p-2  ${
              location.pathname === "/dashboard/add-job"
                ? "bg-primary rounded-md dark:text-gray-950"
                : ""
            }`}>
            <span>اضافه کردن شغل</span>
            <CirclePlus className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/all-jobs"
            className={`flex items-center justify-between p-2  ${
              location.pathname === "/dashboard/all-jobs"
                ? "bg-primary rounded-md dark:text-gray-950 "
                : ""
            }`}>
            <span>شغل ها</span>
            <ListChecks className="w-5 h-5" />
          </Link>
        </li>
      </ul>
      <div className="w-full mt-6">
        <Button
          onClick={() => {
            dispatch(logoutUser());
            navigate("/login");
            toast("برای استفاده از سایت لطفا دوباره وارد شوید", {
              position: "top-center",
            });
          }}
          variant="destructive"
          className="w-full items-center justify-between">
          <span>خروج کاربر</span>
          <LogOut className="w-5 h-5" />
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;
