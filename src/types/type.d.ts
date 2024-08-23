interface ApiSuccessResponse {
  code: number;
}

interface BlogFormValue {
  title: string;
  description: string;
  images: File[];
  attachments?: {
    id: number;
    name: string;
    attachment_url: string;
  }[];
}
