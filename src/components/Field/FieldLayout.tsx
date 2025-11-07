interface FieldLayoutProps {
    field: string[];
    onCellClick: (index: number) => void;
    winningCells: number[];
}

export const FieldLayout = ({
    field,
    onCellClick,
    winningCells,
}: FieldLayoutProps) => {
    return (
        <div className="grid grid-cols-3 gap-2 w-fit">
            {field.map((cell, index) => {
                // Проверяем, входит ли эта клетка в выигрышную комбинацию
                const isWinningCell = winningCells.includes(index);

                return (
                    <button
                        key={index}
                        className={`w-24 h-24 border-2 rounded-lg text-4xl font-bold flex items-center justify-center aspect-square transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                            isWinningCell
                                ? "bg-green-300 hover:bg-green-400 border-green-500"
                                : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                        }`}
                        disabled={false}
                        onClick={() => onCellClick(index)}
                    >
                        {cell}
                    </button>
                );
            })}
        </div>
    );
};
