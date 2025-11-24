import React, { useState, useEffect } from "react";
import { Command } from "cmdk";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/components/themeMode/theme-provider";
import { Sun, Moon, Globe, Home, User, Layers } from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { setTheme, theme } = useTheme();

  // Toggle the menu when ⌘K or Ctrl+K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => unknown) => {
    setOpen(false);
    command();
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label={t("commandPalette.label")}
    >
      <Command.Input placeholder={t("commandPalette.placeholder")} />
      <Command.List>
        <Command.Empty>{t("commandPalette.empty")}</Command.Empty>

        <Command.Group heading={t("commandPalette.navigationGroup")}>
          <Command.Item onSelect={() => runCommand(() => navigate("/"))}>
            <Home className="mr-2 h-4 w-4" />
            {t("home")}
          </Command.Item>
          <Command.Item onSelect={() => runCommand(() => navigate("/cv"))}>
            <User className="mr-2 h-4 w-4" />
            {t("cv")}
          </Command.Item>
          <Command.Item onSelect={() => runCommand(() => navigate("/index"))}>
            <Layers className="mr-2 h-4 w-4" />
            {t("index")}
          </Command.Item>
        </Command.Group>

        <Command.Group heading={t("commandPalette.actionsGroup")}>
          <Command.Item
            onSelect={() =>
              runCommand(() => setTheme(theme === "light" ? "dark" : "light"))
            }
          >
            {theme === "light" ? (
              <Moon className="mr-2 h-4 w-4" />
            ) : (
              <Sun className="mr-2 h-4 w-4" />
            )}
            {t("commandPalette.toggleTheme")}
          </Command.Item>
          <Command.Item
            onSelect={() =>
              runCommand(() =>
                i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")
              )
            }
          >
            <Globe className="mr-2 h-4 w-4" />
            <span>
              {t("commandPalette.switchLang")}{" "}
              {i18n.language === "fr" ? t("en") : t("fr")}
            </span>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
