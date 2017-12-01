window.onload=function(){
    //封装document.getElementById()方法
   function byId(id){
        return typeof(id)==="string"?document.getElementById(id):id;
    }
    var banner=byId("banner"),
        pics=banner.getElementsByTagName("div"),
        timer=null,
        picsLen=pics.length,
        index= 0,
        nav=byId("nav"),
        dots=nav.getElementsByTagName("div");

    function slideImg(){
        var main=byId("main");
        //鼠标滑过时，清除定时器
        main.onmouseover=function(){
            if(timer){ clearInterval(timer);}
        }
        //鼠标离开时，启动定时器
        main.onmouseout=function(){
            //timer是设置间歇调用返回的ID，用于清除定时器时调用
            timer=setInterval(function(){
                index++;
                if(index>=picsLen){
                    index=0;
                }
              changeImg();
            },1000);
        }
        main.onmouseout();

        //点击导航条切换图片
        for(var j=0;j<dots.length;j++){
            dots[j].id=j;
            dots[j].onclick=function(){
                index=this.id;
                changeImg();
            }
        }
    }

    //切换图片的函数封装
    function changeImg(){
        for(var i=0;i<picsLen;i++){
            pics[i].style.display="none";
            dots[i].className="navDots";
        }
        pics[index].style.display="block";
        dots[index].className="navDots dotActive"
    }
    slideImg();
}