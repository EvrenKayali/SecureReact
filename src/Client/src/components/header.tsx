import React from "react";
import styles from "./header.module.css";

export const Header: React.FC = () => (
  <header className={styles.header}>
    <h3>Secure React App</h3>
    <nav>
      {/* <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul> */}
      <div>Evren Kayali</div>
    </nav>
  </header>
);
