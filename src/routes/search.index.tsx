import { FileRoute } from "@tanstack/react-router";
import SearchCard from "../components/search-card";

export const Route = new FileRoute("/search").createRoute({
  component: SearchRoute,
});

export default function SearchRoute() {
  return (
    <section className="flex justify-center w-full py-6 sm:py-12 md:py-24">
      <SearchCard />
    </section>
  );
}
