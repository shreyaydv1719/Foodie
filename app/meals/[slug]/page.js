import Image from "next/image";
import classes from "./page.module.css";
import { dummyMeals } from "@/component/data/meals-data";
import Notfound from "../not-found";

export const metadata = {
  title: "All meals",
  description: "Browse meals.",
};

const findMealIndexBySlug = (slug) => {
  const index = dummyMeals.findIndex((meal) => meal.slug === slug);
  return index;
};

const getMealInfoByIndex = (index) => {
  if (index >= 0 && index < dummyMeals.length) {
    return dummyMeals[index];
  } else {
    return null;
  }
};

export default function Mealslug({ params }) {
  const mealindex = findMealIndexBySlug(params.slug);
  const meal = getMealInfoByIndex(mealindex);

  if (!meal) {
    return <Notfound />;
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
