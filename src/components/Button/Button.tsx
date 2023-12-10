import { ButtonHTMLAttributes } from 'react'
import './styles.sass'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button = ({ className = '', ...rest }: ButtonProps) => {
  return <button className={'button ' + className} {...rest} />
}
