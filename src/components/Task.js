import React, { Component } from 'react'

class Task extends Component {

	constructor(props) {
		super(props)
		this.state = {
			id: props.id,
			task: props.task,
	   };
	}
	
	deleteTask = () => {
		this.props.handleDelete(this.state.id);
	};


	render() {
		const { task, id } = this.state;
		return (
			<div>
				<h2 className=" cursor-pointer relative bg-gray-100 w-72 rounded m-4 p-2 hover:bg-blue-200 hover:border-transparent hover:shadow-lg">
					ID: {id} {task}
					<button onClick={this.deleteTask}></button>
					<svg
						className="justify-center transition duration-300 transform hover:scale-125 hover:text-red-600 hover: inline absolute right-3 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</h2>
			</div>
		);
	}
}

export default Task

