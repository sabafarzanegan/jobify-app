import { customFetch } from "@/lib/helper";
import { RootState } from "@/Store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import CardJob from "@/components/main/CardJob";

import { Job } from "@/Utils/Type";
import SearchContainer from "@/components/main/SearchContainer";
import Pagination from "@/components/main/Pagination";

function Alljobs() {
  const { user } = useSelector((state: RootState) => state.userState);
  const [allJobs, setAlljobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageData, setPagedata] = useState();
  const [page, setPage] = useState(1);

  const { status, type, sort } = useSelector(
    (state: RootState) => state.jobState
  );

  const getAllJobs = async () => {
    try {
      const res = await customFetch.get(
        `/jobs?status=${status}&jobType=${type}&sort=${sort}&page=${page}`,
        {
          headers: { authorization: `Bearer ${user?.token}` },
        }
      );
      if (res.status >= 200 && res.status < 300) {
        // console.log(res.data);

        setPagedata(res.data.numOfPages);

        setAlljobs(res.data.jobs);
      } else {
        toast.error("گرفتن داده با مشکل مواجه شد", {
          position: "bottom-right",
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const errorMsg =
        error instanceof AxiosError
          ? error?.response?.data?.msg
          : "Registration Failed";
      toast.error(errorMsg);
      console.log(error);
    }
  };
  useEffect(() => {
    getAllJobs();
  }, [allJobs]);

  return (
    <section>
      <SearchContainer />
      <h2>شغل ها</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {loading ? (
          <div className="flex items-center justify-center loader"></div>
        ) : (
          allJobs.map((job) => <CardJob {...job} />)
        )}
      </div>
      <Pagination numOfPages={pageData} page={page} setPage={setPage} />
    </section>
  );
}

export default Alljobs;
