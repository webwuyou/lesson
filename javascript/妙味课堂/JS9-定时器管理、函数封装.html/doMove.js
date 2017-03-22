function doMove(oDiv,attr,dir,target,endFn){
			clearInterval(oDiv.timer);
			dir=parseInt(getStyle(oDiv,attr))<target?dir:-dir;
			oDiv.timer=setInterval(function(){
				var speed=parseInt(getStyle(oDiv,attr))+dir;
				if(speed>=target&&dir>0||speed<target&&dir<0){speed=target};
				oDiv.style[attr]=speed+'px';
				if(speed==target){
					clearInterval(oDiv.timer);
					/*
					if ( endFn ) {
						endFn();
					}
					*/
					endFn && endFn();
				}
			},30);
		}

		function getStyle(obj,attr){
			return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]
		}
		