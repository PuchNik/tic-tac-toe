import { useState } from "react";
import type { IsCurrentPlayer } from "../components/types/currentPlayer";
import {
    PLAYING_FIELD_CELLS,
    processMove,
} from "../utils/gameLogic";

export const useGame = () => {
    // Состояния игры
    const [currentPlayer, setCurrentPlayer] = useState<IsCurrentPlayer>("X");
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [field, setField] = useState(PLAYING_FIELD_CELLS);
    const [winningCells, setWinningCells] = useState<number[]>([]);

    // Обработчик клика по клетке
    const handleCellClick = (index: number): void => {
        if (field[index] === "" && isGameEnded === false) {
            const result = processMove(field, index, currentPlayer);

            setField(result.newField);

            if (result.winner) {
                setIsGameEnded(true);
                setWinningCells(result.winningCells);
            } else if (result.isDraw) {
                setIsDraw(true);
            } else {
                setCurrentPlayer(result.nextPlayer);
            }
        }
    };

    // Обработчик сброса игры
    const handleRestart = (): void => {
        setCurrentPlayer("X");
        setIsGameEnded(false);
        setIsDraw(false);
        setField(PLAYING_FIELD_CELLS);
        setWinningCells([]);
    };

    return {
        currentPlayer,
        isGameEnded,
        isDraw,
        field,
        winningCells,
        handleCellClick,
        handleRestart,
    };
};

