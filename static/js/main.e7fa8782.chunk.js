(this["webpackJsonprobofriends-2"]=this["webpackJsonprobofriends-2"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),s=n.n(a),i=(n(12),n(2)),o=n(3),h=n(5),b=n(4),u=n(0),j=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.searchChange;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:"tc pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:e}),";"]})}}]),n}(c.a.Component),l=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.name,r=e.email;return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:n}),Object(u.jsx)("p",{children:r})]})]})}}]),n}(c.a.Component),d=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.robots;return Object(u.jsx)("div",{children:e.map((function(e){return Object(u.jsx)(l,{id:e.id,name:e.name,email:e.email},e.id)}))})}}]),n}(c.a.Component),p=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"10px solid black",height:"800px"},children:this.props.children})}}]),n}(c.a.Component),O=(n(14),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(u.jsx)(j,{searchChange:this.onSearchChange}),Object(u.jsx)(p,{children:Object(u.jsx)(d,{robots:t})})]})}}]),n}(c.a.Component)),f=(n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))});s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)("div",{children:Object(u.jsx)(O,{})})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.e7fa8782.chunk.js.map