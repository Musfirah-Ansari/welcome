import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profilez from './Profilez';

class App extends Component {
  render() {
     let a=5;
     let b=4;
     let c=3;
     let d=2;

     /* let paragraphs = [];
     for (let i = 1; i <= 5; i++) {
       paragraphs.push(<p key={i}>Paragraph {i}</p>);
     }
 */
    return (
      <React.Fragment>
        
            <p>Paragraph 1</p>
            <p>Paragraph {d}</p>
            <p>Paragraph {c}</p>
            <p>Paragraph {b}</p>
            <p>Paragraph {a}</p>
            <Profilez name="Musfirah Fayyaz" detail="Former Fighter Pilot from Jinnah Termoinal Airport" designation="junior"/> 
            <Profilez name="Midhat Kamal" detail="Former Programmer from Gulshan e Iqbal" designation="senior"/> 

            {/*paragraphs*/}

      </React.Fragment>
    );
  }
}

export default App;
