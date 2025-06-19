interface Error {
  code: number
  message: string
}

export default interface ErrorMapperInterface {
  [key: number]: Error
}
