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
  image: string;
  name: string;
  price: number;
}

interface Rating {
  product_id: number;
  rating: number;
}

interface Order {
  phone_number: string | undefined;
  region: string;
  address: string | undefined;
  payment_type: number | undefined;
  total_price: number | undefined;
  notes: string;
  products: Product[];
}

interface OrderDetail {
  price: number;
  product_id: number;
  product_name: string;
  qty: number;
  total: number;
  user_name: string;
  product_image_url: string;
}

interface OrderStatus {
  status: number | undefined;
}

interface UserUpdate {
  name: string;
  email: string;
  phone_number: string;
  gender: null | number;
  address: string;
  region: string;
}
