import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react'

export default function NavBar() {
    return (
        <>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
        </>
    )
}
