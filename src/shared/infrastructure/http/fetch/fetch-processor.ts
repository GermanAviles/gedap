import { httpProcessor } from '../../../domain/models/http/http.interface';

export class FetchProcessor implements httpProcessor {

  private headers = {};
  private URL: string = '';
  private configRequest = {
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, default, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }

  constructor( urlBase: string = '' ){
    this.URL = urlBase;
    this.headers = {  };
  }

  configHeaders( headersRequest: any = {} ): Headers {
    const headers = 'headers' in headersRequest ? { ...this.headers, ...headersRequest.headers } : this.headers;
    return new Headers( headers );
  }

  get(path: string, config?: Object): Promise<any> {
    return fetch(`${this.URL}${path}`, {
      method: 'GET',
      headers: this.configHeaders( config ),
      mode: 'no-cors',
      cache: 'default',
    });
  }

  delete(path: string, config?: Object): Promise<any> {
    return fetch(`${this.URL}${path}`, {
      method: 'DELETE',
      headers: this.configHeaders( config ),
      mode: 'no-cors',
      cache: 'default',
      redirect: 'error'
      // ...this.configRequest
    }).then( (response) => response.json());
  }

  post(path: string, body: any, config?: Object): Promise<any> {
    return fetch(`${this.URL}${path}`, {
      method: 'POST',
      body,
      headers: this.configHeaders( config ),
      mode: 'no-cors',
      cache: 'default',
      redirect: 'error'
      // ...thi.then( (response) response.json())s.configRequest
    });
  }

  put(path: string, body?: any, config?: Object): Promise<any> {
    return fetch(`${this.URL}${path}`, {
      method: 'PUT',
      body,
      headers: this.configHeaders( config ),
      mode: 'no-cors',
      cache: 'default',
      redirect: 'error'
      // ...thi.then( (response) response.json())s.configRequest
    });
  }

  patch(path: string, body?: any, config?: Object): Promise<any> {
    return fetch(`${this.URL}${path}`, {
      method: 'PATCH',
      body,
      headers: this.configHeaders( config ),
      mode: 'no-cors',
      cache: 'default',
      redirect: 'error'
      // ...thi.then( (response) response.json())s.configRequest
    });
  }

}