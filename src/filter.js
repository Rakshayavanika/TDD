const filter = (arr,func) => {
	switch(func){
		case "true":
			return arr;
		case "false":
			return [];
			break;
		case "greater":
			result=arr.filter(greater);
			break;
		case "filterUpperCase":
			result=arr.filter(filterUpperCase);
			break;
		default:
			result="Case not found";
			break; 
	}
	return result;
    
}
function filterUpperCase(str)
{
	return str==str.toUpperCase();
}

function greater(num)
{
	return num>1;
}
module.exports = filter;