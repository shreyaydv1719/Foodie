import Link from "next/link";
import classes from "./page.module.css";
import Mealsgrid from "@/component/meals/meals-grid";
import { dummyMeals } from "@/component/data/meals-data";
import { Suspense } from "react";

async function Meals() {
  return <Mealsgrid meals={dummyMeals} />;
}

export default async function Mealspage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>choose your own recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">share your fav meals</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
