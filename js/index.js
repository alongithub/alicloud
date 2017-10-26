/*---------------------------banner部分鼠标滑入下划线效果--------------------------------*/
	var nav = document.getElementById('nav');
	var nav_list = nav.getElementsByTagName('li');
	var bottomLine = nav.getElementsByTagName('span')[0];
	var lineInTimer = null;
	var lineOutTimer = null;
	for(var i= 0;i<nav_list.length;i++){
		nav_list[i].onmouseover=(function(index){
			return function(){
				clearInterval(lineInTimer);
				clearInterval(lineOutTimer);
				lineInTimer=setTimeout(function(){
					bottomLine.style.cssText="left:"+nav_list[index].offsetLeft+"px;width:"+nav_list[index].offsetWidth+"px";
				},200);
			}
		})(i);
	}
	nav.onmouseout=function(){
			lineOutTimer = setTimeout(function(){
				bottomLine.style.cssText+="width:0;";
			},200)
	}
	
	/*-------------------------banner图像3d鼠标滑动效果-----------------------------*/
	var banner_list = new Array;
	var catch_list = new Array;
	for(var i = 1;i<=5;i++)
	{
		banner_list[i] = document.getElementById('bannercontainer'+i);
		banner_list[i].index = i;
		catch_list[i] = document.getElementById("catch"+i);
		banner_list[i].onmousemove= movein;
	}
	function movein(e){
		 var e = e || window.event;
		 var op = this;
		 var left = e.offsetX ;
		 var top = e.offsetY ;
		 var width = op.clientWidth;
		 var height = op.clientHeight;
		 var roY = (width/2-left)/70; 
		 var roX = -(height/2-top)/40;
		 catch_list[op.index].style.cssText = " transform: rotateX("+roX+"deg) rotateY("+roY+"deg);"

	}
	/*-------------------banner轮播效果--------------------------*/
	/*var banenr_btns=document.getElementById("banenr_btns");
	var btn_list = banner_btns.getElementsByTagName('span');
	var banner=document.getElementById('banner');
	var bannerTimer = null;
	var bannerIndex = 1;
	bannerTimer = setInterval(function(){
		
		
		goBanner(bannerIndex%5+1);
		bannerIndex++;
	},5000);
	function goBanner(index){
		banner.className = "banner"+index+"end";
		for(var i=0;i<btn_list.length;i++){
			btn_list[i].className=" ";
		}
		btn_list[index-1].className="bannered";
	}
	for(var i=0;i<5;i++){
		btn_list[i].index=i+1;
		btn_list[i].onclick = function(){
			clearInterval(bannerTimer);
			goBanner(this.index);
		}
	}*/


	var banenr_btns=document.getElementById("banenr_btns");
	var banner=document.getElementById('banner');
	var bannerTimer = null;
	var bannerIndex = 1;
	var svg = 0;//svg
	var svgTimer = null;//svg
	svgCircle(svg);//svg
	bannerTimer = setInterval(function(){
		console.log("banner计时器");
		paths[svg].style.cssText = 'stroke-dasharray: 282.783, 282.783;stroke-dashoffset:' +282;//svg
		svg++;//svg
		if (svg==5) {//svg
			svg = 0;//svg
		}//svg
		console.log(svg);//svg
		
		svgCircle(svg);//svg
		goBanner(bannerIndex%5+1);
		bannerIndex++;
	},5000);
	function goBanner(index){
		banner.className = "banner"+index+"end";
		//span
	}
	for(var i=0;i<5;i++){
		//span
	}
	
				/*---------------------*/
	var svgs = document.getElementsByTagName('svg');
	var paths = new Array ;
	for(var i = 0;i<svgs.length ;i++)
	{	
		svgs[i].index = i;
		paths[i] = svgs[i].getElementsByTagName('path')[1];
	}
	var svgIndex = 282;
	var currsvg = 0;
	var svgSpeed = svgIndex/50;
	
		

	function svgCircle(svgCurr){
		clearInterval(svgTimer);
		svgIndex = 282;
			console.log('svg计时器');
		svgTimer = setInterval(function(){
			svgIndex -= svgSpeed ;
			paths[svgCurr].style.cssText = 'stroke-dasharray: 282.783, 282.783;stroke-dashoffset:' +svgIndex;
			if (Math.abs(svgIndex)< svgSpeed) {
				paths[svgCurr].style.cssText = 'stroke-dasharray: 282.783, 282.783;stroke-dashoffset:' +282;
				clearInterval(svgTimer);
				svgIndex = 282
				console.log("清楚");
			}
		},100)
	}
	

	for(var i= 0;i<paths.length;i++){
		svgs[i].onclick = function(){
			clearInterval(svgTimer);
			clearInterval(bannerTimer);
			goBanner(this.index+1)
			for(var j = 0;j<paths.length;j++)
			{
				paths[j].style.cssText = 'stroke-dasharray: 282.783, 282.783;stroke-dashoffset:' +282;
			}
			paths[this.index].style.cssText =  'stroke-dasharray: 282.783, 282.783;stroke-dashoffset:' +0;
			svgIndex = 282;
		}
		
	}

	/*--------------------software鼠标移入帧动画-----------------------*/
	var position = new Array;
	var cartoonTimer = null;
	function cartoon(o,bol){
		o.cartoonTimer = o.cartoonTimer? o.cartoonTimer:null;
			clearInterval(o.cartoonTimer);
		o.position = o.position? o.position:0;
		var oA = o.parentNode;
		var oImg = oA.getElementsByTagName('div')[0];
		o.cartoonTimer = setInterval(function(){
			o.position = bol? o.position+1:o.position-1;
			if(o.position <0)
				o.position = 0;

			/*console.log(o.position);*/
			oImg.style.cssText = "background-position:0 -"+o.position*75+"px;";
			if(o.position==59||o.position==0)
			{
				clearInterval(o.cartoonTimer);
			}
		},15);
		
	}
/*--------------------------地图坐标信号波动-------------------------------*/
	var oLocation = document.getElementById('location');
	locationIndex = 0;
	function addLocation(name,size,time,delay,num,left,top){
		locationIndex++;
		var location_html = '<section class="location'
							+locationIndex
							+' location" style="top: '
							+top
							+'px;left: '
							+left
							+'px;"><div><b>'
							+name
							+'</b>'
							+'<a href="javascript:;"></a>';
		var location_style = '@keyframes wave'
							+locationIndex
							+'{0%{opacity: 1;width: 12px;height: 12px; }90%{opacity: 0;width: '
							+size
							+'px;height: '
							+size
							+'px;}100%{opacity: 0;}}';
		document.styleSheets[0].insertRule(location_style,0);
		for(var i = 0;i<num;i++){
			location_html += '<span style="width:'
							+size
							+'px;height: '
							+size
							+'px;left: -'
							+size/2
							+'px;top: -'
							+size/2
							+'px;"></span>';
			location_style ='#distribute .location'
							+locationIndex
							+' span:nth-last-child('
							+(i+1)
							+'):after{animation: wave'
							+locationIndex
							+' '
							+time
							+'s '
							+i*delay
							+'s infinite;}'
			document.styleSheets[0].insertRule(location_style,0);
		}
		location_html += '</div></section>';
		oLocation.innerHTML += location_html;
		console.log(location_html);
		console.log(location_style);
	}
	addLocation('美东',100,4.5,1,2,180,170);
	addLocation('美西',120,3,0.5,3,290,190);
	addLocation('欧洲',100,4,1,3,562,120);
	addLocation('中东',130,5,1.1,3,694,218);
	addLocation('华北',90,4,1,3,889,192);
	addLocation('华南',200,4,0.5,3,894,223);
	addLocation('华东',80,4,1,3,918,209);
	addLocation('香港',70,3,1,2,928,241);
	addLocation('日本',30,3.5,1,2,989,182);
	addLocation('新加坡',110,4,1,3,885,317);
	addLocation('澳大利亚',150,4.8,1,3,1012,431);
/*------------------------------------------------------------------------------*/
var content = document.getElementsByTagName('hhh');/*获取所有的div对象*/
	var height = new Array;/*声明一个数组，方法二用到*/
	var currIndex = 0;/*即将浮现的块的下标 方法三用到*/
	var lastIndex = -1;/*上一个浮现的块的下标 方法三用到*/
	window.onscroll = function(){

	if(currIndex<content.length)
		{
			var currheight = content[currIndex].getBoundingClientRect().top;
		}
		if(lastIndex>-1)
		{
			var lastheight = content[lastIndex].getBoundingClientRect().top;
		}
		if(currheight <500)//下一个即将出现的块距离可视窗口小于三百的时候
		{
			content[currIndex].className = "content contentIn";
			currIndex++;
			lastIndex++;
			console.log("下拉浮现---"+"currIndex:"+currIndex+"---lastIndex:"+lastIndex)
		}
		if (lastheight >500) {//上一个已经出现的块距离可视窗口大于300的时候
			content[lastIndex].className = "content contentOut";
			currIndex--;
			lastIndex--;
			console.log("上拉隐藏---"+"currIndex:"+currIndex+"---lastIndex:"+lastIndex)

		}
	}

