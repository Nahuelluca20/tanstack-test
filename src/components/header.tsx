import { Link } from "@tanstack/react-router";
import { SquareStackIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" to="/">
        <SquareStackIcon className="h-6 w-6" />
        <span className="sr-only">TanStack</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/characters"
        >
          Characters
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/characters"
        >
          Search
        </Link>
      </nav>
    </header>
  );
}
