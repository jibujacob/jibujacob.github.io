(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(4),r=s.n(n),a=s(5),l=(s(10),s(0));var j=function(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(a.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Full Stack Developer","Data Engineer"]})}),[]),Object(l.jsxs)("div",{className:"intro",id:"intro",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{src:"assets/words-0004.png",alt:""})})}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("h2",{children:"Hello"}),Object(l.jsx)("h1",{children:"I'm Jibu Jacob"}),Object(l.jsx)("h3",{children:Object(l.jsx)("span",{ref:e,children:"Web Developer"})})]}),Object(l.jsx)("a",{href:"#portfolio",children:Object(l.jsx)("img",{src:"assets/down.png",alt:""})})]})]})},o=s(3);s(12),s(13);var b=function(e){var t=e.id,s=e.title,c=e.active,i=e.setSelected;return Object(l.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return i(t)},children:s},t)},d=[{id:1,title:"Frontend Mentor Challenges",img:"/assets/frontendMentorChallenges.png",link:"https://jpj-frontendmentor-solutions.herokuapp.com/"},{id:2,title:"Blog Site using Microservices",img:"/assets/blog-microservices.png",link:"https://github.com/jibujacob/Blog_MERN"},{id:3,title:"Web E-commerce Design",img:"https://cdn.dribbble.com/users/3637068/screenshots/15467010/media/69a3279182b75365013fe285733d1122.png?compress=1&resize=1200x900"},{id:4,title:"Web Relax App",img:"https://cdn.dribbble.com/users/2264844/screenshots/15463998/media/d85e92a332c41094f68e1f716884f7ce.jpg?compress=1&resize=1200x900"},{id:5,title:"Web Design",img:"https://cdn.dribbble.com/users/387658/screenshots/15458608/media/e92ec1dd33dd1170ae3dc9c5272f2693.jpg?compress=1&resize=1200x900"}],h=[{id:1,title:"NY Parking Tickets Analysis",img:"/assets/Apache_Spark_logo.png",link:"https://github.com/jibujacob/NY_Parking_Tickets_Exploratory_Analysis"},{id:2,title:"ATM Analysis",img:"/assets/hivetospark10.png",link:"https://github.com/jibujacob/ATM_Analysis"},{id:3,title:"Retail Streaming Analysis",img:"/assets/kafka-sparkstream.jpeg",link:"https://github.com/jibujacob/Retail_Streaming_Analysis"}];var m=function(){var e=Object(c.useState)("web"),t=Object(o.a)(e,2),s=t[0],i=t[1],n=Object(c.useState)([]),r=Object(o.a)(n,2),a=r[0],j=r[1];return Object(c.useEffect)((function(){if("dataengineering"===s)j(h);else j(d)}),[s]),Object(l.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(l.jsx)("h1",{children:"Portfolio"}),Object(l.jsx)("ul",{children:[{id:"web",title:"Responsive Web App"},{id:"dataengineering",title:"Data Engineering"}].map((function(e){return Object(l.jsx)(b,{id:e.id,title:e.title,active:s===e.id,setSelected:i},e.id)}))}),Object(l.jsx)("div",{className:"container",children:a.map((function(e){return Object(l.jsx)("a",{href:e.link,rel:"noreferrer",target:"_blank",children:Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("img",{src:e.img,alt:""}),Object(l.jsx)("h3",{children:e.title})]})},e.id)}))})]})};s(14);var O=function(){return Object(l.jsxs)("div",{className:"contacts",id:"contacts",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("h1",{className:"contactHeader",children:"Contact Me"}),Object(l.jsxs)("div",{className:"contactWrapper",children:[Object(l.jsxs)("div",{className:"contactContent",children:[Object(l.jsx)("span",{children:Object(l.jsx)("strong",{children:"Email:"})}),Object(l.jsx)("span",{children:"jibupjacob@gmail.com"})]}),Object(l.jsxs)("div",{className:"contactContentIcon",children:[Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/jibujacob07/",rel:"noreferrer",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-linkedin"})})}),Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:"https://github.com/jibujacob",rel:"noreferrer",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-github"})})})]})]})]})]})},p=(s(15),s(16),function(){return Object(l.jsx)("div",{className:"topbar",children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)("ul",{className:"topbarList",children:[Object(l.jsx)("a",{href:"#intro",children:Object(l.jsx)("li",{className:"listItem",children:"HOME"})}),Object(l.jsx)("a",{href:"#portfolio",children:Object(l.jsx)("li",{className:"listItem",children:"PORTFOLIO"})}),Object(l.jsx)("a",{href:"#contacts",children:Object(l.jsx)("li",{className:"listItem",children:"CONTACT ME"})})]})})})});var x=function(){return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(p,{}),Object(l.jsxs)("div",{className:"sections",children:[Object(l.jsx)(j,{}),Object(l.jsx)(m,{}),Object(l.jsx)(O,{})]})]})};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.1af22b8d.chunk.js.map