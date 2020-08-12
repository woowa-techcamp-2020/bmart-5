import { ApiResponse } from '@shared/dto/api-response';
const JsonResponse = (status: number, message: string, result: any): ApiResponse => {
  return { status, message, result };
};

export { JsonResponse };
