import React from 'react';
import './App.css';
import Paragraph from './components/paragraph/paragraph';
import CardAlert from './components/cardalert/cardalert';
import Button from './components/button/button';

    class App extends React.Component {
      state = {
        textColor: 'yellow',
        uppercase: false,
      };
    
      Change = (color) => {
        this.setState({ textColor: color });
      };
    
      Bigletters = () => {
        this.setState((prevState) => ({
          uppercase: !prevState.uppercase
        }));
      };
    
      Reset = () => {
        this.setState({
          textColor: this.state.originalColor,
          uppercase: false
        });
      };
    
      render() {
        return (
          <div className="App-header">
            <h1>Quest - React</h1>
            <p className="desafio">Quest 1</p>
            <Paragraph color={this.state.textColor} uppercase={this.state.uppercase} />
            <br />
            <Button
              TrocarCor={this.Change}
              Uppercase={this.Bigletters}
              Resetar={this.Reset}
            />
            <hr />
            <p className="desafio">Quest 2</p>
            <br />
            <CardAlert className="alert" label="Alerta de Label" />
          </div>
        );
      }
    }

export default App;
