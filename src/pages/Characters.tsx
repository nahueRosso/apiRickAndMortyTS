import axios from "axios";
import React,{Suspense ,useRef, useEffect,  useState } from "react";
import { BiSearch, BiCaretLeft, BiCaretRight } from "react-icons/bi";
import "../style/Characters.css";
const Cards = React.lazy(() => import('../components/Cards'))
import Navbar from '../components/Navbar'

function Characters() {
  const [api, setApi] = useState();
  const [filter, setFilter] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");
  const [numberPage, setNumberPage] = useState(1);
  const refCards = useRef<any>()

useEffect(()=>{
  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(keyName == "ArrowLeft"){setNumberPage((e) => (e !== 1 ? numberPage - 1 : (e = 42)))}
    if(keyName == "ArrowRight"){setNumberPage((e) => (e !== 42 ? numberPage + 1 : (e = 1)))}
  });
},[api])

function MyComponent() {


  return (
       <Suspense fallback={<div>Loading...</div>}>
      <Cards api={api} />
      </Suspense>
  );
}

// refCards.current.classList.remove('animation');
// setTimeout(() => {
//   refRefCards.current.classList.add("animation2");
// }, 10)

// console.log(refCards.current.classList)

  useEffect(() => {
    const getResponse = async () => {
      try {
           const results = await axios.get(`https://rickandmortyapi.com/api/character/?page=${numberPage}`)

           setApi(results.data.results
            .filter((result:any) => result.name.toLowerCase().includes(filter))
            .filter((result:any) =>
              result.status.toLowerCase().includes(filterStatus)
            )
            .filter((result:any) =>
              result.species.toLowerCase().includes(filterSpecies)
            ))

           
            

      } catch(err) {
           console.log('err')
      }

    }
    getResponse()
    
  }, [numberPage,filterStatus ,filterSpecies,filter])

  const arrowRight = () => {
    setNumberPage((e) => (e !== 42 ? e + 1 : (e = 1)));
  };
  const arrowLeft = () => {
    setNumberPage((e) => (e !== 1 ? e - 1 : (e = 42)));
  };

  return (
    
    <body className="body">
    <Navbar/>
      <h1 >Rick and Morty character</h1>

      <div className="navbar">
        <div className="search deployed">
          <input
            placeholder="search for name"
            onChange={(e) => setFilter(e.target.value.toLowerCase())}
          />
          <BiSearch style={{ fontSize: "1.5em", fill: "#888" }} />
        </div>

        <select
          name="listStatus"
          onChange={(e) => setFilterStatus(e.target.value.toLowerCase())}
          className="Status deployed"
        >
          <option value="" selected>
            All status
          </option>
          <option value="alive">Status - Alive</option>
          <option value="dead">Status - Dead</option>
          <option value="unknown">Status - unknown</option>
        </select>

        <select
          name="listSpecies"
          onChange={(e) => setFilterSpecies(e.target.value.toLowerCase())}
          className="Species deployed"
        >
          <option value="" selected>
            all species
          </option>
          <option value="Human">Status - Human</option>
          <option value="Alien">Status - Alien</option>
          <option value="Robot">Status - Robot</option>
        </select>

      </div>

      <div className="cards" ref={refCards} >

      {MyComponent()}
    
      </div>

      <div className="selecPages">
        <BiCaretLeft
          // onKeyPress={arrowLeft}
          style={{ fontSize: "2em", fill: "#ccc" }}
          onClick={arrowLeft}
        />
        <input className="numberPage" value={numberPage} />
        <BiCaretRight
          // onKeyPress={arrowRight}
          style={{ fontSize: "2em", fill: "#ccc" }}
          onClick={arrowRight}
        />
      </div>
    </body>
  );
}

export default Characters;
