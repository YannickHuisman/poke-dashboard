'use client';

import { useEffect } from 'react';

import { StyledToast } from './styles';
import type { Toast } from './types';

const DURATION = 3000;

interface ToastItemProps {
  toast: Toast;
  onDismiss: (id: string) => void;
}

export function ToastItem({ toast, onDismiss }: ToastItemProps) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(toast.id), DURATION);

    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  return <StyledToast role="status">{toast.message}</StyledToast>;
}
