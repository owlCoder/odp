import { useState } from "react";
import "./App.css";
function App() {
  const [ime, setIme] = useState<string>("");
  const [poeni, setPoeni] = useState<number | "">("");
  const [poruka, setPoruka] = useState<string>("");
  const izracunajOcenu = () => {
    if (ime.trim() === "" || poeni === "") {
      setPoruka("Молимо унесите и име и број поена.");
      return;
    }
    const brojPoena = Number(poeni);
    let ocena: string;
    if (brojPoena <= 50) ocena = "недовољан (5)";
    else if (brojPoena <= 60) ocena = "6";
    else if (brojPoena <= 70) ocena = "7";
    else if (brojPoena <= 80) ocena = "8";
    else if (brojPoena <= 90) ocena = "9";
    else ocena = "10";
    setPoruka(`${ime} ће имати оцену ${ocena} из ОДП-а.`);
  };
  return (
    <div className="form-container">
      <h1>Оцена из ОДП-а</h1>
      <div className="input-group">
        <label htmlFor="ime">Име и презиме:</label>
        <input
          id="ime"
          type="text"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
          placeholder="Унесите име и презиме"
        />
      </div>
      <div className="input-group">
        <label htmlFor="poeni">Број поена (0–100):</label>
        <input
          id="poeni"
          type="number"
          value={poeni}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              setPoeni("");
            } else {
              const broj = Number(value);
              if (broj >= 0 && broj <= 100) {
                setPoeni(broj);
              }
            }
          }}
          placeholder="Унесите број поена"
        />
      </div>
      <button onClick={izracunajOcenu}>Прикажи оцену</button>
      {poruka && <p>{poruka}</p>}
    </div>
  );
}
export default App;
