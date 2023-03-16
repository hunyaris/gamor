// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext(null);
// const CurrentUserContext = createContext(null);

// export default function MyApp() {
//   const [theme, setTheme] = useState("light");
//   const [currentUser, setCurrentUser] = useState(null);
//   return (
//     <ThemeContext.Provider value={theme}>
//       <CurrentUserContext.Provider
//         value={{
//           currentUser,
//           setCurrentUser,
//         }}
//       >
//         <WelcomePanel />
//         <label>
//           <input
//             type="checkbox"
//             checked={theme === "dark"}
//             onChange={(e) => {
//               setTheme(e.target.checked ? "dark" : "light");
//             }}
//           />
//           Use dark mode
//         </label>
//       </CurrentUserContext.Provider>
//     </ThemeContext.Provider>
//   );
// }

// function WelcomePanel({ children }) {
//   const { currentUser } = useContext(CurrentUserContext);
//   return (
//     <Panel title="Welcome">
//       {currentUser !== null ? <Greeting /> : <LoginForm />}
//     </Panel>
//   );
// }

// function Greeting() {
//   const { currentUser } = useContext(CurrentUserContext);
//   return <p>Se ha autenticado {currentUser.name}.</p> ;   

   



// }

// function LoginForm() {
//   const { setCurrentUser } = useContext(CurrentUserContext);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const canLogin = firstName !== "" && lastName !== "";
//   return (
//     <>
//       <label>
//         Usuario{": "}
//         <input
//           required
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//       </label>
//       <label>
//         Last name{": "}
//         <input
//           required
//           value={lastName}  
//           type="password"
//           onChange={(e) => setLastName(e.target.value)}
//         />
//       </label>
//       <Button
//         disabled={!canLogin}
//         onClick={() => {
//           setCurrentUser({
//             name: firstName ,
//           });
//         }}
//       >
//         Log in
//       </Button>
//       {!canLogin && <i>Fill in both fields.</i>}
//     </>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = "panel-" + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   );
// }

// function Button({ children, disabled, onClick }) {
//   const theme = useContext(ThemeContext);
//   const className = "button-" + theme;
//   return (
//     <button className={className} disabled={disabled} onClick={onClick}>
//       {children}
//     </button>
//   );
// }
