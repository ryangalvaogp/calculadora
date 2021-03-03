import Styles from '../styles/components/display.module.css'

interface DisplayProps {
    value: string
    expression: string
    hasMemory: boolean
}

export default function Display({ value, expression, hasMemory }: DisplayProps) {
    return (
        <div className={Styles.display} >
            <div className={Styles.indicatorList}>
                {
                    hasMemory &&
                    <span>M</span>
                }
                <div className={Styles.expression}>{expression}</div>
            </div>
            <div className={Styles.Screen}>{value}</div>
        </div>
    )
}
