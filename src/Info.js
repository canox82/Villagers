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

class Info extends React.Component {
    render(){
        return (
            <span>
            <center>
            <b>Day expenses</b>
            <table style={{'text-align':'center'}}>
                <tr><td>Villager</td><td>1<Emoji label="food" symbol="🍔" /></td></tr>
                <tr><td>Worker</td><td>2<Emoji label="food" symbol="🍔" /></td></tr>
                <tr><td>Building</td><td>1<Emoji label="wood" symbol="🌲" /></td></tr>
            </table>
            <br />
            <b>Building Cost:</b>
            <table style={{'text-align':'center'}}>
                <tr><td></td><td><Emoji label="wood" symbol="🌲" /></td><td><Emoji label="rock" symbol="🧱" /></td></tr>
                <tr><td>House</td><td>20</td><td>20</td></tr>
                <tr><td>Farm</td><td>40</td><td>40</td></tr>
                <tr><td>Sawmill</td><td>80</td><td>50</td></tr>
                <tr><td>Stone Mine</td><td>150</td><td>80</td></tr>
                <tr><td>Gold Mine</td><td>200</td><td>200</td></tr>
            </table>
            <br />
            <b>Building Bonus:</b>
            <table style={{'text-align':'center'}}>
                <tr><td>House</td><td>4 Villagers</td><td>on build</td></tr>
                <tr><td>Farm</td><td>+40<Emoji label="food" symbol="🍔" /></td><td>every 7 days</td></tr>
                <tr><td>Sawmill</td><td>+30<Emoji label="wood" symbol="🌲" /></td><td>every 7 days</td></tr>
                <tr><td>Stone Mine</td><td>+30<Emoji label="rock" symbol="🧱" /></td><td>every 7 days</td></tr>
                <tr><td>Gold Mine</td><td>+15<Emoji label="coin" symbol="💰" /></td><td>every 7 days</td></tr>
            </table>
            </center>
            </span>
        )
    }
}

export default Info;