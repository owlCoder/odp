import { useState } from 'react'
import { SačuvajVrednostPoKljuču } from '../../helpers/local_storage'

type Props = {
  onLoginSuccess: () => void
}

export default function FormaZaPrijavu({ onLoginSuccess }: Props) {
  const [korisnickoIme, setKorisnickoIme] = useState('')
  const [lozinka, setLozinka] = useState('')

  const podnesiFormu = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      korisnickoIme.length < 3 ||
      korisnickoIme.length > 20 ||
      lozinka.length < 3 ||
      lozinka.length > 20
    ) {
      alert('Корисничко име и лозинка морају имати између 3 и 20 карактера.')
      return
    }

    const token = `${korisnickoIme}_token`
    const uspeh = SačuvajVrednostPoKljuču('authToken', token)
    if (uspeh) onLoginSuccess()
  }

  return (
    <div className="form-container">
      <h1>Пријава</h1>
      <form onSubmit={podnesiFormu}>
        <div className="input-group">
          <label htmlFor="username">Корисничко име:</label>
          <input
            id="username"
            type="text"
            value={korisnickoIme}
            onChange={(e) => setKorisnickoIme(e.target.value)}
            placeholder="Унесите корисничко име"
            minLength={3}
            maxLength={20}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Лозинка:</label>
          <input
            id="password"
            type="password"
            value={lozinka}
            onChange={(e) => setLozinka(e.target.value)}
            placeholder="Унесите лозинку"
            minLength={3}
            maxLength={20}
            required
          />
        </div>

        <button type="submit">Пријава</button>
      </form>
    </div>
  )
}
