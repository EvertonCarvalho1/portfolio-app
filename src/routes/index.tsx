import React from "react";

import { BrowserRouter as Router } from 'react-router-dom';

import Main from "../pages/Main";

const Routes: React.FC = () => {
    return (
        <Router>
            <Main />
        </Router>
    )
}

export default Routes;

