import React, { useState } from 'react'
import Display from './Display'
import Pad from './Pad'
import Styles from '../styles/Home.module.css'
import { Digit, Operator } from './Pad'
export default function App() {

    const [result, setResult] = useState<number>(0)
    const [display, setDisplay] = useState<string>('0')
    const [isWaitingForOperand, setIsWaitingForOperand] = useState<boolean>(true)
    const [pendingOperator, setPendingOperator] = useState<Operator>()
    const [memory, setMemory] = useState<number>(0)


    function calculate(rightOperand: number, pendingOperator: Operator): boolean {
        let newResult = result

        switch (pendingOperator) {
            case '+':
                newResult += rightOperand
                break
            case '-':
                newResult -= rightOperand
                break
            case '×':
                newResult *= rightOperand
                break
            case '÷':
                if (rightOperand === 0) {
                    return false
                }
                newResult /= rightOperand
        }
        setResult(newResult);
        setDisplay(newResult.toString().toString().slice(0, 12))

        return true
    }

    function onDigitButtonClick(digit: Digit) {
        let newDisplay = display;

        if ((display === '0' && digit === 0) || display.length > 8) {
            return
        }
        if (isWaitingForOperand) {
            newDisplay = ''
            setIsWaitingForOperand(false);
        }

        if (display !== '0') {
            newDisplay = newDisplay + digit.toString()
        } else {
            newDisplay = digit.toString()
        }
        setDisplay(newDisplay)
    }

    function onPointButtonClick() {
        let newDisplay = display;

        if (isWaitingForOperand) {
            newDisplay = '0'
        }

        if (newDisplay.indexOf('.') === -1) {
            newDisplay = newDisplay + '.'
        }
        setDisplay(newDisplay)
        setIsWaitingForOperand(false)
    }

    function onOperatorButtonClick(operator: Operator) {
        const operand = Number(display);

        if (typeof pendingOperator !== 'undefined' && !isWaitingForOperand) {
            if (!calculate(operand, pendingOperator)) {
                return
            }
        } else {
            setResult(operand)
        }
        setPendingOperator(operator)
        setIsWaitingForOperand(true)
    }

    function onChangeSignButtonClick() {
        const value = Number(display)

        if (value > 0) {
            setDisplay('-' + display)
        } else if (value < 0) {
            setDisplay(display.slice(1))
        }
    }

    function onEqualButtonClick() {
        const operand = Number(display)

        if (typeof pendingOperator !== 'undefined' && !isWaitingForOperand) {
            if (!calculate(operand, pendingOperator)) {
                return
            }
            setPendingOperator(undefined)
        } else {
            setDisplay(operand.toString())
        }
        setResult(operand)
        setIsWaitingForOperand(true)
    }
    function onAllClearButtonClick() {
        setMemory(0)
        setResult(0)
        setPendingOperator(undefined)
        setDisplay('0')
        setIsWaitingForOperand(true)
    }
    function onClearEntryButtonClick() {
        setDisplay('0')
        setIsWaitingForOperand(true)
    }





    const onMemoryRecallButtonClick = () => {
        setDisplay(memory.toString())
        setIsWaitingForOperand(true)
    }

    const onMemoryClearButtonClick = () => {
        setMemory(0)
        setIsWaitingForOperand(true)
    }

    const onMemoryPlusButtonClick = () => {
        setMemory(memory + Number(display))
        setIsWaitingForOperand(true)
    }

    const onMemoryMinusButtonClick = () => {
        setMemory(memory - Number(display))
        setIsWaitingForOperand(true)
    }








    return (
        <div className={Styles.container}>
            <Display value={display} hasMemory={memory !== 0} expression={typeof pendingOperator !== 'undefined' ? `${result}${pendingOperator}${isWaitingForOperand ? '' : display}` : ''} />
            <Pad
                onDigitButtonClick={onDigitButtonClick}
                onPointButtonClick={onPointButtonClick}
                onOperatorButtonClick={onOperatorButtonClick}
                onChangeSignButtonClick={onChangeSignButtonClick}
                onEqualButtonClick={onEqualButtonClick}
                onAllClearButtonClick={onAllClearButtonClick}
                onClearEntryButtonClick={onClearEntryButtonClick}
                onMemoryRecallButtonClick={onMemoryRecallButtonClick}
                onMemoryClearButtonClick={onMemoryClearButtonClick}
                onMemoryPlusButtonClick={onMemoryPlusButtonClick}
                onMemoryMinusButtonClick={onMemoryMinusButtonClick}
            />
        </div>
    )
}
