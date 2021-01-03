import React, { Component } from 'react';
import SubmitTask from './SubmitTask';
import Task from './Task';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: ['Do Stuff 1', 'Write Thing 2', 'Clean Stuff 3'],
		};
	}


	handleParentData = task => {
		this.setState({tasks: this.state.tasks.concat(task)});
	  };
	

	render() {
		const { tasks } = this.state;
		const taskList = tasks.map((task, index) => (
			<Task key={index} task={task}></Task>
		));
		return (
			<div className="flex flex-col items-center justify-center">
				<SubmitTask handleData={this.handleParentData}></SubmitTask>
				{taskList}
			</div>
		);
	}
}

export default Overview;
