'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var result= new Array();
    for (var i=0;i < collectionA.length;i++)//for(var i 1n collectionA)
        {
            for(var j=0 ;j < collectionB.length;j++)//if(collectionB.inexOf(i)!==-1)
            {
            if(collectionA[i] == collectionB[j])
            {
                result.push(collectionA[i]);
            }
        }
    }
    return result;
}
