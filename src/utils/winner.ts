import type { IsCurrentPlayer } from "../components/types/currentPlayer";
import { WIN_PATTERNS } from "../constants/gameConstants";

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

