import City from "./City"

const State = (props)=>{
  return(
    <>
      <li>{props.name}</li>
      <ul>
        {props.cities.map((city, idx)=>(
          <City key={idx} name={city} />
        ))}
      </ul>
    </>
  )
}

export default State