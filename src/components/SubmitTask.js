import React, { Component } from 'react';

class SubmitTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: '',
			id: 4,
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.task !== '') {
			this.props.handleData(this.state.task, this.state.id);
			this.setState({ task: '', id: this.state.id +1});
		}
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
						className="block m-4 bg-gray-200 focus:bg-white"
						type="text"
						value={this.state.task}
						onChange={this.handleChange}
					></input>
					<button
						className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-600 focus:outline-none"
						type="submit"
					>
						Add Task
					</button>
				</div>
			</form>
		);
	}
}

export default SubmitTask;
