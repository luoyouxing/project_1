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
	export default {
		props: ["title"],
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.top {
		background-color: #EEEEEE;
		width: 7.5rem;
		/* position: fixed; */
	}

	.top_1 {
		font-size: 0.34rem;
		color: #333333;
		width: 7.1rem;
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.top_2 {
		width: 1.6rem;
		height: 0.58rem;
		border-radius: 0.4rem;
		border: 0.01rem solid #333333;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}

	.top_2 ul {
		list-style: none;
		width: 0.4rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.top_2 li:first-child,
	.top_2 li:last-child {
		width: 0.07rem;
		height: 0.07rem;
		border-radius: 0.5rem;
		background-color: #333333;
	}

	.top_2 li:nth-child(2) {
		width: 0.12rem;
		height: 0.12rem;
		border-radius: 0.5rem;
		background-color: #333333;
	}

	.xian {
		height: 0.4rem;
		width: 0.02rem;
		background-color: #d0d0d0;
	}

	.yuan {
		width: 0.24rem;
		height: 0.24rem;
		border-radius: 0.5rem;
		border: 0.03rem solid #333333;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.xy {
		width: 0.15rem;
		height: 0.15rem;
		border-radius: 0.5rem;
		background-color: #333333;
	}
</style>
