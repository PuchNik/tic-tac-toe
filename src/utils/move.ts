import type { IsCurrentPlayer } from "../components/types/currentPlayer";
import { checkWinner, getWinningCells } from "./winner";

// Тип результата обработки хода
export interface MoveResult {
    newField: string[];
    winner: IsCurrentPlayer | null;
    winningCells: number[];
    isDraw: boolean;
    nextPlayer: IsCurrentPlayer;
}

// Функция обработки хода (чистая функция)
export const processMove = (
    field: string[],
    index: number,
    currentPlayer: IsCurrentPlayer
): MoveResult => {
    // Валидация: проверяем, что индекс валидный и клетка пустая
    if (index < 0 || index >= field.length || field[index] !== "") {
        throw new Error("Invalid move: cell is already occupied or index is out of bounds");
    }

    // Создаем новое поле с ходом
    const newField = [...field];
    newField[index] = currentPlayer;

    // Проверяем победителя
    const winner = checkWinner(newField);
    const winningCells = winner ? getWinningCells(newField) : [];

    // Проверяем ничью
    const isAllFilled = newField.every((cell) => cell !== "");
    const isDraw = !winner && isAllFilled;

    // Определяем следующего игрока
    const nextPlayer: IsCurrentPlayer = currentPlayer === "X" ? "O" : "X";

    return {
        newField,
        winner,
        winningCells,
        isDraw,
        nextPlayer,
    };
};

