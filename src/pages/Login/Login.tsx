import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import './styles.sass'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'
import { api } from '../../services/api'
import { UserInfo } from '../../types/userInfo'
import { Footer } from '../../components/Footer'
import { ToastContainer, toast } from 'react-toastify'

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(5, { message: 'Must be 5 or more characters long' }),
})

type LoginInput = z.infer<typeof loginSchema>

type userCredentialsProps = {
  username: string
  password: string
}

export const Login = () => {
  const navigate = useNavigate()

  const setLoginData = useAuthStore((state) => state.setLoginData)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  async function login(userCredentials: userCredentialsProps) {
    const { username, password } = userCredentials

    try {
      const {
        data,
        data: { token },
      } = await api.post<UserInfo>('auth/login', {
        username,
        password,
      })
      setLoginData(token, data)
      navigate('/user')
    } catch (error: any) {
      toast.error(`${error.response.data.message}!`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    }
  }

  const onSubmit: SubmitHandler<LoginInput> = (
    userCredentials: userCredentialsProps,
  ) => {
    login(userCredentials)
  }

  return (
    <section className="login__section">
      <div className="login__container">
        <img className="login__logo" src="/assets/logo.svg" alt="logo" />
        <Card>
          <h1 className="login__title" data-testid="cypress-title-signin">
            Sign in to your account
          </h1>
          <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register('username')}
              error={errors?.username?.message}
              label="Username"
              type="text"
              name="username"
              id="username"
              placeholder="JGDiff"
              required
            />
            <Input
              register={register('password')}
              error={errors?.password?.message}
              label="Password"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required
            />
            <div className="login__link__container">
              <a href="#" className="login__link">
                Forgot password?
              </a>
            </div>
            <Button type="submit">Sign in</Button>
            <p className="login__paragraph">
              Don’t have an account yet?{' '}
              <a href="#" className="login__link">
                Sign up
              </a>
            </p>
          </form>
        </Card>
        <ToastContainer />
      </div>
      <Footer />
    </section>
  )
}
