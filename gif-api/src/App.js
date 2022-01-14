import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.js';
import GifCard from './components/GifCard.js';
import request from 'superagent';

class App extends React.Component {
  //call constr
  constructor(){
    super();
    //create an empty objects for gifs
    this.state = {
      gifs:[]
    }
  }
  handleWordChange = (word) => {
    let url = `http://api.giphy.com/v1/gifs/search?q=${word.replace(/\s/g, '+')}&api_key=4sVGHrUINrhMbX1NUdXWwXmJksXeI1ry`; 
    request.get(url, (err, res) => {
  
      this.setState({gifs: res.body.data})
      
    });
  }
  render() {
      return (
          <div>
             <Search onWordChange = {this.handleWordChange}/>
             <GifCard gifs = {this.state.gifs}/>
          </div>
      );
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
