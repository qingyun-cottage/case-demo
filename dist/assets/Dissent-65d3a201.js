import{d as U,u as W,h as w,x as M,o as d,c as _,l as v,k as p,a as t,j as h,g as l,t as b,F as B,e as y,N as O,B as G,I as J,D as L,f as H,w as j,v as q,q as z,s as $,p as S,R as K,_ as Q}from"./index-3a86afdb.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as X}from"./arrow-left-line-white-e258a992.js";import{_ as Y}from"./title-darkblue-ca3349e7.js";import{_ as Z,a as tt}from"./status-default-19c76057.js";import{_ as st,a as at,b as et}from"./status-error-c3f6ae06.js";import{_ as N}from"./right_link_gray-13dc45e5.js";const ct=""+new URL("checked-line-c1323363.svg",import.meta.url).href,e=u=>(z("data-v-c91cb25c"),u=u(),$(),u),ot={class:"page"},it=e(()=>t("div",{class:"title"},"异议申请",-1)),lt=e(()=>t("div",{class:"left"},[t("div",{class:"icon icon_custom"},[t("img",{src:X,alt:""})])],-1)),nt={class:"banner"},dt=e(()=>t("div",{class:"title"},[t("span",null,"刑事案件投资人信息核对")],-1)),_t=e(()=>t("div",{class:"title_img"},[t("img",{src:Y,alt:""})],-1)),pt=S('<img class="primary" src="'+Z+'" alt="" data-v-c91cb25c><img class="warning" src="'+st+'" alt="" data-v-c91cb25c><img class="success" src="'+at+'" alt="" data-v-c91cb25c><img class="error" src="'+et+'" alt="" data-v-c91cb25c><img class="default" src="'+tt+'" alt="" data-v-c91cb25c>',5),rt=[pt],vt={class:"content"},ut={key:0,class:"content_item"},mt=S('<div class="title" data-v-c91cb25c>驳回说明</div><div class="reject_info" data-v-c91cb25c><div class="info_item" data-v-c91cb25c><div class="title_text" data-v-c91cb25c>驳回理由</div><div class="content_box" data-v-c91cb25c><span data-v-c91cb25c>驳回理由内容</span></div></div><div class="info_item" data-v-c91cb25c><div class="title_text" data-v-c91cb25c>审核材料</div><div class="content_box" data-v-c91cb25c><span data-v-c91cb25c>图片</span></div></div></div>',2),ht=[mt],bt={class:"content_item"},yt=e(()=>t("div",{class:"title"},"异议类型",-1)),St={class:"item_text"},xt={class:"icon icon_custom"},gt=e(()=>t("img",{src:ct,alt:""},null,-1)),ft=[gt],kt={class:"content_item"},Ct=e(()=>t("div",{class:"title"},"合同流水",-1)),Tt=S('<div class="required_tip" data-v-c91cb25c><span data-v-c91cb25c>*</span></div><div class="title_text" data-v-c91cb25c>账户/合同</div><div class="count" data-v-c91cb25c>共 3 份</div><div class="edit" data-v-c91cb25c>编辑</div><div class="icon icon_custom" data-v-c91cb25c><img src="'+N+'" alt="" data-v-c91cb25c></div>',5),wt=[Tt],Bt={class:"content_item"},Nt=e(()=>t("div",{class:"title"},"留言",-1)),It={class:"message_box"},At={key:1,class:"content_item"},Dt={class:"collection_box"},Et=e(()=>t("div",{class:"info_item"},[t("div",{class:"title_text"},"异议类型"),t("div",{class:"content_text"},[t("span",null,"投资本金异议")])],-1)),Rt=e(()=>t("div",{class:"title_text"},"账户/合同",-1)),Vt=e(()=>t("div",{class:"count"},[t("span",null,"共 3 份")],-1)),Ft=e(()=>t("div",{class:"icon icon_custom"},[t("img",{src:N,alt:""})],-1)),Pt=[Rt,Vt,Ft],Ut=e(()=>t("div",{class:"info_item"},[t("div",{class:"title_text"},"留言"),t("div",{class:"content_text"},[t("span",null,"关于本案件的详细可以在合同流水中查看，其中共有六份合同，总计五十条流水信息。诈骗公私财物价值三千元至一万元以上、三万元至十万元以上、五十万元以上的，应当分别认定为刑法第二百六十六条规定的“数额较大”、“数额巨大”、“数额特别巨大”。")])],-1)),Wt={key:0,class:"bottom_box"},Mt={class:"fixed_btn_box"},Ot={class:"btn_text"},Gt=U({__name:"Dissent",setup(u){const I=W(),s=w({applyStatus:"TO_SUBMIT"}),A=()=>{const n=["TO_SUBMIT","PENDING","PASS","REJECT","WITHDRAW"],m=n.indexOf(s.applyStatus)+1;m>=n.length?s.applyStatus=n[0]:s.applyStatus=n[m]},r=w({dissentType:"1",message:""}),D=[{label:"投资本金异议",value:"1"},{label:"已兑付金额异议",value:"2"},{label:"都有异议",value:"3"}];M(()=>{c.getApplyDetail()});const c={handleClickContract:()=>{I.push({name:"Contract"})},getApplyDetail:()=>{console.log("获取申请详情")},submitApply:()=>{console.log("提交申请")},withdrawApply:()=>{console.log("撤回申请")},reSubmitApply:()=>{console.log("重新提交")}},i=new Map([["TO_SUBMIT",{text:"未提交",value:"TO_SUBMIT",className:"primary",userBtn:{show:!0,text:"提交申请",color:"#3a7afc",clickFun:c.submitApply}}],["PENDING",{text:"待审核",value:"PENDING",className:"warning",userBtn:{show:!0,text:"撤回申请",color:"#e53250",clickFun:c.withdrawApply}}],["PASS",{text:"已通过",value:"PASS",className:"success",userBtn:{show:!1}}],["REJECT",{text:"已驳回",value:"REJECT",className:"error",userBtn:{show:!0,text:"重新提交",color:"#3a7afc",clickFun:c.reSubmitApply}}],["WITHDRAW",{text:"已撤回",value:"WITHDRAW",className:"default",userBtn:{show:!0,text:"重新提交",color:"#3a7afc",clickFun:c.reSubmitApply}}]]);return(n,o)=>{var x,g,f,k,C,T;const m=O,E=K,R=G,V=J,F=L;return d(),_("div",ot,[v(m,{class:"nav_bar",border:!1,onClickLeft:n.$returnBack},{title:p(()=>[it]),left:p(()=>[lt]),_:1},8,["onClickLeft"]),t("div",nt,[dt,_t,t("div",{class:h(["apply_status",(x=l(i).get(s.applyStatus))==null?void 0:x.className]),onClick:A},[t("div",{class:h(["icon icon_custom",(g=l(i).get(s.applyStatus))==null?void 0:g.className])},rt,2),t("span",null," 审核状态："+b((f=l(i).get(s.applyStatus))==null?void 0:f.text),1)],2)]),t("div",vt,[s.applyStatus==="TO_SUBMIT"||s.applyStatus==="REJECT"||s.applyStatus==="WITHDRAW"?(d(),_(B,{key:0},[s.applyStatus==="REJECT"?(d(),_("div",ut,ht)):y("",!0),t("div",bt,[yt,v(R,{class:"select_box",modelValue:r.dissentType,"onUpdate:modelValue":o[0]||(o[0]=a=>r.dissentType=a)},{default:p(()=>[(d(),_(B,null,H(D,a=>v(E,{key:a.value,name:a.value,class:h(["select_item",{active:r.dissentType===a.value}]),"label-position":"left"},{icon:p(P=>[j(t("div",xt,ft,512),[[q,P.checked]])]),default:p(()=>[t("span",St,b(a.label),1)]),_:2},1032,["name","class"])),64))]),_:1},8,["modelValue"])]),t("div",kt,[Ct,t("div",{class:"contract",onClick:o[1]||(o[1]=(...a)=>c.handleClickContract&&c.handleClickContract(...a))},wt)]),t("div",Bt,[Nt,t("div",It,[v(V,{modelValue:r.message,"onUpdate:modelValue":o[2]||(o[2]=a=>r.message=a),placeholder:"请输入留言信息",rows:"4",autosize:"",type:"textarea",maxlength:"500","show-word-limit":""},null,8,["modelValue"])])])],64)):s.applyStatus==="PENDING"||s.applyStatus==="PASS"?(d(),_("div",At,[t("div",Dt,[Et,t("div",{class:"info_item",onClick:o[3]||(o[3]=(...a)=>c.handleClickContract&&c.handleClickContract(...a))},Pt),Ut])])):y("",!0)]),(k=l(i).get(s.applyStatus))!=null&&k.userBtn.show?(d(),_("div",Wt,[t("div",Mt,[v(F,{class:"btn_item",color:(C=l(i).get(s.applyStatus))==null?void 0:C.userBtn.color,onClick:(T=l(i).get(s.applyStatus))==null?void 0:T.userBtn.clickFun},{default:p(()=>{var a;return[t("span",Ot,b((a=l(i).get(s.applyStatus))==null?void 0:a.userBtn.text),1)]}),_:1},8,["color","onClick"])])])):y("",!0)])}}});const Yt=Q(Gt,[["__scopeId","data-v-c91cb25c"]]);export{Yt as default};
