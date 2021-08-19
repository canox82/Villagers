import React from 'react';

const Emoji = (props) => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
);

class Nav extends React.Component {
    

    render() {
        return (
            <div className="nav">
                <span>D: {this.props.day}</span> <span>H: {this.props.hours}</span><br />
                <span>VILLAGERS: {this.props.villagers}&nbsp;(WORKERS: {this.props.workers})</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Emoji label="food" symbol="🍔" /><span style={{color: this.props.food<=this.props.foodNeeded? 'red':null}}>{this.props.food}</span>&nbsp;&nbsp;&nbsp;<Emoji label="wood" symbol="🌲" /><span style={{color: this.props.wood<=this.props.resourceNeeded ? 'red':null}}>{this.props.wood}</span>&nbsp;&nbsp;&nbsp;<Emoji label="rock" symbol="🧱" />{this.props.stone}&nbsp;&nbsp;&nbsp;<Emoji label="coin" symbol="💰" />{this.props.gold}<br />
                <span>Houses : {this.props.house}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>Farm : {this.props.farm}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>Sawmill : {this.props.sawmill}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>Stone Mine : {this.props.stoneMine}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>Gold Mine : {this.props.goldMine}</span><br />
            </div>
        );
    }
}

export default Nav;