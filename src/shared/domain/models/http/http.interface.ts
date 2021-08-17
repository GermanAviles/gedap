export interface httpProcessor {

  // configHeaders(): void;

  get     ( path: string, config?: Object | undefined )                 : Promise<any>;
  delete  ( path: string, config?: Object | undefined )                 : Promise<any>;
  post    ( path: string, body  : any, config?: Object | undefined ) : Promise<any>;
  put     ( path: string, body ?: any, config?: Object | undefined ) : Promise<any>;
  patch   ( path: string, body ?: any, config?: Object | undefined ) : Promise<any>;


}