//будет отображать более подробную инфу о репозитории

import React from 'react';
import {Link} from "react-router-dom";


const Card = () => {
    return (
        <div>
          <Link to='/'>
              <button>Back</button>
          </Link>
        </div>
    );
};

export default Card;