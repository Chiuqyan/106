'use strict';

module.exports = function countSameElements(collection) {
    var result = new Array();//Create an array for saving the requested result
    var num_of_letter;//for saving the numbers in the string of the given collection 
    var letter_count=['0','1','2','3','4','5','6','7','8','9','10'];// the number may be found in the string
    var tag=false;//to judge whether the element is in the result:if it is in the result,tag will be true.
    for (var i in collection) //go through all the elements in the given collection
        { 
            tag=false;//initialize the tag
        for (var j in result) //go through all the elements in the result
        {

            if (result[j].name === collection[i][0])//to judge whether the first letter in collection[i] is in the reasult
            {
                tag=true;//to show collection[i]'s first letter is in the reasult
                
                if(collection[i].length>1)
                {
                    for( var k in letter_count)//find the number in the string
                   {
                       if(collection[i].indexOf(letter_count[k])!==-1)
                       num_of_letter=letter_count[k];
                   }
                    
                    result[j].summary+=parseInt(num_of_letter, 10);//add
                    
                    break;//break the k-loop
                }
                result[j].summary++;//if the first letter in collection[i] is in the reasult and its length <= 1
                
                break;//break the j-loop
            }
        }
        if(!tag)//if the first letter in collection[i] is not in the reasult.name
        {
            if(collection[i].length>1) 
            {
                for( var l in letter_count)//find the number in collection[i]
                   {
                       if(collection[i].indexOf(letter_count[l])!==-1)
                       num_of_letter=letter_count[l];
                   }
                var num = parseInt(num_of_letter, 10);
                result.push({name:collection[i][0],summary:num});//add the elements in the requested format
            }
            else
                result.push({name:collection[i],summary:1});//add the elements in the requested format
        }

    }
    return result;
};
