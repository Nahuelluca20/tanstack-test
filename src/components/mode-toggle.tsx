import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export default function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center cursor-pointer">
      <span className="sr-only">Switch to dark mode</span>
      {theme === "light" ? (
        <Moon className="h-full w-full" onClick={() => setTheme("dark")} />
      ) : (
        <Sun className="h-full w-full" onClick={() => setTheme("light")} />
      )}
    </div>
  );
}
