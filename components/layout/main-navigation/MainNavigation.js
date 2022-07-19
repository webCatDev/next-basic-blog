import Link from "next/link";
import Logo from "./Logo";
import classes from './main-navigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Gönderiler</Link>
          </li>
          <li>
            <Link href="/contact">İletişim</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
