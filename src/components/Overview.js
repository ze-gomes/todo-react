import React, { Component } from 'react';
import SubmitTask from './SubmitTask';
import Task from './Task';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{ taskName: 'Do stuff here', id: 1 },
				{ taskName: 'Do more stuff', id: 2 },
				{ taskName: 'Do extra stuff', id: 3 },
				{ taskName: 'Another task here', id: 4 },
				{ taskName: 'Work on some other stuff', id: 5},
			],
		};
	}

	handleTaskDelete = (id) => {
		console.log(`deleting task with ID ${id}`);
		this.setState((prevState) => ({
			tasks: prevState.tasks.filter((el) => el.id !== id),
		}));
	};

	handleParentData = (task, id) => {
		this.setState({
			tasks: this.state.tasks.concat({ taskName: task, id: id }),
		});
	};

	render() {
		const { tasks } = this.state;
		const taskList = tasks.map((task) => (
			<Task
				key={task.id}
				id={task.id}
				task={task.taskName}
				handleDelete={this.handleTaskDelete}
			></Task>
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
