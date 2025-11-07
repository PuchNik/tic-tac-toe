import { GameLayout } from "./GameLayout";
import { useGame } from "../../hooks/useGame";

function App() {
    const {
        currentPlayer,
        isGameEnded,
        isDraw,
        field,
        winningCells,
        handleCellClick,
        handleRestart,
    } = useGame();

    return (
        <GameLayout
            currentPlayer={currentPlayer}
            isGameEnded={isGameEnded}
            isDraw={isDraw}
            field={field}
            onCellClick={handleCellClick}
            onRestart={handleRestart}
            winningCells={winningCells}
        />
    );
}

export default App;
