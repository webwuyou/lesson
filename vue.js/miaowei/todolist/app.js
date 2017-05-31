let vm=new Vue({
	el:".main",
	data:{
		task:{
			taskId:1,
			taskName:'',
			isFinished:false,//是否完成
			isDelete:false//是否删除
		},
		tasks:[]
	},
	methods:{
		// 添加任务
		addTask(){
			this.task.taskId=this.tasks.length+1;
			this.tasks.push(this.task);
			// 存入数组后，清空输入框里面的内容
			this.task={
				taskId:1,
				taskName:'',
				isFinished:false,
				isDelete:false
			}
		},
		// 删除任务，这里的item只是形参，可以任意命名
		deleteTask(item){
			this.tasks.splice(item,1)
		}
	}
})