import { httpProcessor } from '../../../domain/models/http/http.interface';
import axios, { AxiosInstance } from "axios";

export class AxiosProcessor implements httpProcessor {

  private axios: AxiosInstance;

  constructor( urlBase?: string  ){
    this.axios = axios.create({
      baseURL: urlBase || 'https://api.coindesk.com/v1/',
      timeout: 3000,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  get(url: string, config?: Object | undefined ): Promise<any> {
    return this.axios.get(`${url}`, config);
  }

  post(url: string, body: any, config?: Object): Promise<any> {
    return this.axios.post(url, body, config);
  }

  delete(url: string, config?: Object): Promise<any> {
    throw new Error('Method not implemented.');
  }

  put(url: string, body?: Object, config?: Object): Promise<any> {
    throw new Error('Method not implemented.');
  }

  patch(url: string, body?: Object, config?: Object): Promise<any> {
    throw new Error('Method not implemented.');
  }

}