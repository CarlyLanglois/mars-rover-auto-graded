class Command {
	constructor(commandType, value) {
	  this.commandType = commandType;
	  if (!commandType) {
		 throw Error("Command type requireds.");
	  }
	  this.value = value;
	}
 
 }
 
 module.exports = Command;
