import{componentFactory}from'../lib/lib';import LimitUpdater from'../axis/limit-updater';export default function(a){let b,c,d=a.config.allowAxisChange,e=a.getChildren('yAxis')[0];componentFactory(e,LimitUpdater,'limitUpdater',d?1:0),b=e.getChildren('limitUpdater'),c=b&&b[0],c&&c.configure()}