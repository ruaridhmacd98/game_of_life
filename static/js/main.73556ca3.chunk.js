(this["webpackJsonpreact-gameoflife"]=this["webpackJsonpreact-gameoflife"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(1),a=n.n(s),r=n(8),c=n.n(r),o=(n(14),n(15),n(7)),l=n(2),d=n(3),u=n(5),h=n(4),j=(n(16),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.isAlive,s=e.timeDead,a=e.onMouseDown,r=e.onMouseEnter,c=e.onMouseUp,o=e.row;console.log(s);var l=n?"node-alive":n||1!==s?n||2!==s?"":"node-dead2":"node-dead1";return Object(i.jsx)("div",{id:"node-".concat(o,"-").concat(t),className:"node ".concat(l),onMouseDown:function(){return a(o,t)},onMouseEnter:function(){return r(o,t)},onMouseUp:function(){return c()}})}}]),n}(s.Component)),b=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).runGame=function(){e.setState({isRunning:!0}),e.runIteration()},e.stopGame=function(){e.setState({isRunning:!1}),e.timeoutHandler&&(window.clearTimeout(e.timeoutHandler),e.timeoutHandler=null)},e.handleIntervalChange=function(t){e.setState({interval:t.target.value})},e.clearBoard=function(){e.setState({grid:v()})},e.randomBoard=function(){e.setState({grid:f()})},e.state={grid:v(),mouseIsPressed:!1,interval:100,isRunning:!1},e}return Object(d.a)(n,[{key:"runIteration",value:function(){for(var e=this,t=v(),n=0;n<t.length;n++)for(var i=0;i<t[0].length;i++){var s=this.calculateNeighbors(this.state.grid,i,n);this.state.grid[n][i].isAlive?2===s||3===s?t[n][i].isAlive=!0:(t[n][i].isAlive=!1,t[n][i].timeDead=1):3===s?t[n][i].isAlive=!0:(t[n][i].isAlive=!1,t[n][i].timeDead=1+this.state.grid[n][i].timeDead)}this.setState({grid:t}),this.timeoutHandler=window.setTimeout((function(){e.runIteration()}),this.state.interval)}},{key:"calculateNeighbors",value:function(e,t,n){for(var i=0,s=[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]],a=0;a<s.length;a++){var r=s[a],c=n+r[0],o=t+r[1];o>=0&&o<e[0].length&&c>=0&&c<e.length&&e[c][o].isAlive&&i++}return i}},{key:"handleMouseDown",value:function(e,t){var n=g(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mouseIsPressed){var n=g(this.state.grid,e,t);this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,s=t.mouseIsPressed;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{id:"navbarDiv",children:Object(i.jsx)("nav",{class:"navbar navbar-inverse",children:Object(i.jsxs)("div",{class:"container-fluid",children:[Object(i.jsx)("div",{class:"navbar-header",children:Object(i.jsx)("div",{class:"navbar-brand",children:"Conway's Game of Life"})}),Object(i.jsxs)("ul",{class:"nav navbar-nav",children:[Object(i.jsx)("li",{children:this.state.isRunning?Object(i.jsx)("button",{class:"btn btn-default navbar-btn",onClick:this.stopGame,children:"Stop"}):Object(i.jsx)("button",{class:"btn btn-default navbar-btn",onClick:this.runGame,children:"Run"})}),Object(i.jsx)("li",{children:Object(i.jsx)("button",{class:"btn btn-default navbar-btn",onClick:this.clearBoard,children:"Clear Board"})}),Object(i.jsx)("li",{children:Object(i.jsx)("button",{class:"btn btn-default navbar-btn",onClick:this.randomBoard,children:"Generate Random Starting Pattern"})}),Object(i.jsxs)("li",{class:"dropdown",children:[Object(i.jsxs)("a",{id:"adjustSpeed",class:"dropdown-toggle","data-toggle":"dropdown",href:"#",children:["Speed: Fast",Object(i.jsx)("span",{class:"caret"})]}),Object(i.jsxs)("ul",{class:"dropdown-menu",children:[Object(i.jsx)("li",{id:"adjustFast",children:Object(i.jsx)("a",{href:"#",children:"Fast"})}),Object(i.jsx)("li",{id:"adjustAverage",children:Object(i.jsx)("a",{href:"#",children:"Average"})}),Object(i.jsx)("li",{id:"adjustSlow",children:Object(i.jsx)("a",{href:"#",children:"Slow"})})]})]}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsxs)("select",{onChange:this.handleIntervalChange,children:[Object(i.jsx)("option",{selected:!0,disabled:!0,children:"Select Iteration Speed"}),Object(i.jsx)("option",{value:"200",children:"Slow"}),Object(i.jsx)("option",{value:"100",children:"Medium"}),Object(i.jsx)("option",{value:"50",children:"Fast"}),Object(i.jsx)("option",{value:"10",children:"Very Fast"})]})})]})]})})}),Object(i.jsx)("div",{className:"grid",children:n.map((function(t,n){return Object(i.jsx)("div",{children:t.map((function(t,n){var a=t.row,r=t.col,c=t.isAlive,o=t.timeDead;return Object(i.jsx)(j,{col:r,isAlive:c,timeDead:o,mouseIsPressed:s,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()},row:a},n)}))},n)}))})]})}}]),n}(s.Component)),v=function(){for(var e=[],t=0;t<25;t++){for(var n=[],i=0;i<50;i++)n.push(O(i,t,!1));e.push(n)}return e},f=function(){for(var e=[],t=0;t<25;t++){for(var n=[],i=0;i<50;i++){var s=Math.random()<.5;n.push(O(i,t,s))}e.push(n)}return e},O=function(e,t,n){return{col:e,row:t,isAlive:n,timeDead:20}},g=function(e,t,n){var i=e.slice(),s=i[t][n],a=Object(o.a)(Object(o.a)({},s),{},{isAlive:!s.isAlive});return i[t][n]=a,i};var m=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(b,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),a(e),r(e)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.73556ca3.chunk.js.map