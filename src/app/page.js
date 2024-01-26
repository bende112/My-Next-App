import { sql } from "@vercel/postgres"

export default async function Home() {

  const places = await sql`SELECT * FROM destinations`;

  return (
    <div>
      <h1>Home</h1>
      <div className="destinations">
      {places.rows.map((place)=>{
        return <div key={place.name} className="destination">
          <h3>{place.name}</h3>
          <p>maiking {place.weather} weather</p>
          <p>{place.food} foody</p>
          <p>{place.ambiance ? "tell us more" : "This is for all"}</p>
          </div>
      })}
      </div>
    </div>
  )
}


