import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import { api } from '../../services/api'
import { User } from './types'

async function getUser(ctx: QueryFunctionContext) {
  const [, userId] = ctx.queryKey

  const { data } = await api.get<User>(`/users/${userId}`)

  return data
}

export function useUserInfos(userId: number | undefined) {
  return useQuery({ queryKey: ['repos', userId], queryFn: getUser })
}
