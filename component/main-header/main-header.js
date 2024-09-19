import Link from "next/link";
import logoimage from "@/assets/logo.png";
import classes from "./main.header.module.css";
import Image from "next/image";
import Mainheaderbackground from "./main-header-background";
import Navlink from "./nav-link";

export default function Mainheader() {

  return (
    <div>
      <Mainheaderbackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoimage} alt="a plate with food on it" priority />
          Foodie
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink href = "/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href = "/community">Foodies community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
