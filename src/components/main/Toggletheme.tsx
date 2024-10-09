import { RootState } from "@/Store";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Sun } from "lucide-react";
import { Settings } from "lucide-react";
import { MoonStar } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/Feature/Theme/themeSlice";
import { Button } from "../ui/button";
function Toggletheme() {
  const theme = useSelector((state: RootState) => state.themeState);
  const dispatch = useDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>
          {theme.theme === "dark" && <Sun />}
          {theme.theme === "light" && <MoonStar />}
          {theme.theme === "system" && <MoonStar />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Themes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="space-y-4">
          <div
            className="cursor-pointer flex items-center justify-between"
            onClick={() => {
              dispatch(setTheme("system"));
            }}>
            <span>سیستم</span>
            <span>
              <Settings className="w-4 h-4" />
            </span>
          </div>
          <div
            className="cursor-pointer flex items-center justify-between"
            onClick={() => {
              dispatch(setTheme("light"));
            }}>
            <span>روشن</span>
            <span>
              <Sun className="w-4 h-4" />
            </span>
          </div>
          <div
            className="cursor-pointer flex items-center justify-between"
            onClick={() => {
              dispatch(setTheme("dark"));
            }}>
            <span>تاریک</span>
            <span>
              <MoonStar className="w-4 h-4" />
            </span>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Toggletheme;
