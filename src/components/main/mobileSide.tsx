import { Link, useLocation } from "react-router-dom";
import { ChartNoAxesCombined } from "lucide-react";
import { UserRoundPen } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { ListChecks } from "lucide-react";
import { Card } from "../ui/card";
function MobileSide() {
  const location = useLocation();

  return (
    <Card className="mb-6 md:hidden ">
      <ul className="flex items-center justify-between text-xs">
        <li>
          <Link
            to="/dashboard/stats"
            className={`flex items-center justify-between p-2  ${
              location.pathname === "/dashboard/stats"
                ? "bg-orange-500 rounded-md dark:text-gray-950"
                : ""
            }`}>
            <span>آمار</span>
            <ChartNoAxesCombined className="w-4 h-4" />
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/profile"
            className={`flex items-center justify-between p-2  ${
              location.pathname === "/dashboard/profile"
                ? "bg-orange-500 rounded-md dark:text-gray-950 "
                : ""
            }`}>
            <span>پروفایل</span>
            <UserRoundPen className="w-4 h-4" />
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/add-job"
            className={`flex items-center justify-between p-2  ${
              location.pathname === "/dashboard/add-job"
                ? "bg-orange-500 rounded-md dark:text-gray-950"
                : ""
            }`}>
            <span>اضافه کردن </span>
            <CirclePlus className="w-4 h-4" />
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/all-jobs"
            className={`flex items-center justify-between p-2  ${
              location.pathname === "/dashboard/all-jobs"
                ? "bg-orange-500 rounded-md dark:text-gray-950 "
                : ""
            }`}>
            <span>شغل ها</span>
            <ListChecks className="w-4 h-4" />
          </Link>
        </li>
      </ul>
    </Card>
  );
}

export default MobileSide;
