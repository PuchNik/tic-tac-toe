import type { IsCurrentPlayer } from "../types/currentPlayer";

interface InformationLayoutProps {
    currentPlayer: IsCurrentPlayer;
    isGameEnded: boolean;
    isDraw: boolean;
}

export const InformationLayout = ({
    currentPlayer,
    isGameEnded,
    isDraw,
}: InformationLayoutProps) => {
    return (
        <div className="text-2xl font-semibold text-gray-800 min-h-[40px] flex items-center justify-center">
            <span className="custom-text">
                {isDraw
                    ? "Ничья"
                    : isGameEnded
                    ? `Победа: ${currentPlayer}`
                    : `Ходит: ${currentPlayer}`}
            </span>
        </div>
    );
};
