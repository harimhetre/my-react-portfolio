"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{7338:function(e,r,a){a.r(r),a.d(r,{default:function(){return P}});var s=a(7294),t=a(2806),l=a(7462),n=a(4942),i=a(3366),c=a(5697),o=a.n(c),b=a(4184),u=a.n(b),p=a(3663);function m(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,s)}return a}function d(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?m(Object(a),!0).forEach((function(r){(0,n.Z)(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}var g={children:o().node,bar:o().bool,multi:o().bool,tag:p.iC,value:o().oneOfType([o().string,o().number]),min:o().oneOfType([o().string,o().number]),max:o().oneOfType([o().string,o().number]),animated:o().bool,striped:o().bool,color:o().string,className:o().string,barClassName:o().string,cssModule:o().object,style:o().object,barStyle:o().object,barAriaValueText:o().string,barAriaLabelledBy:o().string},y=function(e){var r=e.children,a=e.className,t=e.barClassName,n=e.cssModule,c=e.value,o=e.min,b=e.max,m=e.animated,g=e.striped,y=e.color,f=e.bar,h=e.multi,j=e.tag,x=e.style,v=e.barStyle,O=e.barAriaValueText,N=e.barAriaLabelledBy,P=(0,i.Z)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"]),w=(0,p.He)(c)/(0,p.He)(b)*100,k=(0,p.mx)(u()(a,"progress"),n),S={className:(0,p.mx)(u()("progress-bar",f&&a||t,m?"progress-bar-animated":null,y?"bg-"+y:null,g||m?"progress-bar-striped":null),n),style:d(d(d({},f?x:{}),v),{},{width:w+"%"}),role:"progressbar","aria-valuenow":c,"aria-valuemin":o,"aria-valuemax":b,"aria-valuetext":O,"aria-labelledby":N,children:r};return f?s.createElement(j,(0,l.Z)({},P,S)):s.createElement(j,(0,l.Z)({},P,{style:x,className:k}),h?r:s.createElement("div",S))};y.propTypes=g,y.defaultProps={tag:"div",value:0,min:0,max:100,style:{},barStyle:{}};var f=y,h=a(8595),j=a(267),x=a(1252),v=a(8367),O=a(9506),N=a(5893),P=function(){return(0,N.jsx)(h.Z,{className:"section section-lg",children:(0,N.jsx)(v.pT,{bottom:!0,duration:1e3,distance:"40px",children:(0,N.jsxs)(j.Z,{children:[(0,N.jsxs)(x.Z,{lg:"6",children:[(0,N.jsx)("h1",{className:"h1",children:"Proficiency"}),t.Bv.map((function(e){return(0,N.jsxs)("div",{className:"progress-info",children:[(0,N.jsx)("div",{className:"progress-label",children:(0,N.jsx)("span",{children:e.Stack})}),(0,N.jsx)("div",{className:"progress-percentage",children:(0,N.jsxs)("span",{children:[e.progressPercentage,"%"]})}),(0,N.jsx)(f,{max:"100",value:e.progressPercentage,color:"info",role:"progressbar","aria-label":e.Stack})]},e.Stack)}))]}),(0,N.jsx)(x.Z,{lg:"6",children:(0,N.jsx)(O.Z,{animationPath:"https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json"})})]})})})}}}]);