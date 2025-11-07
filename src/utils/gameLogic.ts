import type { IsCurrentPlayer } from "../components/types/currentPlayer";

// Константы
export const PLAYING_FIELD_CELLS = ["", "", "", "", "", "", "", "", ""];

export const WIN_PATTERNS: number[][] = [
    [0, 1, 2], // Горизонталь 1
    [3, 4, 5], // Горизонталь 2
    [6, 7, 8], // Горизонталь 3
    [0, 3, 6], // Вертикаль 1
    [1, 4, 7], // Вертикаль 2
    [2, 5, 8], // Вертикаль 3
    [0, 4, 8], // Диагональ главная
    [2, 4, 6], // Диагональ побочная
];

// Функция проверки победителя
export const checkWinner = (field: string[]): IsCurrentPlayer | null => {
    for (const pattern of WIN_PATTERNS) {
        const [a, b, c] = pattern;

        // Проверка: все три клетки одинаковые и не пустые
        if (field[a] && field[a] === field[b] && field[b] === field[c]) {
            return field[a] as IsCurrentPlayer; // победитель найден
        }
    }
    return null; // победителя нет
};

// Функция получения индексов выигрышной комбинации
export const getWinningCells = (field: string[]): number[] => {
    // Оптимизация: используем checkWinner, чтобы не дублировать логику
    const winner = checkWinner(field);
    if (!winner) {
        return [];
    }

    // Если есть победитель, находим паттерн
    for (const pattern of WIN_PATTERNS) {
        const [a, b, c] = pattern;
        if (field[a] && field[a] === field[b] && field[b] === field[c]) {
            return [a, b, c];
        }
    }
    return [];
};

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

