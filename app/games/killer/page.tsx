import { Card, CardHeader } from "@/components/ui/card";
import { type Player, availablePlayers } from "@/data/players";

const players = [
  availablePlayers.paul,
  availablePlayers.maxime,
  availablePlayers.fares,
  availablePlayers.penelope,
  availablePlayers.alice,
  availablePlayers.hugo,
  availablePlayers.steve,
  availablePlayers.pam,
  availablePlayers.juju,
  availablePlayers.lena,
  availablePlayers.jq,
  availablePlayers.theotime,
  availablePlayers.esther,
  availablePlayers.stan,
  availablePlayers.nico,
  availablePlayers.iris,
  availablePlayers.pauline,
];

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center md:p-24 pt-24">
      <h1 className="text-3xl font-bold mb-5">
        Le jeu du &ldquo;Killer&ldquo;
      </h1>
      <p>
        Le jeu du killer est un jeu. Le but du jeu est d&apos;être le dernier
        joueur en vie. Chaque joueur à la possibilité de &ldquo;Killé&ldquo; un
        autre joueur en réuississant le défi qui lui est assigné à la cible qui
        lui est assigné. Vous ne pouvez killer que votre cible désigné. Lorsque
        votre cible est eliminé, vous récupérez sa cible et son défi et vous
        devez continuer ainsi jusqu&apos;à récupérer votre propre nom.
      </p>
      <div className="grid grid-cols-4 gap-4 place-content-center mt-5">
        {players.map((player: Player, index: number) => (
          <div key={index} className="mb-2">
            <Card>
              <CardHeader className="text-xl font-bold">
                {player.name}
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
