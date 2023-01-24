import State from "./State";

const USA = ()=>{
  const states = ['New York', 'South Carolina', 'Oregon', 'Texas', 'Pennsylvania'];
  const cities = [['Ballston Lake', 'Schenectady'],
                  ['Myrtle Beach', 'Conway', 'Surfside'],
                  ['Portland','Hillsboro', 'Beaverton', 'West Lynn'],
                  ['Carrollton', 'Euless', 'Dallas'],
                  ['Lititz']]
  return(
    <>
      <h2>Places I've lived in the USA</h2>
      <ul>
        {states.map((state, idx)=>(
          <State key={idx} name={state} cities={cities[idx]}/>
        ))}
      </ul>
    </>
  )
}

export default USA