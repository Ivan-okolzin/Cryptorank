import {Currency} from './currency';

export interface ApiResponse {
  data: Currency[];
  status: {
    success: boolean;
    time: string;
    code: number;
    message: string;
    responseTime: number;
    creditsCost: number;
  };
}
