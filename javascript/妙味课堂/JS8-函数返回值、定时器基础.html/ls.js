
// 模拟jQuery的$符号
function(v){
	if(typeof(v)==='function'){
		window.onload=v;
	}else if(typeof(v)==='string'){
		return document.getElementById(v);
	}else if(typeof(v)==='object'){
		return v
	}
};

// 获取元素样式
function getStyle(obj,attr){
	if(obj.currentStyle[attr]){//currentStyle.attr，.后面的不能改变，使用[attr]，attr可以改变
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(attr)[attr]
	}
}
