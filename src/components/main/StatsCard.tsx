import { ReactNode } from "react";
import { Card, CardContent } from "../ui/card";
type statsProps = {
  icon: ReactNode;
  title: string;
  number: number | undefined;
  type: string;
};
function StatsCard({ icon, title, number, type }: statsProps) {
  return (
    <Card
      className={`py-4 w-[300px]  ${
        type === "pending" && " border-b-8 border-primary"
      }
      ${type === "interview" && " border-b-8 border-blue-600"}
      ${type === "declined" && " border-b-8 border-red-600"}`}>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between ">
          <p
            className={` text-2xl font-semibold${
              type === "pending" && " text-primary"
            }
                     ${type === "interview" && "text-blue-600"}
                      ${type === "declined" && " text-red-600"}`}>
            {number}
          </p>
          <p
            className={`px-4 py-2 text-xl font-semibold rounded-md text-white ${
              type === "pending" && "  bg-primary/80"
            }
                     ${type === "interview" && "bg-blue-600"}
                      ${type === "declined" && " bg-red-600"}`}>
            {icon}
          </p>
        </div>
        <div>
          <p className="text-base font-semibold">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default StatsCard;
