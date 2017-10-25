var vm=new Vue({
	el:"#app",
	data:{
		title:"详情",
		message:"返回",
		footerindex:0,  //active类名
		detailsrc:'',
		detailshop:'',
		detailmoneny:''
	},
	components:{   //组件引入
		Compoentheader,
		Componentdetail,
		Componentfooter
	},
	methods:{
		
	},
	mounted:function(){   //生命周期加载完成
		var that =this;
		//解析URL。生成一个对象
		var url = location.search; //获取url中"?"符后的字串     
        var theRequest = new Object();  
        if(url.indexOf("?") != -1) {  
            var str = url.substr(1);  
            strs = str.split("&");  
            for(var i = 0; i < strs.length; i++) {  
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);  
            }  
        }  
  		console.log(theRequest)
		that.detailsrc=theRequest.imgsrc;
		that.detailmoneny="￥"+theRequest.id;
		that.detailshop=decodeURI(theRequest.price).replace(':->',''); //decodeURI  进行中文乱码解码
		$('footer').after('<div style="width:100%;height:50px"></div>')
	}
})