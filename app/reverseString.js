'use strict'

let reverseString  = function (str){
	let empty = '';
	let i = str.length;
	let flag = true;
	

	if (str === ''){
		return null;

	}
	if (palindromeCheck(str)){
		return flag;
			
	} 
	else {

		while(i > 0){
			empty += str.substring(i - 1, i);
			i--;
		}
		
		return empty;
	
	}



	function palindromeCheck(str){
	 	return str == str.split('').reverse().join('');
	}

}


module.exports = reverseString;