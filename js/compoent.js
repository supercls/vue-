//header component
const Compoentheader={
	template:`
		<div>
			<header>
				<p class="l" >-{{title}}-</p>
				<span class="r" v-on:click="changeCont">点我{{message}}{{ros}}</span>
			</header>
			<slot name="cont">
				
			</slot>
		</div>`,
	props:['title','message'],
	data:function(){
		return {
			ros:''
		}
	},
	methods:{
		changeCont:function(){
			this.ros=".."
			this.$emit('change-cont')   //触发事件，让外部可以用v-on监听该事件
			console.log(this.title+'/'+this.ros)
			window.location="/1.html" 
		}
	}

}
//shop component
const Compoentcont={
	template:`
		<div class="index-list">
			<ul class="clearfix">
				<li v-for="item in items">
					<a :href="href+'?id='+item.cons+'&imgsrc='+item.src+'&price='+encodeURI(encodeURI(item.title))"><img :src="item.src" alt="" class="img-responsive"/></a>
					<p>{{item.title}}{{item.cons | filterA}}</p>
				</li>
			</ul>
		</div>
	`,
	props:['items'],
	data:function(){
		return {
			href:'/2.html'
		}
	}

}
//footer component
const Componentfooter={
	template:`
		<footer>
			<ul class="clearfix">
				<li v-for="(foitem,index) in foitems" :class="{active:index==footerindex}">
					{{foitem.val}}
				</li>
			</ul>
		</footer>
	`,
	props:['footerindex'],
	data:function(){
		return {
			foitems:[
				{val:'1',active:false},{val:'2',active:false},{val:'3',active:false},{val:'4',active:false}
			]
		}
	},
	methods:{
	}

}
//detail component
const Componentdetail={
	template:`
		<div class="clearfix detailcont">
			<img :src="detailsrc" alt="" />
			<p>商品：{{detailshop}}</p>
			<h5>价格：{{detailmoneny}}</h5>
		</div>
	`,
	props:['detailsrc','detailshop','detailmoneny'],
	data:function(){
		return{

		}
	}
}

//定义全局过滤器
Vue.filter('filterA',function(num){  //保留小数点后两位
	var f_x = parseFloat(num);    
　　if (isNaN(f_x))    
　　{    
	return 0;    
　　}    
　　var f_x = Math.round(num*100)/100;    
　　var s_x = f_x.toString();    
　　var pos_decimal = s_x.indexOf('.');    
　　if (pos_decimal < 0)    
	　　{    
		pos_decimal = s_x.length;    
		s_x += '.';    
	　　}    
　　while (s_x.length <= pos_decimal + 2)    
	　　{    
		s_x += '0';    
	　　}    
　　return '￥'+s_x;    
	
})