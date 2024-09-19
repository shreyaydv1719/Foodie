import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/component/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}><ImageSlideshow/></div>
        <div>
          <div className={classes.hero}>
            <h1>Foodie For The Foodies!!</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Foodie is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Foodie is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className={classes.section}>
          <h2>Why Foodie?</h2>
          <p>
            Foodie is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Foodie is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
