import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

const NavLink: FC<{
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName: string;
  exact: boolean;
  onClick?: (e: any) => void;
}> = ({ to, children, className, activeClassName, exact = true, onClick, ...rest }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [, setRendered] = useState(false);

  const preventClick = (active: boolean) => (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (active) e.preventDefault();
  };

  useEffect(() => {
    if (ref.current) setRendered(true);
  }, []);
  return (
    <Route
      exact
      render={({ location }) => {
        let active = location.pathname === to;

        if (!exact && location.pathname.includes(to)) {
          active = true;
        }

        return (
          <Link
            ref={ref}
            {...rest}
            className={
              active ? [className, activeClassName].join(' ') : className
            }
            to={to}
            onClick={e => {
              preventClick(active);
              if(onClick) {
                onClick(e);
              }
            }}
          >
            {children}
          </Link>
        );
      }}
    />
  );
};

export default NavLink;
