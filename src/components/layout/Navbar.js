import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
    
        <Link to="/">
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cadastro">Cadastro</Link>
          </li>
          <li className={styles.item}>
            <Link to="/professores">Professores</Link>
          </li>
          
        </ul>
      
    </div>
  );
}

export default Navbar;