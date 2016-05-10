console.log("CONNECTED!");
//PRINT NUMBER IN AN ARRAY IN REVERSE
function printReverse(arr)
{
	for(var i = arr.length - 1; i >= 0; i--)
	{
		console.log(arr[i]);
	}
}
printReverse([3, 6, 2, 5]);
// printReverse([3,5,6])
//					 ^ will start here and decrement


//IF ALL NUMBERS IN ARRAY ARE UNIFORM(isUniform([1,1,1,1]), RETURN TRUE, ELSE FALSE
function isUniform(arr)
{
	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i] !== arr[0]){
			return false;
		}
	}
	return true;
}

//ADD ALL NUMBERS THAT ARE IN THE ARRAY
function sumArray(arr)
{
	var total = 0;

	arr.forEach(function(element)
		//element is each value in the array list
	{
		total += element;
		//each element will be added then stored into total
	});
return total;
}

//FINDS THE MAX VALUE IN THE ARRAY
function max(arr)
{
	var max = arr[0];

	for(var i = 1; i < arr.length; i++)
	{
		if(arr[i] > max)
		{
			max = arr[i]
		}
			
	}
	return max;
}

