import React from "react" 
import "./paragraph.css"

class Paragraph extends React.Component {
    render() {
        const { color, uppercase } = this.props;
        const estilo = { color: color, textTransform: uppercase ? 'uppercase' : 'none' };

        return (
            <p className='paragrafo' style={estilo}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum pariatur doloribus fugiat mollitia tempore, quam nihil qui similique sit corrupti nulla eaque odio odit ea. Veritatis totam deserunt quae reiciendis.
            </p>
        );
    }
}

Paragraph.defaultProps = {
    color: 'white',
    uppercase: false
};

export default Paragraph;