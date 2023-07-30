import React from 'react';
import sections from './tabs';
import toKebabCase from '../helpers/toKebabCase';
import style from "./index.module.css";

const Navigation = ({ activeTabId, tabFunction }) => {
  return (
    <nav className={style.links}> 
      <ul>
        {
          sections.map(tab => (
            <li 
              key={toKebabCase(tab.title)}
              id={tab.id}
              className={tab.id === Number(activeTabId) && style.active}
              onClick={tabFunction}
            >
              {tab.title}
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default Navigation;