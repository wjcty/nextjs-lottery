"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{86094:function(e,n,t){t.r(n),t.d(n,{OpenloginAdapter:function(){return P},getOpenloginDefaultOptions:function(){return C}});var i=t(3388),r=t(45624),o=t(15861),a=t(15671),s=t(43144),c=t(97326),h=t(73237),l=t(60136),u=t(82963),p=t(61120),g=t(4942),f=t(64687),d=t.n(f),v=t(67845),N=t(72378),y=t.n(N),C=function(e,n){return{adapterSettings:{network:i.dr.MAINNET,clientId:"",uxMode:i.$e.POPUP},chainConfig:e?(0,r.h2)(e,n):null,loginSettings:{}}};function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach(function(n){(0,g.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var P=function(e){(0,l.Z)(w,e);var n,f,N,O,P,b,k,m=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,p.Z)(w);if(n){var i=(0,p.Z)(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return(0,u.Z)(this,e)});function w(e){(0,a.Z)(this,w),l=m.call(this),(0,g.Z)((0,c.Z)(l),"name",r.rW.OPENLOGIN),(0,g.Z)((0,c.Z)(l),"adapterNamespace",r.yk.MULTICHAIN),(0,g.Z)((0,c.Z)(l),"type",r.hN.IN_APP),(0,g.Z)((0,c.Z)(l),"openloginInstance",null),(0,g.Z)((0,c.Z)(l),"clientId",void 0),(0,g.Z)((0,c.Z)(l),"status",r.MP.NOT_READY),(0,g.Z)((0,c.Z)(l),"currentChainNamespace",r.EN.EIP155),(0,g.Z)((0,c.Z)(l),"openloginOptions",void 0),(0,g.Z)((0,c.Z)(l),"loginSettings",{}),(0,g.Z)((0,c.Z)(l),"privKeyProvider",null),r.cM.debug("const openlogin adapter",e);var n=C(null===(t=e.chainConfig)||void 0===t?void 0:t.chainNamespace,null===(o=e.chainConfig)||void 0===o?void 0:o.chainId);if(l.openloginOptions=E(E({clientId:"",network:i.dr.MAINNET},n.adapterSettings),e.adapterSettings||{}),l.clientId=null===(s=e.adapterSettings)||void 0===s?void 0:s.clientId,l.loginSettings=E(E({},n.loginSettings),e.loginSettings),l.sessionTime=l.loginSettings.sessionTime||86400,null!==(h=e.chainConfig)&&void 0!==h&&h.chainNamespace){l.currentChainNamespace=null===(u=e.chainConfig)||void 0===u?void 0:u.chainNamespace;var t,o,s,h,l,u,p=n.chainConfig?n.chainConfig:{};if(l.chainConfig=E(E({},p),null==e?void 0:e.chainConfig),r.cM.debug("const openlogin chainConfig",l.chainConfig),!l.chainConfig.rpcTarget&&e.chainConfig.chainNamespace!==r.EN.OTHER)throw r.Ty.invalidParams("rpcTarget is required in chainConfig")}return l}return(0,s.Z)(w,[{key:"chainConfigProxy",get:function(){return this.chainConfig?E({},this.chainConfig):null}},{key:"provider",get:function(){var e;return(null===(e=this.privKeyProvider)||void 0===e?void 0:e.provider)||null},set:function(e){throw Error("Not implemented")}},{key:"init",value:(f=(0,o.Z)(d().mark(function e(n){var t,o,a;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((0,h.Z)((0,p.Z)(w.prototype),"checkInitializationRequirements",this).call(this),null!==(t=this.openloginOptions)&&void 0!==t&&t.clientId){e.next=3;break}throw r.Ty.invalidParams("clientId is required before openlogin's initialization");case 3:if(this.chainConfig){e.next=5;break}throw r.Ty.invalidParams("chainConfig is required before initialization");case 5:return o=!1,this.openloginOptions.uxMode===i.$e.REDIRECT&&Object.keys(a=(0,i.Gv)()).length>0&&a._pid&&(o=!0),this.openloginOptions=E(E({},this.openloginOptions),{},{replaceUrlOnRedirect:o}),this.openloginInstance=new i.ZP(this.openloginOptions),r.cM.debug("initializing openlogin adapter init"),e.next=12,this.openloginInstance.init();case 12:if(this.status=r.MP.READY,this.emit(r.n2.READY,r.rW.OPENLOGIN),e.prev=14,r.cM.debug("initializing openlogin adapter"),!(this.openloginInstance.privKey&&(n.autoConnect||o))){e.next=19;break}return e.next=19,this.connect();case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(14),r.cM.error("Failed to connect with cached openlogin provider",e.t0),this.emit("ERRORED",e.t0);case 25:case"end":return e.stop()}},e,this,[[14,21]])})),function(e){return f.apply(this,arguments)})},{key:"connect",value:(N=(0,o.Z)(d().mark(function e(n){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(0,h.Z)((0,p.Z)(w.prototype),"checkConnectionRequirements",this).call(this),this.status=r.MP.CONNECTING,this.emit(r.n2.CONNECTING,E(E({},n),{},{adapter:r.rW.OPENLOGIN})),e.prev=3,e.next=6,this.connectWithProvider(n);case 6:return e.abrupt("return",this.provider);case 9:if(e.prev=9,e.t0=e.catch(3),r.cM.error("Failed to connect with openlogin provider",e.t0),this.status=r.MP.READY,this.emit(r.n2.ERRORED,e.t0),!(null!==e.t0&&void 0!==e.t0&&e.t0.message.includes("user closed popup"))){e.next=16;break}throw r.RM.popupClosed();case 16:throw r.RM.connectionError("Failed to login with openlogin");case 17:case"end":return e.stop()}},e,this,[[3,9]])})),function(e){return N.apply(this,arguments)})},{key:"disconnect",value:(O=(0,o.Z)(d().mark(function e(){var n,t=arguments;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:{cleanup:!1},!(this.status!==r.MP.CONNECTED)){e.next=3;break}throw r.RM.notConnectedError("Not connected with wallet");case 3:if(this.openloginInstance){e.next=5;break}throw r.Ty.notReady("openloginInstance is not ready");case 5:return e.next=7,this.openloginInstance.logout();case 7:n.cleanup?(this.status=r.MP.NOT_READY,this.openloginInstance=null,this.privKeyProvider=null):this.status=r.MP.READY,this.emit(r.n2.DISCONNECTED);case 9:case"end":return e.stop()}},e,this)})),function(){return O.apply(this,arguments)})},{key:"authenticateUser",value:(P=(0,o.Z)(d().mark(function e(){var n;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.status!==r.MP.CONNECTED)){e.next=2;break}throw r.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return e.next=4,this.getUserInfo();case 4:return n=e.sent,e.abrupt("return",{idToken:n.idToken});case 6:case"end":return e.stop()}},e,this)})),function(){return P.apply(this,arguments)})},{key:"getUserInfo",value:(b=(0,o.Z)(d().mark(function e(){var n;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.status!==r.MP.CONNECTED)){e.next=2;break}throw r.RM.notConnectedError("Not connected with wallet");case 2:if(this.openloginInstance){e.next=4;break}throw r.Ty.notReady("openloginInstance is not ready");case 4:return e.next=6,this.openloginInstance.getUserInfo();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e,this)})),function(){return b.apply(this,arguments)})},{key:"setAdapterSettings",value:function(e){if(this.status!==r.MP.READY){var n=C();this.openloginOptions=E(E(E({},n.adapterSettings),this.openloginOptions||{}),e),e.sessionTime&&(this.loginSettings=E(E({},this.loginSettings),{},{sessionTime:e.sessionTime})),e.clientId&&(this.clientId=e.clientId)}}},{key:"setChainConfig",value:function(e){(0,h.Z)((0,p.Z)(w.prototype),"setChainConfig",this).call(this,e),this.currentChainNamespace=e.chainNamespace}},{key:"connectWithProvider",value:(k=(0,o.Z)(d().mark(function e(n){var o,a,s,c;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.chainConfig){e.next=2;break}throw r.Ty.invalidParams("chainConfig is required before initialization");case 2:if(this.openloginInstance){e.next=4;break}throw r.Ty.notReady("openloginInstance is not ready");case 4:if(this.currentChainNamespace!==r.EN.SOLANA){e.next=12;break}return e.next=7,Promise.all([t.e(766),t.e(108),t.e(700),t.e(918)]).then(t.bind(t,44445));case 7:o=e.sent.SolanaPrivateKeyProvider,this.privKeyProvider=new o({config:{chainConfig:this.chainConfig}}),e.next=25;break;case 12:if(this.currentChainNamespace!==r.EN.EIP155){e.next=20;break}return e.next=15,Promise.all([t.e(482),t.e(796),t.e(62),t.e(680)]).then(t.bind(t,52062));case 15:a=e.sent.EthereumPrivateKeyProvider,this.privKeyProvider=new a({config:{chainConfig:this.chainConfig}}),e.next=25;break;case 20:if(this.currentChainNamespace!==r.EN.OTHER){e.next=24;break}this.privKeyProvider=new v.FL,e.next=25;break;case 24:throw Error("Invalid chainNamespace: ".concat(this.currentChainNamespace," found while connecting to wallet"));case 25:if(!(!this.openloginInstance.privKey&&n)){e.next=29;break}return this.loginSettings.curve||(this.loginSettings.curve=this.currentChainNamespace===r.EN.SOLANA?i.x7.ED25519:i.x7.SECP256K1),e.next=29,this.openloginInstance.login(y()(this.loginSettings,{loginProvider:n.loginProvider},{extraLoginOptions:E(E({},n.extraLoginOptions||{}),{},{login_hint:n.login_hint||(null===(s=n.extraLoginOptions)||void 0===s?void 0:s.login_hint)})}));case 29:if(!(c=this.openloginInstance.privKey)){e.next=41;break}if(this.currentChainNamespace!==r.EN.SOLANA){e.next=37;break}return e.next=34,Promise.all([t.e(108),t.e(418)]).then(t.bind(t,33946));case 34:c=(0,e.sent.getED25519Key)(c).sk.toString("hex");case 37:return e.next=39,this.privKeyProvider.setupProvider(c);case 39:this.status=r.MP.CONNECTED,this.emit(r.n2.CONNECTED,{adapter:r.rW.OPENLOGIN,reconnected:!n});case 41:case"end":return e.stop()}},e,this)})),function(e){return k.apply(this,arguments)})}]),w}(r.J5)}}]);