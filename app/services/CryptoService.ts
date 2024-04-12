import axios from 'axios';
import {FetchCurrenciesOptions} from '../interfaces/currency';
import {ApiResponse} from '../interfaces/api';

//on real project this will be in config file
const API_KEY = 'b7adfc9063243c0dd4023674eb5718af2f103fbe2675ae569d1ad82f739d';
const BASE_URL = 'https://api.cryptorank.io/v1/currencies';

class CryptoService {
  static async fetchCurrencies({
    limit = 10,
    offset = 0,
    symbol,
    sort,
  }: FetchCurrenciesOptions): Promise<ApiResponse> {
    const params = new URLSearchParams({
      api_key: API_KEY,
      limit: limit.toString(),
      offset: offset.toString(),
    });

    if (sort) {
      params.append('sort', sort);
    }
    if (symbol) {
      params.append('symbol', symbol);
    }

    try {
      const response = await axios.get(`${BASE_URL}?${params.toString()}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default CryptoService;
