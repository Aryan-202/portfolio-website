import { Response } from 'express';

export interface ApiResponse<T = any> {
  status: 'success' | 'error';
  message: string;
  data?: T;
  errors?: string[];
}

export const sendSuccess = <T>(res: Response, message: string, data?: T): void => {
  const response: ApiResponse<T> = {
    status: 'success',
    message,
    data,
  };
  res.status(200).json(response);
};

export const sendError = (res: Response, message: string, errors?: string[], statusCode: number = 400): void => {
  const response: ApiResponse = {
    status: 'error',
    message,
    errors,
  };
  res.status(statusCode).json(response);
};

export const sendServerError = (res: Response, message: string = 'Internal server error'): void => {
  const response: ApiResponse = {
    status: 'error',
    message,
  };
  res.status(500).json(response);
};