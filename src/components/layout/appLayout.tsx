/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from 'react';
import { AppLayoutWrapper } from './style';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AppLayoutWrapper data-testid="app-layout">{children}</AppLayoutWrapper>
  );
};

export default AppLayout;
