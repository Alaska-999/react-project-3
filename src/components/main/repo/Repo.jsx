import React from 'react'
import './Repo.less'
import {NavLink} from "react-router-dom";

const Repo = (props) => {
  const repo = props.repo.repo
  return (
        <div className='repo'>
            <div className="repo-header">
                <div className="repo-header-name">
                  <NavLink to={`/card/${repo.owner.login}/${repo.name}`} >{repo.name}</NavLink>
                </div>
                <div className="repo-header-stars">{repo.stargazers_count}</div>
            </div>
            <div className="repo-last-commit">{repo.updated_at}</div>
            <a href = {repo.html_url} className="repo-link">Repo Link</a>
        </div>
  )
}

export default Repo
