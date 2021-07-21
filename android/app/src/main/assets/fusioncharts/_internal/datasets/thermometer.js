import{pluckNumber,COMMASTRING,preDefStr,toRaphaelColor,BLANKSTRING}from'../lib/lib';import{convertColor,getDarkColor,getLightColor}from'../lib/lib-graphics';import{addDep}from'../dependency-manager';import thermometerAnimation from'../animation-rules/thermometer-animation';import CylinderThermometerBase from'./cylinderthermometerbase';var configStr=preDefStr.configStr,POSITION_TOP=preDefStr.POSITION_TOP,POSITION_MIDDLE=preDefStr.POSITION_MIDDLE,ROLLOVER='DataPlotRollOver',ROLLOUT='DataPlotRollOut',EVENTARGS='eventArgs',topLightGlowAlphaStr='40,0',topLightGlowRatioStr='0,80',topLightGlowRStr='70%',bulbBorderLightRStr='50%',bulbBorderLightAlphaStr='0,50',bulbBorderLightRatioStr='78,30',bulbTopLightAlphaStr='60,0',bulbTopLightRatioStr='0,30',bulbCenterLightAlphaStr='80,0',bulbCenterLightRatioStr='0,70',cylLeftLightAlphaStr='50,0',cylLeftLightRatioStr='0,80',cylRightLightAlphaStr='50,0,0',cylRightLightRatioStr='0,40,60',HUNDREDPERCENT='100%',zeroCommaHundredStr='0,100',M='M',A='A',L='L',Z='Z',cos50=.643,sin50=.766,win=window,userAgent=win.navigator.userAgent,isIE=/msie/i.test(userAgent)&&!win.opera,TRACKER_FILL='rgba(192,192,192,'+(isIE?.002:1e-6)+')',getScaleFactor=function(a,b,c,d){var e;return b=pluckNumber(b,d),a=pluckNumber(a,c),e=b&&a?a/c==b/d?c/a:Math.min(c/a,d/b):1,e};addDep({name:'thermometerAnimation',type:'animationRule',extension:thermometerAnimation});class ThermometerDataset extends CylinderThermometerBase{constructor(){super(),this.addData=function(){},this.removeData=function(){}}getName(){return'thermometer'}getType(){return'dataset'}_manageSpace(){var a,b,c,d,e,f,g,h=this,i=h.getFromEnv('chart'),j=i.config,k=j.width,l=j.height,m=j.canvasWidth,n=j.canvasHeight,o=j.canvasLeft,p=j.canvasRight,q=j.canvasTop,r=j.xDefined,s=j.yDefined,t=j.rDefined,u=j.hDefined,v=j.thmOriginX,w=j.thmOriginY,x=j.thmBulbRadius,y=j.thmHeight,z=getScaleFactor(j.origW,j.origH,k,l),A=0,B=0,C=0,D=0;return f=h._getLabelSpace(),n-=f,B+=f,t?x*=z:(x=Math.min(m/2,.13*pluckNumber(y,n)),t=!0),j.effectiveR=x,b=x*cos50,d=2*b,e=x*(1+sin50),A+=b,q+=b,n-=b,r?(v*=z,g=v-b-o):(c=(p-o)/2,g=c-b,a=g+d,a>m&&(g=m-d)),C+=g,o+=g,m-=g,D+=m-d,s&&(w*=z),u?(y*=z,s?A+=w-y-q:w=q+y):s?y=w-q:(y=Math.max(n-e,3*x),w=q+y),B+=q+n-w,{top:A,bottom:B,left:C,right:D}}draw(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,u,v,w,z,B,C,D,E,F,G,H,I,J,K,N=Math.abs,O=this,P=O.config,Q=O.getFromEnv('smartLabel'),R=O.getFromEnv('chart'),S=R.getChildContainer('datalabelsGroup'),T=R.getChildContainer('trackerGroup'),U=O.getFromEnv('toolTipController'),V=O.getFromEnv('scale'),W=R.getChildContainer().plotGroup,X=R.get(configStr),Y=X.canvasLeft,$=X.canvasTop,_=X.canvasHeight,aa=X.effectiveR||10,r=aa*cos50,ba=X.use3DLighting,ca=Y+r,x=$-r,y=N(X.width-X.canvasRight-Y),da=x+r,ea=da+_,fa=ea+aa*sin50,ga=pluckNumber(P.value,V.getLimit().min),ha=V.getPixel(ga),ia=.33*r,ja=x+ia,ka=ha,la=.9*r,ma=r-ia,na=aa+la-r,oa=ca-r,pa=ca+r,qa=ca-ma,ra=ca+ma,sa=ca-la,ta=ca+la,ua=parseInt(ca-.6*r,10),va=ca+r/2,wa=P.thmBaseY=fa-N(Math.sqrt(na*na-la*la)),xa=O.getContainer('container'),ya=O.getGraphicalElement('fluid'),za=O.getGraphicalElement('topLightGlow'),Aa=O.getGraphicalElement('topLight'),Ba=O.getGraphicalElement('label'),Ca=O.getContainer('dataLabelContainer'),Da=O.getGraphicalElement('canvasBorderElement'),Ea=O.getGraphicalElement('bulbBorderLight'),Fa=O.getGraphicalElement('bulbTopLight'),Ga=O.getGraphicalElement('bulbCenterLight'),Ha=O.getContainer('trackerContainer'),Ia=O.getGraphicalElement('cylLeftLight'),Ja=O.getGraphicalElement('cylRightLight'),Ka=O.getGraphicalElement('cylLeftLight1'),La=O.getGraphicalElement('cylRightLight1'),Ma=O.getGraphicalElement('hotElement'),Na=getDarkColor(P.gaugeFillColor,ba?70:80),Oa=P.gaugeFillAlpha,Pa=P.gaugeContainerColor,Qa=getDarkColor(Pa,80),Ra=getLightColor(Pa,80),Sa=P.gaugeBorderThickness,Ta=P.gaugeBorderColor,Ua=P.showHoverEffect,Va=P.plotFillHoverAlpha,Wa=P.plotFillHoverColor,Xa=O.getFromEnv('animationManager'),Ya=R.config.dataLabelStyle,Za=P.fluidAttr;Za||(Za=P.fluidAttr={}),Ua&&(Za.hover={fill:convertColor(getDarkColor(Wa,ba?70:80),Va)}),Za.out={fill:convertColor(Na,Oa)},u=[M,qa,x,A,ia,ia,0,0,0,oa,ja,L,oa,ea,A,aa,aa,0,1,0,pa,ea,L,pa,ja,A,ia,ia,0,0,0,ra,x,Z],w={value:P.value,displayValue:P.displayValue,toolText:P.toolText},Za.out.path=[M,sa,wa,A,na,na,0,1,0,ta,wa,L,ta,ka,sa,ka,Z],Za.out['stroke-width']=0,z={"stroke-width":Sa,stroke:Ta,path:u},B={path:[M,sa,da,L,ta,da],stroke:convertColor(Na,40)},C={path:u},e=Xa.setAnimation({el:xa||'group',attr:{name:'thermometer'},container:W,component:O,label:'group'}),xa||O.addContainer('container',e),j=Xa.setAnimation({el:Da||'path',attr:z,container:e,component:O,label:'path'}),Da||O.addGraphicalElement('canvasBorderElement',j),f=Xa.setAnimation({el:ya||'path',attr:Za.out,container:e,component:O,label:'plot'}),ya||O.addGraphicalElement('fluid',f),h=Xa.setAnimation({el:Aa||'path',attr:B,container:e,component:O,label:'path'}),Aa||O.addGraphicalElement('topLight',h),ba?(D={path:[M,sa,da,L,ta,da,ta,ja,sa,ja,Z],"stroke-width":0,fill:toRaphaelColor({FCcolor:{color:Na+COMMASTRING+Na,alpha:topLightGlowAlphaStr,ratio:topLightGlowRatioStr,radialGradient:!0,cx:.5,cy:1,r:topLightGlowRStr}})},g=Xa.setAnimation({el:za||'path',attr:D,container:e,component:O,label:'path'}),!za&&O.addGraphicalElement('topLightGlow',g),v=[M,oa,ea,A,aa,aa,0,0,1,pa,ea,A,aa,aa,0,0,0,oa,ea,A,aa,aa,0,1,0,pa,ea,Z],E={path:v,"stroke-width":0,fill:toRaphaelColor({FCcolor:{cx:.5,cy:.5,r:bulbBorderLightRStr,color:Qa+COMMASTRING+Ra,alpha:bulbBorderLightAlphaStr,ratio:bulbBorderLightRatioStr,radialGradient:!0}})},k=Xa.setAnimation({el:Ea||'path',attr:E,container:e,component:O,label:'path'}),!Ea&&O.addGraphicalElement('bulbBorderLight',k),F={path:v,"stroke-width":0,fill:toRaphaelColor({FCcolor:{cx:.3,cy:.1,r:HUNDREDPERCENT,color:Ra+COMMASTRING+Qa,alpha:bulbTopLightAlphaStr,ratio:bulbTopLightRatioStr,radialGradient:!0}})},l=Xa.setAnimation({el:Fa||'path',attr:F,container:e,component:O,label:'path'}),!Fa&&O.addGraphicalElement('bulbTopLight',l),G={path:v,"stroke-width":0,fill:toRaphaelColor({FCcolor:{cx:.25,cy:.7,r:HUNDREDPERCENT,color:Ra+COMMASTRING+Qa,alpha:bulbCenterLightAlphaStr,ratio:bulbCenterLightRatioStr,radialGradient:!0}})},m=Xa.setAnimation({el:Ga||'path',attr:G,container:e,component:O,label:'path'}),!Ga&&O.addGraphicalElement('bulbCenterLight',m),H={path:[M,ca,x,L,qa,x,A,ia,ia,0,0,0,oa,ja,L,oa,ea,ca,ea,Z],"stroke-width":0,fill:toRaphaelColor({FCcolor:{color:Ra+COMMASTRING+Qa,alpha:cylLeftLightAlphaStr,ratio:cylLeftLightRatioStr,angle:0}})},o=Xa.setAnimation({el:Ia||'path',attr:H,container:e,component:O,label:'path'}),!Ia&&O.addGraphicalElement('cylLeftLight',o),I={path:[M,oa,x,L,ra,x,A,ia,ia,0,0,1,pa,ja,L,pa,ea,oa,ea,Z],"stroke-width":0,fill:toRaphaelColor({FCcolor:{color:Ra+COMMASTRING+Qa+COMMASTRING+Qa,alpha:cylRightLightAlphaStr,ratio:cylRightLightRatioStr,angle:180}})},p=Xa.setAnimation({el:Ja||'path',attr:I,container:e,component:O,label:'path'}),!Ja&&O.addGraphicalElement('cylRightLight',p),J={path:[M,ua,ja,L,oa,ja,oa,ea,ua,ea,Z],"stroke-width":0,fill:toRaphaelColor({FCcolor:{color:Ra+COMMASTRING+Qa,alpha:bulbTopLightAlphaStr,ratio:zeroCommaHundredStr,angle:180}})},q=Xa.setAnimation({el:Ka||'path',attr:J,container:e,component:O,label:'path'}),!Ka&&O.addGraphicalElement('cylLeftLight1',q),K={path:[M,ua-.01,ja,L,va,ja,va,ea,ua-.01,ea,Z],"stroke-width":0,fill:toRaphaelColor({FCcolor:{color:Ra+COMMASTRING+Qa,alpha:bulbTopLightAlphaStr,ratio:zeroCommaHundredStr,angle:0}})},s=Xa.setAnimation({el:La||'path',attr:K,container:e,component:O,label:'path'}),!La&&O.addGraphicalElement('cylRightLight1',s)):(O.removeGraphicalElement(za),O.removeGraphicalElement(Ea),O.removeGraphicalElement(Fa),O.removeGraphicalElement(Ga),O.removeGraphicalElement(Ia),O.removeGraphicalElement(Ja),O.removeGraphicalElement(Ka),O.removeGraphicalElement(La)),n=Xa.setAnimation({el:Ha||'group',attr:{name:'col-hot'},container:T,component:O,label:'group'}),Ha||O.addContainer('trackerContainer',n),C.stroke=C.fill=TRACKER_FILL,t=Xa.setAnimation({el:Ma||'path',attr:C,container:n,component:O,label:'path'}),Ma||(O.addGraphicalElement('hotElement',t),t.click(function(a){var b=this;R.plotEventHandler(b,a)}).hover(function(a){var b=this;P.showHoverEffect&&O.getGraphicalElement('fluid')&&O.getGraphicalElement('fluid').attr(Za.hover),R.plotEventHandler(b,a,ROLLOVER)},function(a){var b=this;P.showHoverEffect&&O.getGraphicalElement('fluid')&&O.getGraphicalElement('fluid').attr(Za.out),R.plotEventHandler(b,a,ROLLOUT)})),P.toolText?U.enableToolTip(t,P.toolText):U.disableToolTip(t),t.data(EVENTARGS,w),i=Xa.setAnimation({el:Ca||'group',attr:{name:'datalabel'},container:S,component:O,label:'labelGroup'}),Q.setStyle(Ya),Ca||O.addContainer('dataLabelContainer',i),P.showValue&&(a=fa+aa+(P.valuePadding||0),d=Q.getSmartText(P.displayValue,X.width-X.marginLeft-X.marginRight-y/2,X.height-a-X.marginBottom),c=d.tooltext||BLANKSTRING,b=Xa.setAnimation({el:Ba||'text',attr:{text:d.text,x:ca,y:a,"text-anchor":POSITION_MIDDLE,"vertical-align":POSITION_TOP,fill:Ya.color,"text-bound":[Ya.backgroundColor,Ya.borderColor,Ya.borderThickness,Ya.borderPadding,Ya.borderRadius,Ya.borderDash]},container:i,component:O,label:'text'}),P.showTooltip?U.enableToolTip(b,c):U.disableToolTip(b),!Ba&&O.addGraphicalElement('label',b),b.show())}}export default ThermometerDataset;