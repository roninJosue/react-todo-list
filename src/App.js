import React from 'react';
import './App.css';

/* function HelloWorld(props) {
  return (
    <div id="hello">
      <h3>{props.lastname}</h3>
      <h4>{props.name}</h4>
    </div>
  );
} */

class HelloWorld extends React.Component {

  state = {
    show: true
  };

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render(){
    if(this.state.show){
      return (
        <div id="hello">
        <h3>{this.props.lastname}</h3>
        <h4>{this.props.name}</h4>
        <button onClick={this.toggleShow}>Toggle show</button>
      </div>
      );
    } else {
      return <h1>
        There are not elements.
        <button onClick={this.toggleShow}>Toggle show</button>
        </h1>
    }
  }
}

//const App = () => <div>My component: <HelloWorld /></div>

/*class App extends React.Component {
  render(){
    return (
      <div>My component: <HelloWorld /></div>
    );
  }
}*/

function App() {
  return (
    <div>
      My component: <HelloWorld name="Hello Reynaldo" lastname="Cano" />
      <HelloWorld name="Hello Roxana" />
      <HelloWorld name="Hello Eli" />
    </div>
  );
}

export default App;
