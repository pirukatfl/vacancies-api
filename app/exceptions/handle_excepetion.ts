import ErrorMapperInterface from '../interfaces/error_mapper.js'

const errorsMapper: ErrorMapperInterface = {
  401: { code: 401, message: 'Sem permissão de acesso!' },
  409: { code: 409, message: 'Email já em uso!' },
}
export default class ExceptionError {
  static excepetionErrors(code: number) {
    return errorsMapper[code]
  }
}
