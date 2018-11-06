"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,i){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):t.BaseCarousel=i()}(void 0,function(){var t=function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")},i=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}();return function(){function e(i){var n=i.container,s=i.data,a=i.auto,o=i.isSort,r=i.liWidth,l=i.endAnimateTime,h=void 0===l?.2:l,u=i.autoStepTime,c=void 0===u?5e3:u,f=i.effectDistance,d=void 0===f?30:f;t(this,e),s=this.fillIndexData(s),s=this.getData(s),this.container=n,this.data=s,this.auto=a,this.isSort=o,this.liWidth=r,this.endAnimateTime=h,this.autoStepTime=c,this.effectDistance=d,this.stepX=0,this.autoing=!1,this.ulLastX=0,this.isEndAnimating=!1,this.liCur=0,this.liChildrenLen=0,this.preLiIndexMap={},this.curLiIndexMap={},this.nextLiIndexMap={},this.liChildrenLen=this.data.length,this.liMax=this.liChildrenLen-1,this.liMin=0,this.startLiCur=this.liCur=Math.floor((this.liChildrenLen-1)/2)}return i(e,[{key:"init",value:function(){this.fillHtml(),this.initDomProps(),this.initContainer(),this.initLiX(),this.initLiInfo(),this.initUlPeriodX(),this.addTouchEvent(),this.initAuto()}},{key:"initContainer",value:function(){this.container.style.position="relative"}},{key:"initLiX",value:function(){var t=this;this.originLis.forEach(function(i,e){t.setLiPeriodX(i,t.getLiXRange()*e)})}},{key:"initLiInfo",value:function(){var t=this;this.originLis.forEach(function(i,e){i.style.width=t.liWidth+"px",i.style.height=t.container.offsetHeight+"px"})}},{key:"getUlMoveDistance",value:function(){return this.liWidth}},{key:"getMoveXRate",value:function(){return 1}},{key:"getLiXRange",value:function(){return this.liWidth}},{key:"initUlPeriodX",value:function(){var t=this.liCur*this.getUlMoveDistance();this.setTranslateX(this.ul,-t),this.setUlLastX(-t)}},{key:"fillIndexData",value:function(t){return t.map(function(t,i){return{url:t,index:i}})}},{key:"getData",value:function(t){return t.length>0&&t.length<5?this.getData(t.concat(t)):t}},{key:"initDomProps",value:function(){this.ul=this.container.querySelector("ul"),this.lis=this.ul.querySelectorAll("li"),this.originLis=Array.prototype.slice.call(this.lis),this.controlLis=this.originLis.slice(0),this.liChildrenLen=this.originLis.length,this.liWidth=this.liWidth||this.container.offsetWidth}},{key:"fillHtml",value:function(t){var i="";(t=t||this.data).forEach(function(t){i+="<li data-index='{{index}}' style='position:absolute;background-size: cover;background-image: url({{url}});-webkit-backface-visibility:hidden;backface-visibility:hidden;user-select:none;'></li>".replace("{{url}}",t.url).replace("{{index}}",t.index)}),i="<ul style='position:relative;list-style-type:none;padding:0;margin:0;'>{{lis}}</ul>".replace("{{lis}}",i),this.container.innerHTML=i}},{key:"initAuto",value:function(){var t=this;this.auto&&(clearInterval(this.autoIntervalHandle),this.autoIntervalHandle=setInterval(function(){t.autoing=!0,t.stepX=-1,t.doEndAnimate(t.ul)},this.autoStepTime))}},{key:"addTouchEvent",value:function(){var t=this,i=0,e=function(){t.autoing=!1,t.stepX=0,i=0,t.initAuto()},n=function(){t.isStarted&&(t.doEndAnimate(t.ul),t.touchEndCb&&t.touchEndCb(),e())},s=n;this.container.addEventListener("touchstart",function(i){e(),t.isStarted=!0,t.startX=i.touches[0].clientX,t.startY=i.touches[0].clientY,t.touchStartCb&&t.touchStartCb()}),this.container.addEventListener("touchmove",function(n){if(t.isStarted&&!t.isEndAnimating){var s=0===t.stepX&&0===i,a=n.touches[0].clientX,o=n.touches[0].clientY;if(t.stepX=(a-t.startX)*t.getMoveXRate(),s){if(i=o-t.startY,Math.abs(t.stepX)<Math.abs(i))return void e()}else t.setUlX(t.stepX+t.ulLastX),t.touchMoveCb&&t.touchMoveCb();n.preventDefault(),n.stopPropagation()}}),this.container.addEventListener("touchend",n),this.container.addEventListener("touchcancel",s)}},{key:"fixLiWhenMoveL",value:function(){var t=this.liCur+1;if(this.liMax-t<2){this.liMax++,this.liMin++;var i=this.controlLis.shift();this.controlLis.push(i),this.setLiPeriodX(i,this.liMax*this.getLiXRange())}this.liCur++}},{key:"fixLiWhenMoveR",value:function(){if(console.log("fixLiWhenMoveR parent"),this.liCur-1-this.liMin<2){this.liMax--,this.liMin--;var t=this.controlLis.pop();this.controlLis.unshift(t),this.setLiPeriodX(t,this.liMin*this.getLiXRange())}this.liCur--}},{key:"doEndAnimate",value:function(t){0!=this.stepX&&(this.isEndAnimating=!0,this.addEndTransition(t),(Math.abs(this.stepX)>this.effectDistance||this.autoing)&&(this.stepX>0?this.fixLiWhenMoveR():this.fixLiWhenMoveL()),this.initUlPeriodX())}},{key:"addEndTransition",value:function(t){var i=this,e=this.ul,n=function(){i.removeEndAnimation(t)};e.style.transition="transform "+this.endAnimateTime+"s ease-out",e.style.webkitTransition="-webkit-transform "+this.endAnimateTime+"s ease-out",e.offsetWidth,e.addEventListener("webkitTransitionEnd",n),e.addEventListener("transitionend",n)}},{key:"removeEndAnimation",value:function(t){t.style.transition="unset",t.style.webkitTransition="unset",this.isEndAnimating=!1}},{key:"setUlX",value:function(t){this.setTranslateX(this.ul,t)}},{key:"setLiPeriodX",value:function(t,i){this.setTranslateX(t,i)}},{key:"setUlLastX",value:function(t){this.ulLastX=t}},{key:"setTranslateX",value:function(t,i){this.setTransform(t,/translate3d\([^)]+\)/," translate3d("+i+"px, 0, 0) "),this.setWebkitTransform(t,/-webkit-translate3d\([^)]+\)/," -webkit-translate3d("+i+"px, 0, 0) ")}},{key:"setTransform",value:function(t,i,e){i.test(t.style.transform)?t.style.transform=t.style.transform.replace(i,e):t.style.transform+=e}},{key:"setWebkitTransform",value:function(t,i,e){i.test(t.style.transform)?t.style.webkitTransform=t.style.webkitTransform.replace(i,e):t.style.webkitTransform+=e}}]),e}()});