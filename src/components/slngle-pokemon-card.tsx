import { BadgeIcon, BirdIcon, OrbitIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function SinglePokemonCard({
  name,
  weight,
  species,
  type,
  image,
}: {
  name: string;
  weight: number;
  species: string;
  type: string;
  image: string;
}) {
  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="w-32 h-32 mb-4">
          <AvatarImage alt="Character Image" src={image} />
          <AvatarFallback>PO</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="flex items-center">
          <BadgeIcon className="w-4 h-4 mr-2" />
          <span className="text-sm">species: {species}</span>
        </p>
        <p className="flex items-center">
          <BirdIcon className="w-4 h-4 mr-2" />
          <span className="text-sm">weight: {weight}</span>
        </p>
        <p className="flex items-center">
          <OrbitIcon className="w-4 h-4 mr-2" />
          <span className="text-sm">type: {type}</span>
        </p>
      </CardContent>
      {/* <div className="flex justify-center p-4">
          <Button variant="link">View More Details</Button>
        </div> */}
    </Card>
  );
}
