import React, { Component } from 'react';

class Task extends Component {
	constructor(props) {
		super(props);
		this.deleteTask = this.deleteTask.bind(this);
		this.state = {
			id: props.id,
			task: props.task,
		};
	}

	deleteTask() {
		this.props.handleDelete(this.state.id);
	}

	render() {
		const {task} = this.state;
		return (
			<div>
				<h2 className="transition duration-150 transform hover:scale-110  relative bg-gray-100 w-72 rounded m-1 p-1 hover:bg-blue-100 hover:border-transparent hover:shadow-lg">
					{task}
					<button onClick={() => this.deleteTask()}>
						<svg
							className="justify-center cursor-pointer text-gray-300 transition duration-300 transform hover:scale-125 hover:text-green-600 hover: inline absolute top-2 right-3 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</h2>
			</div>
		);
	}
}

export default Task;
