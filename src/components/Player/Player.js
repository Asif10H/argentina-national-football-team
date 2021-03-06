import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {

    const {id, name, img, position, salary} = props.player;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div className="container">
            <div className="card m-4 rounded" style={{width: "18rem"}}>
                <h5 className="card-title">{id}</h5>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Name: {name}</h4>
                    <h5 className="card-text">Position: {position}</h5>
                    <h5 className="card-text">Salary: {salary}</h5>
                    <button className="btn btn-success add-btn" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} />Add Player</button>
                </div>
            </div> 
        </div>    
    );
};

export default Player;