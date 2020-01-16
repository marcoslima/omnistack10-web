import React from "react";
import PropTypes from 'prop-types';
import './styles.css';

function DevItem(props) {
  const { dev, key } = props;
  return (
    <li key={key} className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
             <div className="user-info">
               <strong>{dev.name}</strong>
               <span>{dev.techs.join(', ')}</span>
             </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
    </li>

  );
}
DevItem.propTypes = {
  dev: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired
};

export default DevItem;
