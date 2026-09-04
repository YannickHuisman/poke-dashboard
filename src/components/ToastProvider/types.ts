export interface Toast {
  id: string;
  message: string;
}

export interface ToastApi {
  show: (message: string) => void;
}
