export interface Post {
  author: Author;
  createdAt: Date;
  excerpt: string;
  title: string;
  featuredImage: Photo;
  categories: Category[];
}

export interface Author {
  bio: string;
  createdAt: Date;
  name: string;
  id: string;
  photo: Photo;
}

export interface Photo {
  url: string;
}

export interface Category {
  slug: string;
  name: string;
}


