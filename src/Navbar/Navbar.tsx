import React from 'react';
import './Navbar.css';

export interface INavbarProps {}

export const Navbar: React.FC<INavbarProps> = ({}) => {
  return (
    <>
      <ul>
        <li>
          <h1>To-Do</h1>
        </li>
        <li>
          <a href='#'>ABOUT</a>
        </li>
      </ul>
    </>
  );
};
