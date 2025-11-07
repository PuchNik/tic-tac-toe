import { FieldLayout } from "./FieldLayout";

interface FieldContainerProps {
    field: string[];
    onCellClick: (index: number) => void;
    winningCells: number[];
}

export const FieldContainer = ({
    field,
    onCellClick,
    winningCells,
}: FieldContainerProps) => {
    return (
        <FieldLayout
            field={field}
            onCellClick={onCellClick}
            winningCells={winningCells}
        />
    );
};
