
import './App.css';
import Counter from './components/Counter';
import Person from './components/personsection/Person';
// import Conditional from './components/Conditional';
// import Event from './components/Event';
import person   from "./databse/Person.json";


// const person=[
//   {
//     name:"biplob",
//     address:"dhaka",
//     age:20
    
//   },
//   {
//     name:"Kawsar",
//     address:"dhaka",
//     age:20
    
//   },
//   {
//     name:"robin",
//     address:"dhaka",
//     age:20
    
//   },
// ]

function App() {
  // const name=['biplob','sandipon','ratul','rahul']

  return (
    <div className="App">
  {/* <Hellow name='biplob ' age='20' father='gopal' >

  </Hellow>
  
  <Hellow name='sandipon ' age='20' father='gopal' >

</Hellow> */}
  
{/* <Event/> */}

{/* <Conditional/> */}

{/* {


  name.map((name,i)=> <h2> key={i} hi i am {name}</h2> )
} */}
{/* <Person person={person} /> */}
<Counter/>
    </div>
  );
}

export default App;
