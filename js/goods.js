$(function(){
	//获取商品列表数据
	$.ajax({
		url:'../goods.json',
		type:'get',
		dataType:'json',
		success:function(json){
			var goodsStr = ''
			$.each(json,function(index,item){
				goodsStr += `<div class="close0">
					<div class="top1">
						<img src="${item.imgurl}" >
					</div>
					<div class="main1">
						<p>${item.title1}</p>
						<p>${item.title2}</p>
					</div>
					<div class="button1">
						<p>${item.price1}</p><s>${item.price2}</s><span code="${item.code}">加入购物车</span>
					</div>
					<div class="cover">
						<img src="../img/ma.png" >
						<p>微信扫我购买</p>
					</div>
				</div>`
				
			})
			$('.mainclose').html(goodsStr)
		}	
	})
	
	//点击加入购物车
	$('.mainclose').on('click','.close0 .button1 span',function(){
		//获取当前点击商品的编号
		var code = $(this).attr('code')
		
		//判断本地存储是否存有数据
		if(localStorage.getItem('goods')){
			var goodsArr = JSON.parse(localStorage.getItem('goods'))//把字符串放进来解析来得到对象
		}else{
			var goodsArr = []
		}
		
		var hasGoods = false;
		
		if(goodsArr.length > 0){
			
			//判断当前选中商品是否在购物车中
			$.each(goodsArr,function(index,item){
				if(item.code === code){//商品如果在购物车中，数量加一
					item.num++
					hasGoods = true
					return false
				}
			})
		}
		

		//如果购物车没有当先点击的商品，就添加一条数据
		if(!hasGoods){
			// var objStr = JSON.stringify({"code":code,"num":1})
			goodsArr.push({"code":code,"num":1})
		}
		
		//更新本地存储的数据
		localStorage.setItem('goods',JSON.stringify(goodsArr))
		
		alert('添加购物车成功')
		
	})
	
})