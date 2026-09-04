'use client';

import { type ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { ModalContext } from './context';
import { StyledBackdrop, StyledModal } from './styles';
import type { ModalApi, ModalOptions } from './types';

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalOptions | null>(null);

  const open = useCallback((options: ModalOptions) => setModal(options), []);
  const close = useCallback(() => setModal(null), []);

  useEffect(() => {
    if (!modal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') close();
      // TODO: Tab/Shift+Tab currently escapes the dialog into the page behind
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [modal, close]);

  const api = useMemo<ModalApi>(() => ({ open, close }), [open, close]);

  return (
    <ModalContext.Provider value={api}>
      {children}

      {modal && (
        <StyledBackdrop
          $align="center"
          $justify="center"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <StyledModal role="dialog" aria-modal="true" aria-label={modal.ariaLabel}>
            {modal.render(close)}
          </StyledModal>
        </StyledBackdrop>
      )}
    </ModalContext.Provider>
  );
}
