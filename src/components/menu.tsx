import React, { useState } from "react";
import "./menu.scss";
export interface IMenuProps {
  //   content?: HTMLElement | any;
}

export const Menu = ({}: IMenuProps) => {
  return (
    <nav className="menuContainer">
      <ul className="menuList">
        <li className="menuListItem">Pointing Poker</li>
        <li className="menuListItem">How to use it</li>
      </ul>
    </nav>
  );
};
