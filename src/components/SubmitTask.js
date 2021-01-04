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
			this.setState({ task: '', id: this.state.id + 1 });
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
				<div className="m-3">
					<input
						className="w-64 inline-block align-middle	justify-center rounded border border-gray-300 block m-2 hover:border-gray-700 focus:border-blue-600"
						type="text"
						value={this.state.task}
						onChange={this.handleChange}
					></input>
					<button
						className="p-0 w-8 h-8 inline align-middle bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 bg-blue-400 hover:bg-blue-600 focus:outline-none"
						type="submit"
					>
						<svg
							className="text-white"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</form>
		);
	}
}

export default SubmitTask;
