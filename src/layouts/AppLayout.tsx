import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '../components/ui/navigation-menu';

const AppLayout: React.FC = () => {
    return (
        <>
            <header>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink to={'/dashboard'} className={navigationMenuTriggerStyle()}>
                                Dashboard
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink to={'/holdings'} className={navigationMenuTriggerStyle()}>
                                Holdings
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink to={'/positions'} className={navigationMenuTriggerStyle()}>
                                Positions
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink to={'/balance'} className={navigationMenuTriggerStyle()}>
                                Balance
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
};

export { AppLayout };
