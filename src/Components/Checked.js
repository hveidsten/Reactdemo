import React, {Component} from 'react'

export default class Checked extends Component{
    constructor(){
        super();
        this.state = {
            checked: false
        }
        this.toggleChecked = this.toggleChecked.bind(this)
    }

    toggleChecked(){
        this.setState(state => ({checked: !state.checked}));
    }
    
    render(){
        return (
           <div onClick={this.toggleChecked}>
               {this.props.render(this.state.checked)}
            </div>
        
        )
    }
}