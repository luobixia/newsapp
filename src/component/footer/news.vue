	<template>
		<main>
			<div class="top-box">
				<div class="top">
					<router-link to="/search">
						<input class="search" type="text" placeholder="大家都在搜"/>
					</router-link>
				</div>
			</div>
			<nav class="clearfix">
				<ul class="clearfix nav-ul" >
					<li><router-link to='/headline'>头条</router-link></li>
					<li><router-link to='/finance'>财经</router-link></li>
					<li><router-link to='/enterta'>娱乐</router-link></li>
					<li><router-link to='/fashion'>时尚</router-link></li>
					<li><router-link to='/sports'>体育</router-link></li>
					<li><router-link to='/health'>健康</router-link></li>
				</ul>
			</nav>
			
			<router-view></router-view>
		</main>
	</template>


	<script>

		export default{
			data(){
				return{
				list:[],
				value:""
				}
			},
			mounted(){

			}
		}
		
	</script>


	<style scoped>

		main{
			width:100%;
			display:block;
			box-sizing:border-box;
		}
		.top-box{
			width:100%;
			background:#42b2fc;
		}
		.top{
			width:96%;
			padding-top:15px;
			background:#42b2fc;
			box-sizing:border-box;
			margin-left:auto;
			margin-right:auto;
			}

		.search{
		    border-radius: 25px;
		    border: none;
		    width: 100%;
		    box-sizing: border-box;
		    padding-left: 60px;
		    background:#fff url(../../assets/search.png) no-repeat 15px 11px;
		    background-size: 6%;
		    height: 40px;
		}
		nav{
			width:100%;
			background:#42b2fc;

		}
		.nav-ul{
			width:100%;
			background:#42b2fc;
			overflow:hidden;
		}
		.nav-ul>li{
			float:left;
			width:16.6%;
			text-align:center;
		}
		.nav-ul a{
			display: inline-block;
		    padding-top: 12px;
		    padding-bottom: 10px;
		    color:#fff;
		    text-decoration:none;
		    font-size:19px;
		}
		.router-link-active{
			color:#fff;
			border-bottom: 3px solid #fff;
			box-sizing: border-box;
		}
	</style>