import React from "react";
import Tournament from "@/components/tournament/tournament";

import { type Player, availablePlayers } from "@/data/players";
import "@/public/styles/babyfoot.css";

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
      <h1 className="text-3xl font-bold mb-5">Tournois de babyfoot</h1>
      <p></p>
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
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="gwd-rect-1q0w gwd-gen-1ti0gwdanimation"
        >
          <circle fill="#000000" cx="97" cy="97" r="97" />
          <path
            fill="#ffffff"
            d="m 94,9.2 a 88,88 0 0 0 -55,21.8 l 27,0 28,-14.4 0,-7.4 z m 6,0 0,7.4 28,14.4 27,0 a 88,88 0 0 0 -55,-21.8 z m -67.2,27.8 a 88,88 0 0 0 -20,34.2 l 16,27.6 23,-3.6 21,-36.2 -8.4,-22 -31.6,0 z m 96.8,0 -8.4,22 21,36.2 23,3.6 15.8,-27.4 a 88,88 0 0 0 -19.8,-34.4 l -31.6,0 z m -50,26 -20.2,35.2 17.8,30.8 39.6,0 17.8,-30.8 -20.2,-35.2 -34.8,0 z m -68.8,16.6 a 88,88 0 0 0 -1.8,17.4 88,88 0 0 0 10.4,41.4 l 7.4,-4.4 -1.4,-29 -14.6,-25.4 z m 172.4,0.2 -14.6,25.2 -1.4,29 7.4,4.4 a 88,88 0 0 0 10.4,-41.4 88,88 0 0 0 -1.8,-17.2 z m -106,57.2 -15.4,19 L 77.2,182.6 a 88,88 0 0 0 19.8,2.4 88,88 0 0 0 19.8,-2.4 l 15.4,-26.6 -15.4,-19 -39.6,0 z m -47.8,2.6 -7,4 A 88,88 0 0 0 68.8,180.4 l -14,-24.6 -25.4,-16.2 z m 135.2,0 -25.4,16.2 -14,24.4 a 88,88 0 0 0 46.4,-36.6 l -7,-4 z"
          />
        </svg>
      </div>
      <p className="mt-24 font-light italic text-center">
        Vas-y j&apos;ai pas le temps de faire des animations la tu crois quoi ?
      </p>
    </main>
  );
};

export default Page;
