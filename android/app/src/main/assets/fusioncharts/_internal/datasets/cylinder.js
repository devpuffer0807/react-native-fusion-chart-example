import{preDefStr,COMMASTRING,toRaphaelColor,pluckNumber,BLANKSTRING}from'../lib/lib';import{convertColor,getDarkColor,getLightColor}from'../lib/lib-graphics';import CylinderThermometerBase from'./cylinderthermometerbase';import{addDep}from'../dependency-manager';import cylinderAnimation from'../animation-rules/cylinder-animation';var A='A',math=Math,mathMax=math.max,mathMin=math.min,ROLLOVER='DataPlotRollOver',ROLLOUT='DataPlotRollOut',win=window,userAgent=win.navigator.userAgent,isIE=/msie/i.test(userAgent)&&!win.opera,Z='Z',HUNDREDPERCENT='100%',zeroCommaHundredStr='0,100',topLightGlowAlphaStr='40,0',btnBorderLightAlphaStr='50,50,50,50,50,70,50,50',btnBorderLightRatioStr='0,15,0,12,0,15,43,15',backAlphaStr='30,30,30,30,30,30,30,30',backRatioStr='0,15,43,15,0,12,0,15',frontRatioStr='0,15,0,12,0,15,43,15',TRACKER_FILL='rgba(192,192,192,'+(isIE?.002:1e-6)+')',M='M',L='L',EVENTARGS='eventArgs',POSITION_TOP=preDefStr.POSITION_TOP,POSITION_MIDDLE=preDefStr.POSITION_MIDDLE,getScaleFactor=function(a,b,c,d){var e;return b=pluckNumber(b,d),a=pluckNumber(a,c),e=b&&a?a/c==b/d?c/a:Math.min(c/a,d/b):1,e};addDep({name:'cylinderAnimation',type:'animationRule',extension:cylinderAnimation});class CylinderDataset extends CylinderThermometerBase{getType(){return'dataset'}getName(){return'cylinder'}_manageSpace(){var a,b,c,d,e,f,g=this,h=g.getFromEnv('chart'),i=h.config,j=i.width,k=i.height,l=i.canvasWidth,m=i.canvasHeight,n=i.canvasLeft,o=i.canvasTop,p=i.canvasRight,q=i.xDefined,r=i.yDefined,s=i.rDefined,t=i.hDefined,u=i.gaugeOriginX,v=i.gaugeOriginY,w=i.gaugeRadius,x=i.gaugeHeight,y=i.gaugeYScale,z=getScaleFactor(i.origW,i.origH,j,k),A=0,B=0,C=0,D=0;return e=g._getLabelSpace(),m-=e,B+=e,s?w*=z:w=mathMax(mathMin(l,1.2*m)/2,5),i.effectiveR=w,c=2*w,d=w*y,A+=d,o+=d,B+=d,m-=2*d,q?(u*=z,f=u-w-n):(b=(p-n)/2,f=b-w,a=f+c,a>l&&(f=l-c)),C+=f,n+=f,l-=f,D+=l-c,r&&(v*=z),t?(x*=z,r?A+=v-x-o:v=o+x):r?x=v-o:(x=m,v=o+x),B+=o+m-v,{top:A,bottom:B+8,left:C,right:D}}draw(){let a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p=this,q=p.config,s=p.getFromEnv('smartLabel'),t=p.getFromEnv('chart'),u=p.getFromEnv('toolTipController'),v=t.getChildContainer('trackerGroup'),w=t.getChildContainer().plotGroup,z=p.getGraphicalElement('fluidTop'),B=p.getGraphicalElement('fluid'),C=p.getGraphicalElement('cylinterTop'),D=p.getGraphicalElement('frontLight1'),E=p.getGraphicalElement('frontLight'),F=p.getGraphicalElement('front'),G=p.getGraphicalElement('back'),H=p.getGraphicalElement('btnBorderLight'),I=p.getGraphicalElement('btnBorder1'),J=p.getGraphicalElement('btnBorder'),K=p.getGraphicalElement('label'),N=t.getChildContainer('datalabelsGroup'),O=p.getContainer('dataLabelContainer'),P=p.getContainer('trackerContainer'),Q=p.getGraphicalElement('hotElement'),R=p.getFromEnv('scale'),S=t.config,T=S.canvasLeft,U=S.canvasTop,V=S.canvasHeight,W=S.effectiveR||40,r=pluckNumber(q.value,R.getLimit().min),X=R.getPixel(r),Y=T+W,x=U,y=t.config.dataLabelStyle,$=q.gaugeFillColor,_=getDarkColor($,70),aa=getLightColor($,70),ba=getDarkColor(_,90),ca=S.gaugeFillAlpha,da=q.gaugeContainerColor,ea=getDarkColor(da,80),fa=getDarkColor(da,90),ga=getLightColor(da,80),ha=S.gaugeYScale,ia=p.getContainer('container'),ja=p.getFromEnv('animationManager'),ka=Math.abs(S.width-S.canvasRight-T),la=W*ha,ma=3/2,na=W-ma,oa=q.cylBase=x+V,pa=X,qa=Y-W,ra=Y+W,sa=qa+ma,ta=ra-ma,ua=qa-2,va=ra+2,wa=W+2,xa=la+2,ya=oa+4,za=ya+.001,Aa=.85*W,Ba=Y-Aa,Ca=Y+Aa,Da=Math.sqrt((1-Aa*Aa/(W*W))*la*la),Ea=x+Da,Fa=oa+Da,Ga=x-1,Ha=S.use3DLighting,Ia=q.showHoverEffect,Ja=q.plotFillHoverAlpha,Ka=q.plotFillHoverColor,La=q.fluidAttr,Ma=convertColor(ea,50),Na={"stroke-width":4},Oa={"stroke-width":4},Pa={"stroke-width":0},Qa={"stroke-width":1},Ra={"stroke-width":2},Sa={"stroke-width":1},Ta={"stroke-width":0},Ua={"stroke-width":0},Va={"stroke-width":2},Wa={stroke:TRACKER_FILL,fill:TRACKER_FILL},Xa={};La||(La=q.fluidAttr={}),La['stroke-width']=0,i={value:q.value,displayValue:q.displayValue,toolText:q.toolText},Ha?(l=ga+COMMASTRING+ea+COMMASTRING+ga+COMMASTRING+ea+COMMASTRING+fa+COMMASTRING+fa+COMMASTRING+ea+COMMASTRING+ga,n=toRaphaelColor({FCcolor:{cx:.5,cy:0,r:HUNDREDPERCENT,color:aa+COMMASTRING+_,alpha:ca+COMMASTRING+ca,ratio:zeroCommaHundredStr,radialGradient:!0}}),d=toRaphaelColor({FCcolor:{cx:.5,cy:.7,r:HUNDREDPERCENT,color:aa+COMMASTRING+_,alpha:ca+COMMASTRING+ca,ratio:zeroCommaHundredStr,radialGradient:!0}}),e=convertColor(aa,ca),m=ga+COMMASTRING+ea+COMMASTRING+ga+COMMASTRING+ga+COMMASTRING+ea+COMMASTRING+ga+COMMASTRING+ea+COMMASTRING+ga,Ta.path=[M,qa,oa,A,W,la,1,0,0,Ba,Fa,L,Ba,Ea,A,W,la,0,0,1,qa,x,Z],Ta.fill=toRaphaelColor({FCcolor:{color:m,alpha:topLightGlowAlphaStr,ratio:zeroCommaHundredStr,angle:0}}),Ua.path=[M,Ca,Fa,A,W,la,0,0,0,ra,oa,L,ra,x,A,W,la,1,0,0,Ca,Ea,Z],Ua.fill=toRaphaelColor({FCcolor:{color:m,alpha:topLightGlowAlphaStr,ratio:zeroCommaHundredStr,angle:180}})):(l=ga+COMMASTRING+ea+COMMASTRING+ea+COMMASTRING+ea+COMMASTRING+ea+COMMASTRING+ea+COMMASTRING+ea+COMMASTRING+ga,d=n=convertColor(_,ca),e=convertColor(ba),m=ea+COMMASTRING+ea+COMMASTRING+ea+COMMASTRING+ea+COMMASTRING+ea+COMMASTRING+ea+COMMASTRING+ea+COMMASTRING+ea),La.bodyOut={fill:n},La.topOut={stroke:e,fill:d},Ia&&(f=getDarkColor(Ka,70),g=getLightColor(Ka,70),h=getDarkColor(f,90),Ha?(La.bodyHover={fill:toRaphaelColor({FCcolor:{cx:.5,cy:0,r:HUNDREDPERCENT,color:g+COMMASTRING+f,alpha:Ja+COMMASTRING+Ja,ratio:zeroCommaHundredStr,radialGradient:!0}})},La.topHover={stroke:convertColor(g,Ja),fill:toRaphaelColor({FCcolor:{cx:.5,cy:.7,r:HUNDREDPERCENT,color:g+COMMASTRING+f,alpha:Ja+COMMASTRING+Ja,ratio:zeroCommaHundredStr,radialGradient:!0}})}):(La.bodyHover={fill:convertColor(f,Ja)},La.topHover={stroke:convertColor(h),fill:convertColor(f,Ja)})),La.fill=n,La.path=[M,qa,oa,A,W,mathMax(la,1),0,0,0,ra,oa,L,ra,pa,A,W,mathMax(la,1),0,0,1,qa,pa,Z],Ra.fill=d,Ra.stroke=e,Ra.path=[M,sa,pa,A,na,la,0,0,0,ta,pa,L,ta,pa,A,na,la,0,0,0,sa,pa,Z],Na.stroke=convertColor(ea,80),Na.path=[M,ua,ya,A,wa,xa,0,0,0,va,ya,L,va,za,A,wa,xa,0,0,0,ua,za,Z],Oa.stroke=Ma,Oa.path=[M,qa,ya,A,W,la,0,0,0,ra,ya,L,ra,za,A,W,la,0,0,0,qa,za,Z],Pa.path=[M,qa,oa,A,W,la,0,0,0,ra,oa,A,W,la,0,0,0,qa,oa,Z],Pa.fill=toRaphaelColor({FCcolor:{color:ga+COMMASTRING+ea+COMMASTRING+ga+COMMASTRING+ga+COMMASTRING+ea+COMMASTRING+_+COMMASTRING+ea+COMMASTRING+ga,alpha:btnBorderLightAlphaStr,ratio:btnBorderLightRatioStr,angle:0}}),Qa.path=[M,qa,oa,A,W,la,0,0,0,ra,oa,L,ra,x,A,W,la,0,0,0,qa,x,Z],Qa.stroke=Ma,Qa.fill=toRaphaelColor({FCcolor:{color:l,alpha:backAlphaStr,ratio:backRatioStr,angle:0}}),Sa.path=[M,qa,oa,A,W,la,0,0,0,ra,oa,L,ra,x,A,W,la,0,0,1,qa,x,Z],Sa.stroke=Ma,Sa.fill=toRaphaelColor({FCcolor:{color:m,alpha:backAlphaStr,ratio:frontRatioStr,angle:0}}),Va.stroke=convertColor(ea,40),Va.path=[M,qa,Ga,A,W,la,0,0,0,ra,Ga,L,ra,Ga,A,W,la,0,0,0,qa,Ga,Z],Wa.path=[M,qa,oa,qa,ya+4,A,W,la,0,0,0,ra,ya+4,L,ra,oa,ra,x,A,W,la,0,0,0,qa,x,Z],Xa.opacity=q.showValue?1:0,s.setStyle(y),c=oa+la+(q.valuePadding||0)+8,k=s.getSmartText(q.displayValue,S.width-S.marginLeft-S.marginRight-ka/2,+S.height-c-S.marginBottom),j=k.tooltext||BLANKSTRING,o={text:k.text,x:Y,y:c,"text-anchor":POSITION_MIDDLE,"vertical-align":POSITION_TOP,fill:y.color,"text-bound":[y.backgroundColor,y.borderColor,y.borderThickness,y.borderPadding,y.borderRadius,y.borderDash]},b=ja.setAnimation({el:ia||'group',attr:{name:'cylinder'},container:w,component:p,label:'group'}),J=ja.setAnimation({el:J||'path',attr:Na,container:b,component:p,label:'path'}),I=ja.setAnimation({el:I||'path',attr:Oa,container:b,component:p,label:'path'}),H=ja.setAnimation({el:H||'path',attr:Pa,container:b,component:p,label:'path'}),G=ja.setAnimation({el:G||'path',attr:Qa,container:b,component:p,label:'path'}),B=ja.setAnimation({el:B||'path',attr:La,container:b,component:p,label:'plotFluid'}),z=ja.setAnimation({el:z||'path',attr:Ra,container:b,component:p,label:'plotFluidTop'}),F=ja.setAnimation({el:F||'path',attr:Sa,container:b,component:p,label:'path'}),E=ja.setAnimation({el:E||'path',attr:Ta,container:b,component:p,label:'path'}),D=ja.setAnimation({el:D||'path',attr:Ua,container:b,component:p,label:'path'}),C=ja.setAnimation({el:C||'path',attr:Va,container:b,component:p,label:'path'}),P=ja.setAnimation({el:P||'group',attr:{name:'tracker-group'},container:v,component:p,label:'group'}),a=ja.setAnimation({el:O||'group',attr:Xa,container:N,component:p,label:'labelGroup'}),K=ja.setAnimation({el:K||'text',attr:o,container:a,component:p,label:'text'}),Q=ja.setAnimation({el:Q||'path',attr:Wa,container:P,component:p,label:'path'}),q.showTooltip?u.enableToolTip(K,j):u.disableToolTip(K),ia||(Q.click(function(a){var b=this;t.plotEventHandler(b,a)}).hover(function(a){var b=this;q.showHoverEffect&&(p.getGraphicalElement('fluid')&&p.getGraphicalElement('fluid').attr(La.bodyHover),p.getGraphicalElement('fluidTop')&&p.getGraphicalElement('fluidTop').attr(La.topHover)),t.plotEventHandler(b,a,ROLLOVER)},function(a){var b=this;q.showHoverEffect&&(p.getGraphicalElement('fluid')&&p.getGraphicalElement('fluid').attr(La.bodyOut),p.getGraphicalElement('fluidTop')&&p.getGraphicalElement('fluidTop').attr(La.topOut)),t.plotEventHandler(b,a,ROLLOUT)}),p.addContainer('container',b),p.addGraphicalElement('btnBorder',J),p.addGraphicalElement('btnBorder1',I),p.addGraphicalElement('btnBorderLight',H),p.addGraphicalElement('back',G),p.addGraphicalElement('fluid',B),p.addGraphicalElement('fluidTop',z),p.addGraphicalElement('front',F),p.addGraphicalElement('frontLight',E),p.addGraphicalElement('frontLight1',D),p.addGraphicalElement('cylinterTop',C),p.addContainer('trackerContainer',P),p.addGraphicalElement('hotElement',Q)),O||(p.addContainer('dataLabelContainer',a),p.addGraphicalElement('label',K)),Q.data(EVENTARGS,i),q.toolText?u.enableToolTip(Q,q.toolText):u.disableToolTip(Q)}}export default CylinderDataset;