// arr images []
export type Images = {
  id: number;
  image: string;
}[];

// export type GetElementsResponse = Element[];

type Comment = {
  id: number;
  author: string;
  text: string;
};

export type Image = {
  id: number;
  image: string;
  largeImage: string;
  comments: Comment[];
};

export type ImagesState = {
    images: Images;
    loading: boolean;
    error: string | null;
  };

// export type CartElement = (el: Element) => ReactElement;
