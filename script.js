function mincost(arr)
{ 
	if (arr.length <= 1) return 0;

    let totalCost = 0;
    while (arr.length > 1) {
        arr.sort((a, b) => a - b);
        const cost = arr[0] + arr[1];
        totalCost += cost;
        arr.splice(0, 2, cost);
    }

    return totalCost;
}

module.exports=mincost;
