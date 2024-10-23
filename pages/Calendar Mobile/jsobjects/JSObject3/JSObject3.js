export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		navigateTo('Page2', {}, 'SAME_WINDOW');
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		{{showAlert('aaaa', 'info');}}
	},
	 myFun3 () {
		//const _ = require('lodash');
let val = "";

// Checking for Empty Value
return("The Value is Empty :" + _.isEmpty(val))
	},
	myfun4()
	{
		String.prototype.getBytes = function() {
    var bytes = [];
    for (var i = 0; i < this.length; i++) {
        var charCode = this.charCodeAt(i);
        var cLen = Math.ceil(Math.log(charCode)/Math.log(256));
        for (var j = 0; j < cLen; j++) 
            bytes.push((charCode << (j*8)) & 0xFF);
        
    }
    return bytes;
}
	},
	moment()
	{
		return moment().toString()
	}
}