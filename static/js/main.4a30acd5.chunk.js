(this["webpackJsonpnumber-to-words-translator"]=this["webpackJsonpnumber-to-words-translator"]||[]).push([[0],{27:function(e,n,t){"use strict";t.r(n);var a=t(1),l=t(0),i=t.n(l),r=t(10),c=t.n(r),o=t(8),s=t(5),d="TOGGLE_EN",u="TOGGLE_EN_US",g="TOGGLE_RU",b="TOGGLE_UK",j=function(){return{type:d}},h=function(){return{type:u}},m=function(){return{type:g}},p=function(){return{type:b}},f="#00aaff",x=["0 0 10px 3px ".concat(f)],O=Object(s.a)({flag:{display:"block",width:46,height:34,cursor:"pointer",background:["url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAABgCAYAAAAO5IdCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRDQjNFOEIyRUM1RTExRTU5ODQ3QkU0OTJBMzVENDBBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRDQjNFOEIzRUM1RTExRTU5ODQ3QkU0OTJBMzVENDBBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NENCM0U4QjBFQzVFMTFFNTk4NDdCRTQ5MkEzNUQ0MEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NENCM0U4QjFFQzVFMTFFNTk4NDdCRTQ5MkEzNUQ0MEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6RxEXgAAAhlklEQVR42uxd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",")"),"no-repeat"],"&:hover":{boxShadow:x}},hidden:{display:"none"}}),k=function(e){var n=e.lang,t=e.enabled,l=e.toggleLang,i=O(),r=function(e){switch(e){case"en":return Object(s.a)({enabled:{backgroundPosition:[-1,-55],boxShadow:x},disabled:{backgroundPosition:[-1,-7]}});case"en_us":return Object(s.a)({enabled:{backgroundPosition:[-73,-55],boxShadow:x},disabled:{backgroundPosition:[-73,-7]}});case"ru":return Object(s.a)({enabled:{backgroundPosition:[-145,-55],boxShadow:x},disabled:{backgroundPosition:[-145,-7]}});case"uk":return Object(s.a)({enabled:{backgroundPosition:[-217,-55],boxShadow:x},disabled:{backgroundPosition:[-217,-7]}})}}(n)();return Object(a.jsx)("label",{className:"".concat(i.flag," ").concat(t?r.enabled:r.disabled),htmlFor:n,children:Object(a.jsx)("input",{className:i.hidden,type:"checkbox",id:n,checked:t,onChange:l})})},I=Object(s.a)({header:{height:80},container:{padding:[0,15],margin:[0,"auto"],maxWidth:768},navbar:{height:60,display:"flex",justifyContent:"center",alignItems:"center"},list:{display:"flex"},item:{padding:[0,40],"@media (max-width: 736px)":{padding:[0,15]},"@media (max-width: 320px)":{padding:[0,7]}}}),y={toggleEn:j,toggleEnUs:h,toggleRu:m,toggleUk:p},v=Object(o.b)((function(e){return{enIsEnabled:e.en.enabled,enUsIsEnabled:e.en_us.enabled,ruIsEnabled:e.ru.enabled,ukIsEnabled:e.uk.enabled}}),y)((function(e){var n=I();return Object(a.jsx)("header",{className:n.header,children:Object(a.jsx)("div",{className:n.container,children:Object(a.jsx)("nav",{className:n.navbar,children:Object(a.jsxs)("ul",{className:n.list,children:[Object(a.jsx)("li",{className:n.item,children:Object(a.jsx)(k,{lang:"en",enabled:e.enIsEnabled,toggleLang:function(){return e.toggleEn()}})}),Object(a.jsx)("li",{className:n.item,children:Object(a.jsx)(k,{lang:"en_us",enabled:e.enUsIsEnabled,toggleLang:function(){return e.toggleEnUs()}})}),Object(a.jsx)("li",{className:n.item,children:Object(a.jsx)(k,{lang:"ru",enabled:e.ruIsEnabled,toggleLang:function(){return e.toggleRu()}})}),Object(a.jsx)("li",{className:n.item,children:Object(a.jsx)(k,{lang:"uk",enabled:e.ukIsEnabled,toggleLang:function(){return e.toggleUk()}})})]})})})})})),E=t(15),J={ru:{fixCases:function(e){return e=(e=(e=(e=(e=(e=(e=e.replace("\u043e\u0434\u0438\u043d \u0442\u044b\u0441\u044f\u0447","\u043e\u0434\u043d\u0430 \u0442\u044b\u0441\u044f\u0447\u0430").replace("\u0434\u0432\u0430 \u0442\u044b\u0441\u044f\u0447","\u0434\u0432\u0435 \u0442\u044b\u0441\u044f\u0447\u0438").replace("\u0442\u0440\u0438 \u0442\u044b\u0441\u044f\u0447","\u0442\u0440\u0438 \u0442\u044b\u0441\u044f\u0447\u0438").replace("\u0447\u0435\u0442\u044b\u0440\u0435 \u0442\u044b\u0441\u044f\u0447","\u0447\u0435\u0442\u044b\u0440\u0435 \u0442\u044b\u0441\u044f\u0447\u0438")).replace("\u043e\u0434\u0438\u043d \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u043e\u0434\u0438\u043d \u043c\u0438\u043b\u043b\u0438\u043e\u043d").replace("\u0434\u0432\u0430 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0434\u0432\u0430 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0430").replace("\u0442\u0440\u0438 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0442\u0440\u0438 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0430").replace("\u0447\u0435\u0442\u044b\u0440\u0435 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0447\u0435\u0442\u044b\u0440\u0435 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0430")).replace("\u043e\u0434\u0438\u043d \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u043e\u0432","\u043e\u0434\u0438\u043d \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434").replace("\u0434\u0432\u0430 \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u043e\u0432","\u0434\u0432\u0430 \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u0430").replace("\u0442\u0440\u0438 \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u043e\u0432","\u0442\u0440\u0438 \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u0430").replace("\u0447\u0435\u0442\u044b\u0440\u0435 \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u043e\u0432","\u0447\u0435\u0442\u044b\u0440\u0435 \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u0430")).replace("\u043e\u0434\u0438\u043d \u0442\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u043e\u0434\u0438\u043d \u0442\u0440\u0438\u043b\u043b\u0438\u043e\u043d").replace("\u0434\u0432\u0430 \u0442\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0434\u0432\u0430 \u0442\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u0430").replace("\u0442\u0440\u0438 \u0442\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0442\u0440\u0438 \u0442\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u0430").replace("\u0447\u0435\u0442\u044b\u0440\u0435 \u0442\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0447\u0435\u0442\u044b\u0440\u0435 \u0442\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u0430")).replace("\u043e\u0434\u0438\u043d \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u043e\u0434\u0438\u043d \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u043b\u0438\u043e\u043d").replace("\u0434\u0432\u0430 \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0434\u0432\u0430 \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u0430").replace("\u0442\u0440\u0438 \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0442\u0440\u0438 \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u0430").replace("\u0447\u0435\u0442\u044b\u0440\u0435 \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0447\u0435\u0442\u044b\u0440\u0435 \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u0430")).replace("\u043e\u0434\u0438\u043d \u043a\u0432\u0438\u043d\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u043e\u0434\u0438\u043d \u043a\u0432\u0438\u043d\u0442\u0438\u043b\u043b\u0438\u043e\u043d").replace("\u0434\u0432\u0430 \u043a\u0432\u0438\u043d\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0434\u0432\u0430 \u043a\u0432\u0438\u043d\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u0430").replace("\u0442\u0440\u0438 \u043a\u0432\u0438\u043d\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0442\u0440\u0438 \u043a\u0432\u0438\u043d\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u0430").replace("\u0447\u0435\u0442\u044b\u0440\u0435 \u043a\u0432\u0438\u043d\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0447\u0435\u0442\u044b\u0440\u0435 \u043a\u0432\u0438\u043d\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u0430")).replace("\u043e\u0434\u0438\u043d \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u043e\u0434\u0438\u043d \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u043b\u0438\u043e\u043d").replace("\u0434\u0432\u0430 \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0434\u0432\u0430 \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u0430").replace("\u0442\u0440\u0438 \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0442\u0440\u0438 \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u0430").replace("\u0447\u0435\u0442\u044b\u0440\u0435 \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0447\u0435\u0442\u044b\u0440\u0435 \u0441\u0435\u043a\u0441\u0442\u0438\u0438\u043b\u043b\u0438\u043e\u043d\u0430")}},uk:{fixCases:function(e){return e=(e=(e=(e=(e=(e=(e=e.replace("\u043e\u0434\u0438\u043d \u0442\u0438\u0441\u044f\u0447","\u043e\u0434\u043d\u0430 \u0442\u0438\u0441\u044f\u0447\u0430").replace("\u0434\u0432\u0430 \u0442\u0438\u0441\u044f\u0447","\u0434\u0432\u0456 \u0442\u0438\u0441\u044f\u0447\u0456").replace("\u0442\u0440\u0438 \u0442\u0438\u0441\u044f\u0447","\u0442\u0440\u0438 \u0442\u0438\u0441\u044f\u0447\u0456").replace("\u0447\u043e\u0442\u0438\u0440\u0438 \u0442\u0438\u0441\u044f\u0447","\u0447\u043e\u0442\u0438\u0440\u0438 \u0442\u0438\u0441\u044f\u0447\u0456")).replace("\u043e\u0434\u0438\u043d \u043c\u0456\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u043e\u0434\u0438\u043d \u043c\u0456\u043b\u044c\u0439\u043e\u043d").replace("\u0434\u0432\u0430 \u043c\u0456\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0434\u0432\u0430 \u043c\u0456\u043b\u044c\u0439\u043e\u043d\u0438").replace("\u0442\u0440\u0438 \u043c\u0456\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0442\u0440\u0438 \u043c\u0456\u043b\u044c\u0439\u043e\u043d\u0438").replace("\u0447\u043e\u0442\u0438\u0440\u0438 \u043c\u0456\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0447\u043e\u0442\u0438\u0440\u0438 \u043c\u0456\u043b\u044c\u0439\u043e\u043d\u0438")).replace("\u043e\u0434\u0438\u043d \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0456\u0432","\u043e\u0434\u0438\u043d \u043c\u0456\u043b\u044c\u044f\u0440\u0434").replace("\u0434\u0432\u0430 \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0456\u0432","\u0434\u0432\u0430 \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0438").replace("\u0442\u0440\u0438 \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0456\u0432","\u0442\u0440\u0438 \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0438").replace("\u0447\u043e\u0442\u0438\u0440\u0438 \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0456\u0432","\u0447\u043e\u0442\u0438\u0440\u0438 \u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0438")).replace("\u043e\u0434\u0438\u043d \u0442\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u043e\u0434\u0438\u043d \u0442\u0440\u0438\u043b\u044c\u0439\u043e\u043d").replace("\u0434\u0432\u0430 \u0442\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0434\u0432\u0430 \u0442\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0438").replace("\u0442\u0440\u0438 \u0442\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0442\u0440\u0438 \u0442\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0438").replace("\u0447\u043e\u0442\u0438\u0440\u0438 \u0442\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0447\u043e\u0442\u0438\u0440\u0438 \u0442\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0438")).replace("\u043e\u0434\u0438\u043d \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u043e\u0434\u0438\u043d \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u044c\u0439\u043e\u043d").replace("\u0434\u0432\u0430 \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0434\u0432\u0430 \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0438").replace("\u0442\u0440\u0438 \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0442\u0440\u0438 \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0438").replace("\u0447\u043e\u0442\u0438\u0440\u0438 \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0447\u043e\u0442\u0438\u0440\u0438 \u043a\u0432\u0430\u0434\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0438")).replace("\u043e\u0434\u0438\u043d \u043a\u0432\u0456\u043d\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u043e\u0434\u0438\u043d \u043a\u0432\u0456\u043d\u0442\u0438\u043b\u044c\u0439\u043e\u043d").replace("\u0434\u0432\u0430 \u043a\u0432\u0456\u043d\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0434\u0432\u0430 \u043a\u0432\u0456\u043d\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0438").replace("\u0442\u0440\u0438 \u043a\u0432\u0456\u043d\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0442\u0440\u0438 \u043a\u0432\u0456\u043d\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0438").replace("\u0447\u043e\u0442\u0438\u0440\u0438 \u043a\u0432\u0456\u043d\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0447\u043e\u0442\u0438\u0440\u0438 \u043a\u0432\u0456\u043d\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0438")).replace("\u043e\u0434\u0438\u043d \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u043e\u0434\u0438\u043d \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u044c\u0439\u043e\u043d").replace("\u0434\u0432\u0430 \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0434\u0432\u0430 \u0441\u0435\u043a\u0441\u0438\u043b\u044c\u0439\u043e\u043d\u0438").replace("\u0442\u0440\u0438 \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0442\u0440\u0438 \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0438").replace("\u0447\u043e\u0442\u0438\u0440\u0438 \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0447\u043e\u0442\u0438\u0440\u0438 \u0441\u0435\u043a\u0441\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0438")}}},C=function(e){return!(isNaN(+e)||"-"===e[0]||" "===e[0]||"+"===e[0]||e.toString().length>24||/^0+/.test(e)||null===e||!0===e||!1===e)},S=function(e){return(e+"").split(/(?=(?:\d{3})+(?!\d))/)},Q=function(e,n,t){if(!C(e)||!(e>0&&e<1e3))return"";var a="";return(e=parseInt(e).toString())<20?a=t[0][e]:e>19&&e<100?a=t[1][e[0]]+" "+t[0][e[1]]:e>99&&e%100<20?a=t[2][e[0]]+("en"===n&&e%100!==0?" and ":" ")+t[0][e%100]:e>99&&e%100>19&&(a=t[2][e[0]]+("en"===n?" and ":" ")+t[1][e[1]]+" "+t[0][e[2]]),a},w=function(e,n,t){if(!C(e))return"";var a=null,l=null;if(-1===Object.keys(n[t]).indexOf("words"))return"";a=n[t].words,"ru"===t?l=J.ru.fixCases:"uk"===t&&(l=J.uk.fixCases);for(var i="",r=S(e),c=0;c<r.length;c++)i+=Q(r[c],t,a),i+="000"!==r[c]&&r[c+1]?" "+a[3][r.length-c]+" ":"","en"===t&&(i+=r[c+1]&&"000"!==r[c+1]&&r[c+1]<100?" and ":"");return l&&(i=l(i)),i},L=Object(s.a)({translation:{marginTop:25,display:"flex",alignItems:"center","@media (max-width: 420px)":{flexDirection:"column",alignItems:"flex-start"}},result:{paddingLeft:15,"@media (max-width: 420px)":{padding:[5,0]},"&::first-letter":{textTransform:"uppercase"}}}),D=function(e){var n=e.number,t=e.languages,l=e.selectedLang,i=e.enabled,r=e.toggleLang,c=L(),o=w(n,t,l);return!!o&&Object(a.jsxs)("div",{className:c.translation,children:[Object(a.jsx)("div",{children:Object(a.jsx)(k,{lang:l,enabled:i,toggleLang:r})}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:c.result,children:o})})]})},N=Object(s.a)({main:{paddingTop:60,"@media (max-width: 736px)":{paddingTop:40}},container:{padding:[0,15],margin:[0,"auto"],maxWidth:768},title:{fontSize:50,textAlign:"center",fontFamily:["Nanum Gothic","sans-serif"],"@media (max-width: 736px)":{fontSize:32}},wrapper:{marginTop:50,position:"relative",height:65},control:{position:"absolute",top:-9,left:15,backgroundColor:"white",display:"inline-block",padding:[0,7],font:{size:14,family:["Nanum Gothic","sans-serif"]}},number:{width:"100%",height:52,fontFamily:["Nanum Gothic","sans-serif"],padding:[5,15],fontSize:26,border:{width:1,style:"solid",color:"black",radius:3},"&:focus":{outline:"none",border:{color:f},boxShadow:["0 0 5px 1px ".concat(f)]},"&::placeholder":{fontFamily:["Open Sans","sans-serif"]}},error:{color:"red",paddingTop:10},result:{marginTop:40}}),R={toggleEn:j,toggleEnUs:h,toggleRu:m,toggleUk:p},A=Object(o.b)((function(e){return{en:e.en,en_us:e.en_us,ru:e.ru,uk:e.uk}}),R)((function(e){var n=N(),t=Object(l.useState)(""),i=Object(E.a)(t,2),r=i[0],c=i[1],o=e.en,s=e.en_us,d=e.ru,u=e.uk;return Object(a.jsx)("main",{className:n.main,children:Object(a.jsxs)("div",{className:n.container,children:[Object(a.jsx)("h1",{className:n.title,children:"Translate Number"}),Object(a.jsxs)("div",{className:n.wrapper,children:[Object(a.jsx)("label",{className:n.control,htmlFor:"number",children:"Number"}),Object(a.jsx)("input",{className:n.number,type:"text",id:"number",autoFocus:!0,maxLength:"24",placeholder:"Insert the number",onInput:function(e){return c(e.target.value)}}),!C(r)&&Object(a.jsx)("p",{className:n.error,children:"Invalid number format!"})]}),Object(a.jsxs)("div",{className:n.result,children:[!!o.enabled&&Object(a.jsx)(D,{number:r,languages:e,selectedLang:"en",enabled:o.enabled,toggleLang:function(){return e.toggleEn()}}),!!s.enabled&&Object(a.jsx)(D,{number:r,languages:e,selectedLang:"en_us",enabled:s.enabled,toggleLang:function(){return e.toggleEnUs()}}),!!d.enabled&&Object(a.jsx)(D,{number:r,languages:e,selectedLang:"ru",enabled:d.enabled,toggleLang:function(){return e.toggleRu()}}),!!u.enabled&&Object(a.jsx)(D,{number:r,languages:e,selectedLang:"uk",enabled:u.enabled,toggleLang:function(){return e.toggleUk()}})]})]})})})),F=Object(s.a)({"@import":"url(https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&family=Open+Sans&display=swap)","@global":{"*":{margin:0,padding:0,boxSizing:"inherit"},html:{boxSizing:"border-box","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"},body:{color:"black",fontSize:16,fontFamily:["Open Sans","sans-serif"],backgroundColor:"white"},ul:{listStyle:"none"}}}),B=function(){return F(),Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(v,{}),Object(a.jsx)(A,{})]})},P=t(11),Z=t(3),z={en:{enabled:!0,words:[["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],["","one hundred","two hundred","three hundred","four hundred","five hundred","six hundred","seven hundred","eight hundred","nine hundred"],["","","thousand","million","billion","trillion","quadrillion","quintillion","sextillion"]]},en_us:{enabled:!1,words:[["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],["","one hundred","two hundred","three hundred","four hundred","five hundred","six hundred","seven hundred","eight hundred","nine hundred"],["","","thousand","million","billion","trillion","quadrillion","quintillion","sextillion"]]},ru:{enabled:!1,words:[["","\u043e\u0434\u0438\u043d","\u0434\u0432\u0430","\u0442\u0440\u0438","\u0447\u0435\u0442\u044b\u0440\u0435","\u043f\u044f\u0442\u044c","\u0448\u0435\u0441\u0442\u044c","\u0441\u0435\u043c\u044c","\u0432\u043e\u0441\u0435\u043c\u044c","\u0434\u0435\u0432\u044f\u0442\u044c","\u0434\u0435\u0441\u044f\u0442\u044c","\u043e\u0434\u0438\u043d\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0434\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0442\u0440\u0438\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0447\u0435\u0442\u044b\u0440\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u043f\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0432\u043e\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0434\u0435\u0432\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c"],["","","\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044c","\u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c","\u0441\u043e\u0440\u043e\u043a","\u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442","\u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442","\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442","\u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442","\u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e"],["","\u0441\u0442\u043e","\u0434\u0432\u0435\u0441\u0442\u0438","\u0442\u0440\u0438\u0441\u0442\u0430","\u0447\u0435\u0442\u044b\u0440\u0435\u0441\u0442\u0430","\u043f\u044f\u0442\u044c\u0441\u043e\u0442","\u0448\u0435\u0441\u0442\u044c\u0441\u043e\u0442","\u0441\u0435\u043c\u044c\u0441\u043e\u0442","\u0432\u043e\u0441\u0435\u043c\u044c\u0441\u043e\u0442","\u0434\u0435\u0432\u044f\u0442\u044c\u0441\u043e\u0442"],["","","\u0442\u044b\u0441\u044f\u0447","\u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u043e\u0432","\u0442\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u043a\u0432\u0430\u0434\u0440\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u043a\u0432\u0438\u043d\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432","\u0441\u0435\u043a\u0441\u0442\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432"]]},uk:{enabled:!1,words:[["","\u043e\u0434\u0438\u043d","\u0434\u0432\u0430","\u0442\u0440\u0438","\u0447\u043e\u0442\u0438\u0440\u0438","\u043f'\u044f\u0442\u044c","\u0448\u0456\u0441\u0442\u044c","\u0441\u0456\u043c","\u0432\u0456\u0441\u0456\u043c","\u0434\u0435\u0432'\u044f\u0442\u044c","\u0434\u0435\u0441\u044f\u0442\u044c","\u043e\u0434\u0438\u043d\u0430\u0434\u0446\u044f\u0442\u044c","\u0434\u0432\u0430\u043d\u0430\u0434\u0446\u044f\u0442\u044c","\u0442\u0440\u0438\u043d\u0430\u0434\u0446\u044f\u0442\u044c","\u0447\u043e\u0442\u0438\u0440\u043d\u0430\u0434\u0446\u044f\u0442\u044c","\u043f'\u044f\u0442\u043d\u0430\u0434\u0446\u044f\u0442\u044c","\u0448\u0456\u0441\u0442\u043d\u0430\u0434\u0446\u044f\u0442\u044c","\u0441\u0456\u043c\u043d\u0430\u0434\u0446\u044f\u0442\u044c","\u0432\u0456\u0441\u0456\u043c\u043d\u0430\u0434\u0446\u044f\u0442\u044c","\u0434\u0435\u0432'\u044f\u0442\u043d\u0430\u0434\u0446\u044f\u0442\u044c"],["","","\u0434\u0432\u0430\u0434\u0446\u044f\u0442\u044c","\u0442\u0440\u0438\u0434\u0446\u044f\u0442\u044c","\u0441\u043e\u0440\u043e\u043a","\u043f'\u044f\u0442\u0434\u0435\u0441\u044f\u0442","\u0448\u0456\u0441\u0442\u0434\u0435\u0441\u044f\u0442","\u0441\u0456\u043c\u0434\u0435\u0441\u044f\u0442","\u0432\u0456\u0441\u0456\u043c\u0434\u0435\u0441\u044f\u0442","\u0434\u0435\u0432'\u044f\u043d\u043e\u0441\u0442\u043e"],["","\u0441\u0442\u043e","\u0434\u0432\u0456\u0441\u0442\u0456","\u0442\u0440\u0438\u0441\u0442\u0430","\u0447\u043e\u0442\u0438\u0440\u0438\u0441\u0442\u0430","\u043f'\u044f\u0442\u0441\u043e\u0442","\u0448\u0456\u0441\u0442\u0441\u043e\u0442","\u0441\u0456\u043c\u0441\u043e\u0442","\u0432\u0456\u0441\u0456\u043c\u0441\u043e\u0442","\u0434\u0435\u0432'\u044f\u0442\u0441\u043e\u0442"],["","","\u0442\u0438\u0441\u044f\u0447","\u043c\u0456\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u043c\u0456\u043b\u044c\u044f\u0440\u0434\u0456\u0432","\u0442\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u043a\u0432\u0430\u0434\u0440\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u043a\u0432\u0456\u043d\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432","\u0441\u0435\u043a\u0441\u0442\u0438\u043b\u044c\u0439\u043e\u043d\u0456\u0432"]]}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d:return Object(Z.a)(Object(Z.a)({},e),{},{en:Object(Z.a)(Object(Z.a)({},e.en),{},{enabled:!e.en.enabled})});case u:return Object(Z.a)(Object(Z.a)({},e),{},{en_us:Object(Z.a)(Object(Z.a)({},e.en_us),{},{enabled:!e.en_us.enabled})});case g:return Object(Z.a)(Object(Z.a)({},e),{},{ru:Object(Z.a)(Object(Z.a)({},e.ru),{},{enabled:!e.ru.enabled})});case b:return Object(Z.a)(Object(Z.a)({},e),{},{uk:Object(Z.a)(Object(Z.a)({},e.uk),{},{enabled:!e.uk.enabled})});default:return e}},U=Object(P.b)(M,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(o.a,{store:U,children:Object(a.jsx)(B,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4a30acd5.chunk.js.map