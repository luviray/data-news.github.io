import{o as t,h as e,m as a,w as i,F as r,p as s,Y as n,q as o,j as l,u as c,t as d,k as m,x as u,f,g as h,W as g,X as v,v as b,r as p,c as w,n as x}from"./vendor.ee1ba453.js";const M={data:()=>({cards:[{isClicked:!1,imageSrcFront:"src/assets/blindbox/card-face.png",imageSrcBack:"src/assets/blindbox/card-back1.jpg",text:"黑破脸"},{isClicked:!1,imageSrcFront:"src/assets/blindbox/card-face.png",imageSrcBack:"src/assets/blindbox/card-back2.jpg",text:"黄花三块瓦脸"},{isClicked:!1,imageSrcFront:"src/assets/blindbox/card-face.png",imageSrcBack:"src/assets/blindbox/card-back3.jpg",text:"黄花三块瓦脸"},{isClicked:!1,imageSrcFront:"src/assets/blindbox/card-face.png",imageSrcBack:"src/assets/blindbox/card-back4.jpg",text:"红谱式脸"},{isClicked:!1,imageSrcFront:"src/assets/blindbox/card-face.png",imageSrcBack:"src/assets/blindbox/card-back5.jpg",text:"黑十字门蝴蝶脸"},{isClicked:!1,imageSrcFront:"src/assets/blindbox/card-face.png",imageSrcBack:"src/assets/blindbox/card-back6.jpg",text:"黑碎花脸"}],imageSize:"100%"}),methods:{handleClick(t){t.isClicked=!0}}},k={class:"card-container"},z=["onClick"],C={class:"card-inner"},y={class:"card-front"},I=["src"],S={class:"card-back"},T=["src"],E={class:"card-text"};M.render=function(m,u,f,h,g,v){return t(),e("div",k,[a(n,{name:"rotate-transition"},{default:i((()=>[(t(!0),e(r,null,s(g.cards,((a,i)=>(t(),e("div",{class:o(["card",{clicked:a.isClicked}]),key:i,onClick:t=>v.handleClick(a)},[l("div",C,[l("div",y,[l("img",{src:a.imageSrcFront,style:c({width:g.imageSize,height:g.imageSize})},null,12,I)]),l("div",S,[l("img",{src:a.imageSrcBack,style:c({width:g.imageSize,height:g.imageSize})},null,12,T),l("p",E,d(a.text),1)])])],10,z)))),128))])),_:1})])};var F,_,A,B,R,L,D,P={exports:{}};
/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2019 Tim Guan-tin Chien and contributors.
 * Released under the MIT license
 */F=P,window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message";return window.addEventListener("message",(function(a){if("string"==typeof a.data&&a.data.substr(0,e.length)===e){a.stopImmediatePropagation();var i=parseInt(a.data.substr(e.length),36);t[i]&&(t[i](),t[i]=void 0)}}),!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},function(a){var i=t.length;return t.push(a),window.postMessage(e+i.toString(36),"*"),i}}()||function(t){window.setTimeout(t,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)}),_=m,A=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!(e&&e.getImageData&&e.fillText&&Array.prototype.some&&Array.prototype.push)}(),B=function(){if(A){for(var t,e,a=document.createElement("canvas").getContext("2d"),i=20;i;){if(a.font=i.toString(10)+"px sans-serif",a.measureText("Ｗ").width===t&&a.measureText("m").width===e)return i+1;t=a.measureText("Ｗ").width,e=a.measureText("m").width,i--}return 0}}(),R=function(t){for(var e,a,i=t.length;i;)e=Math.floor(Math.random()*i),a=t[--i],t[i]=t[e],t[e]=a;return t},L={},(D=function(t,e){if(A){var a=Math.floor(Math.random()*Date.now());Array.isArray(t)||(t=[t]),t.forEach((function(e,a){if("string"==typeof e){if(t[a]=document.getElementById(e),!t[a])throw new Error("The element id specified is not found.")}else if(!e.tagName&&!e.appendChild)throw new Error("You must pass valid HTML elements, or ID of the element.")}));var i={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationSteps:0,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var r in e)r in i&&(i[r]=e[r]);if("function"!=typeof i.weightFactor){var s=i.weightFactor;i.weightFactor=function(t){return t*s}}if("function"!=typeof i.shape)switch(i.shape){case"circle":default:i.shape="circle";break;case"cardioid":i.shape=function(t){return 1-Math.sin(t)};break;case"diamond":i.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"square":i.shape=function(t){return Math.min(1/Math.abs(Math.cos(t)),1/Math.abs(Math.sin(t)))};break;case"triangle-forward":i.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":i.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":i.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":i.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))}}i.gridSize=Math.max(Math.floor(i.gridSize),4);var n,o,l,c,d,m,u,f,h=i.gridSize,g=h-i.maskGapWidth,v=Math.abs(i.maxRotation-i.minRotation),b=Math.abs(Math.floor(i.rotationSteps)),p=Math.min(i.maxRotation,i.minRotation);switch(i.color){case"random-dark":u=function(){return D(10,50)};break;case"random-light":u=function(){return D(50,90)};break;default:"function"==typeof i.color&&(u=i.color)}"function"==typeof i.fontWeight&&(f=i.fontWeight);var w=null;"function"==typeof i.classes&&(w=i.classes);var x,M=!1,k=[],z=function(t){var e,a,i=t.currentTarget,r=i.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,a=t.touches[0].clientY):(e=t.clientX,a=t.clientY);var s=e-r.left,n=a-r.top,o=Math.floor(s*(i.width/r.width||1)/h),l=Math.floor(n*(i.height/r.height||1)/h);return k[o][l]},C=function(t){var e=z(t);x!==e&&(x=e,e?i.hover(e.item,e.dimension,t):i.hover(void 0,void 0,t))},y=function(t){var e=z(t);e&&(i.click(e.item,e.dimension,t),t.preventDefault())},I=[],S=function(t){if(I[t])return I[t];var e=8*t,a=e,r=[];for(0===t&&r.push([c[0],c[1],0]);a--;){var s=1;"circle"!==i.shape&&(s=i.shape(a/e*2*Math.PI)),r.push([c[0]+t*s*Math.cos(-a/e*2*Math.PI),c[1]+t*s*Math.sin(-a/e*2*Math.PI)*i.ellipticity,a/e*2*Math.PI])}return I[t]=r,r},T=function(){return i.abortThreshold>0&&(new Date).getTime()-m>i.abortThreshold},E=function(e,a,i,r,s){e>=o||a>=l||e<0||a<0||(n[e][a]=!1,i&&t[0].getContext("2d").fillRect(e*h,a*h,g,g),M&&(k[e][a]={item:s,dimension:r}))},F=function e(a){var r,s,c;Array.isArray(a)?(r=a[0],s=a[1]):(r=a.word,s=a.weight,c=a.attributes);var m=0===i.rotateRatio||Math.random()>i.rotateRatio?0:0===v?p:b>0?p+Math.floor(Math.random()*b)*v/(b-1):p+Math.random()*v,g=function(t){if(Array.isArray(t)){var e=t.slice();return e.splice(0,2),e}return[]}(a),x=function(t,e,a,r){var s=i.weightFactor(e);if(s<=i.minSize)return!1;var n,o=1;s<B&&(o=function(){for(var t=2;t*s<B;)t+=2;return t}()),n=f?f(t,e,s,r):i.fontWeight;var l=document.createElement("canvas"),c=l.getContext("2d",{willReadFrequently:!0});c.font=n+" "+(s*o).toString(10)+"px "+i.fontFamily;var d=c.measureText(t).width/o,m=Math.max(s*o,c.measureText("m").width,c.measureText("Ｗ").width)/o,u=d+2*m,g=3*m,v=Math.ceil(u/h),b=Math.ceil(g/h);u=v*h,g=b*h;var p=-d/2,w=.4*-m,x=Math.ceil((u*Math.abs(Math.sin(a))+g*Math.abs(Math.cos(a)))/h),M=Math.ceil((u*Math.abs(Math.cos(a))+g*Math.abs(Math.sin(a)))/h),k=M*h,z=x*h;l.setAttribute("width",k),l.setAttribute("height",z),c.scale(1/o,1/o),c.translate(k*o/2,z*o/2),c.rotate(-a),c.font=n+" "+(s*o).toString(10)+"px "+i.fontFamily,c.fillStyle="#000",c.textBaseline="middle",c.fillText(t,p*o,(w+.5*s)*o);var C=c.getImageData(0,0,k,z).data;if(T())return!1;for(var y,I,S,E=[],F=M,_=[x/2,M/2,x/2,M/2];F--;)for(y=x;y--;){S=h;t:for(;S--;)for(I=h;I--;)if(C[4*((y*h+S)*k+(F*h+I))+3]){E.push([F,y]),F<_[3]&&(_[3]=F),F>_[1]&&(_[1]=F),y<_[0]&&(_[0]=y),y>_[2]&&(_[2]=y);break t}}return{mu:o,occupied:E,bounds:_,gw:M,gh:x,fillTextOffsetX:p,fillTextOffsetY:w,fillTextWidth:d,fillTextHeight:m,fontSize:s}}(r,s,m,g);if(!x)return!1;if(T())return!1;if(!i.drawOutOfBound&&!i.shrinkToFit){var k=x.bounds;if(k[1]-k[3]+1>o||k[2]-k[0]+1>l)return!1}for(var z=d+1,C=function(e){var v=Math.floor(e[0]-x.gw/2),b=Math.floor(e[1]-x.gh/2);return x.gw,x.gh,!!function(t,e,a,r,s){for(var c=s.length;c--;){var d=t+s[c][0],m=e+s[c][1];if(d>=o||m>=l||d<0||m<0){if(!i.drawOutOfBound)return!1}else if(!n[d][m])return!1}return!0}(v,b,0,0,x.occupied)&&(function(e,a,r,s,n,o,l,c,d,m){var g,v,b,p=r.fontSize;g=u?u(s,n,p,o,l,m):i.color,v=f?f(s,n,p,m):i.fontWeight,b=w?w(s,n,p,m):i.classes,t.forEach((function(t){if(t.getContext){var n=t.getContext("2d"),o=r.mu;n.save(),n.scale(1/o,1/o),n.font=v+" "+(p*o).toString(10)+"px "+i.fontFamily,n.fillStyle=g,n.translate((e+r.gw/2)*h*o,(a+r.gh/2)*h*o),0!==c&&n.rotate(-c),n.textBaseline="middle",n.fillText(s,r.fillTextOffsetX*o,(r.fillTextOffsetY+.5*p)*o),n.restore()}else{var l=document.createElement("span"),m="";m="rotate("+-c/Math.PI*180+"deg) ",1!==r.mu&&(m+="translateX(-"+r.fillTextWidth/4+"px) scale("+1/r.mu+")");var u={position:"absolute",display:"block",font:v+" "+p*r.mu+"px "+i.fontFamily,left:(e+r.gw/2)*h+r.fillTextOffsetX+"px",top:(a+r.gh/2)*h+r.fillTextOffsetY+"px",width:r.fillTextWidth+"px",height:r.fillTextHeight+"px",lineHeight:p+"px",whiteSpace:"nowrap",transform:m,webkitTransform:m,msTransform:m,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var f in g&&(u.color=g),l.textContent=s,u)l.style[f]=u[f];if(d)for(var w in d)l.setAttribute(w,d[w]);b&&(l.className+=b),t.appendChild(l)}}))}(v,b,x,r,s,d-z,e[2],m,c,g),function(e,a,r,s,n,c){var d,m,u=n.occupied,f=i.drawMask;if(f&&((d=t[0].getContext("2d")).save(),d.fillStyle=i.maskColor),M){var g=n.bounds;m={x:(e+g[3])*h,y:(a+g[0])*h,w:(g[1]-g[3]+1)*h,h:(g[2]-g[0]+1)*h}}for(var v=u.length;v--;){var b=e+u[v][0],p=a+u[v][1];b>=o||p>=l||b<0||p<0||E(b,p,f,m,c)}f&&d.restore()}(v,b,0,0,x,a),!0)};z--;){var y=S(d-z);if(i.shuffle&&(y=[].concat(y),R(y)),y.some(C))return!0}return!!i.shrinkToFit&&(Array.isArray(a)?a[1]=3*a[1]/4:a.weight=3*a.weight/4,e(a))},_=function(e,a,i){if(a)return!t.some((function(t){var a=new CustomEvent(e,{detail:i||{}});return!t.dispatchEvent(a)}),this);t.forEach((function(t){var a=new CustomEvent(e,{detail:i||{}});t.dispatchEvent(a)}),this)};!function(){var e=t[0];if(e.getContext)o=Math.ceil(e.width/h),l=Math.ceil(e.height/h);else{var r=e.getBoundingClientRect();o=Math.ceil(r.width/h),l=Math.ceil(r.height/h)}if(_("wordcloudstart",!0)){var s,u,f,g,v;if(c=i.origin?[i.origin[0]/h,i.origin[1]/h]:[o/2,l/2],d=Math.floor(Math.sqrt(o*o+l*l)),n=[],!e.getContext||i.clearCanvas)for(t.forEach((function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=i.backgroundColor,e.clearRect(0,0,o*(h+1),l*(h+1)),e.fillRect(0,0,o*(h+1),l*(h+1))}else t.textContent="",t.style.backgroundColor=i.backgroundColor,t.style.position="relative"})),s=o;s--;)for(n[s]=[],u=l;u--;)n[s][u]=!0;else{var b=document.createElement("canvas").getContext("2d");b.fillStyle=i.backgroundColor,b.fillRect(0,0,1,1);var p,w,z=b.getImageData(0,0,1,1).data,I=e.getContext("2d").getImageData(0,0,o*h,l*h).data;for(s=o;s--;)for(n[s]=[],u=l;u--;){w=h;t:for(;w--;)for(p=h;p--;)for(f=4;f--;)if(I[4*((u*h+w)*o*h+(s*h+p))+f]!==z[f]){n[s][u]=!1;break t}!1!==n[s][u]&&(n[s][u]=!0)}I=b=z=void 0}if(i.hover||i.click){for(M=!0,s=o+1;s--;)k[s]=[];i.hover&&e.addEventListener("mousemove",C),i.click&&(e.addEventListener("click",y),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",(function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",C),e.removeEventListener("click",y),x=void 0}))}f=0,0!==i.wait?(g=window.setTimeout,v=window.clearTimeout):(g=window.setImmediate,v=window.clearImmediate);var S=function(e,a){t.forEach((function(t){t.removeEventListener(e,a)}),this)},E=function t(){S("wordcloudstart",t),v(L[a])};!function(e,a){t.forEach((function(t){t.addEventListener(e,a)}),this)}("wordcloudstart",E),L[a]=g((function t(){if(f>=i.list.length)return v(L[a]),_("wordcloudstop",!1),S("wordcloudstart",E),void delete L[a];m=(new Date).getTime();var e=F(i.list[f]),r=!_("wordclouddrawn",!0,{item:i.list[f],drawn:e});if(T()||r)return v(L[a]),i.abort(),_("wordcloudabort",!1),_("wordcloudstop",!1),S("wordcloudstart",E),void delete L[a];f++,L[a]=g(t,i.wait)}),i.wait)}}()}function D(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}}).isSupported=A,D.minFontSize=B,D.stop=function(){if(L)for(var t in L)window.clearImmediate(L[t])},F.exports?F.exports=D:_.WordCloud=D;var O=P.exports;const W={mounted(){const t=this.$refs.canvas,e=this.$refs.echartsContainer;t.width=1e3,t.height=1e3;const a=[{text:"成都",size:8},{text:"大熊猫",size:6},{text:"蓉宝",size:8},{text:"科梦",size:5},{text:"启点",size:4},{text:"Panda",size:7},{text:"Rongbao",size:7},{text:"cute",size:6},{text:"cool",size:7},{text:"萌",size:6},{text:"酷",size:5},{text:"Chengdu",size:8},{text:"FISU",size:7},{text:"可爱",size:9},{text:"giant panda",size:7},{text:"憨态可掬",size:6},{text:"lovely",size:7},{text:"China",size:7},{text:"读书",size:8},{text:"电影院",size:7},{text:"音乐会",size:8},{text:"博物馆",size:6},{text:"画廊",size:5},{text:"游乐场",size:7},{text:"剧院",size:7},{text:"绘画",size:6},{text:"书法",size:7},{text:"编曲",size:7},{text:"远足",size:6},{text:"四川",size:7},{text:"川菜",size:6},{text:"宽窄巷子",size:6},{text:"锦里",size:7},{text:"蜀绣",size:6},{text:"青城山",size:7},{text:"熊猫基地",size:8},{text:"熊猫保护",size:7},{text:"熊猫繁育",size:7},{text:"熊猫之都",size:7},{text:"文化之都",size:7},{text:"旅游景点",size:7},{text:"世界自然遗产",size:8},{text:"生态环境",size:6},{text:"饮食文化",size:7},{text:"独特风情",size:6},{text:"地标建筑",size:7},{text:"历史文化",size:7},{text:"人文景观",size:7}],i=["#506050","#A0C0A8","#BBDOE4","#BFA7D9","#DABCA4","#C8D8B8","#E0E8C8","#E5E8DA","#3B5173","#E3EFFD","#5D87A8","#DCEEFA","#6A6BAB","#8988C4","#A3A5DE","#BCC7F43"],r={list:a.map((t=>[t.text,t.size])),gridSize:Math.round(4*t.width/1024),weightFactor:function(e){return Math.pow(e,2)*t.width/1024},fontFamily:"Arial, Helvetica, sans-serif",color:function(){const t=Math.floor(Math.random()*i.length);return i[t]},rotateRatio:.5,backgroundColor:"transparent",shape:"src/assets/bounce/image3.png"};O(t,r);const s=u(e),n={series:[{type:"wordCloud",shape:"circle",left:"center",top:"center",width:"60%",height:"100%",textStyle:{normal:{fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"bold",color:function(){const t=Math.floor(Math.random()*i.length);return i[t]}}},data:a.map((t=>({name:t.text,value:t.size})))}]};s.setOption(n)}},j={ref:"canvas"},H={class:"wordcloud-container",ref:"echartsContainer"};W.render=function(a,i,r,s,n,o){return t(),e("div",null,[l("canvas",j,null,512),l("div",H,null,512)])};const Y={setup(){const t=f(null),e=f(!1),a=f(!1),i=f(!1);return h((()=>{new IntersectionObserver((r=>{r.forEach((r=>{r.target===t.value?r.isIntersecting&&(e.value=!0):r.isIntersecting&&(e.value?a.value?i.value=!0:a.value=!0:e.value=!0)}))}),{root:null,rootMargin:"0px",threshold:.5}).observe(t.value)})),{placeholder:t,showA:e,showB:a,showA2:i}}},X=[l("div",{class:"wow animate__animated animate__bounceInLeft",style:"animation-delay: 0s"}," A：大熊猫已然成为成都的代言人，“成都只要有吉祥物，那必须是熊猫了”。 ",-1),l("br",null,null,-1),l("div",{class:"wow animate__animated animate__bounceInRight",style:"animation-delay: 2s"}," B：没错，大运会期间，成都各地到处都是蓉宝，酒店餐厅、街头巷尾、城市公园，就不更用说观赛场馆了，连观众的书包上和手机上也全是蓉宝。 ",-1),l("br",null,null,-1),l("div",{class:"wow animate__animated animate__bounceInLeft",style:"animation-delay: 4s"}," A: 让我印象最深的是桂溪公园的巨大蓉宝，可以说是全成都最大了。有了这些四处可见的蓉宝，整座城市都活跃着大运会的气氛，也闪耀着成都的青春与活力。 ",-1)];Y.render=function(a,i,r,s,n,o){return t(),e("div",null,X)},g("data-v-ad356ea2");const q={class:"image-container"},U=["src"],G={class:"activity-details"},N={class:"title"},$={class:"content"};v();var J=b({setup(n){const c=[{title:"1990 北京亚运会 - 盼盼",content:"“盼盼”寓意盼望和平、友谊，盼望取得优异的成绩。当时，北京的大街小巷和电视媒体几乎都会出现这个左手举着金牌，右手大拇指点赞的大熊猫，他承载着中国人民的好客意向，更也是承载着国人的祝福。",timestamp:"",text:"1990",image:"src/assets/timeline/image1.png"},{title:"2008 北京奥运会 - 晶晶",content:"福娃的色彩与灵感源于奥林匹克五环，晶晶代表的是五环里黑色的一环。晶晶原型是来自广袤森林的大熊猫，象征着人与自然的和谐共存。他的头部纹饰源自宋瓷上的莲花瓣造型。",timestamp:"",text:"2008",image:"src/assets/timeline/image2.png"},{title:"2022 北京冬奥会 - 冰墩墩",content:"“冰”象征着纯洁、坚韧，“墩墩”寓意敦厚、健康、活泼。该形象将熊猫形象与富有超能量的冰晶外壳相结合。朝气蓬勃的冰墩墩迅速成为北京冬奥会的“顶流”。正式开幕当日，线上线下官方旗舰店售卖的冰墩墩商品均被一抢而空，出现面临一“墩”难求的局面。",timestamp:"",text:"2022",image:"src/assets/timeline/image3.png"}];return(n,m)=>{const u=p("el-card"),f=p("el-timeline-item"),h=p("el-timeline");return t(),w(h,{class:"timeline"},{default:i((()=>[(t(),e(r,null,s(c,((t,e)=>a(f,{key:e,class:o(e%2==0?"timeline-left":"timeline-right"),timestamp:t.timestamp,placement:"top"},{default:i((()=>[a(u,null,{default:i((()=>[l("div",q,[l("img",{src:t.image,alt:"Image"},null,8,U)]),l("div",G,[l("h4",N,d(t.title),1),l("p",$,d(t.content),1)])])),_:2},1024)])),_:2},1032,["class","timestamp"]))),64))])),_:1})}}});J.__scopeId="data-v-ad356ea2";const K={data:()=>({videoURL1:"@/assets/video/video1.mp4",videoURL2:"@/assets/video/video2.mp4"}),components:{blind:M,words:W,dialo:Y,timeline:J}},Q={class:"main3"},V=l("div",{class:"main-title"},[l("img",{src:"/assets/part3.c094f8db.png",alt:"",class:"main-title-img"})],-1),Z=l("div",{class:"part3-0"},null,-1),tt=l("div",{class:"part3-1"},[l("div",{class:"mid-title"}),l("img",{src:"/assets/image2.2a4481d3.png",alt:"",class:"image7-1"})],-1),et={class:"part3-2"},at=l("div",{class:"mid-title"},[l("br"),l("br"),l("img",{src:"/assets/二级标题-4.2988a3de.png",alt:"",class:"mid-title-img"})],-1),it=l("div",{class:"context"}," 本次大运会上新18大系列、1000余款特许商品“蓉宝”周边产品。 ",-1),rt=l("div",{class:"mid-title"},[l("br"),l("br"),x(" （1）基础版蓉宝 ")],-1),st=l("div",{class:"context"},[l("br"),x(" 其中主色调黑白两色最具中国文化韵味，也是道家文化“天人合一”的体现，同时象征着人与自然的和谐共存之道；"),l("br"),x(" 黑红渐变则是川剧吐火、美食火锅的体现，凸显了“烟火成都”的独特魅力和热情奔放的“成都气度”；"),l("br"),x(" 奔跑的动作是青春活力的体现、蹲坐的造型是可爱和睦的表达、欢呼的造型则有开放包容的寓意……"),l("br"),l("br")],-1),nt=l("div",{class:"mid-title"},[l("br"),l("br"),x(" （2）变脸版蓉宝（分别代表川剧的生、旦、净、丑） ")],-1),ot=l("div",{class:"context"},[l("br"),x(" 四款脸谱基于“生”“旦”“净”“丑”4个戏曲行当，"),l("br"),x(" 在保留了传统川剧脸谱的勾描形式基础上"),l("br"),x(" 用尽可能圆润的笔触和低饱和度的对比色来匹配吉祥物“蓉宝”憨态可掬的形象，"),l("br"),x(" 使得“蓉宝”的面部表情更加可爱与亲和，也更充满青春与活力。"),l("br"),l("br")],-1),lt=l("div",{class:"context"}," -点击抽取盲盒- ",-1),ct=l("div",{class:"part3-3"},[l("div",{class:"mid-title"},[l("br"),l("br")]),l("div",{class:"context"},[l("div",{class:"wow animate__animated animate__bounceInLeft"}," A：大熊猫已然成为成都的代言人，“成都只要有吉祥物，那必须是熊猫了”。 "),l("br"),l("div",{class:"wow animate__animated animate__bounceInRight"}," B：没错，大运会期间，成都各地到处都是蓉宝，酒店餐厅、街头巷尾、城市公园，就不更用说观赛场馆了，连观众的书包上和手机上也全是蓉宝。 "),l("br"),l("div",{class:"wow animate__animated animate__bounceInLeft"}," A:让我印象最深的是桂溪公园的巨大蓉宝，可以说是全成都最大了。有了这些四处可见的蓉宝，整座城市都活跃着大运会的气氛，也闪耀着成都的青春与活力。 ")])],-1),dt=l("div",{class:"part3-4"},[l("div",{class:"mid-title"},[l("br"),l("br")]),l("div",{class:"context"}," 中国代表团由700余人组成，其中，来自全国25个省（自治区、直辖市）百余所高校的411名运动员将参加成都大运会全部18个大项的角逐 ")],-1),mt=l("div",{class:"part3-5"},[l("div",{class:"mid-title"},[l("br"),l("br")]),l("div",{class:"context-big"}," 成都大运会即将盛大开幕，国际组织和友人对筹备工作大加赞赏。 "),l("br"),l("br"),l("img",{src:"/assets/image9.643bde2c.png",alt:"",class:"dialo-img"})],-1),ut=l("div",{class:"part3-6"},[l("div",{class:"mid-title"},[l("br"),l("br")]),l("div",{class:"context"},[l("br"),x(" 成都大运会共有49个场馆，各个“高端大气”，都达到了国际标准；"),l("br"),x(" 个个都有“硬核”科，处处暗藏“高精尖特”。"),l("br"),x(" 比如凤凰山体育馆的可视化管理平台，犹如给体育馆装上了“最强大脑”，"),l("br"),x(" 空调、配电、照明、排风等运行数据，都能做到实时采集、一键获取、直观呈现，"),l("br"),x(" 先进技术为场馆运行保驾护航。"),l("br"),l("br")]),l("br"),l("br"),l("img",{src:"/assets/image10.2e3dde4b.png",alt:"",class:"image7"})],-1),ft=l("div",{class:"part3-7"},[l("div",{class:"mid-title"},[l("br"),l("br")]),l("img",{src:"/assets/image1.6b2531c1.png",alt:"",class:"part3-image"})],-1),ht=l("br",null,null,-1),gt=l("br",null,null,-1),vt=l("div",{class:"part3-8"},[l("div",{class:"mid-title"},[l("br"),l("br")])],-1),bt=l("div",{class:"part3-9"},[l("div",{class:"mid-title"},[l("br"),l("br"),l("img",{src:"/assets/二级标题-5.35d1dc80.png",alt:"",class:"mid-title-img"})]),l("div",{class:"context"},[l("br"),x(" 以蓉宝为核心的话题在国内外各类社交媒体平台都引起了不小的轰动，"),l("br"),x(" 以YouTube和Twitter为代表，数以千计的自媒体博主拍摄、转发蓉宝礼盒的开箱视频，"),l("br"),x(" 并表达了对于熊猫萌宝的赞叹和喜爱。"),l("br"),l("br")])],-1),pt={class:"part3-10"},wt=l("div",{class:"mid-title"},[l("br"),l("br")],-1),xt={class:"video-left"},Mt={class:"context-left"},kt=x(" 运动员普遍最喜爱变脸熊猫（又称“鬼火熊猫”），原因在于它有着各式各样的面具，武生面具、刀马旦面具、蓝蝴蝶面具、紫蝴蝶面具等等，在可爱的同时又很炫酷。 两名日本运动员在抽奖抽到变脸熊猫时惊喜不已，互相讨论变脸熊猫要如何变脸 "),zt={class:"video1"},Ct=["src"],yt={class:"video-right"},It={class:"context-right"},St=x(" 斯洛伐克篮球运动员也对蓉宝赞不绝口，并希望能亲眼看到真正的大熊猫 "),Tt={class:"video1"},Et=["src"],Ft=l("div",{class:"context"},[x(" 源于Instagram和Facebook等海外社交媒体平台上 网民关于“蓉宝”“大运会”“大运会蓉宝”等话题的讨论，"),l("br"),x(" 统计日期截止至2023年8月10日， 使用python进行数据爬取获取贴文信息，"),l("br"),x(" 对高频词汇进行可视化呈现，发现网民们对蓉宝的态度呈现： ")],-1),_t={class:"wow animate__animated animate__bounceInLeft"},At={class:"words"},Bt={class:"part3-11"},Rt=l("div",{class:"mid-title"},[l("br"),l("br")],-1),Lt={class:"time"},Dt=l("div",{class:"part3-12"},[l("div",{class:"mid-title"},[l("br"),l("br"),l("img",{src:"/assets/二级标题-5.35d1dc80.png",alt:"",class:"mid-title-img"})]),l("div",{class:"context"},[l("br"),x(" 大运会期间国内外新闻报道大多以蓉宝为核心向外辐射，"),l("br"),x(" 介绍成都大运会赛事日程、大运村设施储备、大运会周边游玩活动。"),l("br"),l("br")]),l("br"),l("br"),l("div",{class:"context"}," -点击进入超链接- "),l("br"),l("br"),l("a",{href:"https://www.chinadaily.com.cn/a/202307/31/WS64c6ebf9a31035260b81952d.html",target:"_blank"},[l("img",{src:"/assets/image11.6ef2ddd5.png",alt:"",class:"two-image"})]),l("a",{href:"https://www.chinadaily.com.cn/a/202308/01/WS64c81337a31035260b81985f.html",target:"_blank"},[l("img",{src:"/assets/image12.5beff173.png",alt:"",class:"two-image"})])],-1),Pt=l("div",{class:"part3-13"},[l("div",{class:"mid-title"},[l("br"),l("br"),x(" 3.13数字人文 ")]),l("div",{class:"context"},[l("br"),x(" 蓉宝作为一种文化符号，已经成为中外交流的情感纽带，"),l("br"),x(" 更成为我们讲好中国故事、加强海外传播的语言载体。"),l("br"),x(" 以大熊猫“芝麻”为原型的蓉宝也成功地带动了成都大熊猫繁育基地，"),l("br"),x(" 游客纷纷前去寻找“芝麻”打卡，也被其他家族的大熊猫吸引。"),l("br"),x(" 蓉宝原型“芝麻”成为了打卡网红，旁边刚刚出生不到一个月的熊猫也揽粉无数。"),l("br"),x(" 不少新闻媒体甚至将目光放大到全国，"),l("br"),x(" 借由蓉宝视角游历我国大好山河，例如北京颐和园、山西平遥古城、五台山等美景。"),l("br"),x(" 蓉宝已然在成都地区形成文化势能，以自身优势带动蜀味地域文化和国潮特色。"),l("br"),l("br")]),l("img",{src:"/assets/image5.f00dac0e.png",alt:"",class:"four-image"}),l("img",{src:"/assets/image6.3804b4e0.png",alt:"",class:"four-image"}),l("img",{src:"/assets/image7.8aa5a065.png",alt:"",class:"four-image"}),l("img",{src:"/assets/image8.eb817d29.png",alt:"",class:"four-image"})],-1),Ot=l("br",null,null,-1),Wt=l("br",null,null,-1),jt=l("br",null,null,-1);K.render=function(i,r,s,n,o,c){const d=p("blind"),m=p("words"),u=p("timeline");return t(),e("div",Q,[V,Z,tt,l("div",et,[at,it,rt,st,nt,ot,lt,a(d)]),ct,dt,mt,ut,ft,ht,gt,vt,bt,l("div",pt,[wt,l("div",xt,[l("div",Mt,[kt,l("div",zt,[l("video",{controls:"",muted:"",src:o.videoURL1}," 您的浏览器不支持视频播放 ",8,Ct)])])]),l("div",yt,[l("div",It,[St,l("div",Tt,[l("video",{controls:"",muted:"",src:o.videoURL2}," 您的浏览器不支持视频播放 ",8,Et)])])]),Ft,l("div",_t,[l("div",At,[a(m)])])]),l("div",Bt,[Rt,l("div",Lt,[a(u)])]),Dt,Pt,Ot,Wt,jt])};export{K as default};
