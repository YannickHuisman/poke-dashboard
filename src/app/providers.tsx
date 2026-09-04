'use client';

import { type ReactNode, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import { ModalProvider } from '@components/ModalProvider';
import { ToastProvider } from '@components/ToastProvider';
import { ApiError } from '@lib/pokeapi';
import { GlobalStyle } from '@/GlobalStyle';
import { theme } from '@/theme';

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: (failureCount, error) =>
              !(error instanceof ApiError && error.status >= 400 && error.status < 500) &&
              failureCount < 2,
            staleTime: Infinity,
          },
        },
      }),
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <ModalProvider>{children}</ModalProvider>
        </ToastProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
