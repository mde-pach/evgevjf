import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { type Player } from "@/data/players";

const MatchComponent: React.FC<{
  player1: string;
  player2: string;
  winner?: string;
}> = ({ player1, player2, winner }) => (
  <div>
    <Card>
      <CardContent className="pt-6 text-center">
        <span
          className={
            winner
              ? winner === player1
                ? "font-bold text-green-500"
                : "text-gray-500"
              : ""
          }
        >
          {player1}
        </span>{" "}
        vs{" "}
        <span
          className={
            winner
              ? winner === player2
                ? "font-bold text-green-500"
                : "text-gray-500"
              : ""
          }
        >
          {player2}
        </span>
      </CardContent>
    </Card>
  </div>
);

const Tournament: React.FC<{ players: Player[]; results: Player[][] }> = ({
  players,
  results,
}) => {
  const getMatches = (round: number) => {
    if (round === 1) {
      return players;
    } else {
      return results[round - 2] || [];
    }
  };

  const getWinner = (round: number, player1: Player, player2: Player) => {
    const roundResults = results[round - 1];
    if (roundResults && roundResults.includes(player1)) {
      return player1;
    }
    if (roundResults && roundResults.includes(player2)) {
      return player2;
    }
    return undefined;
  };

  const numRounds = Math.ceil(Math.log2(players.length + 1));

  return (
    <div className={"px-5"}>
      <Tabs defaultValue={`${results.length || 1}`} className="flex flex-col">
        <TabsList className="mb-5">
          {Array.from({ length: numRounds }, (_, i) => (
            <TabsTrigger key={i + 1} value={(i + 1).toString()}>
              Round {i + 1}
            </TabsTrigger>
          ))}
        </TabsList>
        {Array.from({ length: numRounds }, (_, i) => (
          <TabsContent key={i + 1} value={(i + 1).toString()} className="">
            {!getMatches(i + 1).length ? (
              <Card>
                <CardContent className="text-center pt-6">
                  Pas encore de résultats
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-2 gap-4 place-content-center">
                {getMatches(i + 1).map((player: Player, index: number) => {
                  if (index % 2 === 0)
                    return (
                      <div key={index} className="mb-2">
                        <MatchComponent
                          player1={player.name}
                          player2={getMatches(i + 1)[index + 1]?.name}
                          winner={
                            getWinner(
                              i + 1,
                              player,
                              getMatches(i + 1)[index + 1]
                            )?.name
                          }
                        />
                      </div>
                    );
                })}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Tournament;
