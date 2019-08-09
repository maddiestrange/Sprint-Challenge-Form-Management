import React from 'react';
import FormikLoginForm from './Form';
import './App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FoodCards from './components/FoodCards';
//import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    food: [{
        name: 'hello'
    }
    ]
    };
  }

  componentDidMount() {
    this.callAPI();
    console.log('food:', this.state)
  }

  callAPI = () => {
    axios
    .get(`http://localhost:5000/api/restricted/data`)
      .then(data => {
        this.setState({
            food: data.data
            })
            console.log(this.state)
        })
        .catch(err => {
            console.log(err);
        });
  };

  render() {
    return (
      <div className="App">
        <FormikLoginForm />
        <FoodCards food={this.state.food}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
