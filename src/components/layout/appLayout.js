import { jsx as _jsx } from 'react/jsx-runtime';
import { AppLayoutWrapper } from './style';
const AppLayout = ({ children }) => {
  return _jsx(AppLayoutWrapper, {
    'data-testid': 'app-layout',
    children: children,
  });
};
export default AppLayout;
