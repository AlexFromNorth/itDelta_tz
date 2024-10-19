import { ReactNode } from "react";

export type Images = {
  id: number;
  image: string;
}[];

export type ImagesState = {
  images: Images;
  loading: boolean;
  error: string | null;
};

export type Image = {
  id: number;
  image: string;
  largeImage: string;
  comments: Comment[];
};

export type ImageState = {
  image: Image | null;
  loading: boolean;
  error: string | null;
};

export type Comment = {
  id: number;
  author: string;
  text: string;
};

export type CommentsState = {
  comment: Comment[];
  loading: boolean;
  error: string | null;
};


export interface ProvidersProps {
  children: ReactNode; 
}

export interface ModalProps {
  onClose: () => void;
  currentModal: number;
}

// export type CartElement = (el: Element) => ReactElement;