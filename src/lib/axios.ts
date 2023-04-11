import axios from 'axios'

interface IFetchAPI {
  path: string
  query?: object
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
})

export async function fetchAPI<T = unknown>({ path, query }: IFetchAPI) {
  const { data } = await api.get<T>(`/${path}`, { params: query })

  if (!data) {
    throw new Error(`API call to ${path} failed`)
  }

  return data
}
