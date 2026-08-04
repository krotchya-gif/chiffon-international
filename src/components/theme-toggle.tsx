"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { useMessages } from "@/i18n/client";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useMessages();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t.themeToggle.gantiTema}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Sun weight="light" className="h-5 w-5" />
      ) : resolvedTheme === "light" ? (
        <Moon weight="light" className="h-5 w-5" />
      ) : null}
    </Button>
  );
}
