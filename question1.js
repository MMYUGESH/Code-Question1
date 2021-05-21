//Question1 
n = 15;

for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");
    }
    else if (i % 3 !== 0 && i % 5 === 0) {
        console.log("Buzz");
    }
    else if (i % 3 !== 0 && i % 5 !== 0) {
        console.log(i);
    }

}

//Question2
var n=7;
var array=[6,6,3,9,3,5,1];
var total=12;
var a = [...array]
 console.log(...a)
var ary=[],len=[];
     for(let i=0;i<array.length-1;i++)
{
    for(let j=array.length-1;j>=i;j--)
    {
        ary.push(array.slice(i,j+1))
    }
}

 //console.log(ary)
 
 for(k=0;k<ary.length;k++)
 {
     if(ary[k].length===2){
         len.push(ary[k])
     }
    
 }

//console.log(...len)

 var res=[];
for(p=0;p<len.length;p++)
{
    temp =len[p];
    if(temp[0]+temp[1]===12)
    {
        res.push(temp)
    }
}
console.log(res)
var final=[];
for(l=0;l<res.length;l++)
{
    temp =res[l];
    var joining = [...temp]
    var join = (joining.join(""))
    final.push(join)
}
console.log(final)
var count=[];

 let feq={};
 for(v=0;v<final.length;v++)
 {
     key=final[v].split("").sort().join("");
     
     if(feq[key]===undefined)
     {
         feq[key]=1;
     }else
     {
         feq[key]+=1;
     } 
 }
 console.log(Object.keys(feq).length)
