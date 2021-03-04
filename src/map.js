const map = (arr,func) => {
	if(arr.length==0)
		return [];
	switch(func){
		case "cube":
			return arr.map(cube);
			break;
		case "identity":
			return identity(arr);
			break;
		case "increment":
			return arr.map(increment);
			break;
		default:
			return "Case not found";
			break;
	}
    
}
function cube(num)
{
	return Math.pow(num,3);
}
function identity(arr)
{
	var n_arr=[];
	for(var i=0; i<arr.length; i++)
	{
		if(n_arr.includes(arr[i])==false)
			n_arr.push(arr[i]);

	}
	return n_arr;
}

function increment(num)
{
	return num.x+1;
}
module.exports = map;