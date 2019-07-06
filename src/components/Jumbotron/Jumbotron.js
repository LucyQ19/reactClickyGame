import React from 'react';
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-3">React Clicky Game:</h1>
            <h1 className="display-4">The Nelson-Atkins Museum of Art Edition!</h1>
            <p className="lead">Click on any image to earn points, but don't click on any image more than once!</p>
        </div>
    </div>
);

export default Jumbotron;
