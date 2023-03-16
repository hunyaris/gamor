import React from "react";
import axios from "axios";
import  { useState, useEffect } from "react";
import "./App.css";
import "./Login/Login.css"

function SearchC() {
const [search, setSearch] = useState();
/*Estados categories */
const [fantasy, setFantasy] = useState([]);
const [action, setAction] = useState([]);
const [sports, setSports] = useState([]);
const [adventure, setAdventure] = useState([]);
const [game, setGame] = useState([]);



function handleChangesearch(event) {
  let em = event.target.value;
  setSearch(em);

  console.log(em);
}
 function onClickSearchGame() {
   axios
     .get("https://api.twitch.tv/helix/search/categories", {
       params: {
         query: "fort",
       },
       headers: {
         "Authorization": "Bearer xkeg2dgn91f3yb1anz65tcfytyjuje",
         "Client-Id": "gp762nuuoqcoxypju8c569th9wz7q5",
       },
     })
     .then((ga) => {
       const gam = ga;
       setGame(gam.data);

       // console.log(mar);
     });
 }
 console.log(game);

 function onClickSearchFantasy() {
   axios
     .get("https://api.twitch.tv/helix/search/categories", {
       params: {
         query: "fantasy",
       },
       headers: {
         "Authorization": "Bearer xkeg2dgn91f3yb1anz65tcfytyjuje",
         "Client-Id": "gp762nuuoqcoxypju8c569th9wz7q5",
       },
     })
     .then((fa) => {
       const fat = fa;
       setFantasy(fat.data);

       // console.log(mar);
     });
      
 }
 console.log(fantasy);

 function onClickSearchAction() {
   axios
     .get("https://api.twitch.tv/helix/search/categories", {
       params: {
         query: "action",
       },
       headers: {
         "Authorization": "Bearer xkeg2dgn91f3yb1anz65tcfytyjuje",
         "Client-Id": "gp762nuuoqcoxypju8c569th9wz7q5",
       },
     })
     .then((ac) => {
       const act = ac;
    setFantasy(act.data);

       // console.log(mar);
     });
 }

  console.log(action);

 function onClickSearchAdventure() {
   axios
     .get("https://api.twitch.tv/helix/search/categories", {
       params: {
         query: "adventure",
       },
       headers: {
         "Authorization": "Bearer xkeg2dgn91f3yb1anz65tcfytyjuje",
         "Client-Id": "gp762nuuoqcoxypju8c569th9wz7q5",
       },
     })
     .then((ad) => {
       const adv = ad;
       setFantasy(adv.data);

       // console.log(mar);
     });
 }
 console.log(adventure);
  function onClickSearchSports() {
    axios
      .get("https://api.twitch.tv/helix/search/categories", {
        params: {
          query: "sports",
        },
        headers: {
          "Authorization": "Bearer xkeg2dgn91f3yb1anz65tcfytyjuje",
          "Client-Id": "gp762nuuoqcoxypju8c569th9wz7q5",
        },
      })
      .then((sp) => {
        const spo = sp;
        setFantasy(spo.data);

        // console.log(mar);
      });
   

  }

 console.log(sports);


/*Listar usuarios */
  const [Ahora, setAhora] = useState([]);
  const params = new URLSearchParams();
  params.append("id", "1234");
  params.append("id", "5678");
  useEffect(() => {
    axios
      .get("https://api.twitch.tv/helix/users", {
        params: params,

        headers: {
          "Authorization": "Bearer xkeg2dgn91f3yb1anz65tcfytyjuje",
          "Client-Id": "gp762nuuoqcoxypju8c569th9wz7q5",
        },
      })
      .then((res) => {
        const mar = res;
        setAhora(mar.data);

        // console.log(mar);
      });
  }, []);
  console.log(Ahora);
    const result = Object.values(fantasy);

 return (
   <>
     <div className="categories">
       <ul>
         <h1>Categories </h1>
         <li>
           <button
             className="buttoGames"
             onClick={() => onClickSearchFantasy()}
           >
             Fantasy Games
           </button>
         </li>
         <li>
           <button className="buttoGames" onClick={() => onClickSearchAction()}>
             Action Games
           </button>
         </li>
         <li>
           <button
             className="buttoGames"
             onClick={() => onClickSearchAdventure()}
           >
             Adventure Games
           </button>
         </li>
         <li>
           <button className="buttoGames" onClick={() => onClickSearchSports()}>
             Sports Games
           </button>
         </li>
       </ul>
     </div>
     <div className="Intermedio"></div>
     <div
       className="container mt-5 "
       align="center"
       onClick={() => onClickSearchGame()}
     >
       <div className="row">
         <div className="col-md-12">
           <table className="table table-bordered">
             <thead className="thead-dark">
               <tr>
                 <th scope="col">The name of the game or category </th>
               </tr>
             </thead>
             <tbody>
               {result[0]?.map((item) => (
                 <tr className="td" key={item.id}>
                   <td>{item.name}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
     </div>
     {/* <div className="Search">
       <ol>
         <h1>Search Games </h1>
         <li>
           <input
             className="inputGames"
             placeholder="Buscar fort"
             onChange={handleChangesearch}
           />
           <button className="button-dark" onClick={() => onClickSearchGame()}>
             Buscar
           </button>
         </li>
         <li></li>
       </ol>
     </div> */}
     {/* {Object.entries(action).map(([key, value]) => {
       //    console.log(value[0].id);
       //     console.log(value[1].id);
       document.querySelector("div").innerHTML = JSON.stringify(Ahora);
     })}
     <div className="generales"></div> */}
     {/* {Object.entries(Ahora).forEach(([key, value]) => {
       console.log(value[0].id);
       console.log(value[1].id);
       alert(JSON.stringify(Ahora, null, 4));
     })} */}
     {/* {Object.entries(fantasy).forEach(([key, value]) => {
       console.log(value[0].name);
       console.log(value[1].name);
       console.log(value[2].name);
       console.log(value[3].name);
       console.log(value[4].name);
      alert(JSON.stringify(fantasy, null, 1));
     })} */}

     {/* {Object.entries(game).forEach(([key, value]) => {
       console.log(value[0].name);
       console.log(value[1].name);
       console.log(value[2].name);
       console.log(value[3].name);
       console.log(value[4].name);
        alert(JSON.stringify(game, null, 4));
     })} */}
     {/* {Object.entries(fantasy).forEach(([key, value]) => {
       console.log(value[0].name);
       console.log(value[1].name);
       console.log(value[2].name);
       console.log(value[3].name);
       console.log(value[4].name);
     })}

     {Object.entries(action).forEach(([key, value]) => {
       console.log(value[0].name);
       console.log(value[1].name);
       console.log(value[2].name);
       console.log(value[3].name);
       console.log(value[4].name);
     })}
     {Object.entries(adventure).forEach(([key, value]) => {
       console.log(value[0].name);
       console.log(value[1].name);
       console.log(value[2].name);
       console.log(value[3].name);
       console.log(value[4].name);
     })}

     {Object.entries(sports).forEach(([key, value]) => {
       console.log(value[0].name);
       console.log(value[1].name);
       console.log(value[2].name);
       console.log(value[3].name);
       console.log(value[4].name);
     })}  */}
   </>
 );
}
export default SearchC;