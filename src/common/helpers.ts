import { HttpStatus } from './constants';

const DEFAULT_SUCCESS_MESSAGE = 'success';

export interface IErrorResponse {
  key: string;
  errorCode: number;
  message: string;
}

export class SuccessResponse {
  constructor(data = {}, message = DEFAULT_SUCCESS_MESSAGE) {
    return {
      code: HttpStatus.SUCCESS,
      message,
      data,
    };
  }
}

export class ErrorResponse {
  constructor(
    code = HttpStatus.INTERNAL_SERVER_ERROR,
    message = '',
    errors: IErrorResponse[] = [],
  ) {
    return {
      code,
      message,
      errors,
    };
  }
}
