import { useState } from "react";
import { GameContainer } from "./components/GameContainer";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  return (
    <main>
      <GameContainer onPlay={setGameTurns} />
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
