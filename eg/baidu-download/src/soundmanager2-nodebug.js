!function(t,e){"use strict";function n(n,i){function o(t){return ce.preferFlash&&ae&&!ce.ignoreFlash&&ce.flash[t]!==e&&ce.flash[t]}function a(t){return function(e){var n,i=this._s;return n=i&&i._a?t.call(this,e):null}}this.setupOptions={url:n||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1e3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,forceUseGlobalHTML5Audio:!1,ignoreMobileRestrictions:!1,html5Test:/^(probably|maybe)$/i,preferFlash:!1,noSWFCache:!1,idPrefix:"sound"},this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100},this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null},this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null},this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},opus:{type:["audio/ogg; codecs=opus","audio/opus"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}},this.movieID="sm2-container",this.id=i||"sm2movie",this.debugID="soundmanager-debug",this.debugURLParam=/([#?&])debug=1/i,this.versionNumber="V2.97a.20150601",this.version=null,this.movieURL=null,this.altURL=null,this.swfLoaded=!1,this.enabled=!1,this.oMC=null,this.sounds={},this.soundIDs=[],this.muted=!1,this.didFlashBlock=!1,this.filePattern=null,this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i},this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1},this.sandbox={},this.html5={usingFlash:null},this.flash={},this.html5Only=!1,this.ignoreFlash=!1;var s,u,r,l,d,f,h,c,p,m,_,y,g,v,O,M,w,b,L,T,P,S,D,I,A,H,F,E,C,k,x,N,R,U,B,q,V,j,Q,W,$,G,X,K,J,Y,Z,z,te,ee,ne,ie,oe,ae,se,ue,re,le,de,fe,he,ce=this,pe=null,me=null,_e=navigator.userAgent,ye=t.location.href.toString(),ge=document,ve=[],Oe=!1,Me=!1,we=!1,be=!1,Le=!1,Te=8,Pe=null,Se=null,De=!1,Ie=!1,Ae=0,He=null,Fe=[],Ee=null,Ce=Array.prototype.slice,ke=!1,xe=0,Ne=1e3,Re=_e.match(/(ipad|iphone|ipod)/i),Ue=_e.match(/android/i),Be=_e.match(/msie/i),qe=_e.match(/webkit/i),Ve=_e.match(/safari/i)&&!_e.match(/chrome/i),je=_e.match(/opera/i),Qe=_e.match(/(mobile|pre\/|xoom)/i)||Re||Ue,We=!ye.match(/usehtml5audio/i)&&!ye.match(/sm2\-ignorebadua/i)&&Ve&&!_e.match(/silk/i)&&_e.match(/OS X 10_6_([3-7])/i),$e=(t.console!==e&&console.log!==e,ge.hasFocus!==e?ge.hasFocus():null),Ge=Ve&&(ge.hasFocus===e||!ge.hasFocus()),Xe=!Ge,Ke=/(mp3|mp4|mpa|m4a|m4b)/i,Je="about:blank",Ye="data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==",Ze=ge.location?ge.location.protocol.match(/http/i):null,ze=Ze?"":"http://",tn=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,en=["mpeg4","aac","flv","mov","mp4","m4v","f4v","m4a","m4b","mp4v","3gp","3g2"],nn=new RegExp("\\.("+en.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i,this.useAltURL=!Ze,B={swfBox:"sm2-object-box",swfDefault:"movieContainer",swfError:"swf_error",swfTimedout:"swf_timedout",swfLoaded:"swf_loaded",swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",highPerf:"high_performance",flashDebug:"flash_debug"},this.hasHTML5=function(){try{return Audio!==e&&(je&&opera!==e&&opera.version()<10?new Audio(null):new Audio).canPlayType!==e}catch(t){return!1}}(),this.setup=function(t){var n=!ce.url;return t!==e&&we&&Ee&&ce.ok()&&(t.flashVersion!==e||t.url!==e||t.html5Test!==e),p(t),ke||(Qe?(!ce.setupOptions.ignoreMobileRestrictions||ce.setupOptions.forceUseGlobalHTML5Audio)&&(Fe.push(L.globalHTML5),ke=!0):ce.setupOptions.forceUseGlobalHTML5Audio&&(Fe.push(L.globalHTML5),ke=!0)),!he&&Qe&&(ce.setupOptions.ignoreMobileRestrictions?Fe.push(L.ignoreMobile):(ce.setupOptions.useHTML5Audio=!0,ce.setupOptions.preferFlash=!1,Re?ce.ignoreFlash=!0:(Ue&&!_e.match(/android\s2\.3/i)||!Ue)&&(ke=!0))),t&&(n&&D&&t.url!==e&&ce.beginDelayedInit(),D||t.url===e||"complete"!==ge.readyState||setTimeout(P,1)),he=!0,ce},this.ok=function(){return Ee?we&&!be:ce.useHTML5Audio&&ce.hasHTML5},this.supported=this.ok,this.getMovie=function(e){return u(e)||ge[e]||t[e]},this.createSound=function(t,n){function i(){return a=q(a),ce.sounds[a.id]=new s(a),ce.soundIDs.push(a.id),ce.sounds[a.id]}var o,a,u=null;if(!we||!ce.ok())return!1;if(n!==e&&(t={id:t,url:n}),a=c(t),a.url=X(a.url),a.id===e&&(a.id=ce.setupOptions.idPrefix+xe++),Q(a.id,!0))return ce.sounds[a.id];if(Y(a))u=i(),u._setup_html5(a);else{if(ce.html5Only)return i();if(ce.html5.usingFlash&&a.url&&a.url.match(/data\:/i))return i();f>8&&null===a.isMovieStar&&(a.isMovieStar=!!(a.serverURL||(a.type?a.type.match(tn):!1)||a.url&&a.url.match(nn))),a=V(a,o),u=i(),8===f?me._createSound(a.id,a.loops||1,a.usePolicyFile):(me._createSound(a.id,a.url,a.usePeakData,a.useWaveformData,a.useEQData,a.isMovieStar,a.isMovieStar?a.bufferTime:!1,a.loops||1,a.serverURL,a.duration||null,a.autoPlay,!0,a.autoLoad,a.usePolicyFile),a.serverURL||(u.connected=!0,a.onconnect&&a.onconnect.apply(u))),a.serverURL||!a.autoLoad&&!a.autoPlay||u.load(a)}return!a.serverURL&&a.autoPlay&&u.play(),u},this.destroySound=function(t,e){if(!Q(t))return!1;var n,i=ce.sounds[t];for(i.stop(),i._iO={},i.unload(),n=0;n<ce.soundIDs.length;n++)if(ce.soundIDs[n]===t){ce.soundIDs.splice(n,1);break}return e||i.destruct(!0),i=null,delete ce.sounds[t],!0},this.load=function(t,e){return Q(t)?ce.sounds[t].load(e):!1},this.unload=function(t){return Q(t)?ce.sounds[t].unload():!1},this.onPosition=function(t,e,n,i){return Q(t)?ce.sounds[t].onposition(e,n,i):!1},this.onposition=this.onPosition,this.clearOnPosition=function(t,e,n){return Q(t)?ce.sounds[t].clearOnPosition(e,n):!1},this.play=function(t,e){var n=null,i=e&&!(e instanceof Object);if(!we||!ce.ok())return!1;if(Q(t,i))i&&(e={url:e});else{if(!i)return!1;i&&(e={url:e}),e&&e.url&&(e.id=t,n=ce.createSound(e).play())}return null===n&&(n=ce.sounds[t].play(e)),n},this.start=this.play,this.setPosition=function(t,e){return Q(t)?ce.sounds[t].setPosition(e):!1},this.stop=function(t){return Q(t)?ce.sounds[t].stop():!1},this.stopAll=function(){var t;for(t in ce.sounds)ce.sounds.hasOwnProperty(t)&&ce.sounds[t].stop()},this.pause=function(t){return Q(t)?ce.sounds[t].pause():!1},this.pauseAll=function(){var t;for(t=ce.soundIDs.length-1;t>=0;t--)ce.sounds[ce.soundIDs[t]].pause()},this.resume=function(t){return Q(t)?ce.sounds[t].resume():!1},this.resumeAll=function(){var t;for(t=ce.soundIDs.length-1;t>=0;t--)ce.sounds[ce.soundIDs[t]].resume()},this.togglePause=function(t){return Q(t)?ce.sounds[t].togglePause():!1},this.setPan=function(t,e){return Q(t)?ce.sounds[t].setPan(e):!1},this.setVolume=function(t,n){var i,o;{if(t===e||isNaN(t)||n!==e)return Q(t)?ce.sounds[t].setVolume(n):!1;for(i=0,o=ce.soundIDs.length;o>i;i++)ce.sounds[ce.soundIDs[i]].setVolume(t)}},this.mute=function(t){var e=0;if(t instanceof String&&(t=null),t)return Q(t)?ce.sounds[t].mute():!1;for(e=ce.soundIDs.length-1;e>=0;e--)ce.sounds[ce.soundIDs[e]].mute();return ce.muted=!0,!0},this.muteAll=function(){ce.mute()},this.unmute=function(t){var e;if(t instanceof String&&(t=null),t)return Q(t)?ce.sounds[t].unmute():!1;for(e=ce.soundIDs.length-1;e>=0;e--)ce.sounds[ce.soundIDs[e]].unmute();return ce.muted=!1,!0},this.unmuteAll=function(){ce.unmute()},this.toggleMute=function(t){return Q(t)?ce.sounds[t].toggleMute():!1},this.getMemoryUse=function(){var t=0;return me&&8!==f&&(t=parseInt(me._getMemoryUse(),10)),t},this.disable=function(n){var i;if(n===e&&(n=!1),be)return!1;for(be=!0,i=ce.soundIDs.length-1;i>=0;i--)C(ce.sounds[ce.soundIDs[i]]);return h(n),ie.remove(t,"load",g),!0},this.canPlayMIME=function(t){var e;return ce.hasHTML5&&(e=Z({type:t})),!e&&Ee&&(e=t&&ce.ok()?!!((f>8?t.match(tn):null)||t.match(ce.mimePattern)):null),e},this.canPlayURL=function(t){var e;return ce.hasHTML5&&(e=Z({url:t})),!e&&Ee&&(e=t&&ce.ok()?!!t.match(ce.filePattern):null),e},this.canPlayLink=function(t){return t.type!==e&&t.type&&ce.canPlayMIME(t.type)?!0:ce.canPlayURL(t.href)},this.getSoundById=function(t){if(!t)return null;var e=ce.sounds[t];return e},this.onready=function(e,n){var i="onready",o=!1;if("function"!=typeof e)throw N("needFunction",i);return n||(n=t),_(i,e,n),y(),o=!0,o},this.ontimeout=function(e,n){var i="ontimeout",o=!1;if("function"!=typeof e)throw N("needFunction",i);return n||(n=t),_(i,e,n),y({type:i}),o=!0,o},this._writeDebug=function(){return!0},this._wD=this._writeDebug,this._debug=function(){},this.reboot=function(e,n){var i,o,a;for(i=ce.soundIDs.length-1;i>=0;i--)ce.sounds[ce.soundIDs[i]].destruct();if(me)try{Be&&(Se=me.innerHTML),Pe=me.parentNode.removeChild(me)}catch(s){}if(Se=Pe=Ee=me=null,ce.enabled=D=we=De=Ie=Oe=Me=be=ke=ce.swfLoaded=!1,ce.soundIDs=[],ce.sounds={},xe=0,he=!1,e)ve=[];else for(i in ve)if(ve.hasOwnProperty(i))for(o=0,a=ve[i].length;a>o;o++)ve[i][o].fired=!1;return ce.html5={usingFlash:null},ce.flash={},ce.html5Only=!1,ce.ignoreFlash=!1,t.setTimeout(function(){n||ce.beginDelayedInit()},20),ce},this.reset=function(){return ce.reboot(!0,!0)},this.getMoviePercent=function(){return me&&"PercentLoaded"in me?me.PercentLoaded():null},this.beginDelayedInit=function(){Le=!0,P(),setTimeout(function(){return Ie?!1:(A(),T(),Ie=!0,!0)},20),v()},this.destruct=function(){ce.disable(!0)},s=function(t){var n,i,o,a,s,u,r,l,d,h,p=this,m=!1,_=[],y=0,g=null;d={duration:null,time:null},this.id=t.id,this.sID=this.id,this.url=t.url,this.options=c(t),this.instanceOptions=this.options,this._iO=this.instanceOptions,this.pan=this.options.pan,this.volume=this.options.volume,this.isHTML5=!1,this._a=null,h=this.url?!1:!0,this.id3={},this._debug=function(){},this.load=function(t){var n,i=null;if(t!==e?p._iO=c(t,p.options):(t=p.options,p._iO=t,g&&g!==p.url&&(p._iO.url=p.url,p.url=null)),p._iO.url||(p._iO.url=p.url),p._iO.url=X(p._iO.url),p.instanceOptions=p._iO,n=p._iO,!n.url&&!p.url)return p;if(n.url===p.url&&0!==p.readyState&&2!==p.readyState)return 3===p.readyState&&n.onload&&fe(p,function(){n.onload.apply(p,[!!p.duration])}),p;if(p.loaded=!1,p.readyState=1,p.playState=0,p.id3={},Y(n))i=p._setup_html5(n),i._called_load||(p._html5_canplay=!1,p.url!==n.url&&(p._a.src=n.url,p.setPosition(0)),p._a.autobuffer="auto",p._a.preload="auto",p._a._called_load=!0);else{if(ce.html5Only)return p;if(p._iO.url&&p._iO.url.match(/data\:/i))return p;try{p.isHTML5=!1,p._iO=V(q(n)),p._iO.autoPlay&&(p._iO.position||p._iO.from)&&(p._iO.autoPlay=!1),n=p._iO,8===f?me._load(p.id,n.url,n.stream,n.autoPlay,n.usePolicyFile):me._load(p.id,n.url,!!n.stream,!!n.autoPlay,n.loops||1,!!n.autoLoad,n.usePolicyFile)}catch(o){H({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}}return p.url=n.url,p},this.unload=function(){return 0!==p.readyState&&(p.isHTML5?(a(),p._a&&(p._a.pause(),g=te(p._a))):8===f?me._unload(p.id,Je):me._unload(p.id),n()),p},this.destruct=function(t){p.isHTML5?(a(),p._a&&(p._a.pause(),te(p._a),ke||o(),p._a._s=null,p._a=null)):(p._iO.onfailure=null,me._destroySound(p.id)),t||ce.destroySound(p.id,!0)},this.play=function(t,n){var i,o,a,r,d,_,y=!0,g=null;if(n=n===e?!0:n,t||(t={}),p.url&&(p._iO.url=p.url),p._iO=c(p._iO,p.options),p._iO=c(t,p._iO),p._iO.url=X(p._iO.url),p.instanceOptions=p._iO,!p.isHTML5&&p._iO.serverURL&&!p.connected)return p.getAutoPlay()||p.setAutoPlay(!0),p;if(Y(p._iO)&&(p._setup_html5(p._iO),s()),1!==p.playState||p.paused||(i=p._iO.multiShot,i||(p.isHTML5&&p.setPosition(p._iO.position),g=p)),null!==g)return g;if(t.url&&t.url!==p.url&&(p.readyState||p.isHTML5||8!==f||!h?p.load(p._iO):h=!1),p.loaded||(0===p.readyState?(p.isHTML5||ce.html5Only?p.isHTML5?p.load(p._iO):g=p:(p._iO.autoPlay=!0,p.load(p._iO)),p.instanceOptions=p._iO):2===p.readyState&&(g=p)),null!==g)return g;if(!p.isHTML5&&9===f&&p.position>0&&p.position===p.duration&&(t.position=0),p.paused&&p.position>=0&&(!p._iO.serverURL||p.position>0))p.resume();else{if(p._iO=c(t,p._iO),(!p.isHTML5&&null!==p._iO.position&&p._iO.position>0||null!==p._iO.from&&p._iO.from>0||null!==p._iO.to)&&0===p.instanceCount&&0===p.playState&&!p._iO.serverURL){if(a=function(){p._iO=c(t,p._iO),p.play(p._iO)},p.isHTML5&&!p._html5_canplay?(p.load({_oncanplay:a}),g=!1):p.isHTML5||p.loaded||p.readyState&&2===p.readyState||(p.load({onload:a}),g=!1),null!==g)return g;p._iO=l()}(!p.instanceCount||p._iO.multiShotEvents||p.isHTML5&&p._iO.multiShot&&!ke||!p.isHTML5&&f>8&&!p.getAutoPlay())&&p.instanceCount++,p._iO.onposition&&0===p.playState&&u(p),p.playState=1,p.paused=!1,p.position=p._iO.position===e||isNaN(p._iO.position)?0:p._iO.position,p.isHTML5||(p._iO=V(q(p._iO))),p._iO.onplay&&n&&(p._iO.onplay.apply(p),m=!0),p.setVolume(p._iO.volume,!0),p.setPan(p._iO.pan,!0),p.isHTML5?p.instanceCount<2?(s(),o=p._setup_html5(),p.setPosition(p._iO.position),o.play()):(r=new Audio(p._iO.url),d=function(){ie.remove(r,"ended",d),p._onfinish(p),te(r),r=null},_=function(){ie.remove(r,"canplay",_);try{r.currentTime=p._iO.position/Ne}catch(t){}r.play()},ie.add(r,"ended",d),p._iO.volume!==e&&(r.volume=Math.max(0,Math.min(1,p._iO.volume/100))),p.muted&&(r.muted=!0),p._iO.position?ie.add(r,"canplay",_):r.play()):(y=me._start(p.id,p._iO.loops||1,9===f?p.position:p.position/Ne,p._iO.multiShot||!1),9!==f||y||p._iO.onplayerror&&p._iO.onplayerror.apply(p))}return p},this.start=this.play,this.stop=function(t){var e,n=p._iO;return 1===p.playState&&(p._onbufferchange(0),p._resetOnPosition(0),p.paused=!1,p.isHTML5||(p.playState=0),r(),n.to&&p.clearOnPosition(n.to),p.isHTML5?p._a&&(e=p.position,p.setPosition(0),p.position=e,p._a.pause(),p.playState=0,p._onTimer(),a()):(me._stop(p.id,t),n.serverURL&&p.unload()),p.instanceCount=0,p._iO={},n.onstop&&n.onstop.apply(p)),p},this.setAutoPlay=function(t){p._iO.autoPlay=t,p.isHTML5||(me._setAutoPlay(p.id,t),t&&(p.instanceCount||1!==p.readyState||p.instanceCount++))},this.getAutoPlay=function(){return p._iO.autoPlay},this.setPosition=function(t){t===e&&(t=0);var n,i,o=p.isHTML5?Math.max(t,0):Math.min(p.duration||p._iO.duration,Math.max(t,0));if(p.position=o,i=p.position/Ne,p._resetOnPosition(p.position),p._iO.position=o,p.isHTML5){if(p._a){if(p._html5_canplay){if(p._a.currentTime!==i)try{p._a.currentTime=i,(0===p.playState||p.paused)&&p._a.pause()}catch(a){}}else if(i)return p;p.paused&&p._onTimer(!0)}}else n=9===f?p.position:i,p.readyState&&2!==p.readyState&&me._setPosition(p.id,n,p.paused||!p.playState,p._iO.multiShot);return p},this.pause=function(t){return p.paused||0===p.playState&&1!==p.readyState?p:(p.paused=!0,p.isHTML5?(p._setup_html5().pause(),a()):(t||t===e)&&me._pause(p.id,p._iO.multiShot),p._iO.onpause&&p._iO.onpause.apply(p),p)},this.resume=function(){var t=p._iO;return p.paused?(p.paused=!1,p.playState=1,p.isHTML5?(p._setup_html5().play(),s()):(t.isMovieStar&&!t.serverURL&&p.setPosition(p.position),me._pause(p.id,t.multiShot)),!m&&t.onplay?(t.onplay.apply(p),m=!0):t.onresume&&t.onresume.apply(p),p):p},this.togglePause=function(){return 0===p.playState?(p.play({position:9!==f||p.isHTML5?p.position/Ne:p.position}),p):(p.paused?p.resume():p.pause(),p)},this.setPan=function(t,n){return t===e&&(t=0),n===e&&(n=!1),p.isHTML5||me._setPan(p.id,t),p._iO.pan=t,n||(p.pan=t,p.options.pan=t),p},this.setVolume=function(t,n){return t===e&&(t=100),n===e&&(n=!1),p.isHTML5?p._a&&(ce.muted&&!p.muted&&(p.muted=!0,p._a.muted=!0),p._a.volume=Math.max(0,Math.min(1,t/100))):me._setVolume(p.id,ce.muted&&!p.muted||p.muted?0:t),p._iO.volume=t,n||(p.volume=t,p.options.volume=t),p},this.mute=function(){return p.muted=!0,p.isHTML5?p._a&&(p._a.muted=!0):me._setVolume(p.id,0),p},this.unmute=function(){p.muted=!1;var t=p._iO.volume!==e;return p.isHTML5?p._a&&(p._a.muted=!1):me._setVolume(p.id,t?p._iO.volume:p.options.volume),p},this.toggleMute=function(){return p.muted?p.unmute():p.mute()},this.onPosition=function(t,n,i){return _.push({position:parseInt(t,10),method:n,scope:i!==e?i:p,fired:!1}),p},this.onposition=this.onPosition,this.clearOnPosition=function(t,e){var n;if(t=parseInt(t,10),isNaN(t))return!1;for(n=0;n<_.length;n++)t===_[n].position&&(e&&e!==_[n].method||(_[n].fired&&y--,_.splice(n,1)))},this._processOnPosition=function(){var t,e,n=_.length;if(!n||!p.playState||y>=n)return!1;for(t=n-1;t>=0;t--)e=_[t],!e.fired&&p.position>=e.position&&(e.fired=!0,y++,e.method.apply(e.scope,[e.position]),n=_.length);return!0},this._resetOnPosition=function(t){var e,n,i=_.length;if(!i)return!1;for(e=i-1;e>=0;e--)n=_[e],n.fired&&t<=n.position&&(n.fired=!1,y--);return!0},l=function(){var t,e,n=p._iO,i=n.from,o=n.to;return e=function(){p.clearOnPosition(o,e),p.stop()},t=function(){null===o||isNaN(o)||p.onPosition(o,e)},null===i||isNaN(i)||(n.position=i,n.multiShot=!1,t()),n},u=function(){var t,e=p._iO.onposition;if(e)for(t in e)e.hasOwnProperty(t)&&p.onPosition(parseInt(t,10),e[t])},r=function(){var t,e=p._iO.onposition;if(e)for(t in e)e.hasOwnProperty(t)&&p.clearOnPosition(parseInt(t,10))},s=function(){p.isHTML5&&W(p)},a=function(){p.isHTML5&&$(p)},n=function(t){t||(_=[],y=0),m=!1,p._hasTimer=null,p._a=null,p._html5_canplay=!1,p.bytesLoaded=null,p.bytesTotal=null,p.duration=p._iO&&p._iO.duration?p._iO.duration:null,p.durationEstimate=null,p.buffered=[],p.eqData=[],p.eqData.left=[],p.eqData.right=[],p.failures=0,p.isBuffering=!1,p.instanceOptions={},p.instanceCount=0,p.loaded=!1,p.metadata={},p.readyState=0,p.muted=!1,p.paused=!1,p.peakData={left:0,right:0},p.waveformData={left:[],right:[]},p.playState=0,p.position=null,p.id3={}},n(),this._onTimer=function(t){var e,n,i=!1,o={};return p._hasTimer||t?(p._a&&(t||(p.playState>0||1===p.readyState)&&!p.paused)&&(e=p._get_html5_duration(),e!==d.duration&&(d.duration=e,p.duration=e,i=!0),p.durationEstimate=p.duration,n=p._a.currentTime*Ne||0,n!==d.time&&(d.time=n,i=!0),(i||t)&&p._whileplaying(n,o,o,o,o)),i):void 0},this._get_html5_duration=function(){var t=p._iO,e=p._a&&p._a.duration?p._a.duration*Ne:t&&t.duration?t.duration:null,n=e&&!isNaN(e)&&1/0!==e?e:null;return n},this._apply_loop=function(t,e){t.loop=e>1?"loop":""},this._setup_html5=function(t){var e,o=c(p._iO,t),a=ke?pe:p._a,s=decodeURI(o.url);if(ke?s===decodeURI(oe)&&(e=!0):s===decodeURI(g)&&(e=!0),a){if(a._s)if(ke)a._s&&a._s.playState&&!e&&a._s.stop();else if(!ke&&s===decodeURI(g))return p._apply_loop(a,o.loops),a;e||(g&&n(!1),a.src=o.url,p.url=o.url,g=o.url,oe=o.url,a._called_load=!1)}else o.autoLoad||o.autoPlay?(p._a=new Audio(o.url),p._a.load()):p._a=je&&opera.version()<10?new Audio(null):new Audio,a=p._a,a._called_load=!1,ke&&(pe=a);return p.isHTML5=!0,p._a=a,a._s=p,i(),p._apply_loop(a,o.loops),o.autoLoad||o.autoPlay?p.load():(a.autobuffer=!1,a.preload="auto"),a},i=function(){function t(t,e,n){return p._a?p._a.addEventListener(t,e,n||!1):null}if(p._a._added_events)return!1;var e;p._a._added_events=!0;for(e in re)re.hasOwnProperty(e)&&t(e,re[e]);return!0},o=function(){function t(t,e,n){return p._a?p._a.removeEventListener(t,e,n||!1):null}var e;p._a._added_events=!1;for(e in re)re.hasOwnProperty(e)&&t(e,re[e])},this._onload=function(t){var e=!!t||!p.isHTML5&&8===f&&p.duration;return p.loaded=e,p.readyState=e?3:2,p._onbufferchange(0),p._iO.onload&&fe(p,function(){p._iO.onload.apply(p,[e])}),!0},this._onbufferchange=function(t){return 0===p.playState?!1:t&&p.isBuffering||!t&&!p.isBuffering?!1:(p.isBuffering=1===t,p._iO.onbufferchange&&p._iO.onbufferchange.apply(p,[t]),!0)},this._onsuspend=function(){return p._iO.onsuspend&&p._iO.onsuspend.apply(p),!0},this._onfailure=function(t,e,n){p.failures++,p._iO.onfailure&&1===p.failures&&p._iO.onfailure(t,e,n)},this._onwarning=function(t,e,n){p._iO.onwarning&&p._iO.onwarning(t,e,n)},this._onfinish=function(){var t=p._iO.onfinish;p._onbufferchange(0),p._resetOnPosition(0),p.instanceCount&&(p.instanceCount--,p.instanceCount||(r(),p.playState=0,p.paused=!1,p.instanceCount=0,p.instanceOptions={},p._iO={},a(),p.isHTML5&&(p.position=0)),(!p.instanceCount||p._iO.multiShotEvents)&&t&&fe(p,function(){t.apply(p)}))},this._whileloading=function(t,e,n,i){var o=p._iO;p.bytesLoaded=t,p.bytesTotal=e,p.duration=Math.floor(n),p.bufferLength=i,p.durationEstimate=p.isHTML5||o.isMovieStar?p.duration:o.duration?p.duration>o.duration?p.duration:o.duration:parseInt(p.bytesTotal/p.bytesLoaded*p.duration,10),p.isHTML5||(p.buffered=[{start:0,end:p.duration}]),(3!==p.readyState||p.isHTML5)&&o.whileloading&&o.whileloading.apply(p)},this._whileplaying=function(t,n,i,o,a){var s,u=p._iO;return isNaN(t)||null===t?!1:(p.position=Math.max(0,t),p._processOnPosition(),!p.isHTML5&&f>8&&(u.usePeakData&&n!==e&&n&&(p.peakData={left:n.leftPeak,right:n.rightPeak}),u.useWaveformData&&i!==e&&i&&(p.waveformData={left:i.split(","),right:o.split(",")}),u.useEQData&&a!==e&&a&&a.leftEQ&&(s=a.leftEQ.split(","),p.eqData=s,p.eqData.left=s,a.rightEQ!==e&&a.rightEQ&&(p.eqData.right=a.rightEQ.split(",")))),1===p.playState&&(p.isHTML5||8!==f||p.position||!p.isBuffering||p._onbufferchange(0),u.whileplaying&&u.whileplaying.apply(p)),!0)},this._oncaptiondata=function(t){p.captiondata=t,p._iO.oncaptiondata&&p._iO.oncaptiondata.apply(p,[t])},this._onmetadata=function(t,e){var n,i,o={};for(n=0,i=t.length;i>n;n++)o[t[n]]=e[n];p.metadata=o,p._iO.onmetadata&&p._iO.onmetadata.call(p,p.metadata)},this._onid3=function(t,e){var n,i,o=[];for(n=0,i=t.length;i>n;n++)o[t[n]]=e[n];p.id3=c(p.id3,o),p._iO.onid3&&p._iO.onid3.apply(p)},this._onconnect=function(t){t=1===t,p.connected=t,t&&(p.failures=0,Q(p.id)&&(p.getAutoPlay()?p.play(e,p.getAutoPlay()):p._iO.autoLoad&&p.load()),p._iO.onconnect&&p._iO.onconnect.apply(p,[t]))},this._ondataerror=function(){p.playState>0&&p._iO.ondataerror&&p._iO.ondataerror.apply(p)}},I=function(){return ge.body||ge.getElementsByTagName("div")[0]},u=function(t){return ge.getElementById(t)},c=function(t,n){var i,o,a=t||{};i=n===e?ce.defaultOptions:n;for(o in i)i.hasOwnProperty(o)&&a[o]===e&&(a[o]="object"!=typeof i[o]||null===i[o]?i[o]:c(a[o],i[o]));return a},fe=function(e,n){e.isHTML5||8!==f?n():t.setTimeout(n,0)},m={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1},p=function(t,n){var i,o=!0,a=n!==e,s=ce.setupOptions,u=m;for(i in t)if(t.hasOwnProperty(i))if("object"!=typeof t[i]||null===t[i]||t[i]instanceof Array||t[i]instanceof RegExp)a&&u[n]!==e?ce[n][i]=t[i]:s[i]!==e?(ce.setupOptions[i]=t[i],ce[i]=t[i]):u[i]===e?o=!1:ce[i]instanceof Function?ce[i].apply(ce,t[i]instanceof Array?t[i]:[t[i]]):ce[i]=t[i];else{if(u[i]!==e)return p(t[i],i);o=!1}return o},ie=function(){function e(t){var e=Ce.call(t),n=e.length;return a?(e[1]="on"+e[1],n>3&&e.pop()):3===n&&e.push(!1),e}function n(t,e){var n=t.shift(),i=[s[e]];a?n[i](t[0],t[1]):n[i].apply(n,t)}function i(){n(e(arguments),"add")}function o(){n(e(arguments),"remove")}var a=t.attachEvent,s={add:a?"attachEvent":"addEventListener",remove:a?"detachEvent":"removeEventListener"};return{add:i,remove:o}}(),re={abort:a(function(){}),canplay:a(function(){var t,n=this._s;if(n._html5_canplay)return!0;if(n._html5_canplay=!0,n._onbufferchange(0),t=n._iO.position===e||isNaN(n._iO.position)?null:n._iO.position/Ne,this.currentTime!==t)try{this.currentTime=t}catch(i){}n._iO._oncanplay&&n._iO._oncanplay()}),canplaythrough:a(function(){var t=this._s;t.loaded||(t._onbufferchange(0),t._whileloading(t.bytesLoaded,t.bytesTotal,t._get_html5_duration()),t._onload(!0))}),durationchange:a(function(){var t,e=this._s;t=e._get_html5_duration(),isNaN(t)||t===e.duration||(e.durationEstimate=e.duration=t)}),ended:a(function(){var t=this._s;t._onfinish()}),error:a(function(){this._s._onload(!1)}),loadeddata:a(function(){var t=this._s;t._loaded||Ve||(t.duration=t._get_html5_duration())}),loadedmetadata:a(function(){}),loadstart:a(function(){this._s._onbufferchange(1)}),play:a(function(){this._s._onbufferchange(0)}),playing:a(function(){this._s._onbufferchange(0)}),progress:a(function(t){var e,n,i=this._s,o=0,a=("progress"===t.type,t.target.buffered),s=t.loaded||0,u=t.total||1;if(i.buffered=[],a&&a.length){for(e=0,n=a.length;n>e;e++)i.buffered.push({start:a.start(e)*Ne,end:a.end(e)*Ne});o=(a.end(0)-a.start(0))*Ne,s=Math.min(1,o/(t.target.duration*Ne))}isNaN(s)||(i._whileloading(s,u,i._get_html5_duration()),s&&u&&s===u&&re.canplaythrough.call(this,t))}),ratechange:a(function(){}),suspend:a(function(t){var e=this._s;re.progress.call(this,t),e._onsuspend()}),stalled:a(function(){}),timeupdate:a(function(){this._s._onTimer()}),waiting:a(function(){var t=this._s;t._onbufferchange(1)})},Y=function(t){var e;return e=t&&(t.type||t.url||t.serverURL)?t.serverURL||t.type&&o(t.type)?!1:t.type?Z({type:t.type}):Z({url:t.url})||ce.html5Only||t.url.match(/data\:/i):!1},te=function(t){var n;return t&&(n=Ve?Je:ce.html5.canPlayType("audio/wav")?Ye:Je,t.src=n,t._called_unload!==e&&(t._called_load=!1)),ke&&(oe=null),n},Z=function(t){if(!ce.useHTML5Audio||!ce.hasHTML5)return!1;var n,i,a,s,u=t.url||null,r=t.type||null,l=ce.audioFormats;if(r&&ce.html5[r]!==e)return ce.html5[r]&&!o(r);if(!z){z=[];for(s in l)l.hasOwnProperty(s)&&(z.push(s),l[s].related&&(z=z.concat(l[s].related)));z=new RegExp("\\.("+z.join("|")+")(\\?.*)?$","i")}return a=u?u.toLowerCase().match(z):null,a&&a.length?a=a[1]:r?(i=r.indexOf(";"),a=(-1!==i?r.substr(0,i):r).substr(6)):n=!1,a&&ce.html5[a]!==e?n=ce.html5[a]&&!o(a):(r="audio/"+a,n=ce.html5.canPlayType({type:r}),ce.html5[a]=n,n=n&&ce.html5[r]&&!o(r)),n},ne=function(){function t(t){var e,n,i=!1,o=!1;if(!s||"function"!=typeof s.canPlayType)return i;if(t instanceof Array){for(a=0,n=t.length;n>a;a++)(ce.html5[t[a]]||s.canPlayType(t[a]).match(ce.html5Test))&&(o=!0,ce.html5[t[a]]=!0,ce.flash[t[a]]=!!t[a].match(Ke));i=o}else e=s&&"function"==typeof s.canPlayType?s.canPlayType(t):!1,i=!(!e||!e.match(ce.html5Test));return i}if(!ce.useHTML5Audio||!ce.hasHTML5)return ce.html5.usingFlash=!0,Ee=!0,!1;var n,i,o,a,s=Audio!==e?je&&opera.version()<10?new Audio(null):new Audio:null,u={};o=ce.audioFormats;for(n in o)if(o.hasOwnProperty(n)&&(i="audio/"+n,u[n]=t(o[n].type),u[i]=u[n],n.match(Ke)?(ce.flash[n]=!0,ce.flash[i]=!0):(ce.flash[n]=!1,ce.flash[i]=!1),o[n]&&o[n].related))for(a=o[n].related.length-1;a>=0;a--)u["audio/"+o[n].related[a]]=u[n],ce.html5[o[n].related[a]]=u[n],ce.flash[o[n].related[a]]=u[n];return u.canPlayType=s?t:null,ce.html5=c(ce.html5,u),ce.html5.usingFlash=J(),Ee=ce.html5.usingFlash,!0},L={},N=function(){},q=function(t){return 8===f&&t.loops>1&&t.stream&&(t.stream=!1),t},V=function(t){return t&&!t.usePolicyFile&&(t.onid3||t.usePeakData||t.useWaveformData||t.useEQData)&&(t.usePolicyFile=!0),t},j=function(){},r=function(){return!1},C=function(t){var e;for(e in t)t.hasOwnProperty(e)&&"function"==typeof t[e]&&(t[e]=r);e=null},k=function(t){t===e&&(t=!1),(be||t)&&ce.disable(t)},x=function(t){var e,n=null;if(t)if(t.match(/\.swf(\?.*)?$/i)){if(n=t.substr(t.toLowerCase().lastIndexOf(".swf?")+4))return t}else t.lastIndexOf("/")!==t.length-1&&(t+="/");return e=(t&&-1!==t.lastIndexOf("/")?t.substr(0,t.lastIndexOf("/")+1):"./")+ce.movieURL,ce.noSWFCache&&(e+="?ts="+(new Date).getTime()),e},w=function(){f=parseInt(ce.flashVersion,10),8!==f&&9!==f&&(ce.flashVersion=f=Te);var t=ce.debugMode||ce.debugFlash?"_debug.swf":".swf";ce.useHTML5Audio&&!ce.html5Only&&ce.audioFormats.mp4.required&&9>f&&(ce.flashVersion=f=9),ce.version=ce.versionNumber+(ce.html5Only?" (HTML5-only mode)":9===f?" (AS3/Flash 9)":" (AS2/Flash 8)"),f>8?(ce.defaultOptions=c(ce.defaultOptions,ce.flash9Options),ce.features.buffering=!0,ce.defaultOptions=c(ce.defaultOptions,ce.movieStarOptions),ce.filePatterns.flash9=new RegExp("\\.(mp3|"+en.join("|")+")(\\?.*)?$","i"),ce.features.movieStar=!0):ce.features.movieStar=!1,ce.filePattern=ce.filePatterns[8!==f?"flash9":"flash8"],ce.movieURL=(8===f?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",t),ce.features.peakData=ce.features.waveformData=ce.features.eqData=f>8},F=function(t,e){return me?void me._setPolling(t,e):!1},E=function(){},Q=this.getSoundById,U=function(){var t=[];return ce.debugMode&&t.push(B.sm2Debug),ce.debugFlash&&t.push(B.flashDebug),ce.useHighPerformance&&t.push(B.highPerf),t.join(" ")},R=function(){var t=(N("fbHandler"),ce.getMoviePercent()),e=B,n={type:"FLASHBLOCK"};return ce.html5Only?!1:void(ce.ok()?ce.oMC&&(ce.oMC.className=[U(),e.swfDefault,e.swfLoaded+(ce.didFlashBlock?" "+e.swfUnblocked:"")].join(" ")):(Ee&&(ce.oMC.className=U()+" "+e.swfDefault+" "+(null===t?e.swfTimedout:e.swfError)),ce.didFlashBlock=!0,y({type:"ontimeout",ignoreInit:!0,error:n}),H(n)))},_=function(t,n,i){ve[t]===e&&(ve[t]=[]),ve[t].push({method:n,scope:i||null,fired:!1})},y=function(t){if(t||(t={type:ce.ok()?"onready":"ontimeout"}),!we&&t&&!t.ignoreInit)return!1;if("ontimeout"===t.type&&(ce.ok()||be&&!t.ignoreInit))return!1;var e,n,i={success:t&&t.ignoreInit?ce.ok():!be},o=t&&t.type?ve[t.type]||[]:[],a=[],s=[i],u=Ee&&!ce.ok();for(t.error&&(s[0].error=t.error),e=0,n=o.length;n>e;e++)o[e].fired!==!0&&a.push(o[e]);if(a.length)for(e=0,n=a.length;n>e;e++)a[e].scope?a[e].method.apply(a[e].scope,s):a[e].method.apply(this,s),u||(a[e].fired=!0);return!0},g=function(){t.setTimeout(function(){ce.useFlashBlock&&R(),y(),"function"==typeof ce.onload&&ce.onload.apply(t),ce.waitForWindowLoad&&ie.add(t,"load",g)},1)},se=function(){if(ae!==e)return ae;var n,i,o,a=!1,s=navigator,u=s.plugins,r=t.ActiveXObject;if(u&&u.length)i="application/x-shockwave-flash",o=s.mimeTypes,o&&o[i]&&o[i].enabledPlugin&&o[i].enabledPlugin.description&&(a=!0);else if(r!==e&&!_e.match(/MSAppHost/i)){try{n=new r("ShockwaveFlash.ShockwaveFlash")}catch(l){n=null}a=!!n,n=null}return ae=a,a},J=function(){var t,e,n=ce.audioFormats,i=Re&&!!_e.match(/os (1|2|3_0|3_1)\s/i);if(i?(ce.hasHTML5=!1,ce.html5Only=!0,ce.oMC&&(ce.oMC.style.display="none")):ce.useHTML5Audio&&(ce.html5&&ce.html5.canPlayType||(ce.hasHTML5=!1)),ce.useHTML5Audio&&ce.hasHTML5){K=!0;for(e in n)n.hasOwnProperty(e)&&n[e].required&&(ce.html5.canPlayType(n[e].type)?ce.preferFlash&&(ce.flash[e]||ce.flash[n[e].type])&&(t=!0):(K=!1,t=!0))}return ce.ignoreFlash&&(t=!1,K=!0),ce.html5Only=ce.hasHTML5&&ce.useHTML5Audio&&!t,!ce.html5Only},X=function(t){var e,n,i,o=0;if(t instanceof Array){for(e=0,n=t.length;n>e;e++)if(t[e]instanceof Object){if(ce.canPlayMIME(t[e].type)){o=e;break}}else if(ce.canPlayURL(t[e])){o=e;break}t[o].url&&(t[o]=t[o].url),i=t[o]}else i=t;return i},W=function(t){t._hasTimer||(t._hasTimer=!0,!Qe&&ce.html5PollingInterval&&(null===He&&0===Ae&&(He=setInterval(G,ce.html5PollingInterval)),Ae++))},$=function(t){t._hasTimer&&(t._hasTimer=!1,!Qe&&ce.html5PollingInterval&&Ae--)},G=function(){var t;if(null!==He&&!Ae)return clearInterval(He),He=null,!1;for(t=ce.soundIDs.length-1;t>=0;t--)ce.sounds[ce.soundIDs[t]].isHTML5&&ce.sounds[ce.soundIDs[t]]._hasTimer&&ce.sounds[ce.soundIDs[t]]._onTimer()},H=function(n){n=n!==e?n:{},"function"==typeof ce.onerror&&ce.onerror.apply(t,[{type:n.type!==e?n.type:null}]),n.fatal!==e&&n.fatal&&ce.disable()},ue=function(){if(!We||!se())return!1;var t,e,n=ce.audioFormats;for(e in n)if(n.hasOwnProperty(e)&&("mp3"===e||"mp4"===e)&&(ce.html5[e]=!1,n[e]&&n[e].related))for(t=n[e].related.length-1;t>=0;t--)ce.html5[n[e].related[t]]=!1},this._setSandboxType=function(){},this._externalInterfaceOK=function(){if(ce.swfLoaded)return!1;ce.swfLoaded=!0,Ge=!1,We&&ue(),setTimeout(d,Be?100:1)},A=function(t,n){function i(){}function o(t,e){return'<param name="'+t+'" value="'+e+'" />'}if(Oe&&Me)return!1;if(ce.html5Only)return w(),i(),ce.oMC=u(ce.movieID),d(),Oe=!0,Me=!0,!1;var a,s,r,l,f,h,c,p,m=n||ce.url,_=ce.altURL||m,y="JS/Flash audio component (SoundManager 2)",g=I(),v=U(),O=null,M=ge.getElementsByTagName("html")[0];if(O=M&&M.dir&&M.dir.match(/rtl/i),t=t===e?ce.id:t,w(),ce.url=x(Ze?m:_),n=ce.url,ce.wmode=!ce.wmode&&ce.useHighPerformance?"transparent":ce.wmode,null!==ce.wmode&&(_e.match(/msie 8/i)||!Be&&!ce.useHighPerformance)&&navigator.platform.match(/win32|win64/i)&&(Fe.push(L.spcWmode),ce.wmode=null),a={name:t,id:t,src:n,quality:"high",allowScriptAccess:ce.allowScriptAccess,bgcolor:ce.bgColor,pluginspage:ze+"www.macromedia.com/go/getflashplayer",title:y,type:"application/x-shockwave-flash",wmode:ce.wmode,hasPriority:"true"},ce.debugFlash&&(a.FlashVars="debug=1"),ce.wmode||delete a.wmode,Be)s=ge.createElement("div"),l=['<object id="'+t+'" data="'+n+'" type="'+a.type+'" title="'+a.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',o("movie",n),o("AllowScriptAccess",ce.allowScriptAccess),o("quality",a.quality),ce.wmode?o("wmode",ce.wmode):"",o("bgcolor",ce.bgColor),o("hasPriority","true"),ce.debugFlash?o("FlashVars",a.FlashVars):"","</object>"].join("");
else{s=ge.createElement("embed");for(r in a)a.hasOwnProperty(r)&&s.setAttribute(r,a[r])}if(E(),v=U(),g=I())if(ce.oMC=u(ce.movieID)||ge.createElement("div"),ce.oMC.id)p=ce.oMC.className,ce.oMC.className=(p?p+" ":B.swfDefault)+(v?" "+v:""),ce.oMC.appendChild(s),Be&&(f=ce.oMC.appendChild(ge.createElement("div")),f.className=B.swfBox,f.innerHTML=l),Me=!0;else{if(ce.oMC.id=ce.movieID,ce.oMC.className=B.swfDefault+" "+v,h=null,f=null,ce.useFlashBlock||(ce.useHighPerformance?h={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(h={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},O&&(h.left=Math.abs(parseInt(h.left,10))+"px"))),qe&&(ce.oMC.style.zIndex=1e4),!ce.debugFlash)for(c in h)h.hasOwnProperty(c)&&(ce.oMC.style[c]=h[c]);try{Be||ce.oMC.appendChild(s),g.appendChild(ce.oMC),Be&&(f=ce.oMC.appendChild(ge.createElement("div")),f.className=B.swfBox,f.innerHTML=l),Me=!0}catch(b){throw new Error(N("domError")+" \n"+b.toString())}}return Oe=!0,i(),!0},T=function(){return ce.html5Only?(A(),!1):me?!1:ce.url?(me=ce.getMovie(ce.id),me||(Pe?(Be?ce.oMC.innerHTML=Se:ce.oMC.appendChild(Pe),Pe=null,Oe=!0):A(ce.id,ce.url),me=ce.getMovie(ce.id)),"function"==typeof ce.oninitmovie&&setTimeout(ce.oninitmovie,1),!0):!1},v=function(){setTimeout(O,1e3)},M=function(){t.setTimeout(function(){ce.setup({preferFlash:!1}).reboot(),ce.didFlashBlock=!0,ce.beginDelayedInit()},1)},O=function(){var e,n=!1;return ce.url?De?!1:(De=!0,ie.remove(t,"load",v),ae&&Ge&&!$e?!1:(we||(e=ce.getMoviePercent(),e>0&&100>e&&(n=!0)),void setTimeout(function(){return e=ce.getMoviePercent(),n?(De=!1,t.setTimeout(v,1),!1):void(!we&&Xe&&(null===e?ce.useFlashBlock||0===ce.flashLoadTimeout?ce.useFlashBlock&&R():!ce.useFlashBlock&&K?M():y({type:"ontimeout",ignoreInit:!0,error:{type:"INIT_FLASHBLOCK"}}):0===ce.flashLoadTimeout||(!ce.useFlashBlock&&K?M():k(!0))))},ce.flashLoadTimeout))):!1},b=function(){function e(){ie.remove(t,"focus",b)}return $e||!Ge?(e(),!0):(Xe=!0,$e=!0,De=!1,v(),e(),!0)},de=function(){},le=function(){},h=function(e){if(we)return!1;if(ce.html5Only)return we=!0,g(),!0;var n,i=ce.useFlashBlock&&ce.flashLoadTimeout&&!ce.getMoviePercent(),o=!0;return i||(we=!0),n={type:!ae&&Ee?"NO_FLASH":"INIT_TIMEOUT"},(be||e)&&(ce.useFlashBlock&&ce.oMC&&(ce.oMC.className=U()+" "+(null===ce.getMoviePercent()?B.swfTimedout:B.swfError)),y({type:"ontimeout",error:n,ignoreInit:!0}),H(n),o=!1),be||(ce.waitForWindowLoad&&!Le?ie.add(t,"load",g):g()),o},l=function(){var t,n=ce.setupOptions;for(t in n)n.hasOwnProperty(t)&&(ce[t]===e?ce[t]=n[t]:ce[t]!==n[t]&&(ce.setupOptions[t]=ce[t]))},d=function(){function e(){ie.remove(t,"load",ce.beginDelayedInit)}if(we)return!1;if(ce.html5Only)return we||(e(),ce.enabled=!0,h()),!0;T();try{me._externalInterfaceTest(!1),F(!0,ce.flashPollingInterval||(ce.useHighPerformance?10:50)),ce.debugMode||me._disableDebug(),ce.enabled=!0,ce.html5Only||ie.add(t,"unload",r)}catch(n){return H({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),k(!0),h(),!1}return h(),e(),!0},P=function(){return D?!1:(D=!0,l(),E(),!ae&&ce.hasHTML5&&ce.setup({useHTML5Audio:!0,preferFlash:!1}),ne(),!ae&&Ee&&(Fe.push(L.needFlash),ce.setup({flashLoadTimeout:1})),ge.removeEventListener&&ge.removeEventListener("DOMContentLoaded",P,!1),T(),!0)},ee=function(){return"complete"===ge.readyState&&(P(),ge.detachEvent("onreadystatechange",ee)),!0},S=function(){Le=!0,P(),ie.remove(t,"load",S)},se(),ie.add(t,"focus",b),ie.add(t,"load",v),ie.add(t,"load",S),ge.addEventListener?ge.addEventListener("DOMContentLoaded",P,!1):ge.attachEvent?ge.attachEvent("onreadystatechange",ee):H({type:"NO_DOM2_EVENTS",fatal:!0})}if(!t||!t.document)throw new Error("SoundManager requires a browser with window and document objects.");var i=null;t.SM2_DEFER!==e&&SM2_DEFER||(i=new n),"object"==typeof module&&module&&"object"==typeof module.exports?(module.exports.SoundManager=n,module.exports.soundManager=i):"function"==typeof define&&define.amd&&define(function(){function e(e){if(!t.soundManager&&e instanceof Function){var i=e(n);i instanceof n&&(t.soundManager=i)}return t.soundManager}return{constructor:n,getInstance:e}}),t.SoundManager=n,t.soundManager=i}(window);