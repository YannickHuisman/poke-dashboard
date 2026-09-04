'use client';

import { usePathname } from 'next/navigation';

import { navItems } from './navItems';
import { StyledNav, StyledNavLink, StyledNavList, StyledSidebar } from './styles';

interface SidebarProps {
  id: string;
  open: boolean;
  onNavigate: () => void;
}

export function Sidebar({ id, open, onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <StyledSidebar id={id} $open={open}>
      <StyledNav aria-label="Main">
        <StyledNavList as="ul" $gap="xs">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <li key={item.href}>
                <StyledNavLink
                  href={item.href}
                  $active={active}
                  aria-current={active ? 'page' : undefined}
                  onClick={onNavigate}
                >
                  {item.label}
                </StyledNavLink>
              </li>
            );
          })}
        </StyledNavList>
      </StyledNav>
    </StyledSidebar>
  );
}
