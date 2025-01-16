import{d as k,h as $,x as C,o as m,c as v,a as s,l as a,k as i,F as E,f as I,t as P,N as x,I as y,q as f,s as w,_ as B,u as V,r as T,G as A,D as N,S as F,z as U,A as D}from"./index-c04ac42c.js";/* empty css              *//* empty css              *//* empty css              */import{_ as M}from"./arrow-left-line-black-a3b188f1.js";import{_ as O}from"./right_link_gray-13dc45e5.js";import{_ as j}from"./close-line-48ec9bed.js";import{_ as q}from"./search-icon-46587f10.js";import{_ as z}from"./bankIcon.vue_vue_type_script_setup_true_lang-36a4071e.js";const S=e=>(f("data-v-b334e8d9"),e=e(),w(),e),G={class:"page"},H=S(()=>s("div",{class:"title"},"选择银行",-1)),R=S(()=>s("div",{class:"left"},[s("div",{class:"icon icon_custom"},[s("img",{src:j,alt:""})])],-1)),X={class:"search_box"},J=S(()=>s("div",{class:"icon icon_custom"},[s("img",{src:q,alt:""})],-1)),K={class:"content"},Q={class:"bank_list"},W={class:"bank_name"},Y=k({__name:"SelectBankCard",setup(e){const t=$({searchText:"",bankList:[]});C(()=>{n()});const u=()=>{n()},n=()=>{t.bankList=[{id:1,name:"工商银行",shortName:"ICBC",icon:"@/assets/images/icbc.svg"},{id:2,name:"招商银行",shortName:"CMB",icon:"cmb.svg"},{id:3,name:"建设银行",shortName:"CCB",icon:"ccb.svg"},{id:4,name:"农业银行",shortName:"ABC",icon:"abc.svg"},{id:5,name:"中国银行",shortName:"BOC",icon:"boc.svg"},{id:6,name:"华夏银行",shortName:"HXB",icon:"hxb.svg"},{id:7,name:"邮储银行",shortName:"PSBC",icon:"psbc.svg"}]};return(p,r)=>{const c=x,h=y;return m(),v("div",null,[s("div",G,[a(c,{class:"nav_bar",border:!1,onClickLeft:p.$returnBack},{title:i(()=>[H]),left:i(()=>[R]),_:1},8,["onClickLeft"]),s("div",X,[a(h,{modelValue:t.searchText,"onUpdate:modelValue":[r[0]||(r[0]=o=>t.searchText=o),u],placeholder:"搜索银行",center:""},{"left-icon":i(()=>[J]),_:1},8,["modelValue"])]),s("div",K,[s("div",Q,[(m(!0),v(E,null,I(t.bankList,o=>(m(),v("div",{class:"item",key:o.id},[a(z,{class:"icon",bank:o.shortName},null,8,["bank"]),s("div",W,[s("span",null,P(o.name),1)])]))),128))])])])])}}});const Z=B(Y,[["__scopeId","data-v-b334e8d9"]]);const g=e=>(f("data-v-0c2ae198"),e=e(),w(),e),ss={class:"page"},ts={class:"signature"},es={class:"sig_bar"},as=g(()=>s("div",{class:"tip"},[s("span",null,"“请本人签字确认”")],-1)),os={class:"btn"},ns=g(()=>s("span",{class:"btn_text"},"取消",-1)),cs={class:"btn"},is=g(()=>s("span",{class:"btn_text"},"重置",-1)),ls={class:"btn"},_s=g(()=>s("span",{class:"btn_text"},"确认",-1)),ds={class:"signature_box"},rs=k({__name:"Signature",props:{bankCard:{type:Object,default:()=>({bankCardType:"",bankCardName:"",bankCardNo:""})},show:{type:Boolean,default:""}},setup(e){const t=e,u=V(),n=T();C(()=>{const l=n.value.$el.getElementsByClassName("van-signature__footer")[0].getElementsByClassName("van-button"),_=l[0],L=l[1];n.value.handleClear=()=>{_.click()},n.value.handleConfirm=()=>{L.click()}}),A(()=>t.show,(o,b)=>{o&&r()});const p=()=>{u.back()},r=()=>{n.value.handleClear()},c=()=>{n.value.handleConfirm()},h=o=>{console.log("onSubmit",o),console.log(t.bankCard),u.go(-2)};return(o,b)=>{const l=N,_=F;return m(),v("div",null,[s("div",ss,[s("div",ts,[s("div",es,[as,s("div",os,[a(l,{class:"default",onClick:p},{default:i(()=>[ns]),_:1})]),s("div",cs,[a(l,{class:"default",onClick:r},{default:i(()=>[is]),_:1})]),s("div",ls,[a(l,{class:"primary",onClick:c},{default:i(()=>[_s]),_:1})])]),s("div",ds,[a(_,{class:"signature_pad",ref_key:"signaturePad",ref:n,onSubmit:h},null,512)])])])])}}});const us=B(rs,[["__scopeId","data-v-0c2ae198"]]),d=e=>(f("data-v-976c84ea"),e=e(),w(),e),ps={class:"page"},hs=d(()=>s("div",{class:"left"},[s("div",{class:"icon icon_custom"},[s("img",{src:M,alt:""})])],-1)),ms={class:"content"},vs=d(()=>s("div",{class:"title"},"添加银行卡",-1)),bs={class:"add_card"},gs=d(()=>s("div",{class:"title_text"},"输入卡号添加",-1)),ks=d(()=>s("div",{class:"label"},"银行",-1)),Cs=d(()=>s("div",{class:"text"},[s("span",null,"建设银行 储蓄卡")],-1)),fs=d(()=>s("div",{class:"icon icon_custom"},[s("img",{src:O,alt:""})],-1)),ws=[ks,Cs,fs],Bs={class:"item"},Ss=d(()=>s("div",{class:"label"},"卡号",-1)),$s={class:"text"},xs={class:"btn_box"},ys=d(()=>s("span",{class:"btn_text"},"完成并添加",-1)),Ns=k({__name:"AddBankCard",setup(e){const t=$({bankCardType:"",bankCardName:"",bankCardNo:"",showSelectBankCard:!1,showSignature:!1}),u=()=>{console.log("选择银行卡"),t.showSelectBankCard=!0,window.history.pushState(null,"选择银行卡","#selectBankCard")},n=()=>{console.log("完成并添加进入签名,银行卡号:",t.bankCardNo),t.showSignature=!0,window.history.pushState(null,"签名","#signature")};C(()=>{window.addEventListener("popstate",p,!1)}),U(()=>{window.removeEventListener("popstate",p,!1)});const p=()=>{console.log("关闭弹窗"),t.showSelectBankCard=!1,t.showSignature=!1};return(r,c)=>{const h=x,o=y,b=N,l=D;return m(),v("div",ps,[a(h,{class:"nav_bar",border:!1,onClickLeft:r.$returnBack},{left:i(()=>[hs]),_:1},8,["onClickLeft"]),s("div",ms,[vs,s("div",bs,[gs,s("div",{class:"item",onClick:u},ws),s("div",Bs,[Ss,s("div",$s,[a(o,{modelValue:t.bankCardNo,"onUpdate:modelValue":c[0]||(c[0]=_=>t.bankCardNo=_),placeholder:"请输入银行卡号",type:"number",maxlength:"19",clearable:""},null,8,["modelValue"])])]),s("div",xs,[a(b,{class:"submit_btn",onClick:n},{default:i(()=>[ys]),_:1})])])]),a(l,{show:t.showSelectBankCard,"onUpdate:show":c[1]||(c[1]=_=>t.showSelectBankCard=_),teleport:"#app",position:"right",style:{width:"100vw",height:"100vh"}},{default:i(()=>[a(Z)]),_:1},8,["show"]),a(l,{show:t.showSignature,"onUpdate:show":c[2]||(c[2]=_=>t.showSignature=_),teleport:"#app",position:"bottom",style:{width:"100vw",height:"100vh"}},{default:i(()=>[a(us,{show:t.showSignature,bankCard:{bankCardType:t.bankCardType,bankCardName:t.bankCardName,bankCardNo:t.bankCardNo}},null,8,["show","bankCard"])]),_:1},8,["show"])])}}});const Ds=B(Ns,[["__scopeId","data-v-976c84ea"]]);export{Ds as default};
