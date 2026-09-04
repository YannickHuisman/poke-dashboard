'use client';

import { useContext } from 'react';

import { type ToastApi, ToastContext } from '@components/ToastProvider';

export function useToast(): ToastApi {
  const api = useContext(ToastContext);

  if (!api) throw new Error('useToast must be used within a ToastProvider');

  return api;
}
