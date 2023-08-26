export interface ICreateContact {
    name: string;
    phone: string;
    bio: string;
  }
  export interface IContact extends ICreateContact {
    id: number;
  }