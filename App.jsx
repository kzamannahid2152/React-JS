import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Person></Person>
      <Devices name="Laptop" price="55K"></Devices>
      <Devices name="Iphone 15" price="89K"></Devices>
      <Devices name="Desktop" price="60K"></Devices>
      <Student grade='7th' score='99'></Student>
      <Student grade={11} score='83'></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>
      <Employee></Employee> */}

    </>
  )
}

function Person() {
  const age = 25;
  let money = 200000000;
  const person = { name: 'sakib', age: 24 };
  return <h3>I'm a {person.name} with age {person.age} who has got {money} tk</h3>
}

// const {grade, score} = {grade:'7', score: '99'};
function Student({grade=1, score=0}) {
  return (
    <div className='student'>
      <h3>Student Information</h3>
      {/* <p>Name: Md. Kamruzzaman</p>
      <p>Graduated from Department of CSE</p> */}
      <p>Age 25</p>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Employee() {
  const emploeyeeStyle = {
    border: '2px solid yellow',
    borderRadius:'16px',
    margin: '20px',
    padding:'20px'
  }

  return (
    <div style={emploeyeeStyle}>
      <h3>Employee Information</h3>
      <p>Name: Md. Kamruzzaman</p>
      <p>Graduated from Department of CSE</p>
      <p>Age 25</p>
      <p>Salary 65k</p>
    </div>
  )
}




//using const variable
function Developer() {
  const developerStyle = {
    border: '2px solid red',
    margin: '20px',
    padding: '20px',
    borderRadius: '15px'
  }

  return (
    <div style={developerStyle}>
      <h5>Dynamic Devoloper</h5>
      <p>Coding Session</p>
    </div>
  )

  // return (
  //   <div style={{ 
  //     border: '2px solid red',
  //     margin: '20px',
  //     padding: '20px',
  //     borderRadius: '15px'
  //   }}>
  //     <h5>Dynamic Devoloper</h5>
  //     <p>Coding Session</p>
  //   </div>
  // )
}

 //devices
 //1st way: Bangla system to track props
 function Devices(props){
  console.log(props)
  return(
    <div>
      <h3>The device is: {props.name} price: {props.price}</h3>
    </div>
  )

  //2nd way to track props that is "Destructuring"

}



export default App



// return (
//   <>
//     {/* <div>
//       <a href="https://vite.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div> */}

//     <h1>Vite + React</h1>


//     {/* <div className="card"> */}
//       {/* <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button> */}
//       {/* <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p> */}
//     {/* </div> */}
//     {/* <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p> */}
//   </>
// )
// }


