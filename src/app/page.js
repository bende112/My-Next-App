export default function Home() {

  const destinations = [
    {name: "Prague", weather: "Cold", food: "great", ambiance: true},
    {name: "Venice", weather: "hot", food: "amazing", ambiance: true},
    {name: "Bruges", weather: "Cold", food: "great", ambiance: true},
    {name: "Rio", weather: "hot and hot", food: "awesome", ambiance: true},
    {name: "Montegobay", weather: "hot", food: "lovely food", ambiance: true},
    {name: "Limbe", weather: "hot and humid", food: "great food", ambiance: true},

  ]


  return (
    <div>
      <h1>Home</h1>
      <div className="destinations">
      {destinations.map((destination)=>{
        return <div key={destination.name} className="destination">
          <h3>{destination.name}</h3>
          <p>maiking {destination.weather} weather</p>
          <p>{destination.food} foody</p>
          <p>{destination.ambiance ? "tell us more" : "This is for all"}</p>
          </div>
      })}
      </div>
    </div>
  )
}
