import React, { Component } from 'react';
import Task from './Task';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: ['task1', 'task2'],
		};
		this.updateState = this.updateState.bind(this);
	}
	updateState(taskToAdd) {
		this.setState({ tasks: this.state.tasks.concat(taskToAdd) });
		console.log(this.state.tasks);
	}

	render() {
		const { tasks } = this.state;
		const taskList = tasks.map((task, index) => (
			<Task key={index} task={task}></Task>
		));
		return <div>{taskList}</div>;
	}
}

export default Overview;
