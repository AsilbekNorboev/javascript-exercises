const reverseString = function(str) {
    res = ''
    for (i=str.length; i>=0; i--){
        res+=str.charAt(i)
    }
    return res

};

// Do not edit below this line
module.exports = reverseString;
