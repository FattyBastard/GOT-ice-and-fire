import React, {Component} from "react";
import "macro-css";
import GotServices from "../GotServices/GotServices";

const Field = ({data, label, field}) => {
    return (
        <li className='border d-flex justify-between'>
            <span className='fw-bold ml-10'>{label}:</span>
            <span className="mr-10">{data[field]}</span>
        </li>
    )
}

export {Field};

export default class DetailedItem extends Component{

    got = new GotServices();

    constructor(props){
        super(props);

        this.state = {
            data : null
        }

        this.updateChar = this.updateChar.bind(this);
    }
    componentDidMount(){
        this.updateChar();
    }

    componentDidUpdate(prevProps){
        if (this.props.itemId !== prevProps.itemId){
            this.updateChar();
        }
    }

    updateChar(){
        
        const itemId = this.props.itemId;
        if (!itemId){
            return
        }
        this.props.getData(itemId)
            .then(data => {this.setState({
                data : data
            })
        });
    }

    render(){
        let component = null;
        if (this.state.data){
        
            const data = this.state.data
            ;component = React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {data})});
        }
        else{
            component = <span>You havent choosen an element</span>            
                        
        }
        return (
            <ul className='table d-flex flex-column mr-50 second-part-table'>
                {component}
            </ul>
        )
    }
}

// class View extends Component{
    
//     render(){
//         const {gender, born, died, culture, name} = this.props; 
//         return (
//             <>
                
//                 <li className='border d-flex justify-between'>
//                     <span className='fw-bold ml-10'>Name:</span>
//                     <span className="mr-10">{name}</span>
//                 </li>
//                 <li className='border d-flex justify-between'>
//                     <span className='fw-bold ml-10'>Born:</span>
//                     <span className="mr-10">{born}</span>
//                 </li>
//                 <li className='border d-flex justify-between'>
//                     <span className='fw-bold ml-10'>Died:</span>
//                     <span className="mr-10">{died}</span>
//                 </li>
//                 <li className='d-flex justify-between'>
//                     <span className='fw-bold ml-10'>Culture:</span>
//                     <span className="mr-10">{culture}</span>
//                 </li>
//             </>
//         )
//     }
// }