"use server"
export default async function RemovePost() {

  async function handleRemovePost(formData) {
    // "use client"

    const name = formData.get("name");
    const weather = formData.get("weather");
    const food = formData.get("food");

    await sql`DELETE FROM destinations (name, weather, food, ambiance)
    VALUES (${name}, ${weather}, ${food}, true)`;

    revalidatePath("/");

    redirect("/")
  return (
    <div>
    <p>Place removed</p>
    <form action={handleRemovePost}></form>
    {/* <button onClick={RemovePost} type="unsubmit">Remove destination</button> */}
  </div>
  )
};
}
