(this["webpackJsonppomodoro-react"]=this["webpackJsonppomodoro-react"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(3),c=n.n(a),i=(n(10),n(1)),s=(n(11),n(4)),u=function e(t,n,o,r){Object(s.a)(this,e),this.orderId=t,this.name=n,this.seconds=o,this.next=r};var l=[new u(0,"Pomodoro",1500,1),new u(1,"Short break",300,2),new u(2,"Pomodoro",1500,3),new u(3,"Short break",300,4),new u(4,"Pomodoro",1500,5),new u(5,"Short break",300,6),new u(6,"Pomodoro",1500,7),new u(7,"Long break",900,0)],m=function(e){return l.filter((function(t){return t.orderId===e}))[0]},d=function(e,t){var n=Object(o.useRef)();Object(o.useEffect)((function(){n.current=e}),[e]),Object(o.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},f=function(){var e=Object(o.useState)(m(0).seconds),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(!1),s=Object(i.a)(c,2),u=s[0],f=s[1],h=Object(o.useState)(l[0]),v=Object(i.a)(h,2),b=v[0],w=v[1];d((function(){if(a(n-1),n<=0){var e=m(b.next);a(e.seconds),w(e)}}),u?1e3:null);var E=function(e){var t=e%60;return Math.floor(e/60).toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")};return document.title=E(n)+" - "+b.name,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"time-section"},r.a.createElement("div",{className:"phase-name"},b.name),r.a.createElement("div",{className:"time-value"},E(n))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){f(!u)}},u?"PAUSE":"START"),r.a.createElement("button",{onClick:function(){a(b.seconds),f(!1)}},"RESET")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.db71517c.chunk.js.map