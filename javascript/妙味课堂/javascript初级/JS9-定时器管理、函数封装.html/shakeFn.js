function shakeFn(){

}
function shake(obj,attr,dir,endFn){
		var pos=parseInt(getStyle(obj,attr));
		var arr=[];
	var  num=0;
	var     timer=null;
				for (var i = 0; i < dir; i-=2) {
					arr.push(i,-i);
				}
	arr.push(0);
	clearInterval(timer);
	timer=setInterval(function(){
		obj.style[attr]=pos+arr[num]+'px';
		num++;
		if(num==arr.length){
			clearInterval(timer);
		}
	},1000)
}
function getStyle(obj,attr){return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]}