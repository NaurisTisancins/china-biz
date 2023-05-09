import { ReactElement } from 'react';
import NavigationBar from '../navigation-bar/NavigationBar';

type Props = {
  children: ReactElement;
};

function MainLayout({ children }: Props): ReactElement {
  return (
    <div className="overflow-auto">
      <NavigationBar />
      <main className="main-layout-container">{children}</main>
    </div>
  );
}

export default MainLayout;
