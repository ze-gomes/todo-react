import React, { Component } from 'react';
import Overview from './Overview';

function updateState() {
	this.setState({ tasks: this.state.tasks.concat(this.state.task) });
}

class SubmitTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: '',
		};
	}

	handleSubmit = (event) => {
		this.updateChild(this.state.task);
		event.preventDefault();
		this.setState({});
	};

	updateChild = (task) => {
		updateState(task);
	};

	handleChange = (event) => {
		this.setState({
			task: event.target.value,
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<input
						type="text"
						value={this.state.task}
						onChange={this.handleChange}
					></input>
					<button type="submit">Add Task</button>
					<Overview task={this.state.task}></Overview>
				</div>
			</form>
		);
	}
}

export default SubmitTask;
