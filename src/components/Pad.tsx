import Button from "./Button";
import Styles from '../styles/components/pad.module.css'

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type Operator = '+' | '-' | '×' | '÷'

interface PadProps {
    onDigitButtonClick: (digit: Digit) => void
    onPointButtonClick: () => void
    onOperatorButtonClick: (operator: Operator) => void
    onChangeSignButtonClick: () => void
    onEqualButtonClick: () => void
    onAllClearButtonClick: () => void
    onClearEntryButtonClick: () => void
    onMemoryRecallButtonClick: () => void
    onMemoryClearButtonClick: () => void
    onMemoryPlusButtonClick: () => void
    onMemoryMinusButtonClick: () => void

}

export default function Pad({
    onDigitButtonClick,
    onPointButtonClick,
    onOperatorButtonClick,
    onChangeSignButtonClick,
    onEqualButtonClick,
    onAllClearButtonClick,
    onClearEntryButtonClick,
    onMemoryRecallButtonClick,
    onMemoryClearButtonClick,
    onMemoryPlusButtonClick,
    onMemoryMinusButtonClick

}: PadProps) {

    return (
        <div className={Styles.pad}>
            <Button
                description="Chamar Valor Memorizado"
                onClick={onMemoryRecallButtonClick}
            >
                MR
            </Button>
            <Button
                description="Limpar Memória"
                onClick={onMemoryClearButtonClick}
            >
                MC
            </Button>
            <Button
                description="Adicionar Valor à Memória"
                onClick={onMemoryPlusButtonClick}
            >
                M+
            </Button>
            <Button
                description="Remover Valor da Memória"
                onClick={onMemoryMinusButtonClick}
            >
                M-
            </Button>
            <Button
                description="Resetar Valores"
                onClick={onAllClearButtonClick}
                color="red"
            >
                AC
            </Button>
            <Button
                description="Limpar Display"
                onClick={onClearEntryButtonClick}
            >
                C
            </Button>
            <Button
                description="Inverter Sinal"
                onClick={onChangeSignButtonClick}
            >
                -/+
            </Button>
            <Button
                onClick={() => onOperatorButtonClick('÷')}
                color="dark"
            >
                ÷
            </Button>
            <Button onClick={() => onDigitButtonClick(7)}>7</Button>
            <Button onClick={() => onDigitButtonClick(8)}>8</Button>
            <Button onClick={() => onDigitButtonClick(9)}>9</Button>
            <Button
                onClick={() =>
                    onOperatorButtonClick('×')}
                color="dark"
            >
                ×
            </Button>
            <Button onClick={() => onDigitButtonClick(4)}>4</Button>
            <Button onClick={() => onDigitButtonClick(5)}>5</Button>
            <Button onClick={() => onDigitButtonClick(6)}>6</Button>
            <Button
                onClick={() =>
                    onOperatorButtonClick('-')}
                color="dark"
            >
                -
            </Button>
            <Button onClick={() => onDigitButtonClick(1)}>1</Button>
            <Button onClick={() => onDigitButtonClick(2)}>2</Button>
            <Button onClick={() => onDigitButtonClick(3)}>3</Button>
            <Button
                onClick={() =>
                    onOperatorButtonClick('+')}
                color="dark"
            >
                +
            </Button>
            <Button onClick={() => onDigitButtonClick(0)}>0</Button>
            <Button onClick={onPointButtonClick}>.</Button>
            <Button
                onClick={onEqualButtonClick}
                color="green"
                isLarge={true}
            >
                =
            </Button>
        </div>

    )
}
