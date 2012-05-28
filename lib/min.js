$(function(){var f=function(c,a){var h=null,b=c[0].getContext("2d"),m=2*Math.PI,e,i,d,o,k=this;this.onChange=function(){};this.onCancel=function(){};this.onRelease=function(){};this.val=function(j){if(null!=j)a.stopper&&(j=Math.max(Math.min(j,a.max),a.min)),h=j,this.onChange(j),this.draw(j);else{var c,j=c=Math.atan2(e-d,-(i-o-a.width/2));0>c&&(j=c+m);j=Math.round(j*(a.max-a.min)/m)+a.min;return j>a.max?a.max:j}};this.change=function(j){a.stopper&&(j=Math.max(Math.min(j,a.max),a.min));this.onChange(j);
this.draw(j)};this.angle=function(j){return(j-a.min)*m/(a.max-a.min)};this.draw=function(j){var e=this.angle(j),d=1.5*Math.PI,g=d,c=d+this.angle(h),o=g+e,k=a.width/2,i=k*a.thickness,s=f.getCgColor(a.cgColor),A;b.clearRect(0,0,a.width,a.width);b.lineWidth=i;if(!a.draw(e,h,a,b)){for(A=0;A<a.ticks;A++){b.beginPath();b.strokeStyle=e>2*Math.PI/a.ticks*A&&a.tickColorizeValues?a.fgColor:a.tickColor;var n=2*Math.PI/a.ticks*A-0.5*Math.PI;b.arc(k,k,k-i-a.tickLength,n,n+a.tickWidth,!1);b.stroke()}a.cursor&&
(d=c-0.3)&&(c+=0.3)&&(g=o-0.3)&&(o+=0.3);switch(a.skin){case "default":b.beginPath();b.strokeStyle=a.bgColor;b.arc(k,k,k-i/2,0,m,!0);b.stroke();a.displayPrevious&&(b.beginPath(),b.strokeStyle=h==j?a.fgColor:s,b.arc(k,k,k-i/2,d,c,!1),b.stroke());b.beginPath();b.strokeStyle=a.fgColor;b.arc(k,k,k-i/2,g,o,!1);b.stroke();break;case "tron":a.displayPrevious&&(b.beginPath(),b.strokeStyle=h==j?a.fgColor:s,b.arc(k,k,k-i,d,c,!1),b.stroke()),b.beginPath(),b.strokeStyle=a.fgColor,b.arc(k,k,k-i,g,o,!1),b.stroke(),
b.lineWidth=2,b.beginPath(),b.strokeStyle=a.fgColor,b.arc(k,k,k-i+1+2*i/3,0,2*Math.PI,!1),b.stroke()}}};this.capture=function(a){switch(a.type){case "mousemove":case "mousedown":e=a.pageX;i=a.pageY;break;case "touchmove":case "touchstart":e=a.originalEvent.touches[0].pageX,i=a.originalEvent.touches[0].pageY}this.change(this.val())};this.cancel=function(){k.val(h);k.onCancel()};this.startDrag=function(e){var i=c.position(),r=$(document);d=i.left+a.width/2;o=i.top;this.capture(e);r.bind("mousemove.dial touchmove.dial",
function(g){k.capture(g)}).bind("keyup.dial",function(g){27===g.keyCode&&(r.unbind("mouseup.dial mousemove.dial keyup.dial"),k.cancel())}).bind("mouseup.dial touchend.dial",function(){r.unbind("mousemove.dial touchmove.dial mouseup.dial touchend.dial keyup.dial");k.val(k.val());k.onRelease(h)})}};f.getCgColor=function(c){c=c.substring(1,7);c=[parseInt(c.substring(0,2),16),parseInt(c.substring(2,4),16),parseInt(c.substring(4,6),16)];return"rgba("+c[0]+","+c[1]+","+c[2]+",.5)"};$.fn.knob=$.fn.dial=
function(c){return this.each(function(){var a=$(this),h;if(a.data("dialed"))return a;a.data("dialed",!0);h=$.extend({min:a.data("min")||0,max:a.data("max")||100,stopper:!0,readOnly:a.data("readonly"),cursor:a.data("cursor"),thickness:a.data("thickness")||0.35,width:a.data("width")||200,displayInput:null==a.data("displayinput")||a.data("displayinput"),displayPrevious:a.data("displayprevious"),fgColor:a.data("fgcolor")||"#87CEEB",cgColor:a.data("cgcolor")||a.data("fgcolor")||"#87CEEB",bgColor:a.data("bgcolor")||
"#EEEEEE",tickColor:a.data("tickColor")||a.data("fgcolor")||"#DDDDDD",ticks:a.data("ticks")||0,tickLength:a.data("tickLength")||0,tickWidth:a.data("tickWidth")||0.02,tickColorizeValues:a.data("tickColorizeValues")||!0,skin:a.data("skin")||"default",draw:function(){},change:function(){},release:function(){}},c);var b=$('<canvas width="'+h.width+'" height="'+h.width+'"></canvas>'),m=$("<div style=width:"+h.width+'px;display:inline;"></div>'),e,i=a.val(),d=function(){h.displayInput&&a.css({width:h.width/
2+"px",position:"absolute","margin-top":5*h.width/14+"px","margin-left":"-"+3*h.width/4+"px","font-size":h.width/4+"px",border:"none",background:"none","font-family":"Arial","font-weight":"bold","text-align":"center",color:h.fgColor,padding:"0px","-webkit-appearance":"none"})||a.css({width:"0px",visibility:"hidden"})};a.wrap(m).before(b);d();e=new f(b,h);i||(i=h.min);a.val(i);e.val(i);e.onRelease=function(e){h.release(e,a)};e.onChange=function(e){a.val(e);h.change(e)};a.bind("change",function(){e.val(a.val())});
if(h.readOnly)a.attr("readonly","readonly");else{b.bind("mousedown touchstart",function(a){a.preventDefault();e.startDrag(a)}).bind("mousewheel DOMMouseScroll",mw=function(d){d.preventDefault();var g=d.originalEvent,d=g.detail||g.wheelDeltaX,g=g.detail||g.wheelDeltaY,d=parseInt(a.val())+(0<d||0<g?1:0>d||0>g?-1:0);e.val(d)});var o,k,j=1,G={37:-1,38:1,39:1,40:-1};a.bind("configure",function(k,g){for(var j in g)h[j]=g[j];d();e.val(a.val())}).bind("keydown",function(d){var g=d.keyCode;o=parseInt(String.fromCharCode(g));
isNaN(o)&&(13!==g&&8!==g&&9!==g&&189!==g&&d.preventDefault(),-1<$.inArray(g,[37,38,39,40])&&(e.change(parseInt(a.val())+G[g]*j),k=window.setTimeout(function(){20>j&&j++},50),d.preventDefault()))}).bind("keyup",function(d){isNaN(o)?k?(window.clearTimeout(k),k=null,j=1,e.val(a.val()),e.onRelease(a.val(),a)):13===d.keyCode&&e.onRelease(a.val(),a):a.val()>h.max&&a.val(h.max)||a.val()<h.min&&a.val(h.min)}).bind("mousewheel DOMMouseScroll",mw)}}).parent()}});var speakWorker;try{speakWorker=new Worker("lib/speak/speakWorker.js")}catch(e$$19){console.log("speak.js warning: no worker support"),window.speak_error=!0}
function speak(f,c){function a(a){function d(d,e){for(var j=0,c=0;e;)j+=a[d]<<c,c+=8,d++,e--;return j}if(1!=d(20,2))throw"Invalid compression code, not PCM";if(1!=d(22,2))throw"Invalid number of channels, not 1";return{sampleRate:d(24,4),bitsPerSample:d(34,2),samples:a.subarray(44)}}function h(e){var d=Date.now();a(e);document.getElementById("spinner")&&(spinner=document.getElementById("spinner"),spinner.parentNode.removeChild(spinner));for(var c=document.getElementById("audio"),k="",j=0,m=0,h=0;h<
e.length;h++){j=j<<8|e[h];for(m+=8;6<=m;)var g=j>>m-6&63,m=m-6,k=k+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g]}2==m?(k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(j&3)<<4],k+="=="):4==m&&(k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(j&15)<<2],k+="=");c.innerHTML='<audio id="player" src="data:audio/x-wav;base64,'+k+'">';document.getElementById("player").play();b&&console.log("speak.js: wav processing took "+(Date.now()-d).toFixed(2)+
" ms")}var b=!1;if(c&&c.noWorker){var m=Date.now(),e=generateSpeech(f,c);b&&console.log("speak.js: processing took "+(Date.now()-m).toFixed(2)+" ms");h(e)}else m=Date.now(),speakWorker.onmessage=function(a){b&&console.log("speak.js: worker processing took "+(Date.now()-m).toFixed(2)+" ms");h(a.data)},speakWorker.postMessage({text:f,args:c})};var JSON;JSON||(JSON={});
(function(){function f(a){return 10>a?"0"+a:a}function c(a){b.lastIndex=0;return b.test(a)?'"'+a.replace(b,function(a){var d=i[a];return"string"===typeof d?d:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function a(b,k){var j,i,h,g,v=m,f,q=k[b];q&&"object"===typeof q&&"function"===typeof q.toJSON&&(q=q.toJSON(b));"function"===typeof d&&(q=d.call(k,b,q));switch(typeof q){case "string":return c(q);case "number":return isFinite(q)?""+q:"null";case "boolean":case "null":return""+q;
case "object":if(!q)return"null";m+=e;f=[];if("[object Array]"===Object.prototype.toString.apply(q)){g=q.length;for(j=0;j<g;j+=1)f[j]=a(j,q)||"null";h=0===f.length?"[]":m?"[\n"+m+f.join(",\n"+m)+"\n"+v+"]":"["+f.join(",")+"]";m=v;return h}if(d&&"object"===typeof d){g=d.length;for(j=0;j<g;j+=1)"string"===typeof d[j]&&(i=d[j],(h=a(i,q))&&f.push(c(i)+(m?": ":":")+h))}else for(i in q)Object.prototype.hasOwnProperty.call(q,i)&&(h=a(i,q))&&f.push(c(i)+(m?": ":":")+h);h=0===f.length?"{}":m?"{\n"+m+f.join(",\n"+
m)+"\n"+v+"}":"{"+f.join(",")+"}";m=v;return h}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var h=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,m,e,i={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},d;"function"!==typeof JSON.stringify&&(JSON.stringify=function(c,k,j){var i;e=m="";if(typeof j==="number")for(i=0;i<j;i=i+1)e=e+" ";else typeof j==="string"&&(e=j);if((d=k)&&typeof k!=="function"&&(typeof k!=="object"||typeof k.length!=="number"))throw Error("JSON.stringify");return a("",
{"":c})});"function"!==typeof JSON.parse&&(JSON.parse=function(a,d){function e(a,g){var c,i,b=a[g];if(b&&typeof b==="object")for(c in b)if(Object.prototype.hasOwnProperty.call(b,c)){i=e(b,c);i!==void 0?b[c]=i:delete b[c]}return d.call(a,g,b)}var c,a=""+a;h.lastIndex=0;h.test(a)&&(a=a.replace(h,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){c=eval("("+a+")");return typeof d==="function"?e({"":c},""):c}throw new SyntaxError("JSON.parse");})})();(function(f){if(!f.Base64){var c=function(a){for(var d={},e=0,c=a.length;e<c;e++)d[a.charAt(e)]=e;return d}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),a=function(a){a=a.charCodeAt(0)<<16|a.charCodeAt(1)<<8|a.charCodeAt(2);return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a>>>18)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a>>>12&63)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a>>>6&63)+
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a&63)},h=function(d){if(d.match(/[^\x00-\xFF]/))throw"unsupported character found";for(var e=0;d.length%3;)d+="\x00",e++;d=d.replace(/[\x00-\xFF]{3}/g,a);if(!e)return d;for(d=d.substr(0,d.length-e);e--;)d+="=";return d},b=f.btoa||h,m=function(a){a=c[a.charAt(0)]<<18|c[a.charAt(1)]<<12|c[a.charAt(2)]<<6|c[a.charAt(3)];return String.fromCharCode(a>>16)+String.fromCharCode(a>>8&255)+String.fromCharCode(a&255)},e=function(a){for(var a=
a.replace(/[^A-Za-z0-9\+\/]/g,""),d=0;a.length%4;)a+="A",d++;a=a.replace(/[A-Za-z0-9\+\/]{4}/g,m);2<=d&&(a=a.substring(0,a.length-[0,0,2,1][d]));return a},i=f.atob||e,d=/[^\x00-\x7F]/g,o=function(a){a=a.charCodeAt(0);return 2048>a?String.fromCharCode(192|a>>>6)+String.fromCharCode(128|a&63):String.fromCharCode(224|a>>>12&15)+String.fromCharCode(128|a>>>6&63)+String.fromCharCode(128|a&63)},k=function(a){return a.replace(d,o)},j=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
G=function(a){var d=a.charCodeAt(0),e=a.charCodeAt(1);if(224>d)return String.fromCharCode((d&31)<<6|e&63);a=a.charCodeAt(2);return String.fromCharCode((d&15)<<12|(e&63)<<6|a&63)},r=function(a){return a.replace(j,G)};f.Base64={fromBase64:e,toBase64:h,atob:i,btoa:b,utob:k,btou:r,encode:function(a){return b(k(a))},encodeURI:function(a){return b(k(a)).replace(/[+\/]/g,function(a){return"+"==a?"-":"_"}).replace(/=+$/,"")},decode:function(a){return r(i(a.replace(/[-_]/g,function(a){return"-"==a?"+":"/"})))}}}})(this);(function(){var f,c,a=null,h,b,m,e,i,d,o,k,j,G,r,g,v,L,q=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],V=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99],A=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],n=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],S=[16,17,18,0,8,7,9,6,10,
5,11,4,12,3,13,2,14,1,15],M=function(){this.list=this.next=null},B=function(){this.n=this.b=this.e=0;this.t=null},W=function(a,d,e,c,j,i){this.BMAX=16;this.N_MAX=288;this.status=0;this.root=null;this.m=0;var b=Array(this.BMAX+1),k,h,m,g,p,f,o,n=Array(this.BMAX+1),r,s,t,q=new B,z=Array(this.BMAX);g=Array(this.N_MAX);var E,x=Array(this.BMAX+1),A,v,G;G=this.root=null;for(p=0;p<b.length;p++)b[p]=0;for(p=0;p<n.length;p++)n[p]=0;for(p=0;p<z.length;p++)z[p]=null;for(p=0;p<g.length;p++)g[p]=0;for(p=0;p<x.length;p++)x[p]=
0;k=256<d?a[256]:this.BMAX;r=a;s=0;p=d;do b[r[s]]++,s++;while(0<--p);if(b[0]==d)this.root=null,this.status=this.m=0;else{for(f=1;f<=this.BMAX&&0==b[f];f++);o=f;i<f&&(i=f);for(p=this.BMAX;0!=p&&0==b[p];p--);m=p;i>p&&(i=p);for(A=1<<f;f<p;f++,A<<=1)if(0>(A-=b[f])){this.status=2;this.m=i;return}if(0>(A-=b[p]))this.status=2,this.m=i;else{b[p]+=A;x[1]=f=0;r=b;s=1;for(t=2;0<--p;)x[t++]=f+=r[s++];r=a;p=s=0;do if(0!=(f=r[s++]))g[x[f]++]=p;while(++p<d);d=x[m];x[0]=p=0;r=g;s=0;g=-1;E=n[0]=0;t=null;for(v=0;o<=
m;o++)for(a=b[o];0<a--;){for(;o>E+n[1+g];){E+=n[1+g];g++;v=(v=m-E)>i?i:v;if((h=1<<(f=o-E))>a+1){h-=a+1;for(t=o;++f<v&&!((h<<=1)<=b[++t]);)h-=b[t]}E+f>k&&E<k&&(f=k-E);v=1<<f;n[1+g]=f;t=Array(v);for(h=0;h<v;h++)t[h]=new B;G=null==G?this.root=new M:G.next=new M;G.next=null;G.list=t;z[g]=t;0<g&&(x[g]=p,q.b=n[g],q.e=16+f,q.t=t,f=(p&(1<<E)-1)>>E-n[g],z[g-1][f].e=q.e,z[g-1][f].b=q.b,z[g-1][f].n=q.n,z[g-1][f].t=q.t)}q.b=o-E;s>=d?q.e=99:r[s]<e?(q.e=256>r[s]?16:15,q.n=r[s++]):(q.e=j[r[s]-e],q.n=c[r[s++]-e]);
h=1<<o-E;for(f=p>>E;f<v;f+=h)t[f].e=q.e,t[f].b=q.b,t[f].n=q.n,t[f].t=q.t;for(f=1<<o-1;0!=(p&f);f>>=1)p^=f;for(p^=f;(p&(1<<E)-1)!=x[g];)E-=n[g],g--}this.m=n[1];this.status=0!=A&&1!=m?1:0}}},z=function(a){for(;e<a;)m|=(v.length==L?-1:v.charCodeAt(L++)&255)<<e,e+=8},t=function(a){return m&q[a]},x=function(a){m>>=a;e-=a},J=function(a,d,e){var b,u,h;if(0==e)return 0;for(h=0;;){z(r);u=j.list[t(r)];for(b=u.e;16<b;){if(99==b)return-1;x(u.b);b-=16;z(b);u=u.t[t(b)];b=u.e}x(u.b);if(16==b)c&=32767,a[d+h++]=f[c++]=
u.n;else{if(15==b)break;z(b);o=u.n+t(b);x(b);z(g);u=G.list[t(g)];for(b=u.e;16<b;){if(99==b)return-1;x(u.b);b-=16;z(b);u=u.t[t(b)];b=u.e}x(u.b);z(b);k=c-u.n-t(b);for(x(b);0<o&&h<e;)o--,k&=32767,c&=32767,a[d+h++]=f[c++]=f[k++]}if(h==e)return e}i=-1;return h},O=function(a,d,e){var b,c,f,i,h,k,m,o=Array(316);for(b=0;b<o.length;b++)o[b]=0;z(5);k=257+t(5);x(5);z(5);m=1+t(5);x(5);z(4);b=4+t(4);x(4);if(286<k||30<m)return-1;for(c=0;c<b;c++)z(3),o[S[c]]=t(3),x(3);for(;19>c;c++)o[S[c]]=0;r=7;c=new W(o,19,19,
null,null,r);if(0!=c.status)return-1;j=c.root;r=c.m;i=k+m;for(b=f=0;b<i;)if(z(r),h=j.list[t(r)],c=h.b,x(c),c=h.n,16>c)o[b++]=f=c;else if(16==c){z(2);c=3+t(2);x(2);if(b+c>i)return-1;for(;0<c--;)o[b++]=f}else{17==c?(z(3),c=3+t(3),x(3)):(z(7),c=11+t(7),x(7));if(b+c>i)return-1;for(;0<c--;)o[b++]=0;f=0}r=9;c=new W(o,k,257,V,s,r);0==r&&(c.status=1);if(0!=c.status)return-1;j=c.root;r=c.m;for(b=0;b<m;b++)o[b]=o[b+k];g=6;c=new W(o,m,0,A,n,g);G=c.root;g=c.m;return 0==g&&257<k||0!=c.status?-1:J(a,d,e)},P=function(q,
H,v){var y,u;for(y=0;y<v&&!(d&&-1==i);){if(0<o){if(0!=i)for(;0<o&&y<v;)o--,k&=32767,c&=32767,q[H+y++]=f[c++]=f[k++];else{for(;0<o&&y<v;)o--,c&=32767,z(8),q[H+y++]=f[c++]=t(8),x(8);0==o&&(i=-1)}if(y==v)break}if(-1==i){if(d)break;z(1);0!=t(1)&&(d=!0);x(1);z(2);i=t(2);x(2);j=null;o=0}switch(i){case 0:u=q;var B=H+y,F=v-y,D=void 0,D=e&7;x(D);z(16);D=t(16);x(16);z(16);if(D!=(~m&65535))u=-1;else{x(16);o=D;for(D=0;0<o&&D<F;)o--,c&=32767,z(8),u[B+D++]=f[c++]=t(8),x(8);0==o&&(i=-1);u=D}break;case 1:if(null!=
j)u=J(q,H+y,v-y);else a:{u=q;B=H+y;F=v-y;if(null==a){for(var w=void 0,D=Array(288),w=void 0,w=0;144>w;w++)D[w]=8;for(;256>w;w++)D[w]=9;for(;280>w;w++)D[w]=7;for(;288>w;w++)D[w]=8;b=7;w=new W(D,288,257,V,s,b);if(0!=w.status){alert("HufBuild error: "+w.status);u=-1;break a}a=w.root;b=w.m;for(w=0;30>w;w++)D[w]=5;zip_fixed_bd=5;w=new W(D,30,0,A,n,zip_fixed_bd);if(1<w.status){a=null;alert("HufBuild error: "+w.status);u=-1;break a}h=w.root;zip_fixed_bd=w.m}j=a;G=h;r=b;g=zip_fixed_bd;u=J(u,B,F)}break;case 2:u=
null!=j?J(q,H+y,v-y):O(q,H+y,v-y);break;default:u=-1}if(-1==u)return d?0:-1;y+=u}return y};window.RawDeflate||(RawDeflate={});RawDeflate.inflate=function(a){var b;null==f&&(f=Array(65536));e=m=c=0;i=-1;d=!1;o=k=0;j=null;v=a;L=0;for(var h=Array(1024),g=[];0<(a=P(h,0,h.length));){var n=Array(a);for(b=0;b<a;b++)n[b]=String.fromCharCode(h[b]);g[g.length]=n.join("")}v=null;return g.join("")}})();(function(){var f,c,a,h,b=null,m,e,i,d,o,k,j,G,r,g,v,L,q,V,s,A,n,S,M,B,W,z,t,x,J,O,P,X,H,N,y,u,I,F,D,w,Q,aa,p,oa,fa,ga,T,ha,pa,Y,ba,E,Z,ia,qa,ca=function(){this.dl=this.fc=0},ra=function(){this.extra_bits=this.static_tree=this.dyn_tree=null;this.max_code=this.max_length=this.elems=this.extra_base=0},R=function(a,d,b,l){this.good_length=a;this.max_lazy=d;this.nice_length=b;this.max_chain=l},Ja=function(){this.next=null;this.len=0;this.ptr=Array(8192);this.off=0},sa=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,
3,3,3,3,4,4,4,4,5,5,5,5,0],da=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ka=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],xa=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ta=[new R(0,0,0,0),new R(4,4,8,4),new R(4,5,16,8),new R(4,6,32,32),new R(4,4,16,16),new R(8,16,32,32),new R(8,16,128,128),new R(8,32,128,256),new R(32,128,258,1024),new R(32,258,258,4096)],ka=function(d){b[e+m++]=d;if(8192==e+m&&0!=m){var i;null!=f?(d=f,f=f.next):d=new Ja;d.next=null;d.len=d.off=0;null==c?
c=a=d:a=a.next=d;d.len=m-e;for(i=0;i<d.len;i++)d.ptr[i]=b[e+i];m=e=0}},la=function(a){a&=65535;8190>e+m?(b[e+m++]=a&255,b[e+m++]=a>>>8):(ka(a&255),ka(a>>>8))},ma=function(){v=(v<<5^d[n+3-1]&255)&8191;L=j[32768+v];j[n&32767]=L;j[32768+v]=n},U=function(a,d){K(d[a].fc,d[a].dl)},ya=function(a,d,b){return a[d].fc<a[b].fc||a[d].fc==a[b].fc&&Q[d]<=Q[b]},za=function(a,d,b){var l;for(l=0;l<b&&qa<ia.length;l++)a[d+l]=ia.charCodeAt(qa++)&255;return l},Aa=function(a){var b=W,c=n,l,e=A,i=32506<n?n-32506:0,f=n+
258,h=d[c+e-1],k=d[c+e];A>=x&&(b>>=2);do if(l=a,!(d[l+e]!=k||d[l+e-1]!=h||d[l]!=d[c]||d[++l]!=d[c+1])){c+=2;l++;do;while(d[++c]==d[++l]&&d[++c]==d[++l]&&d[++c]==d[++l]&&d[++c]==d[++l]&&d[++c]==d[++l]&&d[++c]==d[++l]&&d[++c]==d[++l]&&d[++c]==d[++l]&&c<f);l=258-(f-c);c=f-258;if(l>e){S=a;e=l;if(258<=l)break;h=d[c+e-1];k=d[c+e]}}while((a=j[a&32767])>i&&0!=--b);return e},ua=function(){var a,b,c=65536-B-n;if(-1==c)c--;else if(65274<=n){for(a=0;32768>a;a++)d[a]=d[a+32768];S-=32768;n-=32768;g-=32768;for(a=
0;8192>a;a++)b=j[32768+a],j[32768+a]=32768<=b?b-32768:0;for(a=0;32768>a;a++)b=j[a],j[a]=32768<=b?b-32768:0;c+=32768}M||(a=za(d,n+B,c),0>=a?M=!0:B+=a)},La=function(a,b,ja){var l;if(!h){if(!M){r=G=0;var C,f;if(0==X[0].dl){N.dyn_tree=J;N.static_tree=P;N.extra_bits=sa;N.extra_base=257;N.elems=286;N.max_length=15;N.max_code=0;y.dyn_tree=O;y.static_tree=X;y.extra_bits=da;y.extra_base=0;y.elems=30;y.max_length=15;y.max_code=0;u.dyn_tree=H;u.static_tree=null;u.extra_bits=Ka;u.extra_base=0;u.elems=19;u.max_length=
7;for(f=C=u.max_code=0;28>f;f++){oa[f]=C;for(l=0;l<1<<sa[f];l++)aa[C++]=f}aa[C-1]=f;for(f=C=0;16>f;f++){fa[f]=C;for(l=0;l<1<<da[f];l++)p[C++]=f}for(C>>=7;30>f;f++){fa[f]=C<<7;for(l=0;l<1<<da[f]-7;l++)p[256+C++]=f}for(l=0;15>=l;l++)I[l]=0;for(l=0;143>=l;)P[l++].dl=8,I[8]++;for(;255>=l;)P[l++].dl=9,I[9]++;for(;279>=l;)P[l++].dl=7,I[7]++;for(;287>=l;)P[l++].dl=8,I[8]++;Ba(P,287);for(l=0;30>l;l++)X[l].dl=5,X[l].fc=Ca(l,5);Da()}for(l=0;8192>l;l++)j[32768+l]=0;z=ta[t].max_lazy;x=ta[t].good_length;W=ta[t].max_chain;
g=n=0;B=za(d,0,65536);if(0>=B)M=!0,B=0;else{for(M=!1;262>B&&!M;)ua();for(l=v=0;2>l;l++)v=(v<<5^d[l]&255)&8191}c=null;e=m=0;3>=t?(A=2,s=0):(s=2,V=0);i=!1}h=!0;if(0==B)return i=!0,0}if((l=Ea(a,b,ja))==ja)return ja;if(i)return l;if(3>=t)for(;0!=B&&null==c;){ma();0!=L&&32506>=n-L&&(s=Aa(L),s>B&&(s=B));if(3<=s)if(f=ea(n-S,s-3),B-=s,s<=z){s--;do n++,ma();while(0!=--s);n++}else n+=s,s=0,v=d[n]&255,v=(v<<5^d[n+1]&255)&8191;else f=ea(0,d[n]&255),B--,n++;f&&(na(0),g=n);for(;262>B&&!M;)ua()}else for(;0!=B&&
null==c;){ma();A=s;q=S;s=2;0!=L&&A<z&&32506>=n-L&&(s=Aa(L),s>B&&(s=B),3==s&&4096<n-S&&s--);if(3<=A&&s<=A){f=ea(n-1-q,A-3);B-=A-1;A-=2;do n++,ma();while(0!=--A);V=0;s=2;n++;f&&(na(0),g=n)}else 0!=V?ea(0,d[n-1]&255)&&(na(0),g=n):V=1,n++,B--;for(;262>B&&!M;)ua()}0==B&&(0!=V&&ea(0,d[n-1]&255),na(1),i=!0);return l+Ea(a,l+b,ja-l)},Ea=function(a,d,i){var l,C,h;for(l=0;null!=c&&l<i;){C=i-l;C>c.len&&(C=c.len);for(h=0;h<C;h++)a[d+l+h]=c.ptr[c.off+h];c.off+=C;c.len-=C;l+=C;0==c.len&&(C=c,c=c.next,C.next=f,f=
C)}if(l==i)return l;if(e<m){C=i-l;C>m-e&&(C=m-e);for(h=0;h<C;h++)a[d+l+h]=b[e+h];e+=C;l+=C;m==e&&(m=e=0)}return l},Da=function(){var a;for(a=0;286>a;a++)J[a].fc=0;for(a=0;30>a;a++)O[a].fc=0;for(a=0;19>a;a++)H[a].fc=0;J[256].fc=1;Y=T=ha=pa=E=Z=0;ba=1},va=function(a,d){for(var b=F[d],c=d<<1;c<=D;){c<D&&ya(a,F[c+1],F[c])&&c++;if(ya(a,b,F[c]))break;F[d]=F[c];d=c;c<<=1}F[d]=b},Ba=function(a,d){var c=Array(16),b=0,e;for(e=1;15>=e;e++)b=b+I[e-1]<<1,c[e]=b;for(b=0;b<=d;b++)e=a[b].dl,0!=e&&(a[b].fc=Ca(c[e]++,
e))},wa=function(a){var d=a.dyn_tree,b=a.static_tree,c=a.elems,e,f=-1,i=c;D=0;w=573;for(e=0;e<c;e++)0!=d[e].fc?(F[++D]=f=e,Q[e]=0):d[e].dl=0;for(;2>D;)e=F[++D]=2>f?++f:0,d[e].fc=1,Q[e]=0,E--,null!=b&&(Z-=b[e].dl);a.max_code=f;for(e=D>>1;1<=e;e--)va(d,e);do e=F[1],F[1]=F[D--],va(d,1),b=F[1],F[--w]=e,F[--w]=b,d[i].fc=d[e].fc+d[b].fc,Q[i]=Q[e]>Q[b]+1?Q[e]:Q[b]+1,d[e].dl=d[b].dl=i,F[1]=i++,va(d,1);while(2<=D);F[--w]=F[1];i=a.dyn_tree;e=a.extra_bits;var c=a.extra_base,b=a.max_code,h=a.max_length,k=a.static_tree,
j,g,m,o,n=0;for(g=0;15>=g;g++)I[g]=0;i[F[w]].dl=0;for(a=w+1;573>a;a++)if(j=F[a],g=i[i[j].dl].dl+1,g>h&&(g=h,n++),i[j].dl=g,!(j>b))I[g]++,m=0,j>=c&&(m=e[j-c]),o=i[j].fc,E+=o*(g+m),null!=k&&(Z+=o*(k[j].dl+m));if(0!=n){do{for(g=h-1;0==I[g];)g--;I[g]--;I[g+1]+=2;I[h]--;n-=2}while(0<n);for(g=h;0!=g;g--)for(j=I[g];0!=j;)e=F[--a],e>b||(i[e].dl!=g&&(E+=(g-i[e].dl)*i[e].fc,i[e].fc=g),j--)}Ba(d,f)},Fa=function(a,d){var b,e=-1,c,f=a[0].dl,i=0,h=7,g=4;0==f&&(h=138,g=3);a[d+1].dl=65535;for(b=0;b<=d;b++)if(c=f,
f=a[b+1].dl,!(++i<h&&c==f))(i<g?H[c].fc+=i:0!=c?(c!=e&&H[c].fc++,H[16].fc++):10>=i?H[17].fc++:H[18].fc++,i=0,e=c,0==f)?(h=138,g=3):c==f?(h=6,g=3):(h=7,g=4)},Ga=function(a,d){var b,c=-1,e,f=a[0].dl,i=0,h=7,g=4;0==f&&(h=138,g=3);for(b=0;b<=d;b++)if(e=f,f=a[b+1].dl,!(++i<h&&e==f)){if(i<g){do U(e,H);while(0!=--i)}else 0!=e?(e!=c&&(U(e,H),i--),U(16,H),K(i-3,2)):10>=i?(U(17,H),K(i-3,3)):(U(18,H),K(i-11,7));i=0;c=e;0==f?(h=138,g=3):e==f?(h=6,g=3):(h=7,g=4)}},na=function(a){var b,c,e,f;f=n-g;ga[pa]=Y;wa(N);
wa(y);Fa(J,N.max_code);Fa(O,y.max_code);wa(u);for(e=18;3<=e&&0==H[xa[e]].dl;e--);E+=3*(e+1)+14;b=E+3+7>>3;c=Z+3+7>>3;c<=b&&(b=c);if(f+4<=b&&0<=g){K(0+a,3);Ha();la(f);la(~f);for(e=0;e<f;e++)ka(d[g+e])}else if(c==b)K(2+a,3),Ia(P,X);else{K(4+a,3);f=N.max_code+1;b=y.max_code+1;e+=1;K(f-257,5);K(b-1,5);K(e-4,4);for(c=0;c<e;c++)K(H[xa[c]].dl,3);Ga(J,f-1);Ga(O,b-1);Ia(J,O)}Da();0!=a&&Ha()},ea=function(a,b){k[T++]=b;0==a?J[b].fc++:(a--,J[aa[b]+256+1].fc++,O[(256>a?p[a]:p[256+(a>>7)])&255].fc++,o[ha++]=a,
Y|=ba);ba<<=1;0==(T&7)&&(ga[pa++]=Y,Y=0,ba=1);if(2<t&&0==(T&4095)){var e=8*T,d=n-g,c;for(c=0;30>c;c++)e+=O[c].fc*(5+da[c]);e>>=3;if(ha<parseInt(T/2)&&e<parseInt(d/2))return!0}return 8191==T||8192==ha},Ia=function(a,e){var b,c=0,d=0,f=0,i=0,h,g;if(0!=T){do{0==(c&7)&&(i=ga[f++]);b=k[c++]&255;if(0==(i&1))U(b,a);else if(h=aa[b],U(h+256+1,a),g=sa[h],0!=g&&(b-=oa[h],K(b,g)),b=o[d++],h=(256>b?p[b]:p[256+(b>>7)])&255,U(h,e),g=da[h],0!=g)b-=fa[h],K(b,g);i>>=1}while(c<T)}U(256,a)},K=function(a,b){r>16-b?(G|=
a<<r,la(G),G=a>>16-r,r+=b-16):(G|=a<<r,r+=b)},Ca=function(a,b){var e=0;do e|=a&1,a>>=1,e<<=1;while(0<--b);return e>>1},Ha=function(){8<r?la(G):0<r&&ka(G);r=G=0};window.RawDeflate||(RawDeflate={});RawDeflate.deflate=function(e,i){var g,l;ia=e;qa=0;"undefined"==typeof i&&(i=6);(g=i)?1>g?g=1:9<g&&(g=9):g=6;t=g;M=h=!1;if(null==b){f=c=a=null;b=Array(8192);d=Array(65536);o=Array(8192);k=Array(32832);j=Array(65536);J=Array(573);for(g=0;573>g;g++)J[g]=new ca;O=Array(61);for(g=0;61>g;g++)O[g]=new ca;P=Array(288);
for(g=0;288>g;g++)P[g]=new ca;X=Array(30);for(g=0;30>g;g++)X[g]=new ca;H=Array(39);for(g=0;39>g;g++)H[g]=new ca;N=new ra;y=new ra;u=new ra;I=Array(16);F=Array(573);Q=Array(573);aa=Array(256);p=Array(512);oa=Array(29);fa=Array(30);ga=Array(1024)}for(var m=Array(1024),n=[];0<(g=La(m,0,m.length));){var q=Array(g);for(l=0;l<g;l++)q[l]=String.fromCharCode(m[l]);n[n.length]=q.join("")}ia=null;return n.join("")}})();(function(){var f,c,a,h,b,m;f=function(a){var b,c,f;b=0;for(f in a)c=a[f],b+=c.charCodeAt(0)*(f+1);return b%10};m=function(a){var b,a=RawDeflate.deflate(a),a=Base64.toBase64(a);b=f(a);a+=b;(window.location.search||""!==window.location.search)&&history.pushState({},"","/");window.location.hash=a;return!0};b=function(a){$("#error").html(null!=a?a:'<b>Sorry, it seems Lalo.li - Short Voice Message Service does not work correctly on your plattform.</b><br>Please download the latest desktop version of <a href="https://www.google.com/chrome">Chrome</a> or <a href="http://www.mozilla.org/en-US/firefox/new/">Firefox</a>!<br><b>Technical Background</b>: Lalo.li works with <a href="https://developer.mozilla.org/En/Using_web_workers">Webworkers</a> and <a href="https://developer.mozilla.org/en/JavaScript_typed_arrays">TypedArrays</a>.<br>These are cutting edge HTML5 features currently only <i>fully</i> supported by the browsers mentioned above.').fadeIn();
return!1};c=function(){if(!0===window.speak_error)return b()};a=function(){var a;a={text:$("#text").val(),amplitude:parseInt($("#amplitude").val()),wordgap:parseInt($("#wordgap").val()),pitch:parseInt($("#pitch").val()),speed:parseInt($("#speed").val())};return m(JSON.stringify(a))};h=function(a,b,d,f,h){null==b&&(b=null);null==d&&(d=null);null==f&&(f=null);null==h&&(h=null);a=(null!=a?a:$("#text").val())||"Please enter your message.";b=null!=b?b:parseInt($("#amplitude").val())||100;d=null!=d?d:parseInt($("#wordgap").val())||
0;f=null!=f?f:parseInt($("#pitch").val())||50;h=null!=h?h:parseInt($("#speed").val())||175;try{return speak(a,{amplitude:b,wordgap:d,pitch:f,speed:h})}catch(j){return window.speak_error=!0}finally{return c(),a}};$(function(){$(".dial").knob();return $(window).load(function(){var c,i,d;window.onerror=function(){return b()};$.browser.opera&&b();(c=window.location.hash||window.location.search)?(i=c.replace(/^(#|\?)/,""),c=i.slice(0,i.length-2+1||9E9),i=parseInt(i.slice(i.length-1,i.length+1||9E9)),i!==
f(c)?$("#text").val(h("Something got corrupted!")):(c=Base64.fromBase64(c),c=RawDeflate.inflate(c),d=JSON.parse(c),$("#text").val(d.text),$("#amplitude").val(parseInt(d.amplitude)),$("#amplitude").trigger("configure"),$("#wordgap").val(parseInt(d.wordgap)),$("wordgap").trigger("configure"),$("#pitch").val(parseInt(d.pitch)),$("#pitch").trigger("configure"),$("#speed").val(parseInt(d.speed)),$("#speed").trigger("configure"),window.setTimeout(function(){return h(d.text)},250))):window.setTimeout(function(){return h($("#text").val())},
500);""===$("#text").val()&&$("#text").val("Please enter your message.");$("#controllarea").css("visibility","visible").hide().fadeIn("slow");$("#text").focus(function(){return this.select()});$("#text").get(0).focus();window.setTimeout(function(){return h("i love you")},9E5);$("#speak").on("submit",function(){console.log("submit");try{return h()}catch(a){return b()}finally{return false}});$("#text").on("keyup",function(){return a()});$(".dial").trigger("configure",{release:function(){a();return console.log("release in dial")}});
$("#twitter").on("click",function(){return this.href="http://twitter.com/intent/tweet?text="+encodeURIComponent("Voice Message")+"&url=http://www.lalo.li/?"+(window.location.hash.slice(1)||window.location.search.slice(1))});$("#gplus").on("click",function(){return this.href="https://plus.google.com/share?url=http://www.lalo.li/?"+(window.location.hash.slice(1)||window.location.search.slice(1))});return $("#facebook").on("click",function(){return this.href="https://www.facebook.com/sharer.php?u=http://www.lalo.li/?"+
(window.location.hash.slice(1)||window.location.search.slice(1))+"&t="+encodeURIComponent("Voice Message")})})})}).call(this);