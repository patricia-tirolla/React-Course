import { NavLink } from "react-router";
import "./Home.css"
export function MyHomeNav() {
    return (
        <>
            <h2>Welcome!</h2>
            <nav>
                <NavLink to="/characters">Characters</NavLink>
                <NavLink to="/form">Form</NavLink>
                <NavLink to="/props">Props</NavLink>
            </nav>
        </>
    );
}