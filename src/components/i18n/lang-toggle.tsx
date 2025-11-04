import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

export function LangToggle() {
  const { t, i18n } = useTranslation();
  const onChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18n", lng);
  };

  return (
    <Select onValueChange={onChangeLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={t(localStorage.getItem("i18n") || "Language")}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="fr">Français</SelectItem>
      </SelectContent>
    </Select>
  );
}
