import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.log("Error"));
  };

  const onPrev = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <div className="App">
      <Navbar brand="Rick and Morty App"></Navbar>
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrev={onPrev}
          onNext={onNext}
        ></Pagination>
        <Characters characters={characters}></Characters>
        <Pagination></Pagination>
      </div>
    </div>
  );
}

export default App;
