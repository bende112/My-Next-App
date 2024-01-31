import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import "@/styles/comment.css";


export default function Posts() {
  async function handleComments(formData) {
    "use server"

    const title = formData.get("title");
    const content = formData.get("content");

    await sql`INSERT INTO posts (title, content)
    VALUES (${title}, ${content})`;

    revalidatePath("/");

    redirect("/")

  }

  return (
    <div>
      <h2>Add new destination</h2>
      <form action={handleComments}>
        <label htmlFor="title">Title</label>
        <input name="title" id="title" placeholder="title" required />
        <label htmlFor="content">Content</label>
        <textarea name="content" placeholder="content" required />
        <button type="submit">Add new destination</button>
      </form>
    </div>
  );
}
