import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import "./Login/Login.css";


function Data() {
  const [Ahora, setAhora] = useState([]);
  const[nameUser,setnameUser] = useState();
  /* useEffect(() => {
    axios
      .get("https://api.twitch.tv/helix/search/categories", {
        params: {
          query: "for",
        },
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
  */

  const [game, setGame] = useState([]);
  useEffect(() => {
    axios
      .get(" https://api.twitch.tv/helix/videos", {
        
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

  function onClickFindUser(nameUser) {
    axios
      .get("https://api.twitch.tv/helix/streams", {
        params: {
          user_login: nameUser,
        },
        headers: {
          Authorization: "Bearer xkeg2dgn91f3yb1anz65tcfytyjuje",
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
  const result = Object.values(game);

  console.log(result);

  function handleChangesearch(event) {
    let em = event.target.value;
    setnameUser(em);

    console.log(em);
  }

  // console.log(result[0]);
   console.log(Object.entries(Ahora));

  return (
    <>
      {/* {Object.entries(result).forEach(([key, value]) => {
        console.log(value[0].id);
        console.log(value[1].id);
        <p></p>
        //alert(JSON.stringify(Ahora, null, 4));
      })} */}
      <div className="Search">
        <ol>
          <h1>Search Games </h1>
          <li>
            <input
              className="inputGames"
              placeholder="Example paulinholokobr"
              onChange={handleChangesearch}
            />
            <button
              className="button-dark"
              onClick={() => onClickFindUser(nameUser)}
            >
              Buscar
            </button>
          </li>
          <li></li>
        </ol>
      </div>

      <div
        className="container mt-5 "
        align="center"
        onClick={() => onClickFindUser()}
      >
        <h1>Get game that user streamed</h1>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">User Login</th>
                  <th scope="col">Game Name</th>
                </tr>
              </thead>
              <tbody>
                {result[0]?.map((item) => (
                  <tr className="td" key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.user_login}</td>
                    <td>{item.game_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Data;
