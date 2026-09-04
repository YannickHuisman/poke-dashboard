'use client';

import { useContext } from 'react';

import { type ModalApi, ModalContext } from '@components/ModalProvider';

export function useModal(): ModalApi {
  const api = useContext(ModalContext);

  if (!api) throw new Error('useModal must be used within a ModalProvider');

  return api;
}
