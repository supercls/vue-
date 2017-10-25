var vm=new Vue({
	el:"#app",
	data:{
		title:"首页",
		message:"返回",
		footerindex:0,  //active类名
		items:[
			
		]
	},
	components:{   //组件引入
		Compoentheader,
		Compoentcont,
		Componentfooter
	},
	methods:{
		showConsole:function(){
			console.log(vm.$data.title)
		},
		changeC:function(){
			console.log('监听到组件触发事件')
			console.log(vm.$data.title)
		},
		doTheThing:function(e){
			//监听组件的原生事件
		}
	},
	filters:{   //过滤器

	},
	mounted:function(){   //生命周期加载完成
		// vue写法  后面研究
			// this.$http.get('api/goods.json', []).then(function(response){    
		//     console.log(response.body)
		// }, function(response){    
		//     // 响应错误回调
		// });
		var that =this;
		// $.ajax({
		// 	url:'api/goods.json',
		// 	data:'',
		// 	dataType:'json',
		// 	success:function(data){
		// 		console.log(data.goods)
		// 		$.each(data.goods,function(index){
		// 			var obj={
		// 				src:this.img,
		// 				cons:this.price,
		// 				title:this.title+':->'
		// 			};
		// 			that.items.push(obj)
		// 		})
		// 	}
		// });
		axios.get('api/goods.json',{
				params:{
					id:'555'      //传递参数
				}
			})
			.then(function (response) {
				$.each(response.data.goods,function(index){
		 			var obj={
		 				src:this.img,
		 				cons:this.price,
		 				title:this.title+':->'
		 			};
		 			that.items.push(obj)
		 		})
		})
			.catch(function (error) {
			console.log(error);
		});
		$('footer').after('<div style="width:100%;height:50px"></div>')
	}
})