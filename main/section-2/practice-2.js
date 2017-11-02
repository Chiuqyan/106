'use strict';

module.exports = function countSameElements(collection) {
    var result = new Array();
    var num_of_letter;
    const letter=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
    var tag=false;
    for (var i in collection) {
        tag=false;
        for (var j in result) {

            if (result[j].key === collection[i][0]) {
                if(collection[i].length>1)
                {
                    for( var k in letter)
                   {
                       if(collection[i].indexOf(letter[k])!==-1)
                       num_of_letter=collection[i].indexOf(letter[k]);
                   }
                    
                    result[j].count+=parseInt(collection[i][num_of_letter], 10);
                   tag=true;
                    break;
                }
                result[j].count++;
                tag=true;
                break;
            }
        }
        if(!tag)
        {
            if(collection[i].length>1) {
                for( var l in letter)
                   {
                       if(collection[i].indexOf(letter[l])!==-1)
                       num_of_letter=collection[i].indexOf(letter[l]);
                   }
                var c = parseInt(collection[i][num_of_letter], 10);
                result.push({key:collection[i][0],count:c});
            }
            else
                result.push({key: collection[i],count:1});
        }

    }
    return result;
};

   