import { PročitajVrednostPoKljuču, ObrišiVrednostPoKljuču } from "../../helpers/local_storage"

type Props = {
  onLogout: () => void
}

export default function KontrolnaTabla({ onLogout }: Props) {
  const authToken = PročitajVrednostPoKljuču('authToken')
  const korisnickoIme = authToken ? authToken.replace('_token', '') : 'Непознато'
  const trenutnoVreme = new Date().toLocaleString()

  const handleLogout = () => {
    ObrišiVrednostPoKljuču('authToken')
    onLogout()
  }

  return (
    <div className="form-container">
      <h1>Контролна табла</h1>
      <p>Пријављени корисник: <strong>{korisnickoIme}</strong></p>
      <p>Датум и време: {trenutnoVreme}</p>
      <button onClick={handleLogout}>Напусти контролну таблу</button>
    </div>
  )
}
