import React,{Component,Fragment} from 'react';

class ToDoItem extends Component{
	constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this)
	}

	render(){
		return <li onClick={this.handleClick}>{this.props.content}</li>
	}

	handleClick(){
		this.props.deleteItem(this.props.index)
	}
}

export default ToDoItem;