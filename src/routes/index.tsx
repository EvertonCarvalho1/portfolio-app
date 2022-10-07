import React from "react";

import { BrowserRouter as Router } from 'react-router-dom';

import { Main } from "../pages/Main";

export function Routes() {
    return (
        <Router>
            <Main />
        </Router>
    )
}