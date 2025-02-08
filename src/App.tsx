import "./App.css";
//import { useState } from "react";
import { PasswordDetails } from "./components/PasswordDetails";

import { PasswordField } from "./components/PasswordField";
import Header from "./components/Header";
import { PasswordContextProvider } from "./context/usePasswordContext";

function App() {
  // const [Password, setPassword] = useState("");

  // const Passwordset = (pwod: string) => {
  //   setPassword(pwod);
  // };

  return (
    <PasswordContextProvider>
      <div className="flex flex-col gap-2 content-center justify-center align-center mx-auto w-72 text-center ">
      <Header/>
      {/* <PasswordField password={Password} />
      <PasswordDetails PasswordSetter={Passwordset} password={Password} /> */}
      <PasswordField  />
      <PasswordDetails />
    </div>
    </PasswordContextProvider>
  );
}

export default App;
