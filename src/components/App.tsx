import React from 'react';
import '../scss/main.scss';
import { RepoSearch } from './RepoSearch';

export const App = () => (
    <div className="container-fluid">
        <header className="app-header"></header>
        <RepoSearch />
    </div>
);
