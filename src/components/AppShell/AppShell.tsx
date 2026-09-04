'use client';

import { type ReactNode, useState } from 'react';

import { Sidebar } from '@components/Sidebar';
import { TopBar } from '@components/TopBar';
import { useIsMobile } from '@/hooks/ui/useIsMobile';

import { StyledMain, StyledShell } from './styles';

const SIDEBAR_ID = 'app-sidebar';

export function AppShell({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  const [override, setOverride] = useState<boolean | null>(null);

  const isOpen = override ?? !isMobile;

  const closeOnMobile = () => {
    if (isMobile) setOverride(false);
  };

  return (
    <StyledShell $open={isOpen} $auto={override === null} $animate={override !== null}>
      <TopBar controls={SIDEBAR_ID} expanded={isOpen} onToggle={() => setOverride(!isOpen)} />
      <Sidebar id={SIDEBAR_ID} open={isOpen} onNavigate={closeOnMobile} />
      <StyledMain>{children}</StyledMain>
    </StyledShell>
  );
}
