import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './person';

class App extends Component {
  state = {
    persons : [
      { id : 'pppp', name : 'parag', age : 28},
      { id : 'jjjj', name : 'pradip', age : 55},
      { id : 'aaaa', name : 'pravina', age : 51}
    ],

    otherState : 'some other value',
    showPerson : true
  }

  onChangehandler = (event) => {
    this.setState({
      persons : [
        { name : 'paragKamble', age : 28},
        { name : event.target.value, age : 55}, //onchane event on input element of person component taking entered value
        { name : 'pravinaKamble', age : 51}
      ]
    })
  }

  onclickHandler = () => {
    this.setState({
      persons : [
        { name : 'paragKamble', age : 28},
        { name : 'pradipKamble', age : 55},
        { name : 'pravinaKamble', age : 51}
      ]
    })
  }

  onToggleIt = ()=>{
    const show = this.state.showPerson; 
    this.setState({showPerson : !show});
  
  }

  oneNameChangeHandler = (event,id)=>{
    const persnIndex = this.state.persons.findIndex( p =>{
      return p.id === id
    });
    const persnObj = {
      ...this.state.persons[persnIndex]
    }

    persnObj.name = event.target.value;
    const personArry = [...this.state.persons];
    personArry[persnIndex] = persnObj;

    this.setState({persons : personArry});
  }

  render(){

    let person = null;
    if(this.state.showPerson) {
      person = (      //whenever returning jsx code always wrap in paraenthesis...
                <div>
                  { this.state.persons.map( p =>{
                    return <Person
                      change={ (event) => this.oneNameChangeHandler(event,p.id)}
                      name={p.name} 
                      age={p.age}
                      key={p.id} />
                    })
                  }
                </div>
              );
    }

    return (
      <div className="App">
        <h1>this is different react page</h1>
        <button onClick={this.onToggleIt}>toggle elements</button>
        {person}
      </div>
    )
  }


}

export default App;
