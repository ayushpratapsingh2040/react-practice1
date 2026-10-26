import Header from "./Header";
import Counter from "./Counter";
import Login, { Logout, Userkey } from "./user-component";
import { useState } from "react";

function App() {
  // const [isVisible, setIsVisible] = useState(true);

  // function HandleClick() {
  //   alert("Button clicked!");
  // }
  // const fruit = (name) => {
  //   alert(`Hello ${name}!`);
  // };
  // const [Pfruits, setPfruits] = useState("apple");
  // const handleFruitChange = () => {
  //   setPfruits("banana");
  // };

  return (
    <>


        {/* <h1>toggle in react js</h1>
      {isVisible ? <h1>hello</h1> : null}

      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>  */}
    </>
    // <div>
    //   <h1>{Pfruits}</h1>

    //   <button onClick={HandleClick}>Click me!</button>
    //   <button onClick={() => fruit("banko")}>Alice</button>
    //   <button onClick={handleFruitChange}>Change Fruit</button>
    //   <Header />
    //   <Login />
    //   <Logout />
    //   <Counter />
    //   <h2>{Userkey}</h2>
    //   <h1>Hello Vite ayush + React!</h1>
    // </div>
  );
}

export default App;
