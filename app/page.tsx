"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const teams = [
  { name: "Miłość", players: ["IloveMygirl", "Mazur"] },
  { name: "Patkozaury", players: ["Patka", "Nexus"] },
  { name: "Somsiady", players: ["Anna", "Somsiad"] },
  { name: "Skubani", players: ["Loq12", "Skubaniec"] },
  { name: "Szefowie", players: ["Grachu", "Piotrek"] },
  { name: "Buntownicy", players: ["Halok", "D"] },
  { name: "Żelazna Legia", players: ["PanGrzesiu", "Yakuza"] },
  { name: "Cienie Ostrzy", players: ["Nędzny", "Skała"] },
  { name: "Ogniste Wilki", players: ["Artur", "Maciek"] },
  { name: "Zwiastuny Zagłady", players: ["Bojek", "Robert"] },
  { name: "Szkarłatne Kły", players: ["Pit", "Bombal"] },
  { name: "Pogromcy Burzy", players: ["1", "Marcin2"] },
  { name: "Rzemieślnicy Wojny", players: ["Darkan", "Szary ludź"] },
  { name: "Kruszyciele Kości", players: ["Daro", "Ecia"] },
  { name: "Gniew Tytanów", players: ["Ariel", "Czesław"] },
  { name: "Stalowe Sępy", players: ["Araggorn", "Magunek"] },
  { name: "Panowanie Chaosu", players: ["Sebastian", "Kamaitachi"] },
  { name: "Synowie Furii", players: ["Mario", "Koper"] },
  { name: "Zakon Strzelców", players: ["Slaughter", "Damster"] },
  { name: "Oddział Otchłani", players: ["Laliama", "Warchlak"] },
  { name: "Widmowa Jednostka", players: ["Balu", "Kruszyn"] },
];

const groups = {
  A: teams.slice(0, 6),
  B: teams.slice(6, 11),
  C: teams.slice(11, 16),
  D: teams.slice(16, 21),
};

export default function SmashingFourTurniej() {
  const [results, setResults] = useState({});

  const handleResultChange = (group, teamIndex, value) => {
    setResults((prev) => ({
      ...prev,
      [group]: {
        ...(prev[group] || {}),
        [teamIndex]: value,
      },
    }));
  };

  return (
    <div className="p-4 max-w-5xl mx-auto bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">S4 Gladiators</h1>
      <Tabs defaultValue="grupy">
        <TabsList className="grid grid-cols-4 w-full mb-4">
          <TabsTrigger value="grupy">Grupy</TabsTrigger>
          <TabsTrigger value="wyniki">Wyniki</TabsTrigger>
          <TabsTrigger value="puchar">Faza pucharowa</TabsTrigger>
          <TabsTrigger value="zawodnicy">Lista zawodników</TabsTrigger>
        </TabsList>

        <TabsContent value="grupy">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(groups).map(([groupName, groupTeams]) => (
              <Card key={groupName} className="bg-zinc-900 border-zinc-800">
                <CardContent>
                  <h2 className="text-xl font-semibold mb-2">Grupa {groupName}</h2>
                  <ul className="space-y-1">
                    {groupTeams.map((team, i) => (
                      <li
                        key={`${groupName}-${team.name}`}
                        className="flex justify-between items-center"
                      >
                        <span>{team.name}</span>
                        <Input
                          className="w-20 text-black"
                          placeholder="pkt"
                          value={results[groupName]?.[i] || ""}
                          onChange={(e) => handleResultChange(groupName, i, e.target.value)}
                        />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="wyniki">
          <p className="text-center">Tutaj pojawią się szczegółowe wyniki po dodaniu meczu.</p>
        </TabsContent>

        <TabsContent value="puchar">
          <p className="text-center">Faza pucharowa zostanie uzupełniona po zakończeniu fazy grupowej.</p>
        </TabsContent>

        <TabsContent value="zawodnicy">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map((team, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardContent>
                  <h3 className="text-lg font-semibold mb-1">{team.name}</h3>
                  <ul className="text-sm list-disc pl-5">
                    {team.players.map((player, i) => (
                      <li key={i}>{player}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}