import { AxiosError } from 'axios';

import { default as http } from './httpMollie';

const webhookUrl = 'https://tranquil-waters-91833.herokuapp.com/admin';
const redirectUrl = 'https://tranquil-waters-91833.herokuapp.com/admin';

class MollieService {
  async createUser(data: { name: string; email: string }) {
    try {
      const response = await http.post(`customers`, data);
      return response.data;
    } catch (error: AxiosError | any) {
      throw error.response?.data?.error?.message;
    }
  }
  //  NEEDto User User Id in Data Base
  async createOrderForCustomer(data: {
    customerId: string;
    description: string;
    amount: {
      currency: string;
      value: string;
    };
  }) {
    try {
      const response = await http.post(`payments`, {
        ...data,
        sequenceType: 'first',
        webhookUrl,
        redirectUrl,
      });
      return response.data;
    } catch (error: AxiosError | any) {
      console.log('🔥 ', error);
      throw error.response?.data?.error?.message;
    }
  }
}

export default new MollieService();
