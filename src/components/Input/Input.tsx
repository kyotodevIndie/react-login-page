import { InputHTMLAttributes } from 'react'
import './styles.sass'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  register?: UseFormRegisterReturn
  error?: string
  label?: string
}

export const Input = ({
  register,
  error,
  label,
  id,
  className = '',
  ...rest
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input
        data-testid="input"
        role="input"
        className={'input ' + className}
        id={id}
        {...register}
        {...rest}
      />
      {error && <span className="input__errorLabel">{error}</span>}
    </div>
  )
}
