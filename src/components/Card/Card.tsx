import { HTMLAttributes } from 'react'
import './styles.sass'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Card = ({ className = '', ...rest }: CardProps) => {
  return (
    <div
      data-testid="card"
      aria-label="card"
      className={'card ' + className}
      {...rest}
    />
  )
}
