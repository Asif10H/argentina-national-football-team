import React from 'react';
import './PlayerCart.css'


const PlayerCart = (props) => {
    const player = props.player;
    const totalSalary = player.reduce( (total, player) => total + player.salary, 0)
    return (
        <div className="container">    
            <div className="card" style={{width: "18rem"}}>
                <div className="card-header">Total Number of players: {player.length}</div>
                    <ul className="list-group list-group-flush">
                       <li className="list-group-item">Total Salary: {totalSalary}</li>  
                    </ul>
            </div>
            <div className="player-info">
            {
                player.map(player => 
                <div> 
                    <img src={player.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Name: {player.name}</h4>
                        <h5 className="card-text">Position: {player.position}</h5>
                        <h5 className="card-text">Salary: {player.salary}</h5>
                    </div> 
                </div>)
            }
            </div>
        </div>       
    );
};

export default PlayerCart;