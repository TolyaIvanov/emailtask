import React from 'react'

class FileAttach extends React.Component {
	render() {
		return (
			<div className={'file-attach'}>
				<input
					type="button"
					onClick={() => {
						this.props.open()
					}}
				/>
			</div>
		);
	}
}

export default FileAttach;