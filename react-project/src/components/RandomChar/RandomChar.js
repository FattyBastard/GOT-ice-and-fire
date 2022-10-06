import React, {Component} from "react";
import GotServices from "../GotServices/GotServices";
import Spinner from "../Spinner";

export default class RandomChar extends Component{
    
    got = new GotServices();

    constructor(props){
        super(props);
        this.state = {
            char : null,
            loading: false
        }
        this.updateChar = this.updateChar.bind(this);
    }

    componentDidMount(){
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 4000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    updateChar(){
        const id = Math.floor(Math.random() * 999 + 1);
        this.got.getCharacter(id)
            .then(char => this.setState({char: char, loading: true}));
    }   

    render(){
        let component = null;
        if (this.state.loading){
            const {name, gender, born, culture, died} = this.state.char;
            component = <View

                            name={name}
                            gender={gender}
                            born={born}
                            culture={culture}
                            died={died}
                        />
        }
        else{
            component = <Spinner/>
        }
        return (
            <>
                <div className='random-char'>
                    <div className="">
                        {component}
                    </div>
                </div>
            </>
        )
    }
}

class View extends Component{
    render(){
        const {culture, born, name, gender, died} = this.props;
        return (
            <ul className='table d-flex flex-column'>
                <li className='border d-flex justify-between'>
                    <span className='fw-bold ml-10'>Gender:</span>
                    <span className="mr-10">{gender}</span>
                </li>
                <li className='border d-flex justify-between'>
                    <span className='fw-bold ml-10'>Name:</span>
                    <span className="mr-10">{name}</span>
                </li>
                <li className='border d-flex justify-between'>
                    <span className='fw-bold ml-10'>Born:</span>
                    <span className="mr-10">{born}</span>
                </li>
                <li className='border d-flex justify-between'>
                    <span className='fw-bold ml-10'>Died:</span>
                    <span className="mr-10">{died}</span>
                </li>
                <li className='d-flex justify-between'>
                    <span className='fw-bold ml-10'>Culture:</span>
                    <span className="mr-10">{culture}</span>
                </li>
            </ul>      
        )
    }
}