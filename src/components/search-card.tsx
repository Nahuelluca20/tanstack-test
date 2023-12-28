import { MicroscopeIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

export default function SearchCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">Pokémon Search</CardTitle>
        <CardDescription className="text-center">
          Find your favorite Pokémon
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex w-full items-center space-x-2">
          <Input
            className="flex-grow"
            placeholder="Search for a Pokémon"
            type="text"
          />
          <Button type="submit">
            <MicroscopeIcon className="w-4 h-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
