<template>
	<div>
		<zxc :text="$route.params.text"></zxc>
		<div class="sh">
			<ul>
				<li v-for="v,i in arr" :key="i">
					<van-checkbox v-model="checked"></van-checkbox>
					<van-card :price="(v.pirce.match(/\d/ig).join('')/100).toFixed(2)" :desc="v.num" :title="v.text"
						:thumb="v.pic" />
					<van-stepper v-model="value" />
				</li>
			</ul>

		</div>
	</div>
</template>

<script>
	import asd from '../components/header.vue'
	import Vue from 'vue';
	import {
		Card,
		Stepper,
		Checkbox,
		CheckboxGroup
	} from 'vant';

	Vue.use(Card);
	Vue.use(Stepper);
	Vue.use(Checkbox);
	Vue.use(CheckboxGroup);
	export default {
		data() {
			return {
				arr: [],
				value: "1",
				checked: true,
			}
		},
		methods: {

		},
		created() {
			this.arr = JSON.parse(localStorage.getItem("shop"))
			console.log(this.arr)
			console.log((this.arr[0].pirce.match(/\d/ig).join("") / 100).toFixed(2))
		},
		components: {
			zxc: asd
		}
	}
</script>

<style>
	.sh {
		position: fixed;
		top: 0.7rem;
		bottom: 1rem;
		width: 7.5rem;
		background-color: #eeeeee;
	}

	.sh li {
		margin-top: 0.2rem;
		position: relative;
	}

	.van-card {
		width: 7.1rem;
		margin: auto;
		height: 2rem;
		border-top-left-radius: 0.2rem;
		border-bottom-right-radius: 0.2rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.van-card__header {
		height: 1.6rem;
	}

	.van-card__content {
		width: 4.4rem;
		display: flex;
		justify-content: space-around;
	}

	.van-card__thumb {
		width: 1.7rem;
		height: 1.6rem;
	}

	.van-card__title {
		font-size: 0.24rem;
		line-height: normal;
	}

	.van-card__price {
		font-size: 0.32rem;
	}

	.van-card__price-integer {
		font-size: 0.32rem;
	}

	.van-checkbox {
		position: absolute;
		left: 0.25rem;
		top: 0.8rem;
		z-index: 9999;
	}

	.van-stepper {
		position: absolute;
		bottom: 0.2rem;
		right: 0.3rem;
		border: 0.02rem solid #f0f0f0;
	}

	.van-stepper__minus van-stepper__minus--disabled,
	.van-stepper__input,
	.van-stepper__plus {
		background-color: #fff;
	}
</style>
