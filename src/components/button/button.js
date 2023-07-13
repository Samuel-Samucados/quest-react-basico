import React from 'react';
import './button.css'

class Button extends React.Component {
    Click = () => {
        this.props.Resetar();
        this.props.TrocarCor('#00FA9A');
        this.props.Uppercase();
    };

    render() {
        return (
            <button className='btn' onClick={this.Click}>
                Alterar Cor do Texto
            </button>
        );
    }
}

export default Button;