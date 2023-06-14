import { useState } from 'react';

type Props = {
  isTabletWidth: boolean;
};

function MobileNavigation(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function onMobileNavClick() {
    console.log('clicked', isOpen, props.isTabletWidth);
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <div className="content">
      <nav>
        <input type="checkbox" id="hamburger1" onClick={onMobileNavClick} />
        <label className="hamburger-lable" htmlFor="hamburger1"></label>

        <ul
          className={
            'nav-links' +
            (props.isTabletWidth && isOpen ? 'visible' : 'invisible')
          }
        >
          <li className="mobile-nav-link">
            <a className="mobile-nav-link-item" href="#">
              about us
            </a>
          </li>
          <li className="mobile-nav-link">
            <a className="mobile-nav-link-item" href="#">
              products
            </a>
          </li>
          <li className="mobile-nav-link">
            <a className="mobile-nav-link-item" href="#">
              media
            </a>
          </li>
          <li className="mobile-nav-link">
            <a className="mobile-nav-link-item" href="#">
              contact us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavigation;
