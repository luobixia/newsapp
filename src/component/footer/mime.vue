	<template>
		<main class="mime">
			
			<div class="con">
				<div class="title-bg">
					<h1 class="title">会员中心</h1>
					<div class="my-pic">
						<img src="../../assets/29.png">
					</div>
				</div>
				<div class="myproduct">
					<ul>
						<li>
							<span class="choose "><i class="choose-star"></i>我的收藏</span>
						</li>
						<li>
							<span class="choose"><i class="choose-address"></i>邀请好友</span>
						</li>
					</ul>
				</div>
				<div class="myproduct">
					<ul>
						<li>
							<span class="choose "><i class="choose-idea"></i>意见反馈</span>
						</li>
						<li>
							<span class="choose"><i class="choose-privacy"></i>隐私策略</span>
						</li>
						<li>
							<span class="choose"><i class="choose-aboutus"></i>关于我们</span>
						</li>
					</ul>
				</div>
				<div class="myproduct">
					<ul>
						<li>
							<span class="choose"><i class="choose-cache"></i>清除缓存</span>
						</li>
						<li>
							<span class="choose"><i class="choose-reset"></i>重置应用</span>
						</li>
					</ul>
				</div>
				<div class="signOut">退出</div>
			</div>
		</main>
	</template>

	<script>

	</script>
	<style scoped>
		body{
			background:#eee;
		}
		.title{
			background: #42b2fc;
			width:100%;
			padding-top:15px;
			padding-bottom:15px;
			text-align:center;
			box-sizing:border-box;
			color:#fff;
			font-size:20px;
		    padding-top: 20px; 
		    padding-bottom: 20px; 
		}
		.con{
			margin-top:-10px;
		}
		.my-pic{
			width: 80px;
		    height: 80px;
		    position: absolute;
		    margin-left: -40px;
		    left: 50%;
		    margin-top:55px;
		    border: 5px solid rgba(255,255,255,0.3);
		    border-radius: 50%;
		}
		.title-bg{
			position: relative;
		    height: 189px;
		    width: 100%;
		    background: #42b2fc;
		}
		.my-pic>img{
			 border-radius: 50%;
			 width: 80px;
		    height: 80px;
		}
		.myproduct{
			box-sizing:border-box;
			width:100%;
			padding-left:10px;
			padding-right:10px;
			border-bottom:10px solid #eee;
		}
		.myproduct li{
			border-bottom:1px solid #eee;
			font-size:16px;

		}
		.choose{
			line-height:40px;
			padding-left:25px;
			display:inline-block;
			font-size:16px;
			position:relative;

		}
		.choose-star {
			height: 16px;
		    width: 16px;
		    position: absolute;
		    left: 0px;
		    top: 50%;
		    margin-top: -8px;
		    background: #eee url(../../assets/stars.png) no-repeat;

		}
		.choose-address {
			height: 16px;
		    width: 16px;
		    position: absolute;
		    left: 0px;
		    top: 50%;
		    margin-top: -8px;
		    background: #eee url(../../assets/friends.png) no-repeat;

		}
		.choose-idea {
			height: 16px;
		    width: 16px;
		    position: absolute;
		    left: 0px;
		    top: 50%;
		    margin-top: -8px;
		    background: #eee url(../../assets/bis.png) no-repeat;

		}
		.choose-privacy {
			height: 16px;
		    width: 16px;
		    position: absolute;
		    left: 0px;
		    top: 50%;
		    margin-top: -8px;
		    background: #eee url(../../assets/privacys.png) no-repeat;

		}
		.choose-aboutus {
			height: 16px;
		    width: 16px;
		    position: absolute;
		    left: 0px;
		    top: 50%;
		    margin-top: -8px;
		    background: #eee url(../../assets/uss.png) no-repeat;

		}
		.choose-cache {
			height: 16px;
		    width: 16px;
		    position: absolute;
		    left: 0px;
		    top: 50%;
		    margin-top: -8px;
		    background: #eee url(../../assets/cleans.png) no-repeat;

		}
		.choose-reset {
			height: 16px;
		    width: 16px;
		    position: absolute;
		    left: 0px;
		    top: 50%;
		    margin-top: -8px;
		    background: #eee url(../../assets/resets.png) no-repeat;

		}
		.signOut{
			width:100%;
			line-height:40px;
			text-align:center;
			border-bottom:5px solid #eee;
    		
		}
		.mime{
			margin-bottom: 50px;
		}
	</style>