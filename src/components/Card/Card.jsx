


export default function Card(props) {

  const {monsters} = props
  console.log(monsters)
  return(
  <div className="card-list">
        {monsters.map((monster)=> {
        const {name, id} = monster
        return (
          <div className="card-container" key={id}>
            <img alt = {name} src={monster.sprites.front_default} />
            <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            <p>{id}</p>
          </div>
        )
        })}
              </div>
  )
      }
      