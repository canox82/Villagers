import React from 'react';

var day_start = 0
var hour_start = 0

class MainContainer extends React.Component {

    cooldown(day, hour) {
        if (this.props.day > day) {
            return this.props.hours + (24-hour)
        } else {
            return this.props.hours - hour
        }
    }

    searchRaw(type) {
        let qt = Math.floor(Math.random() * ((this.props.villagers-this.props.workers) - 0 + 1)) + 0
        this.props.parentSearchRaw(type, qt);
        day_start = this.props.day
        hour_start = this.props.hours
    }

    buildStructure(type) {
        switch (type) {
            case "house":
                    this.props.parentBuildStructure(type);
                    break
            case "farm":
                    this.props.parentBuildStructure(type);
                    break
            case "sawmill":
                    this.props.parentBuildStructure(type);
                    break
            case "stoneMine":
                    this.props.parentBuildStructure(type);
                    break
            case "goldMine":
                    this.props.parentBuildStructure(type);
                    break
            default:
                break
        }
    }
    
    render(){
        
        const buildHouse = this.props.wood >=20 && this.props.stone>=20
        const buildFarm = this.props.wood >=40 && this.props.stone>=40 && this.props.villagers-this.props.workers>0
        const buildSawmill = this.props.wood >=80 && this.props.stone>=50 && this.props.villagers-this.props.workers>0
        const buildStoneMine = this.props.wood >=150 && this.props.stone>=80 && this.props.villagers-this.props.workers>0
        const buildGoldMine = this.props.wood >=200 && this.props.stone>=200 && this.props.villagers-this.props.workers>0

        const cooldown_resource = this.cooldown(day_start, hour_start) > 2


        return(
                <div>
                    <br /><br />
                    {/* Button for manual resource gathering */}
                    <button disabled={!cooldown_resource} onClick={() => this.searchRaw('food')}>Search Food</button>
                    <button disabled={!cooldown_resource} onClick={() => this.searchRaw('wood')}>Search Wood</button>
                    <button disabled={!cooldown_resource} onClick={() => this.searchRaw('stone')}>Search Stone</button>
                    <hr style={{border: "1px dashed grey"}}/>
                    {/* Button for automatic resource gathering */}
                    <button disabled={!buildHouse} onClick={() => this.buildStructure("house")}>Build House</button>
                    <button disabled={!buildFarm} onClick={() => this.buildStructure("farm")}>Build Farm</button>
                    <button disabled={!buildSawmill} onClick={() => this.buildStructure("sawmill")}>Build Sawmill</button>
                    <button disabled={!buildStoneMine} onClick={() => this.buildStructure("stoneMine")}>Build Stone Mine</button>
                    <button disabled={!buildGoldMine} onClick={() => this.buildStructure("goldMine")}>Build Gold Mine</button>
                    <hr style={{border: "1px dashed grey"}}/>
                    {/* Building visualization */}
                </div>
        )
    }
}

export default MainContainer;