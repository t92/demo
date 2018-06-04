function getType(obj){
    	
    	var types = {
    		'[object Object]' : 'object',
    		'[object String]' :	'string',
    		'[object Number]' : 'number',
    		'[object Boolean]': 'boolean',
    		'[object Function]':'function',
    		'[object Undefined]': 'undefined',
    		'[object Null]' : 'null',
    		'[object Array]' : 'array',
    		'[object Date]' : 'date',
    		'[object RegExp]' : 'regExp'
    	}
    	
    	return types[Object.prototype.toString.call(obj)]
    }
    
function deepclone(tag){
	
	if(!tag)return;
	var res;
	
	//复杂类型递归
	if(typeof tag == 'object'){
		if(getType(tag) == 'object')res = {};
		if(getType(tag) == 'array')res = [];
		for(key in tag){
			
			if(getType(tag[key]) == 'object'|| getType(tag[key]) == 'array'){
				res[key] = deepclone(tag[key])
			}else{
				res[key] = tag[key]
			}
		}
	}else{
		res = tag;
	}
	
	return res;
}