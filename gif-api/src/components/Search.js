import React from "react";
class Search extends React.Component{

    constructor() {
        //lets us use this.state in const
        //class inherit props from parent component 
        super()
        //the state of the search term 
        this.state ={ word: '' }
    }
    updateInput(word){
        //informs react that state has changed
        this.setState({word});  
        //passes data from child -> parent
        this.props.onWordChange(word);
    }
    render(){
        return(
            <div className = "search"> 
             <h1> Search </h1>
             {/* onchange will update everytime we update input. */}
            <input onChange = {e => this.updateInput(e.target.value)}/>
            </div>
        );
    }
}
export default Search;
