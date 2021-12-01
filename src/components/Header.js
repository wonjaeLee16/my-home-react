import { Route, Link } from 'react-router-dom';

export default function Header() {
    return(
        <div>
            <header>
                <ul>
                    <li>
                        <Link to="/">Main</Link>
                    </li>
                    <li>
                        <Link to="/tasks">Tasks</Link>
                    </li>
                    <li>
                        <Link to="/project">Proejct</Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}