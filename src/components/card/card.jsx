//будет отображать более подробную инфу о репозитории

import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getContributors, getCurrentRepo} from "../actions/repos";
import './card.less'


const Card = () => {
    const {username, reponame} = useParams()
    const [repo, setRepo] = useState({owner: {}})
    const [contributors, setContributors] = useState([])

    useEffect(()=> {
        getCurrentRepo(username, reponame, setRepo)
        getContributors(username, reponame, setContributors)
    }, [])


    console.log(username, reponame)
    return (
        <div>
          <Link to='/'>
              <button>Back</button>
          </Link>
              <div className="card">
                  <img src={repo.owner.avatar_url} alt=""/>
                  <div className="name">{repo.name}</div>
                  <div className="stars">{repo.stargazers_count}</div>
              </div>
            {contributors.map((c,index) => <div>{index+1}.{c.login}</div>)}

        </div>
    );
};

export default Card;