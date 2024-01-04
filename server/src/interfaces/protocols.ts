
export interface Repository<T> {
  findAll(): Promise<T[]>;
  // findOne(id: string): Promise<T | null>;
  // insertOne(data: T): Promise<void>;
  // updateOne(id: string, data: T): Promise<void>;
  // deleteOne(id: string): Promise<void>;
}

export interface HttpResponse<T> {
  statusCode: number;
  body: T;
  msg: string;
}
