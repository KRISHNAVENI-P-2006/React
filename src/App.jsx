function Platform(props){
  return (
    <div>
      
      <h3>{props.name} : {props.state}</h3>
      
    </div>
  );
}

function App () {
  return (
    <div><h1>Hello guys !!</h1>
    <p>Yeah.. This is just a basic React page </p>
    <h2>Learning props now</h2>
    <Platform name="GitHub" state="Deserted" />
    <Platform name="Linkedin" state="Just falling behind" />
    </div>
  );
}

export default App