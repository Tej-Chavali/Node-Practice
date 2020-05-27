// function leap(year){
//     if(year % 400 === 0){
//      return 'nonleapyear'; 
//     }else if(year % 4 === 0){
//         return 'leapyear';
//     }
//     return 'nonleapyr';
// }
// console.log(leap(2020)); 

// function average(a){
//     var count = 0;
//     var avg = 0;
//     for(var i=0;i<a.length;i++){
//         count += a[i];
//     }
//     avg = count / a.length;
//     return avg;
// }
// console.log(average([1,2,3,4,5])); 

// function minmax(a){
//     var max = a[0];
//     var min = a[0];
//     for(var i=0; i<a.length;i++){
//         if(a[i]>max){
//             max = a[i];
//         }
//         if(a[i] < min){
//             // min = min;
        
//             min = a[i];
//         }
//     }
//     return [min,max];
// }
// console.log(minmax([1,2,3,4,5]));

// function reverse(a){
//     let arr = [];
//     var temp = 0;
//     for(var i=a.length-1;i>=0;i--){
//         arr[temp] = a[i];
//         temp++;

//     }
//     return arr;

// }
// console.log(reverse([1,2,3,4,5]));

// function evenadd(a){
//     var count = 0;
//     for(var i=0;i<a.length;i++){
//         if(a[i] % 2 !== 0){
//             count += a[i];
//         }
//     }
//     return count;
// }
// console.log(evenadd([1,2,3,4,5]));

// function merge(a,b){
//     var result = [];
//     for(i=0;i<a.length;i++){
//         result[i] = a[i];
        
//     }
//     for(j=0;j<b.length;j++){
//         result[j+a.length] = b[j];
//     }
//     return result;
// }
// console.log(merge([1,2,3],[4,5]));

// function indexvlue(a){
//     var result ;
//     for(var i=0;i<a.length;i++){
//         if(i === 3){
//             result = a[i];
//         }
        
//     }
//     return result;
// }
// console.log(indexvlue([1,2,3,4,5]));

// function remove(a){
//     let arr= [];
//     var temp = 0;
//     for(var i=0;i<a.length;i++){
//         if(i !== 3){
//             arr[temp] = a[i];
//             temp++;
//         }
//     }
//     return arr;
// }
// // console.log(remove([1,2,3,4,5]));

// function strtochar(a){
//     return ""+a;
// }
// console.log(strtochar('b'));

// var str = strtochar('b');
// console.log('-->',typeof str);

// function chrtostr(a){
//     return  a.charAt(0);
// }
// console.log(chrtostr("a"));
// var char = chrtostr("a");
// console.log('-->',typeof char);

// function string(stringname,ind){
//     for(var i=0; i<stringname.length;i++){
//         if(i === ind){
//             return stringname.charAt(ind);
//         }
//     }
// }
// console.log('-->',string("sudheer",5));

// function repeatedchar(stringname,char){
//     var count = 0;
//     for(var i=0;i<stringname.length;i++){
//         if(stringname[i] === char){
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(repeatedchar("kamakshi",'a'));

// function endchar(stringname,char){

//     if(stringname.charAt(stringname.length-1) === char){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(endchar("kamakshi",'u'));

// function firstindex(stringname,charname){
//     for(var i=0;i<stringname.length;i++){
//         if(stringname.charAt(i) === charname){
//             return i;
//         }
//     }
// }
// console.log(firstindex('shankar','r'));

// function lastindex(stringname,charname){
//     for(var i=stringname.length-1;i>=0;i--){
//         if(stringname.charAt(i) === charname){
//             return i;
//         }
//     }
// }
// console.log(lastindex('shankar','a'));

// function countstring(actualstring,searchstring){
//     var spiltstring = actualstring.split(' ');
//     var count = 0;
//     for(var i=0;i<spiltstring.length;i++){
//         if(spiltstring[i] === searchstring){
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(countstring("Hello good Moring Hello everyone Hello guys","Hello"));

// function endstring(actualstring,searchstring){
//     var spiltstring = actualstring.split(' ');
//     if(spiltstring[spiltstring.length-1] === searchstring){
//         return true;
//     }
//     return false;
// }
// console.log(endstring("hello World","hello"));

// function firststring(actualstring,searchstring){
//     var spiltstring = actualstring.split(' ');
//     if(spiltstring[0] === searchstring){
//         return true;
//     }
//     return false;
// }
// console.log(firststring("hello World","hello"));

// function charfirst(actualstring,searchchar){
//         if(actualstring.charAt(0) === searchchar){
//             return true;
//         }
//         return false;
// }
// console.log(charfirst("hello World",'e'));

// function searchword(actualstring,searchstring){
//     var spiltstring = actualstring.split(' ');
//     for(var i=0;i<spiltstring.length;i++){
//         if(spiltstring[i] === searchstring){
//             return true;
//         }
//         return false;
//     }
// }
// console.log(searchword("hello World hello evryone hello","guys"));

// function indexstring(actualstring,searchstring){
//     var spiltstring = actualstring.split(' ');
//     var count = 0;
//     for(var i=0;i<spiltstring.length;i++){
//         if(spiltstring[i] !== searchstring){
//             count += spiltstring[i].length;
//             count++;
//         }else{
//             return count;
//         }
//     }
//     return 'not found';

// }
// console.log(indexstring("hello World hello guys evryone hello","guysh"));

// function laststring(actualstring,searchstring){
//     var spiltstring = actualstring.split(' ');
//     var count = 0;
//     var found = false;
//     for(var i=spiltstring.length-1;i>=0;i--){
//         if(found){
//             count += spiltstring[i].length;
//             count++;
//         }
//         if(spiltstring[i] === searchstring){
//             found = true;
//         }
        
//     }
//     return count;
// }
// console.log(laststring("hello World hello guys evryone hello","guys"));

// function concatenateString(stringname){
//     return stringname.concat(stringname);
// }
// console.log(concatenateString("hello"));

// function concatechar(stringname,charname){
//     var temp ="";
//     for(var i=0;i<stringname.length;i++){
//         temp += stringname.charAt(i);
//         if(stringname.charAt(i) == charname){
//             temp=temp.concat(stringname);
//             console.log('-->',temp);
//         }
//     }
//     return temp;
// }
// console.log(concatechar("hello",'e'));

function replacestring(stringname,sourcestring,deststring){
    var spiltstring = stringname.split(" ");
    var temp ="";
    for(var i=0;i<spiltstring.length;i++){
        if(spiltstring[i] === sourcestring){
            spiltstring[i] = deststring;
        }
        temp += spiltstring[i];
        if(i !== spiltstring.length-1){
            temp += ' ';

        }
    }console.log('-->',temp.length)
    return temp;
}
console.log(replacestring("hello world","world","everyone"));


