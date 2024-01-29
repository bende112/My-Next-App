import { sql } from "@vercel/postgres";
import "@/styles/placelist.css";

export default async function PlaceList() {

  const places = await sql`SELECT * FROM destinations`;

  // async function handleRemovePost(formData) {
  //   "use server"
  //   const removePost = await sql`DELETE FROM destinations`;

  // }

  return (
    <div>
      <div className="destinations">
      {places.rows.map((place)=>{
        return <div key={place.name} className="destination">
          <h3>{place.name}</h3>
          <p>what a {place.weather} weather</p>
          <p>{place.food} foody</p>
          <p>{place.ambiance ? "tell us more" : "This is for all"}</p>
          {/* <button onClick={RemovePost} type="unsubmit">Remove destination</button> */}
          {/* <RemovePost /> */}
          <button type="unsubmit">Remove destination</button>
          </div>
      })}
      </div>
    </div>
  );
}
