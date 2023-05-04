import { ReactElement } from 'react';
import NavigationBar from '../navigation-bar/NavigationBar';

type Props = {
  children: ReactElement;
};

function MainLayout({ children }: Props): ReactElement {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;
