import { InformationContainer } from "../Information/InformationContainer";
import { FieldContainer } from "../Field/FieldContainer";
import type { IsCurrentPlayer } from "../types/currentPlayer";

interface GameLayoutProps {
    currentPlayer: IsCurrentPlayer;
    isGameEnded: boolean;
    isDraw: boolean;
    field: string[];
    onCellClick: (index: number) => void;
    onRestart: () => void;
    winningCells: number[];
}

export const GameLayout = ({
    currentPlayer,
    isGameEnded,
    isDraw,
    field,
    onCellClick,
    onRestart,
    winningCells,
}: GameLayoutProps) => {
    return (
        <div className="custom-bg flex flex-col items-center justify-center min-h-screen p-8 gap-8">
            {/* Статус игры */}
            <InformationContainer
                currentPlayer={currentPlayer}
                isGameEnded={isGameEnded}
                isDraw={isDraw}
            />

            {/* Игровое поле 3x3 */}
            <FieldContainer
                field={field}
                onCellClick={onCellClick}
                winningCells={winningCells}
            />

            {/* Кнопка "Начать заново" */}
            <button
                onClick={onRestart}
                className="px-6 py-3 custom-button text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                <p className="custom-text">Начать заново</p>
            </button>
        </div>
    );
};
