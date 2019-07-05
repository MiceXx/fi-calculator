(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{264:function(e,t,a){e.exports=a(462)},269:function(e,t,a){},462:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),c=(a(269),a(18)),i=a(229),u=a.n(i),m=a(230),s=Object(m.a)({typography:{useNextVariants:!0},palette:{primary:{light:"#63ccff",main:"#00B73B",dark:"#006db3",contrastText:"#fff"}}}),p=a(214),f=a(58),d="COMPOUND_CALCULATOR_SET_FORM_VALUES",E="COMPOUND_CALCULATOR_COMPUTE_VALUES",h=40,g=12;function v(e){return function(t){e({type:d,form:t})}}function b(e){var t=function(e){return""!==e&&!isNaN(e)};return function(a){var n=a.portfolioValue,r=a.contribution,o=a.growth;if(t(n)&&t(r)&&t(o)){for(var l=[],c=0;c<=h;c++){var i=o/100,u=i/g+1,m=c*g,s=n*Math.pow(u,m)+r*((Math.pow(u,m)-1)/(i/g)),p=n+r*m,f=s-p;l.push({index:c,total:s,contributed:p,interestEarned:f})}e({type:E,projection:l})}}}var y={form:{portfolioValue:"",contribution:"",growth:""},projection:[]};var C="FIRE_CALCULATOR_SET_FORM_VALUES",j="FIRE_CALCULATOR_COMPUTE_VALUES",N=40,x=12;function O(e){return function(t){e({type:C,form:t})}}function w(e){var t=function(e){return""!==e&&!isNaN(e)};return function(a){var n=a.age,r=a.contribution,o=a.growth,l=a.target;if(t(n)&&t(r)&&t(o)&&t(l)){var c=[],i=o/100,u=Math.log(1+l*(i/x)/r)/Math.log(1+i/x);u=Math.round(u/12);for(var m=0;m<=N;m++){var s=i/x+1,p=m*x,f=r*((Math.pow(s,p)-1)/(i/x));c.push({index:m,total:f})}e({type:j,projection:c,timeToTarget:u})}}}var T={form:{age:"",contribution:"",target:"",growth:""},projection:[],timeToTarget:-1};var F="RENTBUY_CALCULATOR_SET_FORM_VALUES_BUY",A="RENTBUY_CALCULATOR_SET_FORM_VALUES_RENT",R="RENTBUY_CALCULATOR_COMPUTE_VALUES_RENT",I="RENTBUY_CALCULATOR_COMPUTE_VALUES_BUY",_=40,V=12,P=function(e){return""!==e&&!isNaN(e)};function M(e){return function(t){e({type:F,buyForm:t})}}function L(e){return function(t){e({type:A,rentForm:t})}}function k(e){return function(t){var a=t.portfolioValue,n=t.contribution,r=t.growth,o=t.otherRentalFees,l=t.monthlyRent;if(P(a)&&P(l)&&P(o)&&P(n)&&P(r)){for(var c=[],i=n-l-o,u=r/100,m=u/V+1,s=0;s<=_;s++){var p=s*V,f=a*Math.pow(m,p)+i*((Math.pow(m,p)-1)/(u/V));c.push({index:s,total:f})}e({type:R,projectionRent:c})}}}function U(e){return function(t){var a=t.propertyCost,n=t.maintainanceCost,r=t.propertyTaxes,o=t.downPayment,l=t.mortgageRate,c=t.amortizationPeriod,i=t.otherFees,u=t.appreciation;if(P(a)&&P(n)&&P(r)&&P(o)&&P(l)&&P(c)&&P(i)&&P(u)){for(var m=l/100/V,s=a+i-o,p=c*V,f=s*Math.pow(1+m,p)*m/(Math.pow(1+m,p)-1),d=n+r/V+f,E=[],h=u/100+1,g=0;g<=_;g++){var v=g*V,b=a*Math.pow(h,g)-(s*Math.pow(1+m,v)-f*v);E.push({index:g,total:b})}e({type:I,projectionBuy:E,assumedVals:{portfolioValue:o+i,buyMonthlyCost:d}})}}}var B={rentForm:{portfolioValue:"",monthlyRent:"",otherRentalFees:"",contribution:"",growth:""},buyForm:{propertyCost:"",maintainanceCost:"",propertyTaxes:"",downPayment:"",mortgageRate:"",amortizationPeriod:25,otherFees:"",appreciation:""},assumedVals:{portfolioValue:"",buyMonthlyCost:""},projectionRent:[],projectionBuy:[]};var W=a(33),S="GENERAL_SET_CALCULATOR_TYPE";var Y={calculatorType:"FIRE Calculator"};for(var $=Object(f.c)({general:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.assign({},Y),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(W.a)({},e,{calculatorType:t.calculatorType});default:return e}},compoundCalculator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.assign({},y),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object.assign({},e,{form:t.form});case E:return Object.assign({},e,{projection:t.projection});default:return e}},fireCalculator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.assign({},T),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object.assign({},e,{form:t.form});case j:return Object.assign({},e,{projection:t.projection,timeToTarget:t.timeToTarget});default:return e}},rentBuyCalculator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.assign({},B),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object.assign({},e,{buyForm:t.buyForm});case A:return Object.assign({},e,{rentForm:t.rentForm});case R:return Object.assign({},e,{projectionRent:t.projectionRent});case I:return Object.assign({},e,{projectionBuy:t.projectionBuy,assumedVals:t.assumedVals});default:return e}}}),D=Object(f.d)($,function(){var e=[];return e.push(p.a),f.a.apply(void 0,e)}()),H=a(118),G=a(55),z=a(78),K=a(489),q=a(505),J=a(506),Q=a(83),X=a(498),Z=a(228),ee=a.n(Z),te=a(511),ae=a(491),ne=a(504),re=a(464),oe=a(502),le=a(503),ce=a(499),ie=a(500),ue=a(501),me=a(496),se=a(37),pe=a(463),fe=a(509),de=a(494),Ee=a(493),he=a(513),ge=a(507),ve=a(495),be=a(512),ye=a(490),Ce=Object(K.a)(function(e){return{icon:{marginLeft:"10px",width:"1rem"},popover:{pointerEvents:"none"},paper:{padding:e.spacing(1),backgroundColor:"black",color:"white"}}}),je=function(e){var t=e.text,a=Ce(),n=r.a.useState(null),o=Object(z.a)(n,2),l=o[0],c=o[1];function i(){c(null)}var u=Boolean(l);return r.a.createElement("div",null,r.a.createElement(ye.a,{className:a.icon,onMouseEnter:function(e){c(e.currentTarget)},onMouseLeave:i}),r.a.createElement(be.a,{id:"mouse-over-popover",className:a.popover,classes:{paper:a.paper},open:u,anchorEl:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:i,disableRestoreFocus:!0},r.a.createElement(Q.a,null,t)))},Ne=Object(K.a)(function(e){return{root:{margin:"1em",padding:"1em",flexGrow:1,textAlign:"center"},formControl:{width:150,margin:"auto"},field:{margin:"auto"},fieldWithIcon:{display:"flex",alignItems:"center",margin:"auto",paddingLeft:"30px"}}}),xe=[2,3,4,5,6,7,8,9,10],Oe=Object(c.b)(function(e){return{form:e.compoundCalculator.form}},function(e){return{action_setFormValues:v(e),action_computeProjected:b(e)}})(function(e){var t=e.form,a=e.action_setFormValues,o=e.action_computeProjected,l=Ne(),c=function(e){var n=e.target.name,r=e.target.value;isNaN(r)||a(Object(W.a)({},t,Object(se.a)({},n,r?parseInt(r,10):0)))};return Object(n.useEffect)(function(){o(t)},[o,t]),r.a.createElement(pe.a,{elevation:4,className:l.root},r.a.createElement(ae.a,null,r.a.createElement(re.a,null,r.a.createElement("div",{className:l.fieldWithIcon},r.a.createElement(Q.a,{variant:"h5",className:l.field},"Investment Growth Calculator"),r.a.createElement(je,{text:"See how quickly your investments will grow with monthly contributions and the power of compounded returns"}))),r.a.createElement(re.a,null,r.a.createElement(fe.a,{className:l.field,name:"portfolioValue",label:"Portfolio Value",placeholder:"0",InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")},value:t.portfolioValue,onChange:c})),r.a.createElement(re.a,null,r.a.createElement(fe.a,{className:l.field,name:"contribution",label:"Monthly Savings",placeholder:"0",value:t.contribution,onChange:c,InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")}})),r.a.createElement(re.a,null,r.a.createElement("div",{className:l.fieldWithIcon},r.a.createElement(Ee.a,{className:l.formControl},r.a.createElement(he.a,null,"Annual Return"),r.a.createElement(ge.a,{value:t.growth,name:"growth",onChange:c},xe.map(function(e){return r.a.createElement(ve.a,{key:e,value:e,name:e},e,"%")}))),r.a.createElement(je,{text:"The average rate of return on investments. The industry average for a well balanced portfolio is somewhere between 6-7%"})))))}),we=a(16),Te=function(e){return isNaN(e)||!e?e:"$".concat(e.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"))},Fe=Object(K.a)(function(e){return{statistic:{textAlign:"center",flexGrow:1},statisticCaption:{color:"grey",fontSize:"12px"}}}),Ae=function(e){var t=e.title,a=e.content,n=Fe();return r.a.createElement("div",{className:n.statistic},r.a.createElement(Q.a,{className:n.statisticCaption},t),r.a.createElement(Q.a,{color:"primary",variant:"h5"},a))},Re=Object(K.a)(function(e){return{header:{margin:"auto"}}}),Ie=Object(c.b)(function(e){return{projection:e.compoundCalculator.projection}},null)(function(e){var t=e.projection,a=Re();return r.a.createElement(n.Fragment,null,r.a.createElement(ae.a,null,r.a.createElement(re.a,null,r.a.createElement(Q.a,{variant:"h5",className:a.header},"Milestones")),t.length>40?r.a.createElement(re.a,null,r.a.createElement(Ae,{title:"10 Year Value",content:Te(t[10].total)}),r.a.createElement(Ae,{title:"20 Year Value",content:Te(t[20].total)}),r.a.createElement(Ae,{title:"30 Year Value",content:Te(t[30].total)}),r.a.createElement(Ae,{title:"40 Year Value",content:Te(t[40].total)})):null))}),_e=Object(K.a)(function(e){return{root:{margin:"1em",minWidth:"850px",padding:"1em"},tooltip:{backgroundColor:"#E2FEE2",opacity:.7,padding:"2px 5px",borderRadius:"5px"},tooltipHeader:{fontWeight:"bold",textAlign:"center"}}}),Ve=Object(c.b)(function(e){return{projection:e.compoundCalculator.projection}},function(e){return{}})(function(e){var t=_e(),a=e.projection;if(0===a.length)return r.a.createElement(pe.a,{elevation:2,className:t.root},"Fill in all required fields to see charts");return r.a.createElement(pe.a,{elevation:2,className:t.root},r.a.createElement(we.d,{minHeight:200,height:350},r.a.createElement(we.b,{width:500,height:400,data:a,margin:{top:10,right:30,left:70,bottom:20}},r.a.createElement(we.c,{strokeDasharray:"3 3"}),r.a.createElement(we.f,{dataKey:"index",interval:0,label:{value:"Year",position:"insideBottom",offset:-10}}),r.a.createElement(we.g,{tickFormatter:function(e){return Te(e)},label:{value:"Portfolio Value",angle:-90,position:"insideLeft",offset:-60}}),r.a.createElement(we.e,{content:r.a.createElement(function(e){var a=e.active,n=e.payload;if(a){var o=n[0].payload,l=o.index,c=o.total,i=o.contributed,u=o.interestEarned;return r.a.createElement("div",{className:t.tooltip},r.a.createElement("p",{className:t.tooltipHeader},"Year ".concat(l)),r.a.createElement("p",null,"Total Contribution ".concat(Te(i))),r.a.createElement("p",null,"Total Interest Earned ".concat(Te(u))),r.a.createElement("p",null,"Portfolio Value ".concat(Te(c))))}return null},null)}),r.a.createElement(we.a,{type:"monotone",dataKey:"total",stroke:"#8884d8",fill:"#55ffff"}),r.a.createElement(we.a,{type:"monotone",dataKey:"contributed",stroke:"#FDA50F",fill:"#FDA50F"}))),r.a.createElement(Ie,null))}),Pe=function(){return r.a.createElement(me.a,{container:!0},r.a.createElement(me.a,{item:!0,xs:12},r.a.createElement(Oe,null)),r.a.createElement(me.a,{item:!0,xs:12},r.a.createElement(Ve,null)))},Me=a(497),Le=a(510),ke=Object(K.a)(function(e){return{root:{margin:"1em",padding:"1em",flexGrow:1,textAlign:"center"},formControl:{width:150,margin:"auto"},field:{margin:"auto"},fieldWithIcon:{display:"flex",alignItems:"center",margin:"auto",paddingLeft:"30px"}}}),Ue=[2,3,4,5,6,7,8,9,10],Be=Object(c.b)(function(e){var t=e.rentBuyCalculator;return{rentForm:t.rentForm,assumedVals:t.assumedVals}},function(e){return{action_setFormValues:L(e),action_computeProjected:k(e)}})(function(e){var t=Object(n.useState)(!0),a=Object(z.a)(t,2),o=a[0],l=a[1],c=e.rentForm,i=e.assumedVals,u=e.action_setFormValues,m=e.action_computeProjected,s=ke(),p=function(e){var t=e.target.name,a=e.target.value;isNaN(a)||u(Object(W.a)({},c,Object(se.a)({},t,a?parseInt(a,10):0)))};return Object(n.useEffect)(function(){m(c)},[m,c]),Object(n.useEffect)(function(){o&&i.portfolioValue&&i.buyMonthlyCost&&u(Object(W.a)({},c,{portfolioValue:i.portfolioValue,contribution:i.buyMonthlyCost}))},[u,o,i.portfolioValue,i.buyMonthlyCost]),r.a.createElement(pe.a,{elevation:4,className:s.root},r.a.createElement(ae.a,null,r.a.createElement(re.a,null,r.a.createElement(Q.a,{variant:"h5",className:s.field},"Rental Costs")),r.a.createElement(re.a,null,r.a.createElement(fe.a,{className:s.field,name:"monthlyRent",label:"Monthly Rent",placeholder:"0",InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")},value:c.monthlyRent,onChange:p})),r.a.createElement(re.a,null,r.a.createElement("div",{className:s.fieldWithIcon},r.a.createElement(fe.a,{className:s.field,name:"otherRentalFees",label:"Other Rental Fees",placeholder:"0",InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")},value:c.otherRentalFees,onChange:p}),r.a.createElement(je,{text:"Other fees associated to renting, including: Hydro, heating, and renter's insurance"}))),r.a.createElement(re.a,null,r.a.createElement("div",{className:s.fieldWithIcon},r.a.createElement(Ee.a,{className:s.formControl},r.a.createElement(he.a,null,"Annual Return"),r.a.createElement(ge.a,{value:c.growth,name:"growth",onChange:p},Ue.map(function(e){return r.a.createElement(ve.a,{key:e,value:e,name:e},e,"%")}))),r.a.createElement(je,{text:"The average rate of return on investments. The industry average for a well balanced portfolio is somewhere between 6-7%"}))),r.a.createElement(re.a,null,r.a.createElement(Me.a,{className:s.field,control:r.a.createElement(Le.a,{checked:o,onChange:function(){return l(!o)},color:"primary"}),label:"Invest the difference"})),o?r.a.createElement(n.Fragment,null,i.portfolioValue&&r.a.createElement(Ae,{title:"Cash on hand",content:Te(i.portfolioValue)}),i.buyMonthlyCost&&r.a.createElement(Ae,{title:"Monthly Savings",content:Te(i.buyMonthlyCost)})):r.a.createElement(n.Fragment,null,r.a.createElement(re.a,null,r.a.createElement(fe.a,{className:s.field,name:"portfolioValue",label:"Cash on hand",placeholder:"0",value:c.portfolioValue,onChange:p,InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")}})),r.a.createElement(re.a,null,r.a.createElement(fe.a,{className:s.field,name:"contribution",label:"Monthly Savings",placeholder:"0",value:c.contribution,onChange:p,InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")}})))))}),We=Object(K.a)(function(e){return{root:{margin:"1em",padding:"1em",flexGrow:1,textAlign:"center"},formControl:{width:180,margin:"auto"},formControlAmortization:{width:150},field:{margin:"auto"},fieldWithIcon:{display:"flex",alignItems:"center",margin:"auto"}}}),Se=[-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],Ye=[],$e=1;$e<=30;$e++)Ye.push($e);for(var De=Object(c.b)(function(e){var t=e.rentBuyCalculator;return{buyForm:t.buyForm,projection:t.projection}},function(e){return{action_setFormValues:M(e),action_computeProjected:U(e)}})(function(e){var t=e.buyForm,a=e.action_setFormValues,o=e.action_computeProjected,l=We(),c=function(e){var n=e.target.name,r=e.target.value;isNaN(r)||a(Object(W.a)({},t,Object(se.a)({},n,r?parseInt(r,10):0)))};return Object(n.useEffect)(function(){o(t)},[o,t]),r.a.createElement(pe.a,{elevation:4,className:l.root},r.a.createElement(ae.a,null,r.a.createElement(re.a,null,r.a.createElement("div",{className:l.fieldWithIcon},r.a.createElement(Q.a,{variant:"h5"},"Buy Info"),r.a.createElement(je,{text:"Details of the house you are looking to purchase"}))),r.a.createElement(re.a,null,r.a.createElement(fe.a,{className:l.field,name:"propertyCost",label:"Property Cost",placeholder:"0",InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")},value:t.propertyCost,onChange:c}),r.a.createElement(fe.a,{className:l.field,name:"propertyTaxes",label:"Property Taxes (annual)",placeholder:"0",InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")},value:t.propertyTaxes,onChange:c})),r.a.createElement(re.a,null,r.a.createElement(fe.a,{className:l.field,name:"downPayment",label:"Down payment",placeholder:"0",InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")},value:t.downPayment,onChange:c}),r.a.createElement("div",{className:l.fieldWithIcon},r.a.createElement(fe.a,{className:l.field,name:"maintainanceCost",label:"Maintainance Costs",placeholder:"0",InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")},value:t.maintainanceCost,onChange:c}),r.a.createElement(je,{text:"Total monthly maintainance and upkeep costs"}))),r.a.createElement(re.a,null,r.a.createElement(fe.a,{className:l.field,name:"mortgageRate",label:"Mortgage Rate",placeholder:"0",InputProps:{endAdornment:r.a.createElement(de.a,{position:"end"},"%")},value:t.mortgageRate,onChange:c}),r.a.createElement("div",{className:l.fieldWithIcon},r.a.createElement(Ee.a,{className:l.formControlAmortization},r.a.createElement(he.a,null,"Amortization Period"),r.a.createElement(ge.a,{value:t.amortizationPeriod,name:"amortizationPeriod",onChange:c},Ye.map(function(e){return r.a.createElement(ve.a,{key:e,value:e,name:e},e," years")}))),r.a.createElement(je,{text:"Mortgage amount is assumed to be (Property value + Fees) - Down Payment"}))),r.a.createElement(re.a,null,r.a.createElement("div",{className:l.fieldWithIcon},r.a.createElement(fe.a,{className:l.field,name:"otherFees",label:"Other Fixed Fees",placeholder:"0",InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")},value:t.otherFees,onChange:c}),r.a.createElement(je,{text:"Includes: Legal fees, Home inspection fees, Appraisal fees, Provincial/Municipal taxes, Insurance. A good estimate is around $5000 + 1% of property value"})),r.a.createElement("div",{className:l.fieldWithIcon},r.a.createElement(Ee.a,{className:l.formControl},r.a.createElement(he.a,null,"Appreciation"),r.a.createElement(ge.a,{value:t.appreciation,name:"appreciation",onChange:c},Se.map(function(e){return r.a.createElement(ve.a,{key:e,value:e,name:e},e,"%")}))),r.a.createElement(je,{text:"Estimated appreciation of property. This value varies wildly depending on your geographic location. The average growth rate across the US over the last 40 years has been between 5% to 6%"})))))}),He=Object(K.a)(function(e){return{root:{margin:"1em",minWidth:"850px",padding:"1em"},tooltip:{backgroundColor:"#E2FEE2",opacity:.7,padding:"2px 5px",borderRadius:"5px"},tooltipHeader:{fontWeight:"bold",textAlign:"center"}}}),Ge=Object(c.b)(function(e){var t=e.rentBuyCalculator;return{projectionRent:t.projectionRent,projectionBuy:t.projectionBuy}},function(e){return{}})(function(e){var t=He(),a=e.projectionRent,n=e.projectionBuy;if(0===a.length&&0===n.length)return r.a.createElement(pe.a,{elevation:2,className:t.root},"Fill in all required fields to see charts");var o=[],l=!1,c=!1;if(a.length>n.length)c=!0,o=a.map(function(e){return{index:e.index,rentTotal:e.total}});else if(n.length>a.length)l=!0,o=n.map(function(e){return{index:e.index,buyTotal:e.total}});else{c=!0,l=!0;for(var i=0;i<a.length;i++)o.push({index:i,rentTotal:a[i].total,buyTotal:n[i].total})}return r.a.createElement(pe.a,{elevation:2,className:t.root},r.a.createElement(we.d,{minHeight:200,height:350},a?r.a.createElement(we.b,{width:500,height:400,data:o,margin:{top:10,right:30,left:70,bottom:20}},r.a.createElement(we.c,{strokeDasharray:"3 3"}),r.a.createElement(we.f,{dataKey:"index",interval:0,label:{value:"Year",position:"insideBottom",offset:-10}}),r.a.createElement(we.g,{tickFormatter:function(e){return Te(e)},label:{value:"Portfolio Value",angle:-90,position:"insideLeft",offset:-60}}),r.a.createElement(we.e,{content:r.a.createElement(function(e){var a=e.active,n=e.payload;if(a){var o=n[0].payload,i=o.index,u=o.rentTotal,m=o.buyTotal;return r.a.createElement("div",{className:t.tooltip},r.a.createElement("p",{className:t.tooltipHeader},"Year ".concat(i)),c?r.a.createElement("p",null,"Net Worth (Rent) ".concat(Te(u))):null,l?r.a.createElement("p",null,"Net Worth (Buy) ".concat(Te(m))):null)}return null},null)}),c?r.a.createElement(we.a,{type:"monotone",dataKey:"rentTotal",stroke:"#8884d8",fill:"#55ffff"}):null,l?r.a.createElement(we.a,{type:"monotone",dataKey:"buyTotal",stroke:"#8884d8",fill:"#00ff00"}):null,r.a.createElement(we.a,{type:"monotone",dataKey:"contributed",stroke:"#FDA50F",fill:"#FDA50F"})):null))}),ze=Object(K.a)(function(e){return{root:{flexGrow:1}}}),Ke=function(){var e=ze();return r.a.createElement(me.a,{container:!0,className:e.root},r.a.createElement(me.a,{item:!0,xs:6},r.a.createElement(De,null)),r.a.createElement(me.a,{item:!0,xs:6},r.a.createElement(Be,null)),r.a.createElement(me.a,{item:!0,xs:12},r.a.createElement(Ge,null)))},qe=Object(K.a)(function(e){return{root:{margin:"1em",padding:"1em",flexGrow:1,textAlign:"center"},formControl:{width:180,margin:"auto"},field:{margin:"auto"},fieldWithIcon:{display:"flex",alignItems:"center",margin:"auto",paddingLeft:"30px"}}}),Je=[],Qe=10;Qe<=70;Qe++)Je.push(Qe);var Xe=[2,3,4,5,6,7,8,9,10,11,12,13,14],Ze=Object(c.b)(function(e){return{form:e.fireCalculator.form}},function(e){return{action_setFormValues:O(e),action_computeProjected:w(e)}})(function(e){var t=e.form,a=e.action_setFormValues,o=e.action_computeProjected,l=qe(),c=function(e){var n=e.target.name,r=e.target.value;isNaN(r)||a(Object(W.a)({},t,Object(se.a)({},n,r?parseInt(r,10):0)))};return Object(n.useEffect)(function(){o(t)},[o,t]),r.a.createElement(pe.a,{elevation:4,className:l.root},r.a.createElement(ae.a,null,r.a.createElement(re.a,null,r.a.createElement("div",{className:l.fieldWithIcon},r.a.createElement(Q.a,{variant:"h5",className:l.field},"FIRE Calculator"),r.a.createElement(je,{text:"FIRE (Financial Independence, Retire Early) is a lifestyle whose goal is financial independence and retiring early"}))),r.a.createElement(re.a,null,r.a.createElement(Ee.a,{className:l.formControl},r.a.createElement(he.a,null,"Age"),r.a.createElement(ge.a,{value:t.age,name:"age",onChange:c},Je.map(function(e){return r.a.createElement(ve.a,{key:e,value:e,name:e},e)})))),r.a.createElement(re.a,null,r.a.createElement(fe.a,{className:l.field,name:"contribution",label:"Monthly Contributions",placeholder:"0",value:t.contribution,onChange:c,InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")}})),r.a.createElement(re.a,null,r.a.createElement("div",{className:l.fieldWithIcon},r.a.createElement(fe.a,{className:l.field,name:"target",label:"FIRE Target",placeholder:"0",value:t.target,onChange:c,InputProps:{startAdornment:r.a.createElement(de.a,{position:"start"},"$")}}),r.a.createElement(je,{text:"Savings required to be financially independent. Usually this is calculated as 25x your annual spending, based on a recommended retirement withdrawal rate of 4%."}))),r.a.createElement(re.a,null,r.a.createElement("div",{className:l.fieldWithIcon},r.a.createElement(Ee.a,{className:l.formControl},r.a.createElement(he.a,null,"Annual Return"),r.a.createElement(ge.a,{value:t.growth,name:"growth",onChange:c},Xe.map(function(e){return r.a.createElement(ve.a,{key:e,value:e,name:e},e,"%")}))),r.a.createElement(je,{text:"The average rate of return on investments. The industry average for a well balanced portfolio is somewhere between 6-7%"})))))}),et=Object(K.a)(function(e){return{header:{margin:"auto"}}}),tt=Object(c.b)(function(e){var t=e.fireCalculator;return{form:t.form,timeToTarget:t.timeToTarget}},null)(function(e){var t=e.form,a=e.timeToTarget,o=et();return r.a.createElement(n.Fragment,null,r.a.createElement(ae.a,null,r.a.createElement(re.a,null,r.a.createElement(Q.a,{variant:"h5",className:o.header},"Milestones")),r.a.createElement(re.a,null,r.a.createElement(Ae,{title:"You will FIRE at age",content:t.age+a}))))}),at=Object(K.a)(function(e){return{root:{margin:"1em",minWidth:"850px",padding:"1em"},tooltip:{backgroundColor:"#E2FEE2",opacity:.7,padding:"2px 5px",borderRadius:"5px"},tooltipHeader:{fontWeight:"bold",textAlign:"center"}}}),nt=Object(c.b)(function(e){return{projection:e.fireCalculator.projection}},function(e){return{}})(function(e){var t=at(),a=e.projection;if(0===a.length)return r.a.createElement(pe.a,{elevation:2,className:t.root},"Fill in all required fields to see charts");return r.a.createElement(pe.a,{elevation:2,className:t.root},r.a.createElement(we.d,{minHeight:200,height:350},r.a.createElement(we.b,{width:500,height:400,data:a,margin:{top:10,right:30,left:70,bottom:20}},r.a.createElement(we.c,{strokeDasharray:"3 3"}),r.a.createElement(we.f,{dataKey:"index",interval:0,label:{value:"Year",position:"insideBottom",offset:-10}}),r.a.createElement(we.g,{tickFormatter:function(e){return Te(e)},label:{value:"Portfolio Value",angle:-90,position:"insideLeft",offset:-60}}),r.a.createElement(we.e,{content:r.a.createElement(function(e){var a=e.active,n=e.payload;if(a){var o=n[0].payload,l=o.index,c=o.total;return r.a.createElement("div",{className:t.tooltip},r.a.createElement("p",{className:t.tooltipHeader},"Year ".concat(l)),r.a.createElement("p",null,"Portfolio Value ".concat(Te(c))))}return null},null)}),r.a.createElement(we.a,{type:"monotone",dataKey:"total",stroke:"#8884d8",fill:"#55ffff"}))),r.a.createElement(tt,null))}),rt=[{path:"/fire",component:function(){return r.a.createElement(me.a,{container:!0},r.a.createElement(me.a,{item:!0,xs:12},r.a.createElement(Ze,null)),r.a.createElement(me.a,{item:!0,xs:12},r.a.createElement(nt,null)))},icon:ce.a,label:"FIRE Calculator"},{path:"/compound",component:Pe,icon:ie.a,label:"Compound Growth Calculator"},{path:"/rentorbuy",component:Ke,icon:ue.a,label:"Rent or Buy?"}],ot=Object(K.a)({list:{width:250},fullList:{width:"auto"}}),lt=function(e){var t=e.open,a=e.toggle,n=ot();return r.a.createElement("div",null,r.a.createElement(te.a,{open:t,onClose:a},r.a.createElement("div",{className:n.list,role:"presentation"},r.a.createElement(ae.a,null,rt.map(function(e){return r.a.createElement(re.a,{key:e.path,component:H.b,to:e.path},r.a.createElement(oe.a,null,r.a.createElement(e.icon,null)),r.a.createElement(le.a,{primary:e.label}))})),r.a.createElement(ne.a,null))))},ct=Object(K.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}),it=Object(c.b)(function(e){return{calculatorType:e.general.calculatorType}},function(e){return{}})(function(e){e.calculatorType;var t=e.location,a=Object(n.useState)(!1),o=Object(z.a)(a,2),l=o[0],c=o[1],i=ct(),u=rt.find(function(e){return e.path===t.pathname});return r.a.createElement("div",{className:i.root},r.a.createElement(q.a,{position:"static"},r.a.createElement(J.a,{variant:"dense"},r.a.createElement(X.a,{edge:"start",className:i.menuButton,onClick:function(){return c(!l)},color:"inherit","aria-label":"Menu"},r.a.createElement(ee.a,null)),r.a.createElement(Q.a,{variant:"h6",className:i.title},u?u.label:"Home"))),r.a.createElement(lt,{open:l,toggle:function(){return c(!l)}}))}),ut=function(){return r.a.createElement(H.a,null,r.a.createElement(G.b,{path:"*",component:it}),r.a.createElement(G.a,{from:"/",to:"/rentorbuy"}),rt.map(function(e){return r.a.createElement(G.b,{key:e.label,exact:!0,path:e.path,label:e.label,icon:e.icon,component:e.component})}))};var mt=function(){return r.a.createElement(c.a,{store:D},r.a.createElement(u.a,{theme:s},r.a.createElement(ut,null)))};l.a.render(r.a.createElement(mt,null),document.getElementById("root"))}},[[264,1,2]]]);
//# sourceMappingURL=main.54a8e55f.chunk.js.map