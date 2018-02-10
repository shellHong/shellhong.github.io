"use strict";var _autoCarouselHandle=null,_doAutoCarousel=function(){g_isAutoCarousel&&g_liChildrenLen>1&&null==_autoCarouselHandle&&(_autoCarouselHandle=setInterval(function(){_doEndAnimate(g_ul,0,"left")},g_opt.autoCarouselTime||5e3))},_unAutoCarousel=function(){null!=_autoCarouselHandle&&(clearInterval(_autoCarouselHandle),_autoCarouselHandle=null)},_getDataType=function(e){return Object.prototype.toString.call(e)},_dealTEndListener=function(e,i,t){var n=[e];"[object array]"==Object.prototype.toString.call(e).toLowerCase()&&(n=e),n.forEach(function(e){t&&t(e,i)})},_addTEndListener=function(e,i){_dealTEndListener(e,i,function(e,i){e.addEventListener("webkitTransitionEnd",i),e.addEventListener("transitionend",i),e["data-fns"]||(e["data-fns"]=[]),e["data-fns"].push(i)})},_removeTEndListener=function(e){_dealTEndListener(e,null,function(e,i){e["data-fns"]&&e["data-fns"].forEach(function(i){e.removeEventListener("webkitTransitionEnd",i),e.removeEventListener("transitionend",i)})})},_getMoveDistance=function(){return g_isParallelType?g_liWidth:g_containerW},_initUlPosition=function(){var e=Math.floor((g_liChildrenLen-1)/2),i=e*_getMoveDistance();g_liCur=e,_setTranslate3d(g_ul,-i),g_ul["data-translate"]=-i},_getData=function e(i){return i.length>1&&i.length<5?e(i.concat(i)):i},_initContainer=function(){g_container.style.position="relative"},_fillHtml=function(e){if(e=_getData(e)){var i="";e.forEach(function(e){i+=LI_TEMPLATE.replace("{{url}}",e)}),i=UL_TEMPLATE.replace("{{lis}}",i),g_container.innerHTML=i}},_initLiScale=function(){if(g_isScaleType){var e=_getLiChildrenIndex();g_liChildren.forEach(function(i,t){t!=e&&_setScale(g_liChildren[t],g_opt.rate)})}},_initLiRange=function(){g_liMax=g_liChildrenLen-1},_setTransform=function(e,i,t){i.test(e.style.transform)?e.style.transform=e.style.transform.replace(i,t):e.style.transform+=t},_setWebkitTransform=function(e,i,t){i.test(e.style.transform)?e.style.webkitTransform=e.style.webkitTransform.replace(i,t):e.style.webkitTransform+=t},_setTranslate3d=function(e,i){_setTransform(e,/translate3d\([^)]+\)/," translate3d("+i+"px, 0, 0) "),_setWebkitTransform(e,/-webkit-translate3d\([^)]+\)/," -webkit-translate3d("+i+"px, 0, 0) ")},_setScale=function(e,i){_setTransform(e,/scaleY\([^)]+\)/," scaleY("+i+") "),_setWebkitTransform(e,/-webkit-scaleY\([^)]+\)/," -webkit-scaleY("+i+") ")},_setCurLiScale=function(e){if(g_isScaleType){e=Math.abs(e);var i=1-(1-g_opt.rate)*e/g_liWidth;i<g_opt.rate&&(i=g_opt.rate),_setScale(g_liChildren[_getLiChildrenIndex()],i)}},_seNextLiScale=function(e){if(g_isScaleType){var i=Math.abs(e),t=g_opt.rate+(1-g_opt.rate)*i/g_liWidth;t>1&&(t=1),e>0?_setScale(g_liChildren[_getPreLiChildrenIndex()],t):_setScale(g_liChildren[_getNextLiChildrenIndex()],t)}},_setUlX=function(e,i){var t=e["data-translate"];_setTranslate3d(e,i+t),e["data-translate"]=i+t},_initLiWH=function(){g_liChildren.forEach(function(e){e.style.width=g_isParallelType?g_liWidth-g_opt.marginR+"px":g_liWidth+"px",e.style.height=g_liHeight+"px"})},_initScaleLiHeight=function(){g_liChildren.forEach(function(e){e.style.width=g_liWidth+"px",e.style.height=g_liHeight+"px"})},_getDiff=function(){return g_isScaleType?g_opt.gap*g_liChildrenLen:0},_getLiChildrenIndex=function(){var e=g_liCur%g_liChildrenLen;return e<0?e+g_liChildrenLen:e},_getPreLiChildrenIndex=function(){var e=(g_liCur-1)%g_liChildrenLen;return e<0?e+g_liChildrenLen:e},_getNextLiChildrenIndex=function(){var e=(g_liCur+1)%g_liChildrenLen;return e<0?e+g_liChildrenLen:e},_initLiPosition=function(){var e=_getDiff();g_liChildren.forEach(function(i,t){_setTranslate3d(i,g_liWidth*t+e)})},_initLiChildren=function(){g_liChildren=Array.prototype.slice.call(g_container.querySelectorAll("li")),g_liChildrenWithPos=g_liChildren.slice(0),g_liChildrenLen=g_liChildren.length},_getLiWidth=function(){return g_containerW=g_container.offsetWidth,g_isScaleType?("[object string]"==_getDataType(g_opt.gap).toLowerCase()&&-1!=g_opt.gap.indexOf("%")&&(g_opt.gap=g_containerW*parseFloat(g_opt.gap.replace("%",""))/100),g_containerW-2*g_opt.gap):g_isParallelType?("[object string]"==_getDataType(g_opt.width).toLowerCase()&&-1!=g_opt.width.indexOf("%")&&(g_opt.width=g_containerW*parseFloat(g_opt.width.replace("%",""))/100),"[object string]"==_getDataType(g_opt.marginR).toLowerCase()&&-1!=g_opt.marginR.indexOf("%")&&(g_opt.marginR=g_containerW*parseFloat(g_opt.marginR.replace("%",""))/100),g_opt.width+g_opt.marginR):g_containerW},_addEndAnimation=function(e,i,t){e.style.transition="transform "+(g_opt.animateTime||END_TIME)+"s ease-out",e.style.webkitTransition="-webkit-transform "+(g_opt.animateTime||END_TIME)+"s ease-out",e.offsetWidth,t(e,i),e.hasAddTEndListener||(e.hasAddTEndListener=!0,_addTEndListener(e,function(){_removeEndAnimation(e),_doAutoCarousel()}))},_removeEndAnimation=function(e){e.style.transition="unset",e.style.webkitTransition="unset",g_isEndAnimating=!1,e.hasAddTEndListener=!1},_doEndAnimate=function(e,i,t){(0!=i||t)&&(g_isEndAnimating=!0,Math.abs(i)>EFFECT_DISTANCE||t?i>0||"r"==t?(_addEndAnimation(e,g_liWidth-i,_setUlX),g_isScaleType&&(_addEndAnimation(g_liChildren[_getLiChildrenIndex()],g_opt.rate,_setScale),_addEndAnimation(g_liChildren[_getPreLiChildrenIndex()],1,_setScale)),_fixLiWhenMoveR()):(g_isScaleType&&(_addEndAnimation(g_liChildren[_getLiChildrenIndex()],g_opt.rate,_setScale),_addEndAnimation(g_liChildren[_getNextLiChildrenIndex()],1,_setScale)),_addEndAnimation(e,-g_liWidth-i,_setUlX),_fixLiWhenMoveL()):(g_isScaleType&&(_addEndAnimation(g_liChildren[_getLiChildrenIndex()],1,_setScale),_addEndAnimation(g_liChildren[_getNextLiChildrenIndex()],g_opt.rate,_setScale),_addEndAnimation(g_liChildren[_getPreLiChildrenIndex()],g_opt.rate,_setScale)),_addEndAnimation(e,-i,_setUlX)))},_fixLiWhenMoveL=function(){if(g_liCur++,g_liMax-g_liCur<2){g_liMax++,g_liMin++;var e=g_liChildrenWithPos.shift();g_liChildrenWithPos.push(e),_setTranslate3d(e,g_liMax*g_liWidth+_getDiff())}},_fixLiWhenMoveR=function(){if(--g_liCur-g_liMin<2){g_liMin--,g_liMax--;var e=g_liChildrenWithPos.pop();g_liChildrenWithPos.unshift(e),_setTranslate3d(e,g_liMin*g_liWidth+_getDiff())}},EFFECT_DISTANCE=30,END_TIME=.2,LI_TEMPLATE="<li style='position:absolute;background-size: cover;background-image: url({{url}});-webkit-backface-visibility:hidden;backface-visibility:hidden;user-select:none;'></li>",UL_TEMPLATE="<ul style='position:relative;list-style-type:none;padding:0;margin:0;'>{{lis}}</ul>",g_container=null,g_containerW=0,g_liChildren=null,g_liChildrenWithPos=null,g_liChildrenLen=0,g_liWidth=0,g_liHeight=0,g_ul=null,g_isEndAnimating=!1,g_liMin=0,g_liMax=0,g_liCur=0,g_opt=null,g_isScaleType=!1,g_isAutoCarousel=!1,g_isParallelType=!1,carousel={init:function(e,i){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};g_container=e,g_opt=t,g_isScaleType="scale"==t.type,g_isParallelType="parallel"==t.type,g_isAutoCarousel=1==t.isAutoCarousel,_fillHtml(i),_initContainer(),g_liChildren=g_container.querySelectorAll("li");var n=1==(g_liChildrenLen=g_liChildren.length);g_ul=g_container.querySelector("ul"),g_liWidth=_getLiWidth(),g_liHeight=g_container.offsetHeight,g_liChildrenLen&&(n||_initLiChildren(),_initLiWH(),n||(_initLiPosition(),_initUlPosition(),_initLiScale(),_initLiRange(),this.addEvent(),_doAutoCarousel()))},addEvent:function(){function e(){s=!1,r=0,_=0,o=0,g=0}function i(){_doEndAnimate(g_ul,o)}var t=0,n=0,l=0,a=0,r=0,_=0,o=0,g=0,s=!1,d=0,c=0;g_container.addEventListener("touchstart",function(e){s=!0,t=e.touches[0].clientX,n=e.touches[0].clientY}),g_container.addEventListener("touchmove",function(i){if(s&&!g_isEndAnimating){var u=0==r&&0==_;if(d=i.touches[0].clientX,c=i.touches[0].clientY,r=d-(l||t),_=c-(a||n),l=d,a=c,u){if(Math.abs(r)<Math.abs(_))return void e()}else _unAutoCarousel(),o+=r,g+=_,_setUlX(g_ul,r),_setCurLiScale(o),_seNextLiScale(o);i.preventDefault(),i.stopPropagation()}}),g_container.addEventListener("touchend",function(t){s&&(i(),e())}),g_container.addEventListener("touchcancel",function(t){s&&(i(),e())})}};