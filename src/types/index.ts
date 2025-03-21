export interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  price?: number;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  location?: string;
}
