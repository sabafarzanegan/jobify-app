import Toggletheme from "./Toggletheme";

function Logo() {
  return (
    <div className="flex items-center justify-between gap-x-2 mt-2">
      <div className="flex items-center gap-x-2">
        <div className="px-5 py-3 bg-primary rounded-md text-xl font-bold">
          J
        </div>
        <h1 className="font-lale">جابیفای</h1>
      </div>
      <div>
        <Toggletheme />
      </div>
    </div>
  );
}

export default Logo;
