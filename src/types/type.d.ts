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

interface Category {
  id: number;
  name: string;
}
