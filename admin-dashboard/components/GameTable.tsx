import React from 'react';

interface Game {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
}

interface Props {
  games: Game[];
}

const GameTable: React.FC<Props> = ({ games }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {games.map(game => (
          <tr key={game.id}>
            <td>{game.name}</td>
            <td>{game.description}</td>
            <td>
              {game.imageUrl ? <img src={game.imageUrl} alt={game.name} width={50} /> : 'N/A'}
            </td>
            <td>
              {/* Action buttons (Edit/Delete) to be added */}
              <button>Edit</button> <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GameTable;
