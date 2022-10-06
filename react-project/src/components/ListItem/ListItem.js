import React, {Component} from "react";
import "macro-css";
import Spinner from "../Spinner";




export default class ListItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            list : null,
            loading: false
        }

        this.updateListChar = this.updateListChar.bind(this);
        this.renderItems = this.renderItems.bind(this);
    }

    componentDidMount(){
        this.updateListChar();
    }

    updateListChar(){
// паттерны: 1.) Прокидывание конкретной функции обращения к api через props из app.js
// таким образом компонент становится более независимым, т.к он же может использоваться для 
// отображения списка других сущностей.
        this.props.getData()
            .then(data => {
                this.setState({ list : data, loading : true})});
    }

    renderItems(list){
        return list.map((item, index) => {
// 2.) Прокидывание конкретной функции отрисовки компонента из app.js, такм образом renderItems
// будет вести себя в зависимости от переданных пропсов.
            const label = this.props.renderItem(item);
            return (
                <li key={index + 1}
                    className='border d-flex justify-between'
                    onClick={() => this.props.selectChar(index + 1)}>
                    <span className='fw-bold ml-10'>{label}</span>
                    {/* <span className="mr-10">{item.gender}</span> */}
                </li>
            )
        });
    }

    render(){
        let component = null;
        if (this.state.loading){
            component = this.renderItems(this.state.list);
        }
        else{
            component = <Spinner/>
        }
    
        return (
            <ul className='table d-flex flex-column first-part-table'>
                {component}
            </ul>
        )
    }
}