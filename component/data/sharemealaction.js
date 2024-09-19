const fs = require("fs");

export async function Sharemealaction(formData) {
  "use server";

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  console.log(meal);

  const extention = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extention}`;

  const stream = fs.createWriteStream(`assets/${filename}`);
  const bufferedimage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedimage), (error) => {
    if (error) {
      throw new Error("saving image failed!");
    }
  });
}
