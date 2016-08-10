function updateInventory(arr1, arr2) {
    
    arr1.forEach(function(cur1, i, arr1){
                arr2.forEach(function(cur2, j, arr2){
                    if ( cur1[1] === cur2[1])
                    {
                        cur1[0] += cur2[0];
                        cur2[0] = undefined;
                    }
                });       
       });
       
    console.log('Array 1 after updating round 1: ', arr1);   
    console.log('Array 2 after updating round 1: ', arr2);   
    arr2.forEach(function(cur, i, arr2){
        if (cur[0] !== undefined)
            arr1.push(cur);
    });
    
    console.log('Array 1 after updating round 2 before sorting: ', arr1); 
    arr1.sort(function(a, b){
        if (b[1] < a[1])
            return 1;
        if (b[1] >a[1])
            return -1;
        else
            return 0;
    });
    console.log('Array 1 after updating round 2 after sorting: ', arr1);   
    return arr1;
}