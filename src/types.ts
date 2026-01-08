export type User = {
  id: number;
  name: string;
  username: string;
  website: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
    country: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
