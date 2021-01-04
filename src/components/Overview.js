import React, { Component } from 'react';
import SubmitTask from './SubmitTask';
import Task from './Task';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [{ taskName: 'TestName1', id: 1 }, { taskName: 'TestName2', id: 2 }, { taskName: 'TestName3', id: 3 }],
		};
	}


	handleTaskDelete = (id) => {
		console.log(id);
		this.setState(prevState => ({
			tasks: prevState.tasks.filter(el => el.id != id )
		}));
	  }


	handleParentData = (task, id) => {
		this.setState({ tasks: this.state.tasks.concat({taskName: task, id: id}) });
	};

	render() {
		const { tasks } = this.state;
		const taskList = tasks.map((task) => (
			<Task key={task.id} id={task.id} task={task.taskName} handleDelete={this.handleTaskDelete}></Task>
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
