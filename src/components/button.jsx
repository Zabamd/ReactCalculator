import React from "react";
import "../style/button.css"


class Button extends React.Component
{

    render(){
        return <button className="col button btn rounded-circle" onClick={this.props.onClick} >{this.props.value}</button>
    }
}

export default Button;