import React from 'react'
import Dropzone from 'react-dropzone'

import {
	MAX_FILE_SIZE,
} from "../../constants/constants";

class FileDropzone extends React.Component {
	render() {
		return (
			<div className={'dropzone'}>
				<Dropzone
					onDrop={this.onDrop}
					accept="image/*"
					minSize={0}
					maxSize={MAX_FILE_SIZE}
				>
					{({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles}) => {
						const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > MAX_FILE_SIZE;
						return (
							<div {...getRootProps()}>
								<input {...getInputProps()} />
								{isDragActive && !isDragReject && (
									<div className={'drop-here'}>
										<h3 className={'drop-title'}>Бросайте файлы сюда, я ловлю</h3>
										<p className={'drop-text'}>Мы принимаем картинки(jpg, png, gif), офисные
											файлы(doc, xls, pdf) и zip-архивы</p>
										<p className={'file-size'}>Размеры файлов до 5 МБ</p>
									</div>
								)}
								{isDragReject && "File type not accepted, sorry!"}
								{isFileTooLarge && (
									<div className="large-file">
										File is too large.
									</div>
								)}
							</div>
						)
					}
					}
				</Dropzone>
			</div>
		);
	}
}

export default FileDropzone;