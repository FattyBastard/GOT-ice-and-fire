import React, {Component} from "react";
import ListItem from "../../ListItem";
import DetailedItem from "../../DetailedItem";
import GotServices from "../../GotServices/GotServices";
import { Field } from "../../DetailedItem";

const RowBlock = ({left, right}) => {
    // 3.) Передача других компонентов в качестве пропсов
    return (
        <>
            <h3 className='d-flex justify-center'>List of books</h3>
            <div className='second-part d-flex justify-between '>
                        {left}
                        {right}
            </div>
        </>
    )
}

export default class BooksPage extends Component{

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

        const Detailed= (
            <DetailedItem
                    itemId={this.state.selectedChar}
                    getData={this.got.getBook}>
                    <Field label="Name" field="name"/>
                    <Field label="Authors" field="authors"/>
                    <Field label="Country" field="country"/>
                    <Field label="Pages" field="numberOfPages"/>
                    <Field label="Publishe" field="publisher"/>
            </DetailedItem>
                    
        )

        const List = (
            <ListItem
                    selectChar={this.selectChar}
                    getData={this.got.getAllBooks}
                    renderItem={(item) => `${item.name} (${item.publisher})`}/>
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