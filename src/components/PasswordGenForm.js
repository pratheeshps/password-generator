import StrengthMeter from "./StrengthMeter";
import { generatePassword } from "../utils";

import { useState } from "react";
export default function PasswordGenForm({ setGeneratedpassword }) {
  const [formData, setFormData] = useState({
    range: "12",
    uppercase: false,
    lowercase: true,
    numbers: true,
    symbols: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setGeneratedpassword(generatePassword(formData));
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="configblock">
      <div className="form-group">
        <label>Character length {formData.range}</label>
        <div className="range">
          <input
            onChange={handleChange}
            value={formData.range}
            name="range"
            type="range"
            min="8"
            max="32"
            step="1"
          />
        </div>
      </div>

      <div className="form-group">
        <input
          onChange={handleChange}
          checked={formData.uppercase}
          name="uppercase"
          type="checkbox"
          id="uppercase"
        />
        <label htmlFor="uppercase">Include Uppercase Letters</label>
      </div>

      <div className="form-group">
        <input
          onChange={handleChange}
          checked={formData.lowercase}
          name="lowercase"
          type="checkbox"
          id="lowercase"
        />
        <label htmlFor="lowercase">Include Lowercase Letters</label>
      </div>

      <div className="form-group">
        <input
          onChange={handleChange}
          checked={formData.numbers}
          name="numbers"
          type="checkbox"
          id="numbers"
        />
        <label htmlFor="numbers">Include Numbers</label>
      </div>

      <div className="form-group">
        <input
          onChange={handleChange}
          checked={formData.symbols}
          name="symbols"
          type="checkbox"
          id="symbols"
        />
        <label htmlFor="symbols">Include Symbols</label>
      </div>

      <div className="form-group">
        <StrengthMeter />
      </div>

      <div className="form-group">
        <button type="submit">Generate</button>
      </div>
    </form>
  );
}
