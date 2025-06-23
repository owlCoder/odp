import { useState, useEffect } from "react";
import { PročitajVrednostPoKljuču } from "./helpers/local_storage";
import "./index.css";
import KontrolnaTabla from "./components/kontrolna_tabla/KontrolnaTabla";
import FormaZaPrijavu from "./components/prijava/FormaZaPrijavu";

function App() {
  const [prijavljen, setPrijavljen] = useState(false)

  useEffect(() => {
    const token = PročitajVrednostPoKljuču('authToken')
    if (token) {
      setPrijavljen(true)
    }
  }, [])

  return prijavljen ? (
    <KontrolnaTabla onLogout={() => setPrijavljen(false)} />
  ) : (
    <FormaZaPrijavu onLoginSuccess={() => setPrijavljen(true)} />
  )
}


export default App;
