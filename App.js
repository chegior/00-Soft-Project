var newArr;
var filtered = [12, 5, 8, 130, 44];

// THIS SECTION IS THE CODE 

function checkId(value) {
    if ( value !== Boolean)
     return value;
}
function bouncer(arr) {
    arr = filtered.filter(checkId);
    return arr;
}

newArr = bouncer(filtered);

//THIS SECTION PRINT THE RESULTS

for (var i = 0; i < newArr.length; i++ )
console.log(newArr[i]);