
import VueRouter from 'vue-router';
//所有的路由都放这个文件夹
//要配路由，保证下面new VueRouter不出错，导入这个
//导入模板
import headline from '../component/news/headline.vue';
import enterta from '../component/news/enterta.vue';
import fashion from '../component/news/fashion.vue';
import finance from '../component/news/finance.vue';
import health from '../component/news/health.vue';
import search from '../component/news/search.vue';
import sports from '../component/news/sports.vue';

import news from '../component/footer/news.vue';
import hot from '../component/footer/hot.vue'
import comment from '../component/footer/comment.vue'
import mime from '../component/footer/mime.vue'
//要配路由，要导出，打包一个实例化对象，所以不用大括号，因为没有模板，还要导入模板
export default new VueRouter({
	routes:[
		{
			path:'/news',
			component:news,
			redirect:'/headline',
			children:[
				{path:'/headline',component:headline},
				{path:'/finance',component:finance},
				{path:'/enterta',component:enterta},
				{path:'/fashion',component:fashion},
				{path:'/health',component:health},
				{path:'/sports',component:sports},
				{path:'/',redirect:'/headline'}

			]
			},
		{
			path:'/headline',
			component:headline
		},
		{	
			path:'/finance',
			component:finance
		},
		{	
			path:'/enterta',
			component:enterta
		},
		{	
			path:'/fashion',
			component:fashion
		},
		{	
			path:'/health',
			component:health
		},
		{
			path:'/sports',
			component:sports
		},
		{
			path:'/hot',
			component:hot
		},
		{
			path:'/comment',
			component:comment
		},
		{
			path:'/mime',
			component:mime
		},
		{
			path:'/',
			redirect:'/news'
		},
		{
			path:'*',
			redirect:'/news'
		}
	]
})