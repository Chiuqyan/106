'use strict';

module.exports = function countSameElements(collection) {
    var result = new Array();
    var num_of_letter;
    var letter_count=['0','1','2','3','4','5','6','7','8','9'];
    var tag=false;
    for (var i in collection) {
        tag=false;
        for (var j in result) {

            if (result[j].name === collection[i][0]) {
                if(collection[i].length>1)
                {
                    for( var k in letter_count)
                   {
                       if(collection[i].indexOf(letter_count[k])!==-1)
                       num_of_letter=letter_count[k];
                   }
                    
                    result[j].summary+=parseInt(num_of_letter, 10);
                    tag=true;
                    break;
                }
                result[j].summary++;
                tag=true;
                break;
            }
        }
        if(!tag)
        {
            if(collection[i].length>1) {
                for( var l in letter_count)
                   {
                       if(collection[i].indexOf(letter_count[l])!==-1)
                       num_of_letter=letter_count[l];
                   }
                var num = parseInt(num_of_letter, 10);
                result.push({name:collection[i][0],summary:num});
            }
            else
                result.push({name:collection[i],summary:1});
        }

    }
    return result;
};
