







import { useEffect } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header({ firstname, clickOnFirstname }) {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  /*
    useState

useEffect 

useContext 


useCallback 

useMemo 

useRef 

useImperativeHandle

useLayoutEffect 

*/

  const handleClick = () => {
    clickOnFirstname();
  };

  return (
    <header className={styles.main}>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
