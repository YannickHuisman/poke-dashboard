'use client';

import { type ReactNode, useCallback, useMemo, useRef, useState } from 'react';

import { ToastContext } from './context';
import { StyledToastViewport } from './styles';
import { ToastItem } from './ToastItem';
import type { Toast, ToastApi } from './types';

const MAX_VISIBLE = 3;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(0);

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const show = useCallback((message: string) => {
    const id = `toast-${idRef.current++}`;
    setToasts((current) => [...current, { id, message }].slice(-MAX_VISIBLE));
  }, []);

  const api = useMemo<ToastApi>(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={api}>
      {children}
      <StyledToastViewport aria-live="polite" aria-label="Notifications" $gap="sm" $align="center">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={dismiss} />
        ))}
      </StyledToastViewport>
    </ToastContext.Provider>
  );
}
