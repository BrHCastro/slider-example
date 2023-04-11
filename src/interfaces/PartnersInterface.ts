export type PartnersType = {
  id: number
  company: string
  description: string
  image: string
  url: string
}

export interface PartnersInterface {
  data: PartnersType[]
}
