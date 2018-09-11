(function(a){"use strict";if(window.layui&&layui.define){layui.define(["jquery","flash","imagesloaded","jqui"],function(i){layui.link(layui.cache.extendStyle+"/video/bigvideo.css");var e=layui.$,o=layui.videojs,t=layui.flash,d=layui.imagesloaded,n=layui.jqui;i("bigvideo",a(e,o))})}else if(typeof define==="function"&&define.amd){define(["jquery","videojs","imagesloaded","jquery-ui"],a)}else{a(jQuery,videojs)}})(function(I,T){I.BigVideo=function(i){var e={useFlashForFirefox:true,forceAutoplay:false,controls:false,doLoop:false,container:I("body"),shrinkable:false};var o={},d,n="#big-video-vid",a=I('<div id="big-video-wrap"></div>'),t=I(""),s=16/9,r=0,l=.8,c=false,f=false,u=false,v=false,g=false,h=[],p,b;var y=I.extend({},e,i);function m(){var i=y.container.outerWidth()<I(window).width()?y.container.outerWidth():I(window).width(),e=y.container.outerHeight()<I(window).height()?y.container.outerHeight():I(window).height(),o=i/e;if(y.container.is(I("body"))){I("html,body").css("height",I(window).height()>I("body").css("height","auto").height()?"100%":"auto")}if(o<s){if(b=="video"){d.width(e*s);d.height(e);if(!y.shrinkable){I(n).css("top",0).css("left",-(e*s-i)/2).css("height",e)}else{I(n).css("top",-(i/s-e)/2).css("left",0).css("height",i/s)}I(n+"_html5_api").css("width",e*s).css("height",e);I(n+"_flash_api").css("width",e*s).css("height",e)}else{I("#big-video-image").css({width:"auto",height:e,top:0,left:-(e*s-i)/2})}}else{if(b=="video"){d.width(i);d.height(i/s);I(n).css("top",-(i/s-e)/2).css("left",0).css("height",i/s);I(n+"_html5_api").css("width",I(n+"_html5_api").parent().width()+"px").css("height","auto");I(n+"_flash_api").css("width",i).css("height",i/s)}else{I("#big-video-image").css({width:i,height:"auto",top:-(i/s-e)/2,left:0})}}}function w(){var i=""+'<div id="big-video-control-container">'+'<div id="big-video-control">'+'<a href="#" id="big-video-control-play"></a>'+'<div id="big-video-control-middle">'+'<div id="big-video-control-bar">'+'<div id="big-video-control-bound-left"></div>'+'<div id="big-video-control-progress"></div>'+'<div id="big-video-control-track"></div>'+'<div id="big-video-control-bound-right"></div>'+"</div>"+"</div>"+'\t<div id="big-video-control-timer"></div>'+"</div>"+"</div>";y.container.append(i);I("#big-video-control-container").css("display","none");I("#big-video-control-timer").css("display","none");I("#big-video-control-track").slider({animate:true,step:.01,slide:function(i,e){f=true;I("#big-video-control-progress").css("width",e.value-.16+"%");d.currentTime(e.value/100*d.duration())},stop:function(i,e){f=false;d.currentTime(e.value/100*d.duration())}});I("#big-video-control-bar").click(function(i){d.currentTime(i.offsetX/I(this).width()*d.duration())});I("#big-video-control-play").click(function(i){i.preventDefault();_("toggle")});d.on("timeupdate",function(){if(!f&&d.currentTime()/d.duration()){var i=d.currentTime();var e=Math.floor(i/60);var o=Math.floor(i)-60*e;if(o<10)o="0"+o;var t=d.currentTime()/d.duration()*100;I("#big-video-control-track").slider("value",t);I("#big-video-control-progress").css("width",t-.16+"%");I("#big-video-control-timer").text(e+":"+o+"/"+r)}})}function _(i){var e=i||"toggle";if(e=="toggle")e=u?"pause":"play";if(e=="pause"){d.pause();I("#big-video-control-play").css("background-position","-16px");u=false}else if(e=="play"){d.play();I("#big-video-control-play").css("background-position","0");u=true}else if(e=="skip"){j()}}function k(){d.play();y.container.off("click",k)}function j(){p++;if(p===h.length)p=0;x(h[p])}function x(i){I(n).css("display","block");b="video";d.src(i);u=true;if(g){I("#big-video-control-container").css("display","none");d.ready(function(){d.volume(0)});doLoop=true}else{I("#big-video-control-container").css("display","block");d.ready(function(){d.volume(l)});doLoop=false}I("#big-video-image").css("display","none");I(n).css("display","block")}function L(i){I("#big-video-image").remove();d.pause();I(n).css("display","none");I("#big-video-control-container").css("display","none");b="image";var e=I('<img id="big-video-image" src='+i+" />");a.append(e);I("#big-video-image").imagesLoaded(function(){s=I("#big-video-image").width()/I("#big-video-image").height();m()})}o.init=function(){if(!c){y.container.prepend(a);var i=y.forceAutoplay?"autoplay":"";d=I('<video id="'+n.substr(1)+'" class="video-js vjs-default-skin" height="1" width="1" preload="auto" data-setup="{}" '+i+" webkit-playsinline></video>");d.css("position","absolute");a.append(d);var e=["html5","flash"];var o=navigator.userAgent.toLowerCase();var t=o.indexOf("firefox")!=-1;if(y.useFlashForFirefox&&t){e=["flash","html5"]}d=T(n.substr(1),{controls:false,autoplay:true,preload:"auto",techOrder:e});if(y.controls)w();m();c=true;u=false;if(y.forceAutoplay){I("body").on("click",k)}I("#big-video-vid_flash_api").attr("scale","noborder").attr("width","100%").attr("height","100%");I(window).on("resize.bigvideo",function(){m()});d.on("loadedmetadata",function(i){if(document.getElementById("big-video-vid_flash_api")){s=document.getElementById("big-video-vid_flash_api").vjs_getProperty("videoWidth")/document.getElementById("big-video-vid_flash_api").vjs_getProperty("videoHeight")}else{s=I("#big-video-vid_html5_api").prop("videoWidth")/I("#big-video-vid_html5_api").prop("videoHeight")}m();var e=Math.round(d.duration());var o=Math.floor(e/60);var t=e-o*60;if(t<10)t="0"+t;r=o+":"+t});d.on("ended",function(){if(y.doLoop){d.currentTime(0);d.play()}if(v){j()}})}};o.show=function(i,e){if(e===undefined)e={};g=e.ambient===true;if(g||e.doLoop)y.doLoop=true;if(typeof i==="string"){var o=i.lastIndexOf("?")>0?i.substring(i.lastIndexOf(".")+1,i.lastIndexOf("?")):i.substring(i.lastIndexOf(".")+1);if(o=="jpg"||o=="gif"||o=="png"){L(i)}else if(o=="mp4"||o=="ogg"||o=="ogv"||o=="webm"){x(i);if(e.onShown)e.onShown();v=false}}else if(I.isArray(i)){x(i)}else if(typeof i==="object"&&i.src&&i.type){x([i])}else{throw"BigVideo.show received invalid input for parameter source"}};o.showPlaylist=function(i,e){if(!I.isArray(i)){throw"BigVideo.showPlaylist parameter files accepts only arrays"}if(e===undefined)e={};g=e.ambient===true;if(g||e.doLoop)y.doLoop=true;h=i;p=0;this.show(h[p]);if(e.onShown)e.onShown();v=true};o.getPlayer=function(){return d};o.remove=o.dispose=function(){c=false;a.remove();I(window).off("resize.bigvideo");if(d){d.off("loadedmetadata");d.off("ended");d.dispose()}};o.triggerPlayer=function(i){_(i)};return o}});