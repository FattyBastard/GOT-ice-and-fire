import React, {Component} from "react";
import ListItem from "../../ListItem";
import DetailedItem from "../../DetailedItem";
import GotServices from "../../GotServices/GotServices";
import { Field } from "../../DetailedItem";

const RowBlock = ({left, right}) => {
    // 3.) Передача других компонентов в качестве пропсов
    return (
        <>
            <h3 className='d-flex justify-center'>List of houses</h3>
            <div className='second-part d-flex justify-between '>
                        {left}
                        {right}
            </div>
        </>
    )
}

export default class HousesPage extends Component{

got  = new GotServices();

    constructor(props){
        super(props);

        this.state = {
            selectedChar: null
        }
        this.selectChar = this.selectChar.bind(this);
    }

    selectChar(id){
        this.setState({selectedChar : id});
    }

    render(){

        const Detailed = (
            <DetailedItem
                    itemId={this.state.selectedChar}
                    getData={this.got.getHouse}>
                    <Field label="Name" field="name"/>
                    <Field label="Words" field="words"/>
                    <Field label="Region" field="region"/>
                    <Field label="CoatOfArms" field="coatOfArms"/>
            </DetailedItem>
        )

        const List = (
            <ListItem
                    selectChar={this.selectChar}
                    getData={this.got.getAllHouses}
                    renderItem={(item) => `${item.name} (${item.region})`}/>
        )
        return(
            <>    
                <RowBlock
                    left={List}
                    right={Detailed}/> 
            </>
        )
    }
}