(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,n,t){e.exports=t.p+"static/media/lock.200de8e8.mp3"},33:function(e,n,t){e.exports=t.p+"static/media/line.ab96e475.mp3"},34:function(e,n,t){e.exports=t.p+"static/media/gameover.74439d32.mp3"},37:function(e,n,t){e.exports=t(51)},49:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(19),i=t.n(o),c=t(7),l=t(8),u=t(10),s=t(9),f=t(11),p=t(2),v=t(54),h=t(53),d=t(14),g=t(3),m=t(16),b=function(){return{type:"TOGGLE_PAUSE"}},x={level:1,pause:!1},E=Object(m.b)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;switch((arguments.length>1?arguments[1]:void 0).type){case"INCREMENT_LEVEL":return e.level<10?Object.assign({},e,{level:e.level+1}):e;case"DECREMENT_LEVEL":return e.level>1?Object.assign({},e,{level:e.level-1}):e;case"TOGGLE_PAUSE":return Object.assign({},e,{pause:!e.pause});default:return e}}}),w=Object(m.c)(E),k=t(6),y="#151515",j=30,O=["216,235,255","216,235,255","216,235,255"];function A(){var e=[["127,10,0","255,26,0","191,14,0"],["0,8,127","0,13,191","0,17,255"],["26,127,0","53,255,0","40,191,0"],["127,109,0","191,164,0","255,218,0"]];return e[Math.floor(Math.random()*e.length)]}function I(e){return e[Math.floor(Math.random()*e.length)]}function S(e,n,t,r){var a="rgb(".concat(r[0],")"),o="rgb(".concat(r[1],")"),i="rgb(".concat(O[1],")");return(r="rgb(".concat(r[2],")"))===i?(e.clearRect(n*j,t*j,j,j),!1):(e.beginPath(),e.lineWidth=2,e.moveTo(2+n*j,1+t*j),e.lineTo(2+n*j,t*j+j-2),e.lineTo(2+n*j,t*j+j-2),e.lineTo(n*j+j-1,t*j+j-2),e.strokeStyle=a,e.stroke(),e.beginPath(),e.lineWidth=2,e.moveTo(1+n*j,2+t*j),e.lineTo(n*j+j-2,2+t*j),e.lineTo(n*j+j-2,t*j+j-1),e.strokeStyle=o,e.stroke(),e.closePath(),e.fillStyle=r,e.fillRect(3+n*j,3+t*j,j-6,j-6),e.strokeStyle="#000",e.strokeRect(1+n*j,1+t*j,j-2,j-2),e)}function D(){var e=Object(p.a)(["\n  border-top: none;\n"]);return D=function(){return e},e}function B(){var e=Object(p.a)(["\n  display: block;\n  color: ",";\n  width: 100%;\n  background-color: ",";\n  border: 5px solid ",";\n  padding: 15px;\n  text-transform: uppercase;\n  font-size: 16px;\n"]);return B=function(){return e},e}function L(){var e=Object(p.a)(["\n  width: 100%;\n  margin-left: 30px;\n  display: flex;\n  flex-direction: column;\n"]);return L=function(){return e},e}function P(){var e=Object(p.a)(["\n  height: 130px;\n  width: 253px;\n  margin: -5px 0 30px;\n  background-color: ",";\n  border: 5px solid ",";\n"]);return P=function(){return e},e}var C=g.a.div(P(),"#D8EBFF","#6970A6"),z=g.a.div(L()),R=g.a.div(B(),"#6970A6","#D8EBFF","#6970A6"),F=Object(g.a)(R)(D()),M=["216,235,255","216,235,255","216,235,255"],T=null,N=null,_=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){T=document.getElementById("preview"),N=T.getContext("2d")}},{key:"componentWillReceiveProps",value:function(e){null!==this.props.next.shape&&e!==this.pros&&(this.cleanPreview(),this.drawPreview())}},{key:"drawPreview",value:function(){for(var e=this.props.next,n=e.active,t=0;t<n.length;t++)for(var r=0;r<n.length;r++)if(n[t][r]){var a=4===n.length?-1:0,o=4===n.length?0:.5;S(N,2+r+o,1+t+a,e.color)}}},{key:"cleanPreview",value:function(){for(var e=0;e<5;e++)for(var n=0;n<10;n++)S(N,n,e,M)}},{key:"render",value:function(){var e=this.props,n=e.level,t=e.score,r=e.lines;return a.a.createElement(z,null,a.a.createElement(C,null,a.a.createElement("canvas",{width:"243",height:"100",id:"preview"})),a.a.createElement(R,null,"Level ",n),a.a.createElement(F,null,"Score ",t),a.a.createElement(F,null,"Lines ",r))}}]),n}(r.Component),G=t(52);function W(){var e=Object(p.a)(["\n  display: block;\n  margin: 30px;\n  color: ",";\n  padding: 15px;\n  margin-top: 30px;\n  color: ",";\n  border: 5px solid ",";\n  font-size: 20px;\n  font-weight: 600;\n  &:hover {\n    background-color: ",";\n  }\n"]);return W=function(){return e},e}function U(){var e=Object(p.a)(["\n  width: 100%;\n  background-color: transparent;\n  padding: 15px;\n  margin-top: 30px;\n  color: ",";\n  color: ",";\n  border: 5px solid ",";\n  font-size: 20px;\n  font-weight: 600;\n  &:hover {\n    background-color: ",";\n  }\n"]);return U=function(){return e},e}function V(){var e=Object(p.a)(["\n  position: absolute;\n  top: 0; left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n  padding: 30px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n"]);return V=function(){return e},e}var H=g.a.div(V(),"#D8EBFF"),q=g.a.button(U(),"#6970A6",y,"#6970A6","#9EBDEA"),J=Object(g.a)(G.a)(W(),"#6970A6","#6970A6","#6970A6","#9EBDEA"),Q=Object(d.b)(null,{togglePause:b})(function(e){var n=e.togglePause;return a.a.createElement(H,null,"Paused",a.a.createElement(q,{onClick:n},"Resume"),a.a.createElement(J,{to:"/"},"Quit"))}),Y=t(13),K=t.n(Y),X=t(17),Z=t(25),$=t.n(Z);function ee(){return(ee=Object(X.a)(K.a.mark(function e(n){var t,r,a;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.a.open("tetris",1);case 2:return t=e.sent,r=t.transaction("scores","readwrite"),a=r.objectStore("scores"),e.next=7,a.add({value:n});case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function ne(){return te.apply(this,arguments)}function te(){return(te=Object(X.a)(K.a.mark(function e(){var n,t,r,a;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.a.open("tetris",1,function(e){return e.createObjectStore("scores",{autoIncrement:!0})});case 2:return n=e.sent,t=n.transaction("scores","readonly"),r=t.objectStore("scores"),e.next=7,r.getAll();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var re=[[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]]],ae=[[[1,0,0],[1,1,1],[0,0,0]],[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1,0],[0,1,0],[1,1,0]]],oe=[[[0,0,1],[1,1,1],[0,0,0]],[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]],[[1,1,0],[0,1,0],[0,1,0]]],ie=[[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]],ce=[[[0,1,1],[1,1,0],[0,0,0]],[[0,1,0],[0,1,1],[0,0,1]]],le=[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]],ue=[[[1,1,0],[0,1,1],[0,0,0]],[[0,0,1],[0,1,1],[0,1,0]]],se=[ue,ce,le,ie,oe,re,ae,ue,ce,le,ie,oe,re,ae,ue,ce,le,ie,oe,re,ae,ue,ce,le,ie,oe,re,ae],fe=t(32),pe=t.n(fe),ve=t(33),he=t.n(ve),de=t(34),ge=t.n(de);function me(){var e=Object(p.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: relative;\n"]);return me=function(){return e},e}var be=g.a.div(me()),xe=new Audio(pe.a),Ee=new Audio(ge.a),we=new Audio(he.a),ke=["216,235,255","216,235,255","216,235,255"],ye=null,je=null,Oe=null,Ae={left:{run:!1,interval:null},right:{run:!1,interval:null},down:{run:!1,interval:null}},Ie=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={gameover:!1,board:[],level:t.props.level,score:0,lines:0,frequency:500-40*t.props.level,nextPiece:{shape:null,color:null},piece:{shape:[],color:null,position:null,active:null,x:null,y:null}},t.createShape=t.createShape.bind(Object(k.a)(Object(k.a)(t))),t.moveRight=t.moveRight.bind(Object(k.a)(Object(k.a)(t))),t.drawBoard=t.drawBoard.bind(Object(k.a)(Object(k.a)(t))),t.checkRow=t.checkRow.bind(Object(k.a)(Object(k.a)(t))),t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.control.bind(this),!0),window.addEventListener("keyup",this.clearDirectionInterval.bind(this)),this.drawBoard(),this.createShape()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.control),window.removeEventListener("keyup",this.clearDirectionInterval),Oe=null,Ae.left.run=!1,Ae.right.run=!1,Ae.down.run=!1,clearInterval(Ae.right.interval),clearInterval(Ae.left.interval),clearInterval(Ae.down.interval)}},{key:"control",value:function(e){if(this.state.gameover)return!1;switch(e.keyCode){case 37:Ae.right.run=!1,Ae.down.run=!1,clearInterval(Ae.right.interval),clearInterval(Ae.down.interval),this.moveLeft();break;case 38:this.rotate();break;case 39:Ae.left.run=!1,Ae.down.run=!1,clearInterval(Ae.left.interval),clearInterval(Ae.down.interval),this.moveRight();break;case 40:Ae.left.run=!1,Ae.right.run=!1,clearInterval(Ae.left.interval),clearInterval(Ae.right.interval),this.moveDown();break;case 27:this.props.togglePause()}}},{key:"clearDirectionInterval",value:function(e){switch(e.keyCode){case 37:Ae.left.run=!1,clearInterval(Ae.left.interval);break;case 39:Ae.right.run=!1,clearInterval(Ae.right.interval);break;case 40:Ae.down.run=!1,clearInterval(Ae.down.interval)}}},{key:"drawBoard",value:function(){var e=[];ye=document.getElementById("tetris"),je=ye.getContext("2d");for(var n=0;n<20;n++){e[n]=[];for(var t=0;t<10;t++)e[n][t]=ke,S(je,t,n,ke)}this.setState({board:e})}},{key:"createShape",value:function(){var e=this,n=I(se),t=I(se),r={shape:n,color:A(),active:n[0],position:0,x:3,y:-2};this.state.nextPiece.shape&&(r.active=this.state.nextPiece.active,r.color=this.state.nextPiece.color,r.shape=this.state.nextPiece.shape);var a={active:t[0],shape:t,color:A()};this.setState({piece:r,nextPiece:a,score:this.state.score+this.state.level},function(){e.fill(r.color),Oe||e.start()})}},{key:"fill",value:function(e){var n=this.state.piece,t=n.active;Array.from({length:t.length},function(e,n){return n}).forEach(function(r){Array.from({length:t.length},function(e,n){return n}).forEach(function(a){t[r][a]&&S(je,n.x+a,n.y+r,e)})})}},{key:"moveRight",value:function(){var e=this;if(!0===Ae.right.run||this.state.gameover)return!1;Ae.right.run=!0;var n=this.state.piece;Ae.right.interval=setInterval(function(){e.colision(1,0,n.active)||(e.fill(ke),e.setState(function(e){return e.piece.x++},function(){e.fill(n.color)}))},75)}},{key:"moveLeft",value:function(){var e=this;if(!0===Ae.left.run||this.state.gameover)return!1;Ae.left.run=!0;var n=this.state.piece;Ae.left.interval=setInterval(function(){e.colision(-1,0,n.active)||(e.fill(ke),e.setState(function(e){return e.piece.x--},function(){e.fill(n.color)}))},75)}},{key:"moveDown",value:function(){var e=this;if(!0===Ae.down.run||this.state.gameover)return!1;Ae.down.run=!0,Ae.down.interval=setInterval(function(){e.colision(0,1,e.state.piece.active)?e.lock():(e.fill(ke),e.setState(function(e){return e.piece.y++},function(){e.fill(e.state.piece.color),clearInterval(Oe),e.start()}))},75)}},{key:"colision",value:function(e,n,t){if(this.state.gameover)return!1;for(var r=this.state.piece,a=0;a<t.length;a++)for(var o=0;o<t.length;o++){var i=r.x+o+e,c=r.y+a+n;if(t[a][o]&&!(c<0)){if(i<0||i>=10||c>=20)return!0;if(this.state.board[c][i][0]!==ke[0])return!0}}return!1}},{key:"rotate",value:function(){var e=this,n=this.state.piece,t=n.position===n.shape.length-1?0:n.position+1;this.colision(0,0,n.shape[t])||(this.fill(ke),this.setState(function(e){e.piece.active=e.piece.shape[t],e.piece.position=t},function(){e.fill(n.color)}))}},{key:"lock",value:function(){for(var e=this,n=this.state.piece.active,t=function(t){var a=function(r){return n[t][r]?e.state.piece.y+t<0?(t=n.length,e.gameOver(),"break"):void e.setState(function(n){n.board[e.state.piece.y+t][e.state.piece.x+r]=n.piece.color},function(){return xe.play()}):"continue"};e:for(var o=0;o<n.length;o++){switch(a(o)){case"continue":continue;case"break":break e}}r=t},r=0;r<n.length;r++)t(r);this.checkRow()}},{key:"gameOver",value:function(){var e=this;clearInterval(Oe),this.setState({gameover:!0},function(){Ee.play(),function(e){ee.apply(this,arguments)}(e.state.score),e.props.history.push("/gameover")})}},{key:"checkRow",value:function(){for(var e=this,n=this.state.board,t=0,r=0,a=function(a){10===Array.from({length:10},function(e,n){return n}).filter(function(e){return n[a][e][0]!==ke[0]}).length&&(t++,r=a,Array.from({length:10},function(e,n){return n}).forEach(function(n){S(je,n,a,ke),e.setState(function(e){e.board[a][n]=ke})}))},o=0;o<20;o++)a(o);if(t>0){for(var i=function(r){for(var a=function(a){for(var o=function(t){var o=n[r-t]?n[r-t][a]:ke;S(je,a,r,o),e.setState(function(e){e.board[r][a]=o})},i=1;i<=t;i++)o(i)},o=0;o<10;o++)a(o)},c=r;c>=0;c--)i(c);we.play();var l=this.state.lines+t,u=this.state.level;l/(10*u)>=1&&u++,this.setState(function(e){e.score=e.score+(100+e.level)*Math.pow(t,2),e.lines=e.lines+t,e.level=u})}this.createShape()}},{key:"start",value:function(){var e=this;Oe=setInterval(function(){if(e.props.pause)return!1;e.colision(0,1,e.state.piece.active)?e.lock():(e.fill(ke),e.setState(function(e){return e.piece.y++},function(){e.fill(e.state.piece.color),clearInterval(Oe),e.start()}))},this.state.frequency)}},{key:"render",value:function(){var e=this.state,n=e.score,t=e.level,r=e.lines,o=e.nextPiece;e.pause;return a.a.createElement(be,null,a.a.createElement("canvas",{id:"tetris",width:"310",height:"600"}),a.a.createElement(_,{score:n,level:t,lines:r,next:o,SQ:30}),!0===this.props.pause&&a.a.createElement(Q,null))}}]),n}(r.Component);Ie.foo="bar";var Se=Object(d.b)(function(e){return{level:e.game.level,pause:e.game.pause}},{togglePause:b})(Ie);function De(){var e=Object(p.a)(["\n  background-color: transparent;\n  border: none;\n  padding: 15px;\n  color: ",";\n  &:hover {\n    background-color: ",";\n  }\n"]);return De=function(){return e},e}function Be(){var e=Object(p.a)(["\n  display: flex;;\n  justify-content: space-between;\n  border: 5px solid ",";\n  margin: 15px 15px 0;\n  line-height: 43px;\n  font-size: 16px;\n"]);return Be=function(){return e},e}var Le=g.a.div(Be(),"#6970A6"),Pe=g.a.button(De(),"#6970A6","#9EBDEA"),Ce=Object(d.b)(function(e){return{level:e.game.level}},{incrementLevel:function(){return{type:"INCREMENT_LEVEL"}},decrementLevel:function(){return{type:"DECREMENT_LEVEL"}}})(function(e){var n=e.level,t=e.incrementLevel,r=e.decrementLevel;return a.a.createElement(Le,null,a.a.createElement(Pe,{onClick:r},"-"),"lvl: ",n,a.a.createElement(Pe,{onClick:t},"+"))});function ze(){var e=Object(p.a)(["\n  margin: 0;\n  padding: 0;\n"]);return ze=function(){return e},e}function Re(){var e=Object(p.a)(["\n  list-style-type: none;\n  text-align: right;\n  margin: 3px 0;\n  padding: 8px 5px 5px;\n  font-size: 16px;\n  &:nth-child(even) {\n    background-color: ",";\n  }\n  &:nth-child(odd) {\n    background-color: ",";\n  }\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return Re=function(){return e},e}function Fe(){var e=Object(p.a)(["\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-size: 12px;\n  margin: 45px 0;\n"]);return Fe=function(){return e},e}function Me(){var e=Object(p.a)(["\n  text-align: center;\n  font-size: 18px;\n  margin: 10px 0;\n  font-weight: 600;\n"]);return Me=function(){return e},e}function Te(){var e=Object(p.a)(["\n  border: 5px solid ",";\n  padding: 5px;\n  margin: 15px 15px 15px;\n"]);return Te=function(){return e},e}var Ne=g.a.div(Te(),"#6970A6"),_e=g.a.div(Me()),Ge=g.a.small(Fe()),We=g.a.li(Re(),"#B7C7E5","#C3D3EE"),Ue=g.a.ul(ze()),Ve=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={list:[]},t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(X.a)(K.a.mark(function e(){return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getHighscores();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getHighscores",value:function(){var e=Object(X.a)(K.a.mark(function e(){var n;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:n=e.sent,this.setState({list:n.sort(function(e,n){return n.value-e.value}).slice(0,5)});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement(Ne,null,a.a.createElement(_e,null,"High scores"),!this.state.list.length&&a.a.createElement(Ge,null,"No scores."),a.a.createElement(Ue,null,this.state.list.map(function(e){return a.a.createElement(We,{key:e.id},e.value)})))}}]),n}(r.Component);function He(){var e=Object(p.a)(["\n  padding: 6px 0;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: 'arial';\n\n"]);return He=function(){return e},e}function qe(){var e=Object(p.a)(["\n  padding: 3px;\n  & td:first-child {\n    font-weight: 600;\n    text-align: right;\n  }\n  & td:last-child {\n    text-align: left;\n  }\n"]);return qe=function(){return e},e}function Je(){var e=Object(p.a)(["\n  width: 100%;\n  margin-top: 25px;\n"]);return Je=function(){return e},e}function Qe(){var e=Object(p.a)(["\n  width: 100%;\n  background-color: transparent;\n  padding: 15px;\n  margin-top: 30px;\n  color: ",";\n  color: ",";\n  border: 5px solid ",";\n  font-size: 20px;\n  font-weight: 600;\n  &:hover {\n    background-color: ",";\n  }\n"]);return Qe=function(){return e},e}function Ye(){var e=Object(p.a)(["\n  position: absolute;\n  top: 0; left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n  padding: 30px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n"]);return Ye=function(){return e},e}var Ke=g.a.div(Ye(),"#D8EBFF"),Xe=g.a.button(Qe(),"#6970A6",y,"#6970A6","#9EBDEA"),Ze=g.a.table(Je()),$e=g.a.tr(qe()),en=g.a.td(He()),nn=function(e){var n=e.toggleInfo;return a.a.createElement(Ke,null,"Control keys",a.a.createElement(Ze,null,a.a.createElement("tbody",null,a.a.createElement($e,null,a.a.createElement(en,null,"Left arrow"),a.a.createElement(en,null,"-"),a.a.createElement(en,null,"Move left")),a.a.createElement($e,null,a.a.createElement(en,null,"Right arrow"),a.a.createElement(en,null,"-"),a.a.createElement(en,null,"Move right")),a.a.createElement($e,null,a.a.createElement(en,null,"Up arrow"),a.a.createElement(en,null,"-"),a.a.createElement(en,null,"Rotate")),a.a.createElement($e,null,a.a.createElement(en,null,"Down arrow"),a.a.createElement(en,null,"-"),a.a.createElement(en,null,"Soft drop")),a.a.createElement($e,null,a.a.createElement(en,null,"ESC"),a.a.createElement(en,null,"-"),a.a.createElement(en,null,"Pause (toggle)")))),a.a.createElement(Xe,{onClick:n},"Done"))};function tn(){var e=Object(p.a)(["\n  color: ",";\n  font-weight: 600;\n  margin: 25px 10px;\n  text-align: center;\n  font-size: 20px;\n  text-decoration: none;\n  font-size: 14px;\n  &:hover {\n    color: ",";\n  }\n"]);return tn=function(){return e},e}function rn(){var e=Object(p.a)(["\n  height: 130px;\n  width: 258px;\n  margin: -5px 0 30px;\n  background-color: ",";\n  border: 5px solid ",";\n  position: absolute;\n  top: 0;\n  right: -289px;\n  font-size: 14px;\n  padding: 15px;\n"]);return rn=function(){return e},e}var an=g.a.div(rn(),"#D8EBFF","#6970A6"),on=Object(g.a)(G.a)(tn(),"#9EBDEA",y),cn=function(){return a.a.createElement(an,null,"By: ",a.a.createElement(on,{title:"Link to github.com",to:"https://github.com/n3sta"},"n3sta"))};function ln(){var e=Object(p.a)(["\n  font-weight: 600;\n  border: 5px solid ",";\n  padding: 15px;\n  margin: 15px;\n  width: calc(100% - 30px);\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 16px;\n  text-decoration: none;\n  background-color: transparent;\n  color: ",";\n  &:hover {\n    background-color: ",";\n  }\n"]);return ln=function(){return e},e}function un(){var e=Object(p.a)(["\n  display: block;\n  color: ",";\n  font-weight: 600;\n  border: 5px solid ",";\n  padding: 15px;\n  margin: 25px 10px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 20px;\n  text-decoration: none;\n  &:hover {\n    background-color: ",";\n  }\n"]);return un=function(){return e},e}function sn(){var e=Object(p.a)(["\n  position: relative;\n"]);return sn=function(){return e},e}var fn=g.a.div(sn()),pn=Object(g.a)(G.a)(un(),y,"#6970A6","#9EBDEA"),vn=g.a.button(ln(),"#6970A6","#6970A6","#9EBDEA"),hn=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={info:!1},t.toggleInfo=t.toggleInfo.bind(Object(k.a)(Object(k.a)(t))),t}return Object(f.a)(n,e),Object(l.a)(n,[{key:"toggleInfo",value:function(){this.setState(function(e){return e.info=!e.info})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(fn,null,a.a.createElement(pn,{to:"game"},"Play game"),a.a.createElement(Ce,null),a.a.createElement(Ve,null),a.a.createElement(vn,{onClick:this.toggleInfo},"Control keys"),this.state.info&&a.a.createElement(nn,{toggleInfo:this.toggleInfo})),a.a.createElement(cn,null))}}]),n}(r.Component);function dn(){var e=Object(p.a)(["\n  width: 125px;\n  height: 120px;\n  color: ",";\n  font-size: 50px;\n"]);return dn=function(){return e},e}function gn(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80px;\n  width: 100px;\n  background-color: ",";\n  border: 5px solid ",";\n  text-transform: uppercase;\n  font-size: 30px;\n  color: ",";\n  &:hover {\n    background-color: ",";\n  }\n"]);return gn=function(){return e},e}function mn(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 30px 15px;\n"]);return mn=function(){return e},e}function bn(){var e=Object(p.a)(["\n  text-align: center;\n  font-size: 25px;\n  margin: 30px 0;\n  font-weight: 600;\n  color: ",";\n"]);return bn=function(){return e},e}var xn=g.a.div(bn(),"#6970A6"),En=g.a.div(mn()),wn=Object(g.a)(G.a)(gn(),"#D8EBFF","#6970A6","#6970A6","#9EBDEA"),kn=Object(g.a)(wn)(dn(),y),yn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(xn,null,"Game over"),a.a.createElement(Ve,null),a.a.createElement(En,null,a.a.createElement(wn,{title:"go to homepage",to:"/"},a.a.createElement("span",{className:"fas fa-home","aria-hidden":"true"})),a.a.createElement(kn,{title:"repeat game",to:"game"},a.a.createElement("span",{className:"fas fa-redo","aria-hidden":"true"}))),a.a.createElement(cn,null))};function jn(){var e=Object(p.a)(["\n  position: relative;\n  margin: 15px auto;\n  min-height: 600px;\n  width: 311px;\n  border: 5px solid ",";\n  background-color: ",";\n  color: ",";\n"]);return jn=function(){return e},e}var On=g.a.div(jn(),"#6970A6","#D8EBFF","#6970A6"),An=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"componentWillMount",value:function(){"indexedDB"in window||window.alert("Your browser doesn't support a stable version of IndexedDB.")}},{key:"render",value:function(){return a.a.createElement(d.a,{store:w},a.a.createElement(On,null,a.a.createElement(v.a,{basename:"/react-tetris"},a.a.createElement(a.a.Fragment,null,a.a.createElement(h.a,{path:"/",exact:!0,component:hn}),a.a.createElement(h.a,{path:"/game",component:Se}),a.a.createElement(h.a,{path:"/gameover",component:yn})))))}}]),n}(r.Component);t(49);i.a.render(a.a.createElement(An,null),document.getElementById("root"))}},[[37,2,1]]]);
//# sourceMappingURL=main.d2053a4d.chunk.js.map