export interface ICreateContact {
    name: string;
    phone: string;
    bio: string;
    photoUrl?: string|null;
  }
  export interface IContact extends ICreateContact {
    id: string;
  }