import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './person';

class App1 extends Component {

	state = {
		persons : [
			{ name : 'Pooja' , age : 10},
			{ name : 'pratik' , age : 12},
			{ name : 'parag' , age : 15}
		],
		showPerson : false
	}

	onToggleIt = () =>
	{	const show = this.state.showPerson; 
		this.setState({
			showPerson : !show
		});
	}

	render(){
		return(

			<div className="App">
			 	<h1>this is different react page</h1>
			 	<button onClick={this.onToggleIt}>toggle elements</button>
			    {
		 			this.state.showPerson ? 
			 	 		<div>
				 	 		<Person 
						 		name={this.state.persons[0].name} 
						 		age={this.state.persons[0].age} />
			                <Person 
			                	name={this.state.persons[1].name} 
			                	age={this.state.persons[1].age} 
			                	change={this.onChangehandler} />
			                <Person 
			                	name={this.state.persons[2].name} 
			                	age={this.state.persons[2].age} />
				 		</div> : null

		 	    }
		 	</div>
		)
	}


}

export default App1;



//======================================basic syntax================================================
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

  

  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <button onClick={this.onclickHandler}>changing the content</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.onChangehandler} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>This is children of the Component</Person>
      </div>
    )
  }

//----------------------toggling elements----------------------------------------------------------------------------
 return (
      <div className="App">
        <h1>this is different react page</h1>                     
        <button onClick={this.onToggleIt}>toggle elements</button>  //toggling the one state property to true oe false
          {
            this.state.showPerson ? 
              <div>
                <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} />
                <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age} 
                  change={this.onChangehandler} />
                <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} />
              </div> : null
          }
      </div>
    )

 //================using if condition to toggle ==============================================================
 render(){
    const person = null;
    if(this.state.showPerson) {
      person = <div>
                <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} />
                <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age} 
                  change={this.onChangehandler} />
                <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} />
              </div>
    }

    return (
      <div className="App">
        <h1>this is different react page</h1>
        <button onClick={this.onToggleIt}>toggle elements</button>
        {person}
      </div>
    )
  }

//------------with map method we can send index as well in another method ----------------------------------------------------------------------------------

  oneClickHandler = (index)=>{
    const persn = this.state.persons;
    persn.splice(index,1);
    this.setState({persons : persn});
  }

  render(){
    let person = null;
    if(this.state.showPerson) {
      person = (      //whenever returning jsx code always wrap in paraenthesis...
                <div>
                  { this.state.persons.map( (p,index)=>{
                    return <Person
                      click={ () => this.oneClickHandler(index)}
                      name={p.name} 
                      age={p.age}
                      key={p.id} />
                    })
                  }
                </div>
              );
    }