import React from 'react'
import Dropzone from 'react-dropzone'

class FileDropzone extends React.Component {
	render() {
		return (
			<Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
				{({getRootProps, getInputProps}) => (
					<div {...getRootProps()}>
						<input {...getInputProps()} />
						<p>Drag 'n' drop some files here, or click to select files</p>
					</div>
				)}
			</Dropzone>
		);
	}
}

export default FileDropzone;