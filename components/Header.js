import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src="../assets/globe.svg" alt="silhouette of the globe" />
            <h1 className="header__heading">my travel journal.</h1>
        </header>
    );
}