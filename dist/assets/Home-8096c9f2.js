import{d as T,u as D,r as V,o as c,c as n,a as t,b as M,e as I,F as N,f as k,w as x,v as C,t as l,n as H,g,E as J,_ as w,h as A,i as P,j as E,k as b,l as y,m as G,p as S,T as O,C as K,q as F,s as q,x as Q,y as W,P as X}from"./index-c04ac42c.js";import{_ as Y}from"./title-darkblue-ca3349e7.js";/* empty css              *//* empty css              */import{_ as Z}from"./right_link_gray-13dc45e5.js";import{l as tt}from"./ssoLogin-36775d6f.js";import"./http-aa257d2f.js";import"./function-call-a0a09846.js";const et=""+new URL("banner-bg-home-darkblue-80a65211.jpg",import.meta.url).href,st=""+new URL("user-4-fill-e1975b57.svg",import.meta.url).href,at=""+new URL("tab-bg-4c7834cb.svg",import.meta.url).href,ot=""+new URL("tab-bg-reverse-00014c03.svg",import.meta.url).href,it={class:"apply_list"},ct=["onClick"],nt={class:"red_tip"},lt={class:"type_text"},dt={class:"text_box"},rt={class:"title"},_t={class:"text"},pt={key:0},ut={class:"info_box"},vt={class:"date"},mt={class:"status"},ft=T({__name:"Application",setup(d){const f=D(),p=new Map([["AUDITING",{text:"待审核",value:"AUDITING",color:"#ffaa04"}],["PASS",{text:"已通过",value:"PASS",color:"#08c787"}],["REJECT",{text:"已驳回",value:"REJECT",color:"#e53250"}],["CANCEL",{text:"已撤回",value:"CANCEL",color:"#9398a3"}]]),a=V([{id:3,type:"investor",type_text:"投资人申请",title:"贝米钱包非法吸收公众存款案",audit_content:"信息不符，不予通过",date:"2023-09-26 23:27",status:"REJECT",tip:!0},{id:4,type:"inheritor",type_text:"继承人申请",title:"申彤大大宝集资诈骗案件",audit_content:null,date:"2023-09-26 23:27",status:"CANCEL",tip:!0},{id:5,type:"attorney",type_text:"代理人申请",title:"申彤大大宝集资诈骗案件",audit_content:null,date:"2023-09-26 23:27",status:"AUDITING",tip:!1},{id:1,type:"dissent",type_text:"异议申请",title:"盛通保理 (财富中心) 非法吸收公众存款案",audit_content:null,date:"2023-09-26 23:27",status:"AUDITING",tip:!1},{id:2,type:"dissent",type_text:"异议申请",title:"闵界栋非法吸收公众存款案",audit_content:"支持真正的慈善和助农活动，参与公益活动可以为社会创造积极价值。如果消费者发现虚假宣传或其他不良行为，应积极举报给相关平台或监管机构，帮助打击不良行为。",date:"2023-08-28 13:50",status:"PASS",tip:!1}]),h=new Map([["dissent",{text:"异议申请",routerName:"DissentApply"}],["investor",{text:"投资人申请",routerName:"InvestorApply"}],["inheritor",{text:"继承人申请",routerName:"InheritorApply"}],["attorney",{text:"代理人申请",routerName:"AttorneyApply"}]]),m=v=>{var _;console.log(v.type),f.push({name:(_=h.get(v.type))==null?void 0:_.routerName,query:{id:v.id}})};return(v,_)=>{const r=J;return c(),n("div",null,[t("div",it,[a.value.length===0?(c(),M(r,{key:0,"image-size":"100",description:"暂无申请"})):I("",!0),(c(!0),n(N,null,k(a.value,o=>{var u,s;return c(),n("div",{class:"apply_item",key:o.id,onClick:e=>m(o)},[x(t("div",nt,null,512),[[C,o.tip]]),t("div",lt,l(o.type_text),1),t("div",dt,[t("div",rt,l(o.title),1),x(t("div",_t,[o.audit_content?(c(),n("span",pt," 审核意见："+l(o.audit_content),1)):I("",!0)],512),[[C,o.audit_content]])]),t("div",ut,[t("div",vt,l(o.date),1),t("div",mt,[t("span",{style:H({color:(u=g(p).get(o.status))==null?void 0:u.color})},l((s=g(p).get(o.status))==null?void 0:s.text),5)])])],8,ct)}),128))])])}}});const ht=w(ft,[["__scopeId","data-v-90da2f3e"]]);const bt=""+new URL("case-item-fill-0e2cc325.svg",import.meta.url).href,gt=""+new URL("exchange-funds-fill-9b542997.svg",import.meta.url).href,yt=""+new URL("hand-coin-fill-856cc482.svg",import.meta.url).href,xt=""+new URL("shield-user-fill-20eb6472.svg",import.meta.url).href,R=d=>(F("data-v-beacf474"),d=d(),q(),d),Ct={class:"tag_select_box"},$t=["onClick"],It={class:"list"},Nt={class:"case_item"},kt={class:"icon_box"},At={class:"red_tip"},St=R(()=>t("div",{class:"icon icon_custom"},[t("img",{src:bt,alt:""})],-1)),Lt={class:"content_box"},Et={class:"title"},Tt={class:"tag"},Dt=R(()=>t("div",{class:"icon icon_custom"},[t("img",{src:Z,alt:""})],-1)),wt={class:"apply"},Rt=R(()=>t("div",{class:"tip_text"},[t("span",null,"若无您的案件"),t("span",null,"可在下方选择身份并登记申请")],-1)),Ut={class:"reg_list"},jt={class:"reg_item investor"},Pt=S('<div class="icon_box" data-v-beacf474><div class="icon icon_custom" data-v-beacf474><img src="'+gt+'" alt="" data-v-beacf474></div></div><div class="text" data-v-beacf474><span class="title" data-v-beacf474>我是投资人</span><span class="describe" data-v-beacf474>投资受损人本人</span></div>',2),Gt={class:"reg_item inheritor"},Vt=S('<div class="icon_box" data-v-beacf474><div class="icon icon_custom" data-v-beacf474><img src="'+yt+'" alt="" data-v-beacf474></div></div><div class="text" data-v-beacf474><span class="title" data-v-beacf474>我是继承人</span><span class="describe" data-v-beacf474>投资受损人的第一顺位继承人</span></div>',2),Mt={class:"reg_item attorney"},Ft=S('<div class="icon_box" data-v-beacf474><div class="icon icon_custom" data-v-beacf474><img src="'+xt+'" alt="" data-v-beacf474></div></div><div class="text" data-v-beacf474><span class="title" data-v-beacf474>我是代理人</span><span class="describe" data-v-beacf474>投资受损人委托指定的代理人</span></div>',2),qt=T({__name:"Cases",props:{caseList:{type:Array,default:()=>[]}},setup(d){const f=d,p=D(),a=A({tags:[{id:0,name:"全部",active:!0},{id:1,name:"本人",active:!1},{id:2,name:"代理人",active:!1},{id:3,name:"继承人",active:!1},{id:4,name:"后台导入",active:!1}],active:0}),h=s=>{a.active=s.id,a.tags.forEach(e=>{e.id===s.id?e.active=!0:e.active=!1})},m=new Map([["PENDING",{text:"待确认",value:"PENDING",color:"#fff7e6",textColor:"#ffaa04"}],["DISSENT",{text:"有异议",value:"DISSENT",color:"#fcebed",textColor:"#e53250"}],["CONFIRMED",{text:"已确认",value:"CONFIRMED",color:"#e6f9f3",textColor:"#08c787"}]]),v=P(()=>{const s=a.tags.map(e=>({...e,count:0}));return s[0].count=r.list.length,s[1].count=r.list.filter(e=>e.type==="本人").length,s[2].count=r.list.filter(e=>e.type==="代理人").length,s[3].count=r.list.filter(e=>e.type==="继承人").length,s[4].count=r.list.filter(e=>e.type==="后台导入").length,s.filter(e=>e.count>0)}),_=P(()=>(console.log(f.caseList),a.active===0?r.list:r.list.filter(s=>s.type===a.tags[a.active].name))),r=A({list:[{personId:1,projectName:"盛通保理 (财富中心) 非法吸收公众存款案",status:"PENDING",type:"本人",tip:!0},{personId:2,projectName:"闵界栋非法吸收公众存款案",status:"PENDING",type:"代理人",tip:!0},{personId:3,projectName:"巨如集团、胡立勇集资诈骗案",status:"DISSENT",type:"代理人",tip:!1},{personId:4,projectName:"贝米钱包非法吸收公众存款案",status:"CONFIRMED",type:"后台导入",tip:!1},{personId:5,projectName:"快鹿集资诈骗案件",status:"DISSENT",type:"本人",tip:!1}]}),o=s=>{console.log(s),p.push({name:"CaseDetail",query:{id:s.id,_t:Date.now()}})},u=s=>{p.push({name:"CaseSelect",query:{type:s}})};return(s,e)=>{const L=O,z=K;return c(),n("div",null,[t("div",Ct,[(c(!0),n(N,null,k(v.value,i=>(c(),n("div",{class:E(["tag_item",{active:i.id==a.active}]),key:i.id,onClick:$=>h(i)},[t("span",null,l(i.name),1)],10,$t))),128))]),t("div",It,[(c(!0),n(N,null,k(_.value,i=>(c(),M(z,{key:i.personId,title:i.projectName,center:"",onClick:$=>o(i)},{title:b(()=>{var $,U;return[t("div",Nt,[t("div",kt,[x(t("div",At,null,512),[[C,i.tip]]),St]),t("div",Lt,[t("div",Et,[t("span",null,l(i.projectName),1)]),t("div",Tt,[y(L,{color:($=g(m).get(i.status))==null?void 0:$.color,"text-color":(U=g(m).get(i.status))==null?void 0:U.textColor},{default:b(()=>{var j;return[G(l((j=g(m).get(i.status))==null?void 0:j.text),1)]}),_:2},1032,["color","text-color"]),y(L,{color:"#f2f3f5","text-color":"#9398a3"},{default:b(()=>[G(l(i.type),1)]),_:2},1024)])])])]}),"right-icon":b(()=>[Dt]),_:2},1032,["title","onClick"]))),128))]),t("div",wt,[Rt,t("div",Ut,[t("div",jt,[Pt,t("div",{class:"btn",onClick:e[0]||(e[0]=i=>u("investor"))}," 登记 ")]),t("div",Gt,[Vt,t("div",{class:"btn",onClick:e[1]||(e[1]=i=>u("inheritor"))}," 登记 ")]),t("div",Mt,[Ft,t("div",{class:"btn",onClick:e[2]||(e[2]=i=>u("attorney"))}," 登记 ")])])])])}}});const Bt=w(qt,[["__scopeId","data-v-beacf474"]]),B=d=>(F("data-v-47d9b86d"),d=d(),q(),d),zt={class:"page"},Ht={class:"banner"},Jt=S('<div class="home_bg" data-v-47d9b86d><img src="'+et+'" alt="" data-v-47d9b86d></div><div class="title" data-v-47d9b86d><span data-v-47d9b86d>刑事案件投资人信息核对</span></div><div class="title_img" data-v-47d9b86d><img src="'+Y+'" alt="" data-v-47d9b86d></div>',3),Ot={class:"user_btn"},Kt=B(()=>t("div",{class:"icon icon_custom"},[t("img",{src:st,alt:""})],-1)),Qt=B(()=>t("span",null,"退出",-1)),Wt=[Qt],Xt={class:"tabs"},Yt={class:"bg"},Zt={class:"bg_img"},te={src:at,alt:""},ee={src:ot,alt:""},se=["onClick"],ae={class:"tab_message"},oe={class:"content"},ie={key:0},ce={key:1},ne=T({__name:"Home",setup(d){const f=D(),p=A({userId:"",name:""}),a=A({caseList:[],applicationList:[],tabActive:0,tabsArr:[{id:0,title:"我的案件",message:22},{id:1,title:"申请记录",message:99}]});Q(()=>{p.userId="1",p.name="钱雅菲"}),W(()=>{});const h=()=>{f.push({name:"UserInfo"})},m=()=>{tt(),f.push({name:"Login"})},v=o=>{o!==a.tabActive&&(a.tabActive=o)},_=V(!1),r=()=>{console.log("下拉刷新"),_.value=!0,setTimeout(()=>{_.value=!1},1e3)};return(o,u)=>{const s=X;return c(),n("div",zt,[t("div",Ht,[Jt,t("div",Ot,[t("div",{class:"user",onClick:h},[Kt,t("span",null,l(p.name||"未登录"),1)]),t("div",{class:"exit",onClick:m},Wt)])]),t("div",Xt,[t("div",Yt,[t("div",Zt,[x(t("img",te,null,512),[[C,a.tabActive===0]]),x(t("img",ee,null,512),[[C,a.tabActive===1]])])]),(c(!0),n(N,null,k(a.tabsArr,e=>(c(),n("div",{class:E(["tab_item",{active:e.id==a.tabActive}]),key:e.id,onClick:L=>v(e.id)},[t("div",{class:E(["tab_title",e.id==a.tabActive])},l(e.title),3),t("div",ae,[t("span",null,l(e.message),1)])],10,se))),128))]),t("div",oe,[y(s,{modelValue:_.value,"onUpdate:modelValue":u[0]||(u[0]=e=>_.value=e),"success-text":"刷新成功",onRefresh:r},{default:b(()=>[a.tabActive===0?(c(),n("div",ie,[y(Bt,{caseList:a.caseList},null,8,["caseList"])])):I("",!0),a.tabActive===1?(c(),n("div",ce,[y(ht)])):I("",!0)]),_:1},8,["modelValue"])])])}}});const fe=w(ne,[["__scopeId","data-v-47d9b86d"]]);export{fe as default};
