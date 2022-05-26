<template>
	<div class="top">
		<div class="top_1">
			<span>{{title}}</span>
			<div class="top_2">
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<div class="xian"></div>
				<div class="yuan">
					<div class="xy"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:["title"],
		data(){
			return{
				value: '',
			}
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.top {
		background-color: #EEEEEE;
		width: 750px;
		position: fixed;
	}
	
	.top_1 {
		font-size: 34px;
		color: #333333;
		width: 710px;
		height: 70px;
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.top_2 {
		width: 160px;
		height: 58px;
		border-radius: 40px;
		border: 1px solid #333333;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}
	
	.top_2 ul {
		list-style: none;
		width: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	
	.top_2 li:first-child,
	.top_2 li:last-child {
		width: 7px;
		height: 7px;
		border-radius:50px;
		background-color: #333333;
	}
	
	.top_2 li:nth-child(2) {
		width: 12px;
		height: 12px;
		border-radius: 50px;
		background-color: #333333;
	}
	
	.xian {
		height: 40px;
		width: 2px;
		background-color: #d0d0d0;
	}
	
	.yuan {
		width: 24px;
		height: 24px;
		border-radius: 50px;
		border: 3px solid #333333;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.xy {
		width: 15px;
		height: 15px;
		border-radius: 50px;
		background-color: #333333;
	}
	.van-search {
		background-color: #EEEEEE;
		height: 120px;
	}
	
	.van-search .van-cell {
		height: 70px;
	}
	
	.van-field__left-icon .van-icon {
		font-size: 25px;
		line-height: 60px;
	}
	
	.van-field__control[type=search] {
		/* 属性选择器：只对包含有中括号里面的 */
		font-size: 26px;
		line-height: 60px;
	}
	
	.van-swipe {
		height: 300px;
	}
	
	.van-swipe-item img {
		height: 300px;
		width: 750px;
	}
	
	.van-swipe__indicator {
		width: 10px;
		height: 10px;
	}
</style>
