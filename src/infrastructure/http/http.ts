import { httpProcessor } from '../../domain/models/http/http.interface';
import { AxiosProcessor } from './axios/axios-processor';
import { FetchProcessor } from './fetch/fetch-processor';

export class HttpClient {

  http: httpProcessor;

  constructor( urlBase: string ){
    // this.http = new AxiosProcessor(urlBase);
    this.http = new FetchProcessor(urlBase);
  }

  get(path: string, config?: Object | undefined): Promise<any> {
    return this.http.get(`${path}`, config );
  }

  post(path: string, body: any, query?: string, config?: Object): Promise<any> {
    throw new Error('Method not implemented.');
  }

  delete(path: string, query?: string, config?: Object): Promise<any> {
    throw new Error('Method not implemented.');
  }

  put(path: string, body?: Object, query?: string, config?: Object): Promise<any> {
    throw new Error('Method not implemented.');
  }

  patch(path: string, body?: Object, query?: string, config?: Object): Promise<any> {
    throw new Error('Method not implemented.');
  }

}