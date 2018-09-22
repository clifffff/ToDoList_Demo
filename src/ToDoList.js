import React,{Component,Fragment} from 'react';
import "./style.css"
import ToDoItem from './ToDoItem'
class ToDoList extends Component{
	constructor(props){
		super(props);
		this.state={
			inputValue:'',
			list: []
		}
		this.handleInputChange=this.handleInputChange.bind(this),
		this.handleBtnClick=this.handleBtnClick.bind(this),
		this.handleItemDelete=this.handleItemDelete.bind(this)
	}
	render(){
		return(
			<Fragment>
				<input 
					value={this.state.inputValue}
					onChange={this.handleInputChange}
				/>
				<button onClick={this.handleBtnClick}>提交</button>
				<ul>{this.getToDoItem()}</ul>
			</Fragment>
		);
	}

	getToDoItem(){
		return(
			this.state.list.map((item,index)=>{
				return (
					<div key={index}>
						<ToDoItem 
							content={item} 
							index={index}
							deleteItem={this.handleItemDelete}
						/>
					</div>
				)
			})

		)
	}
	handleInputChange(e){
		const value =e.target.value;
		this.setState(()=>({
			inputValue : value
		}))
	}
	handleBtnClick(){
		this.setState((preState)=>({
			list:[...preState.list,preState.inputValue],
			inputValue:''
		}))
	}

	handleItemDelete(index){
		this.setState((preState)=>{
			const list= [...preState.list];
			list.splice(index,1);
			return{list}
		});
		// this.setState({
		// 	list:list

		// })
	}
}

export default ToDoList;
