import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div>
            <Link to='/'>
                <button>Go to main page</button>
            </Link>
            Error
        </div>
    );
};

export default Error;