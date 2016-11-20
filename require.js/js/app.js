require(['app/b',function(b){
	console.log(b.add(1,1));
}]);
require(['app/a'],function(a){
	console.log(a);
})