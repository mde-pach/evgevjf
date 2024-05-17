"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../buttons/theme-toggle";

const tournaments: { title: string; href: string; description: string }[] = [
  {
    title: "Babyfoot",
    href: "/tournaments/babyfoot",
    description:
      "Classement, résultats et programme des matchs du tournoi de babyfoot.",
  },
  {
    title: "Ping pong",
    href: "/tournaments/ping-pong",
    description:
      "Classement, résultats et programme des matchs du tournoi de ping pong.",
  },
];

const games: { title: string; href: string; description: string }[] = [
  {
    title: "Killer",
    href: "/games/killer",
    description: "Règles et déroulement du jeu du killer.",
  },
  {
    title: "Jeu mystère",
    href: "/",
    description: "???",
  },
];

const Navbar = () => {
  return (
    <NavigationMenu className="flex justify-between flex-grow min-w-full p-3 fixed">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Jeux</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {games.map((game) => (
                <ListItem key={game.title} title={game.title} href={game.href}>
                  {game.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tourois</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {tournaments.map((tournament) => (
                <ListItem
                  key={tournament.title}
                  title={tournament.title}
                  href={tournament.href}
                >
                  {tournament.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/players" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Players
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <ModeToggle />
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground z-50",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
