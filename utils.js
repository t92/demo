
//检测对象类型
function objRawType (value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

//是否为对象
function isObject (obj) {
  return obj !== null && typeof obj === 'object';
}

//对象克隆
function deepclone(tag){
	
	if(!tag)return;
	var res;
	
	if(isObject(tag)){
		if(objRawType(tag) == 'object')res = {};
		if(objRawType(tag) == 'array')res = [];
		for(key in tag){
			
			if(objRawType(tag[key]) == 'object'|| objRawType(tag[key]) == 'array'){
				res[key] = deepclone(tag[key])
			}else{
				res[key] = tag[key]
			}
		}
	}else{
		return tag;
	}
	
	return res;
}


function bindData(data){
	
}


function tempalteRender(){
	
}

