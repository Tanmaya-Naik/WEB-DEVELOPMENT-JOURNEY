                    // const arr=[3,5,6,7,8];

                    // const output=arr.map((x)=>{
                    //     return x*2;
                    // });
                    // const output2=arr.map((x)=>{
                    //     return x*3;
                    // });
                    // const output3=arr.map((x)=>{
                    //     return x.toString(2);
                    // });
                    // console.log(output);
                    // console.log(output2);
                    // console.log(output3);


                    // FILTER

                // const arr=[3,5,6,7,8];

                // const output=arr.filter((x)=>{
                //    return x%2;
                // })

                // console.log(output)
                // const output=arr.filter((x)=>{
                //    return x%2===0;
                // })

                // console.log(output)
                // const output=arr.filter((x)=>{
                //    return x>4;
                // })

                // console.log(output)


                //reduce
    const arr=[3,5,6,7,8];

    // //total sum
    // function sum(arr){
    //     summ=0;
    //     for(let i=0;i<arr.length;i++){
    //         summ+=arr[i];
    //     }
    //     return summ;
        
    // }

    // console.log(sum(arr));

    // const output=arr.reduce(function(acc,curr){//accumulator,current
    //     acc+=curr;
    //     return acc;

    // },0);
    const output=arr.reduce(function(max,curr){//accumulator,current
       if(curr>max){
        max=curr;
       }

       return max;

    },0);
    
    console.log(output);