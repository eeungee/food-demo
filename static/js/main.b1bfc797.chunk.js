(this["webpackJsonpfood-demo"]=this["webpackJsonpfood-demo"]||[]).push([[0],{102:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},114:function(e,t,c){"use strict";c.r(t);var n,r,o,a,i,s,l,d,h,j=c(4),u=c(0),b=c.n(u),f=c(10),p=c.n(f),O=(c(82),c(19)),g=c(21),x=c(25),v=c(23),m=c(51),k=c.n(m),_=c(64),y=c(17),C=c(147),S=c(145),N=c(36),w=c.n(N),P=c(65),F=c.n(P),R=(c(102),function(){var e=Object(_.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("http://openapi.foodsafetykorea.go.kr/api/dfa1a00161e84b9c912a/I2790/json/1/5/DESC_KOR=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T=Object(y.b)("foodStore")(n=Object(y.c)(n=function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(){var e;Object(O.a)(this,c);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault(),console.log(t.target.search.value),R(t.target.search.value).then((function(c){var n=c.data.I2790.row.filter((function(e){return e.DESC_KOR===t.target.search.value}));if(!n.length)return console.log("\uc815\uc758\uc548\ub310!"),void window.alert("\uc5c6\ub294 \uc74c\uc2dd\uc785\ub2c8\ub2e4.");var r=n[0],o=r.GROUP_NAME,a=r.DESC_KOR,i=r.SUB_REF_NAME,s=r.SERVING_SIZE,l=r.NUTR_CONT1,d=r.NUTR_CONT2,h=r.NUTR_CONT3,j=r.NUTR_CONT4,u=r.NUTR_CONT5,b=r.NUTR_CONT6;e.props.foodStore.addFood({group_name:o,food_name:a,result_from:i,serving_size:s,kcal:l,carbo:d,pro:h,fat:j,sugar:u,salt:b,checked:!1})})).catch((function(e){return console.log(e)})),e.props.changePage(1)},e}return Object(g.a)(c,[{key:"render",value:function(){return Object(j.jsx)("div",{id:"container",children:Object(j.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(j.jsx)("h3",{children:'" \uc601\uc591\uc131\ubd84\uc774 \uad81\uae08\ud55c \uc74c\uc2dd\uc744 \uac80\uc0c9\ud558\uc138\uc694. " '})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("div",{class:"search_part",children:[Object(j.jsx)(C.a,{name:"search",id:"outlined-basic",label:"Search",variant:"outlined"}),Object(j.jsx)(S.a,{style:{padding:0},type:"submit",children:Object(j.jsx)(w.a,{style:{width:56,height:56}})})]})]})})}}]),c}(b.a.Component))||n)||n,E=c(48),z=c(148),U=c(146),I=(c(110),Object(y.b)("foodStore")(r=Object(y.c)(r=function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(e){var n;return Object(O.a)(this,c),(n=t.call(this,e)).checkEachFood=function(e){var t=n.props.foodStore.foods.map((function(t){return t.food_name==e?Object(E.a)(Object(E.a)({},t),{},{checked:!t.checked}):Object(E.a)({},t)}));n.props.foodStore.resetFood(t),console.log(t)},n.state={},n}return Object(g.a)(c,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"header",children:"\uc601\uc591 \uc131\ubd84"}),Object(j.jsx)("div",{className:"searched_food_container",children:this.props.foodStore.foods.map((function(t,c){return Object(j.jsxs)("div",{className:"each_food",children:[Object(j.jsxs)("h2",{children:[Object(j.jsx)(z.a,{checked:t.checked,onChange:function(){return e.checkEachFood(t.food_name)},label:"Custom color",color:"coral",inputProps:{"aria-label":"secondary checkbox"}}),t.food_name]}),Object(j.jsxs)("div",{className:"discrip_part",children:[Object(j.jsxs)("p",{children:["\uce7c\ub85c\ub9ac : ",t.kcal?t.kcal:"0"," kcal / ",t.serving_size," g"]}),Object(j.jsxs)("p",{children:["\ud0c4\uc218\ud654\ubb3c : ",t.carbo?t.carbo:"0"," g"]}),Object(j.jsxs)("p",{children:["\ub2e8\ubc31\uc9c8 : ",t.pro?t.pro:"0"," g"]}),Object(j.jsxs)("p",{children:["\uc9c0\ubc29 : ",t.fat?t.fat:"0"," g"]}),Object(j.jsxs)("p",{children:["\ub2f9 : ",t.sugar?t.sugar:"0"," g"]}),Object(j.jsxs)("p",{children:["\ub098\ud2b8\ub968 : ",t.salt?t.salt:"0"," g"]})]})]},c)}))}),Object(j.jsx)(S.a,{onClick:function(){return e.props.changePage(0)},style:{padding:0,position:"fixed",top:16,right:86},children:Object(j.jsx)(w.a,{style:{width:56,height:56}})}),Object(j.jsx)(U.a,{style:{width:56,height:56,border:"0.3px solid lightgray",fontSize:18,fontWeight:"bold",padding:0,position:"fixed",right:16,top:16},onClick:function(){return e.props.changePage(2)},children:"MY"})]})}}]),c}(b.a.Component))||r)||r),D=(c(111),Object(y.b)("foodStore")(o=Object(y.c)(o=function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(e){var n;return Object(O.a)(this,c),(n=t.call(this,e)).state={checkedFoods:[]},n}return Object(g.a)(c,[{key:"componentDidMount",value:function(){var e=this.props.foodStore.foods.filter((function(e){return e.checked}));console.log(e),this.setState({checkedFoods:e})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"header",children:"\uc601\uc591 \uc131\ubd84"}),Object(j.jsx)(S.a,{onClick:function(){return e.props.changePage(0)},style:{padding:0,position:"fixed",top:16,right:86},children:Object(j.jsx)(w.a,{style:{width:56,height:56}})}),Object(j.jsx)(U.a,{style:{width:56,height:56,border:"0.3px solid lightgray",fontSize:18,fontWeight:"bold",padding:0,position:"fixed",right:16,top:16},onClick:function(){return e.props.changePage(1)},children:"BACK"}),Object(j.jsx)("div",{class:"selected_food_container",children:this.state.checkedFoods.map((function(e,t){return Object(j.jsxs)("div",{class:"selected_food",children:[Object(j.jsx)("h2",{children:e.food_name}),Object(j.jsxs)("div",{class:"discrip_part",children:[Object(j.jsxs)("p",{children:["\uce7c\ub85c\ub9ac : ",e.kcal?e.kcal:"0"," kcal / ",e.serving_size," g"]}),Object(j.jsxs)("p",{children:["\ud0c4\uc218\ud654\ubb3c : ",e.carbo?e.carbo:"0"," g"]}),Object(j.jsxs)("p",{children:["\ub2e8\ubc31\uc9c8 : ",e.pro?e.pro:"0"," g"]}),Object(j.jsxs)("p",{children:["\uc9c0\ubc29 : ",e.fat?e.fat:"0"," g"]}),Object(j.jsxs)("p",{children:["\ub2f9 : ",e.sugar?e.sugar:"0"," g"]}),Object(j.jsxs)("p",{children:["\ub098\ud2b8\ub968 : ",e.salt?e.salt:"0"," g"]})]})]},t)}))}),Object(j.jsxs)("h3",{className:"total",children:["\ucd1d \uce7c\ub85c\ub9ac :  ",this.props.foodStore.getCalories()," kcal"]})]})}}]),c}(b.a.Component))||o)||o),A=(c(112),function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(e){var n;return Object(O.a)(this,c),(n=t.call(this,e)).changePage=function(e){n.setState({currentPage:e})},n.state={currentPage:0},n}return Object(g.a)(c,[{key:"render",value:function(){var e=this.state.currentPage;return Object(j.jsxs)("div",{children:[0==e&&Object(j.jsx)(T,{changePage:this.changePage}),1==e&&Object(j.jsx)(I,{changePage:this.changePage}),2==e&&Object(j.jsx)(D,{changePage:this.changePage})]})}}]),c}(b.a.Component)),K=c(39),M=c(40),B=(c(113),c(7)),G=new(a=function e(){Object(O.a)(this,e),Object(K.a)(this,"foods",i,this),Object(K.a)(this,"calories",s,this),Object(K.a)(this,"resetFood",l,this),Object(K.a)(this,"addFood",d,this),Object(K.a)(this,"getCalories",h,this)},i=Object(M.a)(a.prototype,"foods",[B.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),s=Object(M.a)(a.prototype,"calories",[B.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),l=Object(M.a)(a.prototype,"resetFood",[B.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.calories=0,t.map((function(t){t.checked&&(e.calories+=Number.parseInt(t.kcal))})),console.log(e.calories),e.foods=t}}}),d=Object(M.a)(a.prototype,"addFood",[B.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.foods.push(t)}}}),h=Object(M.a)(a.prototype,"getCalories",[B.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){return e.calories}}}),a);p.a.render(Object(j.jsx)(y.a,{foodStore:G,children:Object(j.jsx)(A,{})}),document.getElementById("root"))},82:function(e,t,c){}},[[114,1,2]]]);
//# sourceMappingURL=main.b1bfc797.chunk.js.map