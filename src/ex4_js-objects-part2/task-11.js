function countSymbol(str) {
    var objSymbol = {};
    
    for (var i = 0; i < str.length; i++) {
        
        if (objSymbol[str[i]] == null) {
            objSymbol[str[i]] = {
                count: 0
            };
        }
        
        objSymbol[str[i]].count++;
                            
    }
    
    for (var key in objSymbol) {
        console.log(key + ' ' + objSymbol[key].count);
    }
}	

module.exports = countSymbol