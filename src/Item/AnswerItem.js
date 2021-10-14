import { Component } from "react";
class AnswerItem extends Component{

    render (){

        return( <div style={{backgroundColor :this.props.color}}>
            <p >Answer: {this.props.answer}</p>
            <p>Input variables: a = {this.props.a}; b = {this.props.b}; N = {this.props.N};</p>
            <button onClick={this.props.onDelete}>X</button>
        </div>
        );
    }
}
export default AnswerItem;