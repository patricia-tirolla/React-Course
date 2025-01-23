import { NavLink } from "react-router";
import "./MyAppNav.css"
export function MyAppNav() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/form">Form</NavLink>
            <NavLink to="/props">Props</NavLink>
        </nav>
    );
}

