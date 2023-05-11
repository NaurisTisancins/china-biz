import { ReactElement } from 'react';
import Footer from '../footer/Footer';
import NavigationBar from '../navigation-bar/NavigationBar';

type Props = {
  children: ReactElement;
};

function MainLayout({ children }: Props): ReactElement {
  return (
    <>
      <NavigationBar />
      <main className="main-layout-container">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
