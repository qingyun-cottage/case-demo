import{d as n,o as a,c as o,a as t,g as b,j as r}from"./index-0e529a2f.js";const p="/assets/icbc-ef11cd3c.svg",g="/assets/cmb-4a812990.svg",i="/assets/ccb-1b1c8438.svg",m="/assets/abc-131e7ac7.svg",C="/assets/boc-422e0b1e.svg",l="/assets/hxb-1710d9ee.svg",B="/assets/psbc-7d732853.svg",I=["src"],k=n({__name:"bankIcon",props:{bank:{type:String,default:""}},setup(s){const c=s,e=new Map([["ICBC",p],["CMB",g],["CCB",i],["ABC",m],["BOC",C],["HXB",l],["PSBC",B]]);return(d,v)=>(a(),o("div",{class:r(["icon_custom",s.bank])},[t("img",{src:b(e).get(c.bank.toUpperCase()),alt:""},null,8,I)],2))}});export{k as _};
