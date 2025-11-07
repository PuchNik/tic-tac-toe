import { InformationLayout } from "./InformationLayout";
import type { IsCurrentPlayer } from "../types/currentPlayer";

interface InformationContainerProps {
    currentPlayer: IsCurrentPlayer;
    isGameEnded: boolean;
    isDraw: boolean;
}

export const InformationContainer = ({
    currentPlayer,
    isGameEnded,
    isDraw,
}: InformationContainerProps) => {
    return (
        <InformationLayout
            currentPlayer={currentPlayer}
            isGameEnded={isGameEnded}
            isDraw={isDraw}
        />
    );
};
