$(function(){
	
//判断本地存储是否有购物车数据	
	if(localStorage.getItem('goods')){
		//获取本地存储中购物车的数据
		var goodsArr = JSON.parse(localStorage.getItem('goods'))
		//获取数据
		$.ajax({
			url:'../goods.json',
			type:'get',
			dataType:'json',
			success:function(json){
				var domStr = ''
				$.each(goodsArr,function(index,item){
					$.each(json,function(ind,obj){
						if(item.code === obj.code){
							domStr += 
							`<li>
								<img src="${obj.imgurl}" >
								<h3>${obj.title1}</h3>
								<p>${obj.price1}</p>
								<span>${item.num}</span>
								<em code="${obj.code}">删除</em>
							</li>`
						}
					})
				})
				$('.lis').html(domStr)
			}
		})
		
		
		//商品移出购物车
		$('.lis').on('click','li em',function(){
			//删除该商品对应的li
			$(this).parent().remove()
			//更新本地存储中的数据
			var code = $(this).attr('code')//要删除数据的编号
			//删除数组中的元素：pop() 删除最后一个 ，unshift() 删除第一个 ,splice(起始下标索引,从索引开始的第几个) 删除中间		})
			$.each(goodsArr,function(index,item){
				if(item.code === code){
					goodsArr.splice(index,1)
					return false
				}
			})
			//判断购物车是否还有数据
			if(goodsArr.length > 0){
				localStorage.setItem('goods',JSON.stringify(goodsArr))
			}else{
				//清除本地数据
				localStorage.removeItem('goods')
				var  nodata = '<li style="line-height:70px;text-align:center;">购物车暂无数据!</li>'
				$('.lis').html(nodata)
			}
			alert('商品成功移出购物车')
			
		})
	}else{
		
		var  nodata = '<li style="line-height:70px;text-align:center;">购物车暂无数据!</li>'
		$('.lis').html(nodata)
	}
	

})