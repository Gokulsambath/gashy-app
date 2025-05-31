import React, { useEffect, useState } from 'react';
import GameTable from '../components/GameTable';

interface Game {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
}

const ManageGames = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    // Fetch games from backend API (placeholder)
    fetch('/api/games')
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(() => setGames([]));
  }, []);

  return (
    <div>
      <h2>Manage Games</h2>
      <GameTable games={games} />
      {/* Add Add/Edit/Delete buttons here */}
    </div>
  );
};

export default ManageGames;
