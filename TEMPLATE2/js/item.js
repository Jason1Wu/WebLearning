function moveBanner(list,picWidth,offset,tagindex){
	var count = 0;
	if(tagindex != undefined){
		list.style.left = 0;
		offset = tagindex*picWidth;
	}
	var time = 300;     //位移总时间
    var interval = 30;    //位移间隔时间
    var speed = offset / (time / interval);    //每次移动距离
    speed = speed > 0? Math.ceil(speed):Math.floor(speed);    //可能存在小数，取整
    function animate(){ 
        list.style.left = parseInt(list.style.left) - speed + 'px';
        if(count != (time / interval) - 1)
        	setTimeout(animate,interval);
		count++;
    }
    animate();
    if(parseInt(list.style.left) < -picWidth*2){
		list.style.left = 0;
		speed = 0;
    }
	if(parseInt(list.style.left) > 0)
		list.style.left = -picWidth*2 + 'px';
}

function left_right(aList){
		var next = document.getElementById('right'),
		 prev = document.getElementById('left'); 
		 next.onclick = function(){
			moveBanner(list_banner,1919,1919);
		 	dotmoveBanner(aList,1);
		 }
		 prev.onclick = function(){
			 moveBanner(list_banner,1919,-1919);
			 dotmoveBanner(aList,-1);
		 }
}

function marginctrl(aList){
	var active,now;
	for(var i = 0;i < aList.length;i++){
	  	if (aList[i].className=='hover1')
	  		active = i;
	    aList[i].className="";
   }
   now = active + 1;
  if (now == aList.length){
  	aList[3].className='hover1';
  	now = 0;
  }
}

function dotmoveBanner(aList,direction){
	var active,now;
  for(var i = 0;i < aList.length;i++){
  	if (aList[i].className=='hover')
  		active = i;
    aList[i].className="";
   }
  now = active + direction;
  if(now < 0)
  	now = aList.length - 1;
  if (now == aList.length) 
  	now = 0;
  aList[now].className='hover';
}

function showDot(aList){	
	for(var i = 0;i < aList.length;i++){
		aList[i].index = i;
		aList[i].onclick = function(){
			for(var j = 0;j < aList.length;j++){
				if (aList[j].className=='hover')
					aList[j].className='';
			}
			console.log(this.index);
			this.className = 'hover'; 
			moveBanner(list_banner,1919,1919,this.index);
		}
	}
}

function autoplay(aList){
    setInterval(function(){
      moveBanner(list_banner,1919,1919);
      dotmoveBanner(aList,1);
    },3000);

    timer = setInterval(function(){
    	moveBanner(item_List,item_a[0].offsetWidth,16+item_a[0].offsetWidth);
    	marginctrl(item_a);
    },3000);

}

window.onload = function(){
	list_banner = document.getElementById('list-banner');
	item_List = document.getElementById('item-list');
	banner_aList = document.getElementById('list-num').getElementsByTagName('a');
	item_a = item_List.getElementsByTagName('a');
	item_List.style.width = item_a[0].offsetWidth*(item_a.length+1) + 20*item_a.length + 'px';
	left_right(banner_aList);
    showDot(banner_aList);
    autoplay(banner_aList);

    item_List.addEventListener("mouseover",function(){
        clearInterval(timer);
    },false);
    item_List.removeEventListener("mouseover", clearInterval);
    item_List.addEventListener("mouseout",function(){autoplay(banner_aList);},false);
}