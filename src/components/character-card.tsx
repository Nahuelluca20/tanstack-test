import { Link } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function CharacterCard({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Name: {name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="link" asChild className="px-0">
          <Link to={id}>
            <CardDescription>See {name} details</CardDescription>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
