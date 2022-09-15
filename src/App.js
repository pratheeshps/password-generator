import "./styles.css";
import PassGenBlock from "./components/PassGenBlock";
import PasswordGenForm from "./components/PasswordGenForm";
import { useState } from "react";

export default function App() {
  const [generatedPassword, setGeneratedpassword] = useState();
  return (
    <div className="main-container">
      <h4>Password Generator</h4>
      <PassGenBlock generatedPassword={generatedPassword} />
      <PasswordGenForm setGeneratedpassword={setGeneratedpassword} />
    </div>
  );
}
