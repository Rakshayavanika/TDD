const min = (arr) => {
	if (arr.length == 0)
		return 'null' 
	var m=arr[0];
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i]<m)
			m=arr[i];
	}
	return m;
}
module.exports = min;

