(this["webpackJsonpperson-exercise"]=this["webpackJsonpperson-exercise"]||[]).push([[0],{13:function(e,n,a){},14:function(e,n,a){},15:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(2),i=a.n(o),c=(a(13),a(5)),s=a(3),l=a(4),u=a(7),m=a(6),p=(a(14),function(e){return r.a.createElement("div",{onClick:function(){e.onClick(e.id)}},r.a.createElement("p",null,"I am a Person"),r.a.createElement("p",null,"My name is ",e.name," and my age is ",e.age))}),d=function(e){Object(u.a)(a,e);var n=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={person:[{id:"0",name:"Shefali",age:18},{id:"1",name:"Shivani",age:18},{id:"2",name:"Arpit",age:21.4}]},e.handlePersonClick=function(n){var a=Object(c.a)(e.state.person);a.splice(n,1),e.setState({person:a})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Person exercise"),this.state.person.map((function(n,a){return r.a.createElement(p,{key:n.id,id:a,name:n.name,age:n.age,onClick:e.handlePersonClick})})))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c10ce160.chunk.js.map