import { Button } from "@/components/ui/button";
import LandingImg from "../assets/images/landing.png";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="w-full h-screen flex items-center justify-between gap-x-10 flex-wrap-reverse md:flex-nowrap">
      <div>
        <img
          src={LandingImg}
          className="mx-auto w-[600px] h-[600px] rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-y-4 items-center justify-center w-full">
        <p className="text-base md:text-lg lg:text-xl font-semibold text-center w-full">
          موقعیت های شغلی موردنظر خودرا ذخیره کنید.
        </p>
        <div>
          <Button>
            <Link to="/login">ورود/ثبت نام</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
