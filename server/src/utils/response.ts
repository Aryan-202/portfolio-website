export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Array<{ field: string; message: string }>;
}

export const createResponse = <T>(
  success: boolean,
  message: string,
  data?: T,
  errors?: Array<{ field: string; message: string }>
): ApiResponse<T> => ({
  success,
  message,
  data,
  errors,
});