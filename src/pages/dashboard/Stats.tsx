import StatsCard from "@/components/main/StatsCard";
import { customFetch } from "@/lib/helper";
import { RootState } from "@/Store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Luggage } from "lucide-react";
import { Podcast } from "lucide-react";
import { Ban } from "lucide-react";
import { Statstype } from "@/Utils/Type";
import { Button } from "@/components/ui/button";
import Barchart from "@/components/main/Barchart";
import Areachart from "@/components/main/Areachart";

function Stats() {
  const { user } = useSelector((state: RootState) => state.userState);
  const [stats, setState] = useState<Statstype>();
  const [barChart, setBarchart] = useState(true);
  const getState = async () => {
    const res = await customFetch.get("/jobs/stats", {
      headers: {
        authorization: `Bearer ${user?.token}`,
      },
    });
    console.log(res.data);
    setState(res.data);
  };
  useEffect(() => {
    getState();
  }, []);
  return (
    <section>
      <div className="flex items-center justify-center flex-wrap gap-x-5 gap-y-2 ">
        <StatsCard
          title="شغل های درحال انتظار"
          icon={<Luggage />}
          number={stats?.defaultStats?.pending}
          type="pending"
        />
        <StatsCard
          title="شغل های آماده مصاحبه"
          icon={<Podcast />}
          number={stats?.defaultStats?.interview}
          type="interview"
        />
        <StatsCard
          title="شغل های رد شده"
          icon={<Ban />}
          number={stats?.defaultStats?.declined}
          type="declined"
        />
      </div>
      <main className="mt-4">
        <Button
          className="bg-orange-500 text-white"
          onClick={() => {
            setBarchart((prev) => !prev);
          }}>
          {barChart ? "نمودار میله ای" : "نمودار نقطه ای"}
        </Button>
        {barChart ? (
          <Barchart data={stats?.monthlyApplications} />
        ) : (
          <Areachart data={stats?.monthlyApplications} />
        )}
      </main>
    </section>
  );
}

export default Stats;
