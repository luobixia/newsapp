	<template>
		<main>
			<ul class="footer">
				<li>
					<router-link to="/news"></router-link>
				</li>
				<li>
					<router-link to="/hot"></router-link>
				</li>
				<li>
					<router-link to="/comment"></router-link>
				</li>
				<li>
					<router-link to="/mime"></router-link>
				</li>
			</ul>
		</main>
	</template>
	<style scoped>
	body{
		background:#eee;
	}
	.footer{
		border-top:1px solid #eee;
		width:100%;
		position: fixed;
		bottom:0;
		left:0;
		background: #fff;
		height:50px;
	}
	.footer>li{
		float:left;
		list-style: none;
		width:25%;
		height:49px;
		text-align: center;
		cursor: pointer;
		
	}
	.footer a{
		display:inline-block;
		width:100%;
		height:100%;
	}
	.footer>li:nth-of-type(1){
		background: url(../../assets/newsbgs.png) no-repeat;
		background-position: 50% -49px ;
	}
	.footer>li:nth-of-type(2){
		background: url(../../assets/remenbgs.png) no-repeat;
		background-position:  50% 0;
	}
	.footer>li:nth-of-type(3){
		background: url(../../assets/commentbgs.png) no-repeat;
		background-position:  50% 0;
	}
	.footer>li:nth-of-type(4){
		background: url(../../assets/wodebgs.png) no-repeat;
		background-position:  50% 0;
	}
	</style>