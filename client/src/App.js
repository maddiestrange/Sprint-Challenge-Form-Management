import React from 'react';
import FormikLoginForm from './Form';
import './App.css';
import axios from 'axios';
import FoodCards from './components/FoodCards';


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
export default App;

exports.sum = function (a, b) {
    return a + b;
  }