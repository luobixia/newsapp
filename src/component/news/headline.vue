	<template>
		<main class="banner">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../../assets/1.jpg"></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/2.jpg"></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/3.jpg"></mt-swipe-item>
			</mt-swipe>
			<div >
				<ul>
					<li v-for="v in msg" class="l-box">
						<div class="health-detail">
							<div class="health-detail-left">
								<span class="title clearfix">{{v.title}}</span>
								<div class="health-detail-left-con">
									<span class="source">{{v.source}}</span>
									<span class="mtime">{{v.ptime}}</span>
								</div>
							</div>
							<img :src="v.picInfo[0].url" class="fashion-img">
						</div>
					</li>

				</ul>
			</div>
		</main>
	</template>
	<script>
		import jsonp  from 'jsonp'

		export default{
			data(){
				return{
					msg:[]
				}
			},
			mounted(){
				var _this=this;
				jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-20.html', null, (err, data)=>{
		        if (err) {
		       	 console.log(err.message);
		        } else {
		        	this.msg=data.news;
		        }
		        });
			}
		}

	</script>

	<style>
		.banner mt-swipe-item{
			width:100%;
			height:0px;
			padding-bottom:80%;
			position:relative;
			overflow:hidden;
		}
		img{
			width:100%;
		}

		.mint-swipe-items-wrap {
		    position: relative;
		    overflow: hidden;
		    height: 0;
		    width: 100%;
		    padding-bottom: 55%;
		}
		.l-box{
			width: 100%;
		    padding-left: 10px;
		    padding-right: 10px;
		    box-sizing: border-box;
		}
	.banner mt-swipe-item{
			width:100%;
			height:0px;
			padding-bottom:80%;
			position:relative;
			overflow:hidden;
		}
		.fashion-img{
			width:38%;
		}
		.mint-swipe-items-wrap {
		    position: relative;
		    overflow: hidden;
		    height: 0;
		    width: 100%;
		    padding-bottom: 55%;
		}
		.l-box{
			width: 100%;
		    padding-left: 10px;
		    padding-right: 10px;
		    box-sizing: border-box;
		}
		.health-detail img{
			float:right;
		}
		.health-detail{
			overflow:hidden;
			padding-top:30px;
			padding-bottom:40px;
			position:relative;
			border-bottom:1px solid #999;
		}
		.health-detail-left{
			width:61%;
			float:left;
			background:#fff;
		}
		.title{
			float:left;
			font-size:16px;

		}
		.source{
			position:absolute;
			bottom:11px;
			left:0px;
			font-size:12px;
			display:block;
			color:#999;
		
		}
		.mtime{
			position:absolute;
			bottom:11px;
			right:0px;
			display:block;
			font-size:12px;
			color:#999;
			
		}
		.health-detail-left-con{
			clear:left;
			overflow:hidden;
			margin-top:10px;


		}
		.clearfix:after {
		   content:""; 
		   display: block; 
		   clear:both; 
		}
	</style>
	