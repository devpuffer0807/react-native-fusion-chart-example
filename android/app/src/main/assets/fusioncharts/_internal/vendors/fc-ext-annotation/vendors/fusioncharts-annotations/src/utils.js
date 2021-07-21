let lineHeightFactor=1.2,breakPlaceholder=/\{br\}\s*/ig,BLANK='',BREAKSTRING='<br />';const toRaphaelColor=function(){var a={};return function(b){b=b||this;var c,d,e,f,g,h,j=b&&b.FCcolor||b,k=j.color,m=j.ratio,n=j.angle,o=j.alpha,p=j.r,q=j.cx,r=j.cy,s=j.fx,t=j.fy,u=j.gradientUnits,v=j.x1,w=j.y1,x=j.x2,y=j.y2,z=j.radialGradient,A=1;if('string'==typeof b)return a[h='~'+b]||(a[h]=b.replace(/^#?([a-f0-9]{3,6})/ig,'#$1'));if(k=k||'',!k)return d;if(c=new RegExp(/[\(\)\s,\xb0#]/g),h=[k,o,m,n,p,q,r,u,s,t,v,x,w,y,z].join('_').replace(c,'_'),a[h])return a[h];if(m=m&&(m+'').split(',')||[],o=(o||0===o)&&(o+'').split(',')||[],k=k.split(','))if(d='',1===k.length)g=k[0].replace(/^#?([a-f0-9]{3,6})/ig,'$1'),d=o.length?'rgba('+hexToRgb(g).join(',')+','+.01*parseFloat(o[0])+')':g.replace(/^#?([a-f0-9]{3,6})/ig,'#$1');else{for(e=0,f=k.length;e<f;e++)g=k[e].replace(/^#?([a-f0-9]{3,6})/ig,'$1'),isNaN(m[e])||(m[e]=parseFloat(m[e]),g+=':'+m[e],!isNaN(m[e+1])&&(m[e+1]=parseFloat(m[e+1])+m[e])),isNaN(o[e])||''===o[e]||(A=.01*o[e]),k[e]='rgba('+hexToRgb(g).join(',')+','+A+')',isNaN(m[e])||(m[e]===m[e-1]&&(m[e]+=.001),k[e]=k[e]+':'+m[e]);d+=k.join('-'),'undefined'!=typeof p||'undefined'!=typeof s||'undefined'!=typeof q||j.radialGradient?d='xr('+[s,t,p,q,r,u].join(',')+')'+d:(d='-'+d,('undefined'!=typeof v||'undefined'!=typeof w||'undefined'!=typeof x||'undefined'!=typeof y)&&(d='('+[v,w,x,y,u].join(',')+')'+d),'undefined'==typeof n&&(n=0),d=360-parseFloat(n)%360+d)}return a[h]=d,d}}();function parseUnsafeString(a){return'string'==typeof a?a.replace(breakPlaceholder,BREAKSTRING):BLANK}function pluckNumber(...a){var b,c,d;for(c=0,d=a.length;c<d;c+=1){if(b=a[c],!b&&!1!==b&&0!==b)continue;else if(isNaN(b=+b))continue;return b}}function pluckBoolean(...a){let b,c,d;for(c=0,d=a.length;c<d;c++)if(b=a[c],!0===b||!1===b)return b;return!1}function hexToRgb(a){var c=Math.floor,d=parseInt(a,16),e=c(d/65536),f=c((d-65536*e)/256),g=c(d-65536*e-256*f);return[e,f,g]}function pluck(...a){var b,c,d;for(c=0,d=a.length;c<d;c+=1)if(b=a[c],b||!1===b||0===b||''===b)return b}function pluckFontSize(...a){var b,c,d;for(c=0,d=a.length;c<d;c+=1){if(b=a[c],!b&&!1!==b&&0!==b)continue;else if(isNaN(b=+b))continue;return 1>b?1:b}return 1}function toPrecision(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c}function getFirstValue(...a){var b,c,d;for(c=0,d=a.length;c<d;c+=1)if(b=a[c],b||!1===b||0===b)return b;return''}function getDashStyle(a,b){return[a,b]}function setLineHeightFactor(a){a=parseFloat(a);!a||0>a||(lineHeightFactor=a)}function getLineHeightFactor(){return lineHeightFactor}function setLineHeight(a,b){return'object'==typeof a?((a.fontSize||a['font-size'])&&(!a.fontSize&&a['font-size']&&(a.fontSize=a['font-size'],delete a['font-size']),a.lineHeight=(parseFloat(a.fontSize)||b||10)*getLineHeightFactor()+'px',delete a['line-height']),!a.lineHeight&&a['line-height']&&(a.lineHeight=a['line-height'],delete a['line-height']),a.lineHeight):''}function clampNumber(a,b=-Infinity,c=1/0){return a<=b?b:a>=c?c:a}function getValidValue(a,b){return a||!1===a||0===a?a:b}function getSuggestiveRotation(){var a,b,c,d;return a=arguments[0],1===arguments.length?(b=a.angle,c=a.x,d=a.y):(b=a,c=arguments[1],d=arguments[2]),b=b||0,'r'+b+','+c+','+d}function trim(a){return a.replace(/^\s+|\s+$/g,'')}export{pluckNumber,pluckBoolean,pluck,pluckFontSize,toPrecision,getFirstValue,toRaphaelColor,getDashStyle,setLineHeight,getLineHeightFactor,setLineHeightFactor,clampNumber,getValidValue,getSuggestiveRotation,parseUnsafeString,trim};