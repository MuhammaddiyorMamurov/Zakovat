 export interface FetchType<T>{
    limit:number
    total:number
    skip:number
    data:T[]
  }