import { Outlet, Link } from "react-router-dom";
import BubbleMenu from "../reactBits/components/bubbleMenu/BubbleMenu";
import PillNav from "../reactBits/components/pillNav/PillNav";
import GooeyNav from "../reactBits/components/gooeyNav/GooeyNav";
import {
  CircleHelpIcon,
  CircleIcon,
  CircleCheckIcon,
  Home,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTranslation } from "react-i18next";
import { LangToggle } from "../i18n/lang-toggle";
import { ModeToggle } from "../themeMode/mode-toggle";

const NavLayer: React.FC = () => {
  const { t } = useTranslation();

  const langChange = (lang: string) => {
    localStorage.setItem("lang", lang);
  };

  const nav = [
    {
      item: (
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to="/home">{t("home")}</Link>
        </NavigationMenuLink>
      ),
    },
    {
      item: (
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to="/cv">{t("cv")}</Link>
        </NavigationMenuLink>
      ),
    },
    {
      item: (
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to="/index">{t("index")}</Link>
        </NavigationMenuLink>
      ),
    },
    {
      item: (
        <Popover>
          <PopoverTrigger>{t("param")}</PopoverTrigger>
          <PopoverContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <span popoverTarget="lang" className="col-span-1">
                  {t("lang")}
                </span>
                <div id="lang" className="col-span-2">
                  <LangToggle />
                </div>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <span popoverTarget="theme">{t("theme")}</span>
                <div id="lang" className="col-span-1 justify-center">
                  <ModeToggle />
                </div>

              </div>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
  ];

  return (
    <div className="flex h-screen w-screen flex-col sticky">
      <main className="flex-1 overflow-auto">
        <div className="flex justify-center bg-background">
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap bg-transparent border border-green-600">
              {nav.map((elt) => (
                <NavigationMenuItem>{elt.item}</NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default NavLayer;
