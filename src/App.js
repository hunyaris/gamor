import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Prefences from "./Preferences/Prefences";
import Dashboard from "./Dashboard/Dashboard";
import Preferences from "./Preferences/Prefences";
import Login from "./Login/Login";
import { createContext, useContext } from "react";
import { useReducer } from "react";
import AddTask from "./Search/Add";
import TaskList from "./Search/List";
import axios from "axios";
import SearchC from "./SearchC";
import "./App.css";
import Data from "./Data";
import User from "./User";

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);


export default function App() {

 <div class="box delay-3">4 seconds</div>;

  const [theme, setTheme] = useState("dark");
  const [currentUser, setCurrentUser] = useState(null);
  
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          Use light mode
        </label>
        <WelcomePanel />
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelcomePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Panel title="Gamor">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
   const [visitado, setVisitado] = useState(false);
  // return(<p>Se ha autenticado {currentUser.name}.</p>

  // )

   

  return (
    <>
      <h2>Se ha autenticado {currentUser.name}.</h2>

      <div className="header">
        <div className="home">
          <div className="wrapper">
            <nav>
              <ul>
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link to="/Registrar">Create account</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/Registrar" element={<Preferences />} />
              <Route path="/Buscar" element={<Usuarios />} />
              <Route path="/twitch" element={<SearchC />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="general">
        <Usuarios />
      </div>

      <div className="general">
        <SearchC />
        <Data />
        <User />
     
      </div>
    </>
  );
}





 function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName !== "" && lastName !== "";
  return (
    <>
      <div className="divLoginContainer">
        <h3 className="title-login">Login in to Gamor</h3>
        <div className="divLoginPosition">
          <label>
            <input
              className="input"
              required
              placeholder="User"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            <input
              className="input"
              required
              placeholder="Password"
              value={lastName}
              type="password"
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <Button 
     
          disabled={!canLogin}
          onClick={() => {
            setCurrentUser({
              name: firstName,
            });
          }}
        >
          Log in
        </Button>
     
     
        {!canLogin && <i>Fill in both fields.</i>}
      </div>
    </>
  );
}


function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
    
  );
}

function Usuarios() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

 

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }


  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>Usuarios</h1>
      <AddTask onAddTask={handleAddTask}  />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Hunyaris Mariela", done: true },
  { id: 1, text: "Steve Madden", done: false },
  { id: 2, text: "Steve Job", done: false },
 
];

 
/*
   data de video dado un id
const axios = require('axios');

const response =  axios.get('https://api.twitch.tv/helix/videos', {
    params: {
        'id': '987654321'
    },
    headers: {
        'Authorization': 'Bearer xkeg2dgn91f3yb1anz65tcfytyjuje',
        'Client-Id': 'gp762nuuoqcoxypju8c569th9wz7q5'
    }
});
console.log("Aqui");
console.log(response);
*/


/*Games */



