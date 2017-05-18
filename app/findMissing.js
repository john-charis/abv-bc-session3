'use strict'

let findMissing  = function (arr1,arr2){

	arr1 = arr1;
	arr2 = arr2;

	let difference = []; 

	if (arr1.length === arr2.length){
		difference.push(0);
		difference = parseInt(difference.join());
	}

	else{

		for(let i=0; i<arr2.length; i++){

			if(arr1.indexOf(arr2[i])==-1){
				difference.push(arr2[i]);
		   		difference = parseInt(difference.join());


	   		}
		}
		
	}
 return difference;
 }

module.exports = findMissing;