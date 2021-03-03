import React from 'react'
import { Tooltip, Zoom } from '@material-ui/core'
import styled, { css } from 'styled-components'
import Styles from '../styles/components/button.module.css'

interface ButtonProps {
  color?: 'red' | 'green' | 'dark'
  isLarge?: boolean
  onClick?: () => void
  children: any
  description?: string
}

function colorToCss(color: ButtonProps['color']) {
  switch (color) {
    case 'red':
      return css`
        border-radius: 10px ;
        background-color: #5a0000;
        color: #fff;

        &:hover,
        &:focus {
          background-color: #2e0000;
        }
            `
    case 'green':
      return css`
                border-radius: 10px ;
                background-color: #002513;
                color: #fff;
                &:hover,
                &:focus {
                  background-color: #000000;
                }
                `
    case 'dark':
      return css`
                    border-radius: 10px ;
                    background-color: #200000;
                    color: #c5830d;
                    
                    &:hover,
                    &:focus {
                      background-color: #1a1a1a;
                    }
                  `
    default:
      return css`
      border-radius: 10px ;             
      background: #311b1b;
                    color: #fff;
                    &:hover,
                    &:focus {
                      background-color: #2e0000;
                    }
                  `
  }
}
export const StyledButton = ButtonSl()
function ButtonSl() {
  return styled.button<ButtonProps> `
${({ color }) => colorToCss(color)}
  ${({ isLarge }) => isLarge &&
      css`
      grid-column-end: span 2;
    `}
`
}
export default function Button({ children, color, isLarge, onClick, description }: ButtonProps) {
  return (
    <Tooltip TransitionComponent={Zoom} TransitionProps={{ timeout: 1000 }} title={!description ? '' : description} arrow placement="top">
      <StyledButton description={description} color={color} isLarge={isLarge} onClick={onClick} className={Styles.button}>
        {children}
      </StyledButton>
    </Tooltip>
  )
}
