import "./App.css";
//import { useState } from "react";
import { PasswordDetails } from "./components/PasswordDetails";

import { PasswordField } from "./components/PasswordField";
import Header from "./components/Header";
import { PasswordContextProvider } from "./context/usePasswordContext";

function App() {

  return (
    <PasswordContextProvider>
      <div className="flex flex-col gap-2 content-center justify-center align-center mx-auto  text-center space-y-4 py-4  ">
      <Header/>
      
      <div className="mx-auto max-w-2xl flex flex-col space-y-4">
      <PasswordField  />
      <PasswordDetails />
      </div>
    </div>
    </PasswordContextProvider>
  );
}

export default App;
