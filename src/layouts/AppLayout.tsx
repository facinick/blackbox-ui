import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const AppLayout: React.FC = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/holdings">Holdings</Link></li>
                        <li><Link to="/positions">Positions</Link></li>
                        <li><Link to="/balance">Balance</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
};

export { AppLayout };
