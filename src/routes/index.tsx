import { FileRoute, Link } from "@tanstack/react-router";

export const Route = new FileRoute("/").createRoute({
  component: Index,
});

export default function Index() {
  return (
    <section className="w-full py-6 sm:py-12 md:py-24">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <img
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-xl lg:object-cover sm:w-full lg:order-last lg:aspect-square"
          height="550"
          src="https://wallpapercave.com/wp/upmtCfm.jpg"
          width="550"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Build Better with TanStack
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              We provide innovative solutions for your tech stack.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              to="/characters"
            >
              Go to characters
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
