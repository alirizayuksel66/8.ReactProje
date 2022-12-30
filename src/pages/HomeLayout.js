import { NavLink, Outlet } from "react-router-dom"
import { url } from "../utils"

export default function HomeLayout() {
    return (
        <>
            <nav>
                <NavLink to={url('home')} className={({ isActive }) => isActive && 'aktif'}>AnaSayfa</NavLink>
                <NavLink to={url('home.contact')} style={({ isActive }) => ({ backgroundColor: isActive ? 'pink' : 'transparent' })}>İletişim</NavLink>
                <NavLink to={url('home.blog')}>Blog</NavLink>
                <NavLink to={url('home.profile')} style={({ isActive }) => ({ backgroundColor: isActive ? 'pink' : 'transparent' })}>Profil</NavLink>
            </nav>
            <Outlet />
        </>
    )
}