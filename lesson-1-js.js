//Bài 1
function same(arr1,arr2){
        let newarr=[]
        let result=[]
        for(let square=0;square<arr1.length;square++){
            newarr.push(arr1[square]*arr1[square])
        }
        newarr.sort()
        arr2.sort()
        // console.log(newarr,arr2)
        for(let i=0;i<arr2.length;i++){        
            if(newarr[i]===arr2[i]){
                console.log(arr2[i],newarr[i])
                result.push(arr2[i])
            }
        }
        console.log(result,arr2)
        if(result.length===arr2.length){
            console.log(true)
        } else {
            console.log(false)
        }
}

// same ([1,1,3],[1,9])

//Bài 2

function sumZero(array){
    // console.log(array)
    let result=[]
    let count=0
    for (let i = 0; i < array.length; i++) {
        for (let c = 0; c < array.length; c++) {
            if ((array[i] + array[c] === 0)&&(i!==c)) {
                if(result.length<2){
                    result.push(array[i], array[c])
                }
            }
        }
    }
    if(result.length>0){
        console.log(result)
    } else {
        console.log(undefined)
    }
    
    // return result
}

sumZero([-2,-1,0,3,2])