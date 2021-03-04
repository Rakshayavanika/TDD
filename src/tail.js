const tail = (arr) => {
	if (arr.length != 0)
	{
		var a=arr.slice(1);
    	return a; 
		
	}
	return 'null';  
}
module.exports = tail;