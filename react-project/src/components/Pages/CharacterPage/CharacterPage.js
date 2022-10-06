import React, {Component} from "react";
import ListItem from "../../ListItem";
import DetailedItem from "../../DetailedItem/DetailedItem";
import GotServices from "../../GotServices/GotServices";
import {Field} from "../../DetailedItem/DetailedItem";

const RowBlock = ({left, right}) => {
    // 3.) Передача других компонентов в качестве пропсов
    return (
        <>
            <h3 className='d-flex justify-center'>List of characters</h3>
            <div className='second-part d-flex justify-between '>
                        {left}
                        {right}
            </div>
        </>
    )
}

export default class CharacterPage extends Component{

got  = new GotServices();

    constructor(props){
        super(props);

        this.state = {
            selectedChar: null
        }
    }

    selectChar = (id) =>{
        this.setState({selectedChar : id});
    }

    render(){

        const Detailed = (
            <DetailedItem
                    itemId={this.state.selectedChar}
                    getData={this.got.getCharacter}>
                        <Field label="Name" field="name"/>
                        <Field label="Born" field="born"/>
                        <Field label="Died" field="died"/>
                        <Field label="Gender" field="gender"/>
                        <Field label="Culture" field="culture"/>
            </DetailedItem>
                    
        )

        const List = (
            <ListItem
                    selectChar={this.selectChar}
                    getData={this.got.getAllCharacters}
                    renderItem={(item) => `${item.name} (${item.gender})`}/>
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