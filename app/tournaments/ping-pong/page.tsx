import React from "react";
import Tournament from "@/components/tournament/tournament";

import { type Player, availablePlayers } from "@/data/players";
import "@/public/styles/pong.css";

const players = [
  availablePlayers.maxime,
  availablePlayers.fares,
  availablePlayers.paul,
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

// const results: string[][] = [[availablePlayers.maxime]];
const results: Player[][] = [];

const Page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 p-5 md:p-24">
      <h1 className="text-3xl font-bold mb-5">Tournoi de ping pong</h1>
      <p className="my-5 md:px-48">
        Le tennis de table, appelé aussi ping-pong, est un sport de raquette
        opposant deux ou quatre joueurs autour d&apos;une table. Le tennis de
        table est une activité de loisir, mais c&apos;est également un sport
        olympique depuis 1988.
      </p>
      <Tournament players={players} results={results} />
      <div className="as-ping-pong">
        <svg
          data-gwd-shape="rectangle"
          className="gwd-rect-p9af gwd-svg-i5ni gwd-gen-dk61gwdanimation"
        ></svg>

        <svg
          data-gwd-shape="rectangle"
          className="gwd-rect-p9af gwd-rect-1prq gwd-gen-mdyqgwdanimation"
        ></svg>
        <svg
          data-gwd-shape="rectangle"
          className="gwd-rect-1q0w gwd-gen-1ti0gwdanimation"
        ></svg>
      </div>
    </main>
  );
};

export default Page;
