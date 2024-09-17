interface ApiSuccessResponse {
  code: number;
}

interface Attachments {
  id: number;
  name: string;
  attachment_url: string;
}

interface BlogFormValue {
  id: number;
  title: string;
  description: string;
  images: File[];
  attachments?: Attachments[];
}

interface ProductFormValue {
  id: number;
  name: string;
  category_id: number | null;
  description: string;
  price: number | undefined;
  images: File[];
  attachments?: Attachments[];
}

interface ProductCard {
  id: number;
  name: string;
  category_id: number | null;
  description: string;
  price: number | undefined;
  average_rating: number;
  max_rating: number;
  image: string;
  image_url: string;
  is_hot_product: boolean;
}

interface Category {
  id: number;
  name: string;
}

interface UploadFile extends File {
  preview: string;
}

interface Product {
  id: number;
  qty: number;
}
