import type { ReactNode } from 'react';

export interface ModalOptions {
  render: (close: () => void) => ReactNode;
  ariaLabel: string;
}

export interface ModalApi {
  open: (options: ModalOptions) => void;
  close: () => void;
}
