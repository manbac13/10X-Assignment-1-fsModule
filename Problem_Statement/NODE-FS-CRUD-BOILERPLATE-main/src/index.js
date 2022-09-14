const fs = require('fs/promises')
const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return fs.writeFile(fileName, fileContent)
}
const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let data = await fs.readFile(fileName, "utf-8")
	console.log(data);
}
const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return fs.appendFile(fileName, fileContent)
}
const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	return fs.unlink(fileName);
}
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }