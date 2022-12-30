import { Link } from "react-router-dom"

export default function Page404() {
    return (
        <div>
            <h1>Sayfa Yüklenemedi</h1>
            <Link to="/">AnaSayfaya Dön</Link>
        </div>
    )
}