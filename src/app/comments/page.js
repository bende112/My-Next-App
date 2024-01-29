import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import "@/styles/comment.css";


export default function Comments() {
  async function handleComments(formData) {
    "use server"

    const name = formData.get("name");
    const weather = formData.get("weather");
    const food = formData.get("food");

    await sql`INSERT INTO destinations (name, weather, food, ambiance)
    VALUES (${name}, ${weather}, ${food}, true)`;

    revalidatePath("/");

    redirect("/")

  }

  return (
    <div>
      <h2>Add new destination</h2>
      <form action={handleComments}>

        <label htmlFor="name">Name</label>
        <input name="name" id="name" placeholder="Name" required />
        <label htmlFor="weather">Weather</label>
        <input name="weather" id="weather" placeholder="Weather" required />

        <label htmlFor="food">Food</label>
        <input name="food" id="food" placeholder="Food" required />


        <button type="submit">Add new destination</button>
      </form>

    </div>
  );
}
