(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(31)},26:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),l=n.n(o),c=n(13),i=n(9),u=n(20),s=(n(26),n(8)),m=[{title:"You don't know JS: Up & Going",src:"up.jpg"},{title:"Structure and Interpretation of Computer Programs",src:"sicp.jpg"},{title:"Types and Programming Languages",src:"tapl.jpg"},{title:"Eloquent JavaScript",src:"eloquent.jpg"}];function d(e){e.forEach(function(e,t){var n=[String(t),String(e.read)],a=n[0],r=n[1];localStorage.setItem(a,r)})}var g=n(5),b=function(e){var t=e.info,n=e.toggleRead,a=t.book,o=a.title,l=a.src,c=t.read?"\u2705":"\u274c",i=t.read?"unread":"read",u="/covers/"+l;return r.a.createElement("tr",null,r.a.createElement("td",{className:"cover"},r.a.createElement("img",{src:u,alt:"book cover",height:"80"})),r.a.createElement("td",null,c,r.a.createElement(g.a,{path:"/focus/".concat(t.index),children:function(e){var n=e.match;return n?r.a.createElement("b",null,r.a.createElement(s.b,{to:"/"},o," ")):r.a.createElement(s.b,{to:"/focus/".concat(t.index)},o," ")}})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n(t.index)}}," Mark as ",i," ")))},E=function(e){var t=e.books.map(function(t){return r.a.createElement(b,{key:t.index,info:t,toggleRead:e.toggleRead})});return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Cover"),r.a.createElement("td",null,"Info"),r.a.createElement("td",null,"Actions"))),r.a.createElement("tbody",null,t))},f=function(e){var t=e.books,n=e.toggleAll,a=e.sortByKey,o=e.sortByTitle,l=t.length,c=t.filter(function(e){return e.read}).length,i=(100*c/l).toFixed(0),u=1===c?"book":"books",s="There are ".concat(l," books in total."),m="You have read ".concat(c," ").concat(u,", which is ").concat(i,"% of all available books."),d=r.a.createElement("button",{onClick:function(){return n(!1)}},"Mark all as unread"),g=r.a.createElement("button",{onClick:function(){return n(!0)}},"Mark all as read");return r.a.createElement("div",null,s," ",r.a.createElement("br",null),m,r.a.createElement("br",null),d,r.a.createElement("span",null," "),g,r.a.createElement("br",null),r.a.createElement("button",{onClick:o},"Sort by title"),r.a.createElement("span",null," "),r.a.createElement("button",{onClick:a},"Sort by key"))},k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{books:e.books,toggleRead:e.toggleRead}),r.a.createElement(f,{books:e.books,toggleAll:e.toggleAll,sortByKey:e.sortByKey,sortByTitle:e.sortByTitle}))},v=function(){var e=function(){var e=[];return m.forEach(function(t,n){var a="true"===localStorage.getItem(String(n));e.push({book:t,index:n,read:a})}),e}(),t=Object(a.useState)(e),n=Object(u.a)(t,2),o=n[0],l=n[1];return r.a.createElement(s.a,null,r.a.createElement(k,{books:o,toggleRead:function(e){var t=Object(i.a)(o),n=o[e];t[e]=Object(c.a)({},n,{read:!n.read}),d(t),l(t)},toggleAll:function(e){var t=o.map(function(t){return Object(c.a)({},t,{read:e})});d(t),l(t)},sortByTitle:function(){var e=Object(i.a)(o).sort(function(e,t){return e.book.title>t.book.title?1:-1});l(e)},sortByKey:function(){var e=Object(i.a)(o).sort(function(e,t){return e.index-t.index});l(e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.4af01e83.chunk.js.map