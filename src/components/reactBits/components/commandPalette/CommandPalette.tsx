import React, { useState, useEffect } from "react";
import "./CommandPalette.css";
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

  // Apply styling class to dialog when open
  useEffect(() => {
    if (open) {
      // Force apply styles by adding a wrapper class
      const dialog = document.querySelector("[cmdk-root]");
      if (dialog) {
        dialog.classList.add("cmdk-styled");
      }
    }
  }, [open]);

  // Toggle the menu when ⌘K or Ctrl+K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // ignore when user is typing in an input, textarea or contenteditable
      const active = document.activeElement as HTMLElement | null;
      if (
        active &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          active.isContentEditable ||
          active.tagName === "SELECT")
      ) {
        return;
      }

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
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(4px)",
        paddingTop: "15vh",
      }}
    >
      <div
        style={{
          width: "90vw",
          maxWidth: "640px",
          borderRadius: "8px",
          border: "1px solid var(--border)",
          backgroundColor: "var(--popover)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
        }}
      >
        <Command.Input
          placeholder={t("commandPalette.placeholder")}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderBottom: "1px solid var(--border)",
            backgroundColor: "transparent",
            color: "var(--foreground)",
            border: "none",
            borderBottomColor: "var(--border)",
            fontFamily: "inherit",
            fontSize: "1rem",
          }}
        />
        <Command.List
          style={{
            maxHeight: "330px",
            overflowY: "auto",
            padding: "0.5rem",
          }}
        >
          <Command.Empty
            style={{
              textAlign: "center",
              padding: "1.5rem",
              fontSize: "0.875rem",
              color: "var(--muted-foreground)",
            }}
          >
            {t("commandPalette.empty")}
          </Command.Empty>

          <Command.Group
            heading={t("commandPalette.navigationGroup")}
            style={{
              overflow: "hidden",
              padding: "0.25rem",
              color: "var(--foreground)",
            }}
          >
            <Command.Item
              onSelect={() => runCommand(() => navigate("/"))}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem",
                fontSize: "0.875rem",
                borderRadius: "4px",
                cursor: "pointer",
                userSelect: "none",
                transition: "background-color 0.1s",
                color: "var(--foreground)",
              }}
            >
              <Home
                style={{
                  marginRight: "0.75rem",
                  height: "1rem",
                  width: "1rem",
                }}
              />
              {t("home")}
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => navigate("/cv"))}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem",
                fontSize: "0.875rem",
                borderRadius: "4px",
                cursor: "pointer",
                userSelect: "none",
                transition: "background-color 0.1s",
                color: "var(--foreground)",
              }}
            >
              <User
                style={{
                  marginRight: "0.75rem",
                  height: "1rem",
                  width: "1rem",
                }}
              />
              {t("cv")}
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => navigate("/index"))}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem",
                fontSize: "0.875rem",
                borderRadius: "4px",
                cursor: "pointer",
                userSelect: "none",
                transition: "background-color 0.1s",
                color: "var(--foreground)",
              }}
            >
              <Layers
                style={{
                  marginRight: "0.75rem",
                  height: "1rem",
                  width: "1rem",
                }}
              />
              {t("demo")}
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading={t("commandPalette.actionsGroup")}
            style={{
              overflow: "hidden",
              padding: "0.25rem",
              color: "var(--foreground)",
            }}
          >
            <Command.Item
              onSelect={() =>
                runCommand(() => setTheme(theme === "light" ? "dark" : "light"))
              }
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem",
                fontSize: "0.875rem",
                borderRadius: "4px",
                cursor: "pointer",
                userSelect: "none",
                transition: "background-color 0.1s",
                color: "var(--foreground)",
              }}
            >
              {theme === "light" ? (
                <Moon
                  style={{
                    marginRight: "0.75rem",
                    height: "1rem",
                    width: "1rem",
                  }}
                />
              ) : (
                <Sun
                  style={{
                    marginRight: "0.75rem",
                    height: "1rem",
                    width: "1rem",
                  }}
                />
              )}
              {t("commandPalette.toggleTheme")}
            </Command.Item>
            <Command.Item
              onSelect={() =>
                runCommand(() =>
                  i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")
                )
              }
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem",
                fontSize: "0.875rem",
                borderRadius: "4px",
                cursor: "pointer",
                userSelect: "none",
                transition: "background-color 0.1s",
                color: "var(--foreground)",
              }}
            >
              <Globe
                style={{
                  marginRight: "0.75rem",
                  height: "1rem",
                  width: "1rem",
                }}
              />
              <span>
                {t("commandPalette.switchLang")}{" "}
                {i18n.language === "fr" ? t("en") : t("fr")}
              </span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
