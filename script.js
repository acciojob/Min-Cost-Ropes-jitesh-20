function mincost(arr)
{ 
	arr=arr.sort();
	let arr1=[];
	let sum=0;
	arr.forEach((item)=>{
		sum+=item;
		arr1.push(sum);
	})
	 sum=0;
	arr1.forEach((item,index)=>{
		if(index==0){
			continue;
		}else{
		sum+=item;	
		}
	})
	return sum;
}

module.exports=mincost;
