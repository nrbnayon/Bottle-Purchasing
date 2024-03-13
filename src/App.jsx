// import { useEffect, useState } from "react";
import "./App.css";
// import Watch from "./Components/Watch/Watch";
import Header from "./Components/Header/Header";
import Bottles from "./Components/Bottles/Bottles";

function App() {
  // const [watches, setWatches] = useState([]);

  // const watches = [
  //   { id: 1, name: "Rolex Submariner", price: "$10,000" },
  //   {
  //     id: 2,
  //     name: "Omega Speedmaster Professional Moonwatch",
  //     price: "$5,000",
  //   },
  //   { id: 3, name: "Seiko SKX007", price: "$300" },
  //   { id: 4, name: "Tag Heuer Carrera Calibre Heuer 01", price: "$4,000" },
  //   { id: 5, name: "Casio G-Shock DW5600E-1V", price: "$50" },
  // ];

  // useEffect(() => {
  //   fetch("watches.json")
  //     .then((res) => res.json())
  //     .then((data) => setWatches(data));
  // }, []);

  return (
    <>
      <Header />
      <Bottles />
      {/* {watches.map((watch, i) => (
        <Watch key={i} {...watch} />
      ))} */}
    </>
  );
}

export default App;
