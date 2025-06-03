import { useState } from "react";

export default function Home() {
  const teams = [
    { name: "Miłość", players: ["IloveMygirl", "Mazur"] },
    { name: "Patkozaury", players: ["Patka", "Nexus"] },
    { name: "Somsiady", players: ["Anna", "Somsiad"] },
    { name: "Skubani", players: ["Loq12", "Skubaniec"] },
    { name: "Szefowie", players: ["Grachu", "Piotrek"] },
    { name: "Buntownicy", players: ["Halok", "D"] }
  ];

  const [points, setPoints] = useState({});

  return (
    <div className="p-4 max-w-3xl mx-auto text-white min-h-screen bg-black">
      <h1 className="text-3xl font-bold text-center mb-6">S4 Gladiators</h1>
      <div className="space-y-4">
        {teams.map((team, i) => (
          <div key={i} className="border border-zinc-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold">{team.name}</h2>
            <ul className="text-sm pl-5 list-disc">
              {team.players.map((player, j) => (
                <li key={j}>{player}</li>
              ))}
            </ul>
            <input
              type="number"
              className="mt-2 p-1 text-black"
              placeholder="Punkty"
              value={points[i] || ""}
              onChange={(e) => setPoints({ ...points, [i]: e.target.value })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
