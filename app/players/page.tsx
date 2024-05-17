import { availablePlayers } from "@/data/players";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center md:p-24 pt-24">
      <h1 className="text-3xl font-bold mb-5">Joueurs</h1>
      <div className="grid grid-cols-1 gap-4">
        {Object.values(availablePlayers).map((player) => (
          <div key={player.name} className="flex items-center">
            <Card>
              <CardHeader className="text-xl font-bold">
                {player.name}
              </CardHeader>
              <CardContent>{player.description}</CardContent>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
