import React from 'react'
import './Msg.css'


class Msg extends React.Component{

    render(){
        return(
            <div>
                <span>{this.props.nome}</span>
                <span>{this.props.mensagem}</span>
            </div>
        )
    }

}

export default Msg