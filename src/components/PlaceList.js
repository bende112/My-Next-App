import { sql } from "@vercel/postgres";
import "@/styles/placelist.css";
import Link from "next/link";


export default async function placelist() {

  const places = await sql`SELECT * FROM posts`;
  console.log(places);

  return (
    <div>
      <div className="destinations">
      {places.rows.map((place)=>{
        return (
        <Link key={place.name} href={`/posts/${place.id}`}>
          <h3>{place.id}</h3>
          <p>Tell me something about {place.content} your destination</p>
          <p>{place.content ? "tell us more" : "This is for all"}</p>
          {/* <button type="unsubmit">Remove destination</button> */}
          </Link>
        );
      })}
      </div>
    </div>
  );
}
