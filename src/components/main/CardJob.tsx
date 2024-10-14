import { Job } from "@/Utils/Type";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MapPin } from "lucide-react";
import moment from "moment";
import { CalendarDays } from "lucide-react";
import { Timer } from "lucide-react";

import Deletebtn from "./Deletebtn";
import Editbbtn from "./Editbbtn";

type jobProps = Job;
function CardJob({
  company,
  position,
  jobLocation,
  createdAt,
  jobType,
  status,
  _id,
}: jobProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-start gap-x-4">
          <p className=" px-6 py-3 rounded-md mb-3 bg-blue-600">
            {company.charAt(0)}
          </p>
          <div className="space-y-1">
            <p>{position}</p>
            <p className="text-gray-300 text-sm">{company}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-y-2 text-">
          <div className="flex items-center gap-x-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <p>{jobLocation}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <CalendarDays className="w-4 h-4 text-gray-400" />
            <span> {moment(createdAt).format("MMM Do, YYYY")}</span>
          </div>
          <div className="flex items-center gap-x-4">
            <Timer className="w-4 h-4 text-gray-400" />
            <span className="">{jobType}</span>
          </div>
          <div
            className={`text-center inline-grid py-1 rounded-md font-semibold 
              ${status === "pending" && "bg-yellow-500"}
             ${status === "interview" && "bg-blue-300"} 
             ${status === "declined" && "bg-red-500"} `}>
            {status}
          </div>
        </div>
        <div className="mt-2 flex items-center gap-x-2">
          <Deletebtn id={_id} />
          <Editbbtn
            _id={_id}
            status={status}
            jobType={jobType}
            createdAt={createdAt}
            jobLocation={jobLocation}
            company={company}
            position={position}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default CardJob;
