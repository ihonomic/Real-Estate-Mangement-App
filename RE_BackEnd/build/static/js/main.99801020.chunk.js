(this.webpackJsonpRealEstate=this.webpackJsonpRealEstate||[]).push([[0],{94:function(e,t,s){},95:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(23),i=s.n(n),l=s(8),o=s(7),r=s(9),j=s(12),d=s.n(j),u=s(19),m=s(6),h=s.n(m),b=s(97),_="SET_ALERT",p="REMOVE_ALERT",O="SIGNUP_SUCCESS",x="SIGNUP_FAIL",g="LOGIN_SUCCESS",f="LOGIN_FAIL",N="LOGOUT",v=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(a){var c=Object(b.a)();a({type:_,payload:{msg:e,alertType:t,id:c}}),setTimeout((function(){return a({type:p,payload:c})}),s)}},y=function(e,t){return function(){var s=Object(u.a)(d.a.mark((function s(a){var c,n,i;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return c={headers:{"Content-Type":"application/json"}},n=JSON.stringify({email:e,password:t}),s.prev=2,s.next=5,h.a.post("http://localhost:8000/api/token/",n,c);case 5:i=s.sent,a({type:g,payload:i.data}),a(v("Authenticated successfully","success")),s.next=14;break;case 10:s.prev=10,s.t0=s.catch(2),a({type:f}),a(v("Error Authenticating","error"));case 14:case"end":return s.stop()}}),s,null,[[2,10]])})));return function(e){return s.apply(this,arguments)}}()},w=s(0),S=Object(r.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return Object(w.jsx)("div",{className:"alert alert--".concat(e.alertType),children:e.msg},e.id)}))})),k=Object(r.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e(v("Logout successful","success")),e({type:N})}}})((function(e){var t=e.auth,s=t.isAuthenticated,c=t.loading,n=e.logout,i=Object(w.jsx)("a",{className:"navbar__top__auth__link",onClick:n,href:"#!",children:"Logout"}),o=Object(w.jsxs)(a.Fragment,{children:[Object(w.jsx)(l.b,{className:"navbar__top__auth__link",to:"/login",children:"Login"}),Object(w.jsx)(l.b,{className:"navbar__top__auth__link",to:"/signup",children:"Sign Up"})]});return Object(w.jsxs)(a.Fragment,{children:[Object(w.jsxs)("nav",{className:"navbar",children:[Object(w.jsxs)("div",{className:"navbar__top",children:[Object(w.jsx)("div",{className:"navbar__top__logo",children:Object(w.jsx)(l.b,{className:"navbar__top__logo__link",to:"/",children:"QuickOwner"})}),Object(w.jsx)("div",{className:"navbar__top__auth",children:!c&&Object(w.jsx)(a.Fragment,{children:s?i:o})})]}),Object(w.jsxs)("div",{className:"navbar__bottom",children:[Object(w.jsx)("li",{className:"navbar__bottom__item",children:Object(w.jsx)(l.c,{className:"navbar__bottom__item__link",exact:!0,to:"/",children:"Home"})}),Object(w.jsx)("li",{className:"navbar__bottom__item",children:Object(w.jsx)(l.c,{className:"navbar__bottom__item__link",exact:!0,to:"/listings",children:"Listings"})}),Object(w.jsx)("li",{className:"navbar__bottom__item",children:Object(w.jsx)(l.c,{className:"navbar__bottom__item__link",exact:!0,to:"/about",children:"About"})}),Object(w.jsx)("li",{className:"navbar__bottom__item",children:Object(w.jsx)(l.c,{className:"navbar__bottom__item__link",exact:!0,to:"/contact",children:"Contact"})})]})]}),Object(w.jsx)(S,{})]})})),C=function(e){return Object(w.jsxs)("div",{children:[Object(w.jsx)(k,{}),e.children]})},q=s(3),A=s(16),L=s.p+"static/media/House.77619dbc.jpg",F=function(){var e=Object(a.useState)([]),t=Object(q.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)([]),i=Object(q.a)(n,2),l=i[0],o=i[1];Object(a.useEffect)((function(){h.a.defaults.headers={"Content-Type":"application/json"},function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("http://127.0.0.1:8000/api/realtors/topseller/");case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(a.useEffect)((function(){h.a.defaults.headers={"Content-Type":"application/json"},function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("http://127.0.0.1:8000/api/realtors/");case 3:t=e.sent,o(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]);return Object(w.jsxs)("main",{className:"about",children:[Object(w.jsxs)(A.a,{children:[Object(w.jsx)("title",{children:"QuickOwner - About US"}),Object(w.jsx)("meta",{name:"description",content:"About us"})]}),Object(w.jsx)("header",{className:"about__header",children:Object(w.jsx)("h1",{className:"about__heading",children:"About QuickOwner"})}),Object(w.jsx)("section",{className:"about__info",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col-3-of-4 ",children:[Object(w.jsx)("h2",{className:"about__subheading",children:"Need A Perfect Home? Let's Help you find it"}),Object(w.jsx)("p",{className:"about__paragraph",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque provident, id dignissimos tempora blanditiis hic eum exercitationem numquam nostrum delectus architecto, nesciunt iusto similique inventore a quidem ipsa in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos error sint aut nostrum nemo totam, incidunt ad esse fuga ab, hic optio a sequi laborum quos, odit illum eveniet culpa?"}),Object(w.jsxs)("div",{className:"about__display",children:[Object(w.jsx)("img",{src:L,alt:"failed to load about image",className:"about__display__image"}),Object(w.jsx)("p",{className:"about__paragraph",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime recusandae deserunt cum voluptates fugiat possimus, culpa quae voluptatibus porro quia, vitae quasi amet, illum nesciunt tenetur iste quod at molestiae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, doloremque. Possimus, nisi quos. Ipsum culpa suscipit temporibus corrupti laboriosam harum tempore pariatur voluptatem qui, porro dolor obcaecati vitae dolores facilis."})]})]}),Object(w.jsx)("div",{className:"col-1-of-4",children:function(){var e=[];return s.map((function(t){return e.push(Object(w.jsxs)(a.Fragment,{children:[Object(w.jsx)("div",{className:"about__display",children:Object(w.jsx)("img",{src:t.photo,alt:"realtor-photo",className:"about__display__image"})}),Object(w.jsx)("h3",{className:"about__topseller",children:"Top Seller: "}),Object(w.jsx)("p",{className:"about__realtor",children:t.full_name}),Object(w.jsx)("p",{className:"about__contact",children:t.phone}),Object(w.jsx)("p",{className:"about__contact",children:t.email}),Object(w.jsx)("p",{className:"about__about",children:t.description})]},t.id))})),e}()})]})}),Object(w.jsxs)("section",{className:"about__team",children:[Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("h2",{className:"about__subheading",children:"QuickOwner Expert Team"})}),Object(w.jsx)("div",{className:"",children:function(){var e=[],t=[];l.map((function(t){return e.push(Object(w.jsxs)(a.Fragment,{children:[Object(w.jsx)("div",{className:"about__display ",children:Object(w.jsx)("img",{src:t.photo,alt:"realtor-photo",className:"about__display__image"})}),Object(w.jsx)("h3",{className:"about__realtor",children:t.full_name}),Object(w.jsx)("h3",{className:"about__contact",children:t.phone}),Object(w.jsx)("h3",{className:"about__contact",children:t.email}),Object(w.jsx)("h3",{className:"about__about",children:t.description})]},t.id))}));for(var s=0;s<l.length;s++)t.push(Object(w.jsx)("div",{className:"row custom__grid ",children:Object(w.jsx)("div",{className:"col-1-of-3  ",children:e[s]?e[s]:null})},s));return t}()})]})]})},T=s(17),P=s(5),E=s(26),D=s.n(E),I=Object(r.b)(null,{setAlert:v})((function(e){var t=e.setAlert;Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]);var s=Object(a.useState)({name:"",email:"",subject:"",message:""}),c=Object(q.a)(s,2),n=c[0],i=c[1],l=n.name,o=n.email,r=n.subject,j=n.message,d=Object(a.useState)(!1),u=Object(q.a)(d,2),m=u[0],b=u[1],_=function(e){return i(Object(P.a)(Object(P.a)({},n),{},Object(T.a)({},e.target.name,e.target.value)))};return Object(w.jsxs)("div",{className:"contact",children:[Object(w.jsxs)(A.a,{children:[Object(w.jsx)("title",{children:"QuickOwner - Contact Us 24/7"}),Object(w.jsx)("meta",{name:"Contact us page",content:"Reach us 24/7, Our team will be happy to help out with your questions"})]}),Object(w.jsxs)("form",{className:"contact__form",onSubmit:function(e){return function(e){e.preventDefault(),h.a.defaults.headers={"Content-Type":"application/json"},b(!0),h.a.post("http://127.0.0.1:8000/api/contact/",{name:l,email:o,subject:r,message:j}).then((function(e){t("Message Sent","success"),b(!1),window.scrollTo(0,0)})).catch((function(e){t("Unable to send mail, please try again","error"),b(!1),window.scrollTo(0,0)}))}(e)},children:[Object(w.jsxs)("label",{htmlFor:"name",className:"contact__form__label",children:["Name",Object(w.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(w.jsx)("input",{type:"text",className:"contact__form__input",placeholder:"John Doe",name:"name",value:l,onChange:function(e){return _(e)},required:!0}),Object(w.jsxs)("label",{htmlFor:"email",className:"contact__form__label",children:["Email",Object(w.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(w.jsx)("input",{type:"email",className:"contact__form__input",placeholder:"JohnDoe@QuickOwner.com",name:"email",value:o,onChange:function(e){return _(e)},required:!0}),Object(w.jsxs)("label",{htmlFor:"sunject",className:"contact__form__label",children:["Subject",Object(w.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(w.jsx)("input",{type:"text",className:"contact__form__input",placeholder:"Need a new Home",name:"subject",value:r,onChange:function(e){return _(e)},required:!0}),Object(w.jsx)("label",{htmlFor:"message",className:"contact__form__label",children:"Message"}),Object(w.jsx)("textarea",{cols:"30",rows:"10",className:"contact__form__textarea",placeholder:"",name:"message",value:j,onChange:function(e){return _(e)},required:!0}),m?Object(w.jsx)("div",{className:"contact__form__loader",children:Object(w.jsx)(D.a,{type:"Oval",color:"#424242",height:50,width:50})}):Object(w.jsx)("button",{className:"contact__form__button ",htmltype:"submit",children:"Send"})]})]})})),Q=function(e){var t=e.setListings,s=Object(a.useState)({sale_type:"For Sale",price:"0+",bedrooms:"0+",home_type:"Self Contain",bathrooms:"0+",sqft:"1000+",days_listed:"1 or less",has_photos:"2+",open_house:"false",keywords:""}),c=Object(q.a)(s,2),n=c[0],i=c[1],l=n.sale_type,o=n.price,r=n.bedrooms,j=n.home_type,d=n.bathrooms,u=n.sqft,m=n.days_listed,b=n.has_photos,_=n.open_house,p=n.keywords,O=Object(a.useState)(!1),x=Object(q.a)(O,2),g=x[0],f=x[1],N=function(e){return i(Object(P.a)(Object(P.a)({},n),{},Object(T.a)({},e.target.name,e.target.value)))},v=function(e){e.preventDefault(),f(!0)};return Object(a.useEffect)((function(){h.a.defaults.headers={"Content-Type":"application/json"},h.a.post("http://127.0.0.1:8000/api/listings/search/",{sale_type:l,price:o,bedrooms:r,home_type:j,bathrooms:d,sqft:u,days_listed:m,has_photos:b,open_house:_,keywords:p}).then((function(e){f(!1),t(e.data)})).catch((function(e){f(!1),window.scrollTo(0,0)}))}),[v,N]),Object(w.jsx)("form",{className:"listingform",onSubmit:function(e){return v(e)},children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col-1-of-6",children:[Object(w.jsxs)("div",{className:"listingform__section",children:[Object(w.jsx)("label",{htmlFor:"sale_type",className:"listingform__label",children:"Sale or Rent"}),Object(w.jsxs)("select",{name:"sale_type",id:"",className:"listingform__select",onChange:function(e){return N(e)},value:l,children:[Object(w.jsx)("option",{children:"For Sale"}),Object(w.jsx)("option",{children:"For Rent"})]})]}),Object(w.jsxs)("div",{className:"listingform__section",children:[Object(w.jsx)("label",{htmlFor:"sqft",className:"listingform__label",children:"Sqft"}),Object(w.jsxs)("select",{name:"sqft",id:"",className:"listingform__select",onChange:function(e){return N(e)},value:u,children:[Object(w.jsx)("option",{children:"1000+"}),Object(w.jsx)("option",{children:"1200+"}),Object(w.jsx)("option",{children:"1500+"}),Object(w.jsx)("option",{children:"2000+"}),Object(w.jsx)("option",{children:"2200+"}),Object(w.jsx)("option",{children:"2500+"})]})]})]}),Object(w.jsxs)("div",{className:"col-1-of-6",children:[Object(w.jsxs)("div",{className:"listingform__section",children:[Object(w.jsx)("label",{htmlFor:"price",className:"listingform__label",children:"Minimum Price"}),Object(w.jsxs)("select",{name:"price",id:"",className:"listingform__select",onChange:function(e){return N(e)},value:o,children:[Object(w.jsx)("option",{children:"0+"}),Object(w.jsx)("option",{children:"N800,000+"}),Object(w.jsx)("option",{children:"N1,000,000+"}),Object(w.jsx)("option",{children:"N1,200,000+"}),Object(w.jsx)("option",{children:"N1,400,000+"}),Object(w.jsx)("option",{children:"N1,600,000+"}),Object(w.jsx)("option",{children:"N1,800,000+"}),Object(w.jsx)("option",{children:"N2,000,000+"}),Object(w.jsx)("option",{children:"N2,200,000+"}),Object(w.jsx)("option",{children:"Any"})]})]}),Object(w.jsxs)("div",{className:"listingform__section",children:[Object(w.jsx)("label",{htmlFor:"days_listed",className:"listingform__label",children:"Days Listed"}),Object(w.jsxs)("select",{name:"days_listed",id:"",className:"listingform__select",onChange:function(e){return N(e)},value:m,children:[Object(w.jsx)("option",{children:"1 or less"}),Object(w.jsx)("option",{children:"2 or less"}),Object(w.jsx)("option",{children:"5 or less"}),Object(w.jsx)("option",{children:"10 or less"}),Object(w.jsx)("option",{children:"20 or less"}),Object(w.jsx)("option",{children:"Any"})]})]})]}),Object(w.jsxs)("div",{className:"col-1-of-6",children:[Object(w.jsxs)("div",{className:"listingform__section",children:[Object(w.jsx)("label",{htmlFor:"bedrooms",className:"listingform__label",children:"Bedrooms"}),Object(w.jsxs)("select",{name:"bedrooms",id:"",className:"listingform__select",onChange:function(e){return N(e)},value:r,children:[Object(w.jsx)("option",{children:"0+"}),Object(w.jsx)("option",{children:"1+"}),Object(w.jsx)("option",{children:"2+"}),Object(w.jsx)("option",{children:"3+"}),Object(w.jsx)("option",{children:"4+"}),Object(w.jsx)("option",{children:"5+"})]})]}),Object(w.jsxs)("div",{className:"listingform__section",children:[Object(w.jsx)("label",{htmlFor:"has_photos",className:"listingform__label",children:"Number of Photos"}),Object(w.jsxs)("select",{name:"has_photos",id:"",className:"listingform__select",onChange:function(e){return N(e)},value:b,children:[Object(w.jsx)("option",{children:"2+"}),Object(w.jsx)("option",{children:"3+"}),Object(w.jsx)("option",{children:"4+"}),Object(w.jsx)("option",{children:"5+"}),Object(w.jsx)("option",{children:"6+"})]})]})]}),Object(w.jsxs)("div",{className:"col-1-of-6",children:[Object(w.jsxs)("div",{className:"listingform__section",children:[Object(w.jsx)("label",{htmlFor:"home_type",className:"listingform__label",children:"Home Type"}),Object(w.jsxs)("select",{name:"home_type",id:"",className:"listingform__select",onChange:function(e){return N(e)},value:j,children:[Object(w.jsx)("option",{children:"Self Contain"}),Object(w.jsx)("option",{children:"Duplex"}),Object(w.jsx)("option",{children:"Mansion"}),Object(w.jsx)("option",{children:"Bungalow"}),Object(w.jsx)("option",{children:"Family"})]})]}),Object(w.jsxs)("div",{className:"listingform__section",children:[Object(w.jsx)("label",{htmlFor:"keywords",className:"listingform__label",children:"Keywords"}),Object(w.jsx)("input",{name:"keywords",className:"listingform__input",type:"text",onChange:function(e){return N(e)},value:p})]})]}),Object(w.jsxs)("div",{className:"col-1-of-6",children:[Object(w.jsxs)("div",{className:"listingform__section",children:[Object(w.jsx)("label",{htmlFor:"bathrooms",className:"listingform__label",children:"Bathrooms"}),Object(w.jsxs)("select",{name:"bathrooms",id:"",className:"listingform__select",onChange:function(e){return N(e)},value:d,children:[Object(w.jsx)("option",{children:"0+"}),Object(w.jsx)("option",{children:"1+"}),Object(w.jsx)("option",{children:"2+"}),Object(w.jsx)("option",{children:"3+"}),Object(w.jsx)("option",{children:"4+"}),Object(w.jsx)("option",{children:"5+"})]})]}),Object(w.jsxs)("div",{className:"listingform__altsection",children:[Object(w.jsx)("label",{htmlFor:"open_house",className:"listingform__label",children:"Open House"}),Object(w.jsx)("input",{name:"open_house",className:"listingform__checkbox",type:"checkbox",onChange:function(e){return N(e)},value:_})]})]}),Object(w.jsx)("div",{className:"col-1-of-6",children:g?Object(w.jsx)("div",{className:"listingform__loader",children:Object(w.jsx)(D.a,{type:"Oval",color:"#424242",height:50,width:50})}):Object(w.jsx)("button",{className:"listingform__button listingform__button--primary ",children:"Search"})})]})})},B=function(e){var t=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return Object(w.jsxs)("div",{className:"card",children:[Object(w.jsx)("h3",{className:"card__title",children:e.title}),Object(w.jsx)("div",{className:"card__header",children:Object(w.jsx)("img",{src:e.photo_main,alt:"'loading pic",className:"card__header__photo"})}),Object(w.jsxs)("p",{className:"card__location",children:[e.address,", ",e.city,", ",e.state]}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col-2-of-3",children:[Object(w.jsxs)("p",{className:"card__info",children:["Price: N",t(e.price)]}),Object(w.jsxs)("p",{className:"card__info",children:["Bedrooms: ",e.bedrooms," "]}),Object(w.jsxs)("p",{className:"card__info",children:["Bathrooms: ",e.bathrooms]})]}),Object(w.jsxs)("div",{className:"col-2-of-3",children:[Object(w.jsxs)("p",{className:"card__saletype",children:[e.sale_type," "]}),Object(w.jsxs)("p",{className:"card__hometype",children:[e.home_type," "]}),Object(w.jsxs)("p",{className:"card__sqft",children:["Sqft: ",t(e.sqft)," "]})]})]}),Object(w.jsx)(l.b,{className:"card__link",to:"/listings/".concat(e.slug),children:"View Listing"})]})},U=function(e){var t=e.listings;return Object(w.jsx)("div",{children:function(){var e=[],s=[];return t.map((function(t){return e.push(Object(w.jsx)(B,{title:t.title,address:t.address,city:t.city,state:t.state,price:t.price,sale_type:t.sale_type,home_type:t.home_type,bedrooms:t.bedrooms,bathrooms:t.bathrooms,sqft:t.sqft,photo_main:t.photo_main,slug:t.slug},t.id))})),e.map((function(e){s.push(Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-1-of-3",children:e})},e))})),s}()})},R=function(e){return Object(w.jsxs)("div",{className:"pagination",children:[Object(w.jsx)("div",{className:"pagination__number",onClick:function(){return e.previous()},children:"Previous"}),function(){for(var t=[],s=e.itemsPerPage,a=1,c=function(s){var c=a,n="pagination__number",i=null;e.active===c?(n="pagination__number pagination__number--active",i=Object(w.jsx)("div",{className:n,children:a},s)):i=Object(w.jsx)("div",{className:n,onClick:function(){return e.visitPage(c)},children:a},s),t.push(i),a++},n=0;n<e.count;n+=s)c(n);return t}(),Object(w.jsx)("div",{className:"pagination__number",onClick:function(){return e.next()},children:"Next"})]})},H=function(){var e=Object(a.useState)([]),t=Object(q.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(1),i=Object(q.a)(n,2),l=i[0],o=i[1],r=Object(a.useState)(3),j=Object(q.a)(r,2),d=j[0],u=(j[1],Object(a.useState)(1)),m=Object(q.a)(u,2),h=m[0],b=m[1],_=l*d,p=_-d,O=s.slice(p,_);return Object(w.jsxs)("main",{className:"home",children:[Object(w.jsxs)(A.a,{children:[Object(w.jsx)("title",{children:"QuickOwner - Home "}),Object(w.jsx)("meta",{name:"description",content:"QuickOwner Welcome page"})]}),Object(w.jsx)("section",{className:"home__form",children:Object(w.jsx)(Q,{setListings:c})}),Object(w.jsx)("section",{className:"home__listings",children:Object(w.jsx)(U,{listings:O})}),Object(w.jsx)("section",{className:"home__pagination",children:Object(w.jsx)("div",{className:"row",children:0!==s.length&&Object(w.jsx)(R,{itemsPerPage:d,count:s.length,visitPage:function(e){o(e),b(e)},previous:function(){1!==l&&(o(l-1),b(l-1))},next:function(){l!==Math.ceil(s.length/3)&&(o(l+1),b(l+1))},active:h,setActive:b})})})]})},M=function(e){var t=Object(a.useState)(""),s=Object(q.a)(t,2),c=s[0],n=s[1],i=Object(a.useState)({}),o=Object(q.a)(i,2),r=o[0],j=o[1],d=Object(a.useState)({}),u=Object(q.a)(d,2),m=u[0],b=u[1],_=Object(a.useState)(0),p=Object(q.a)(_,2),O=p[0],x=p[1];Object(a.useEffect)((function(){var t=e.match.params.id,s={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};h.a.get("http://127.0.0.1:8000/api/listings/".concat(t),s).then((function(e){j(e.data),n(e.data.realtor.slug),x(e.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})).catch((function(e){console.log("ops! Can't retrieve Data")}))}),[e.match.params.id]),Object(a.useEffect)((function(){var e=c;console.log(e);var t={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};e&&h.a.get("http://127.0.0.1:8000/api/realtors/".concat(e),t).then((function(e){b(e.data)})).catch((function(e){console.log("Can't Retreive the realtor")}))}),[c]);return Object(w.jsxs)("div",{className:"listingdetail",children:[Object(w.jsxs)(A.a,{children:[Object(w.jsxs)("title",{children:[" QuickOwner -Listing | ","".concat(r.title)]}),Object(w.jsx)("meta",{name:"QuickOwner Listing Page",content:"QuickOwner Listing"})]}),Object(w.jsxs)("div",{className:"listingdetail__header",children:[Object(w.jsx)("h1",{className:"listingdetail__title",children:r.title}),Object(w.jsxs)("p",{className:"listingdetail__location",children:[r.city,", ",r.state,", ",r.zipcode]})]}),Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"listingdetail__breadcrumb",children:[Object(w.jsx)(l.b,{className:"listingdetail__breadcrumb__link",to:"/",children:"Home"}),"/ ",r.title]})}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-3-of-4",children:Object(w.jsx)("div",{className:"listingdetail__display",children:Object(w.jsx)("img",{src:r.photo_main,alt:"listing photo",className:"listingdetail__display__image"})})}),Object(w.jsxs)("div",{className:"col-1-of-4",children:[Object(w.jsx)("div",{className:"listingdetail__display",children:Object(w.jsx)("img",{src:m.photo,alt:"realtor photo",className:"listingdetail__display__image"})}),Object(w.jsx)("h3",{className:"listingdetail__realtor",children:m.full_name}),Object(w.jsx)("p",{className:"listingdetail__contact",children:m.phone}),Object(w.jsx)("p",{className:"listingdetail__contact",children:m.email}),Object(w.jsx)("p",{className:"listingdetail__about",children:m.description})]})]}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-1-of-2",children:Object(w.jsxs)("ul",{className:"listingdetail__list",children:[Object(w.jsxs)("li",{className:"listingdetail__list__item",children:["Home Type: ",r.home_type]}),Object(w.jsxs)("li",{className:"listingdetail__list__item",children:["Price: N",O]}),Object(w.jsxs)("li",{className:"listingdetail__list__item",children:["Bedrooms: ",r.bedrooms]}),Object(w.jsxs)("li",{className:"listingdetail__list__item",children:["Bathrooms: ",r.bathrooms]}),Object(w.jsxs)("li",{className:"listingdetail__list__item",children:["Square Feet: ",r.sqft]})]})}),Object(w.jsx)("div",{className:"col-1-of-2",children:Object(w.jsxs)("ul",{className:"listingdetail__list",children:[Object(w.jsxs)("li",{className:"listingdetail__list__item",children:["Sale Type: ",r.sale_type]}),Object(w.jsxs)("li",{className:"listingdetail__list__item",children:["Address: ",r.address]}),Object(w.jsxs)("li",{className:"listingdetail__list__item",children:['City": ',r.city]}),Object(w.jsxs)("li",{className:"listingdetail__list__item",children:["State: ",r.state]}),Object(w.jsxs)("li",{className:"listingdetail__list__item",children:["Zipcode: ",r.zipcode]})]})})]}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("p",{className:"listingdetail__description",children:r.description})}),function(){var e=[];return e.push(Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-1-of-3",children:r.photo_1?Object(w.jsx)("div",{className:"listingdetail__display",children:Object(w.jsx)("img",{src:r.photo_1,alt:"photo_1",className:"listingdetail__display__image"})}):null}),Object(w.jsx)("div",{className:"col-1-of-3",children:r.photo_2?Object(w.jsx)("div",{className:"listingdetail__display",children:Object(w.jsx)("img",{src:r.photo_2,alt:"photo_2",className:"listingdetail__display__image"})}):null}),Object(w.jsx)("div",{className:"col-1-of-3",children:r.photo_3?Object(w.jsx)("div",{className:"listingdetail__display",children:Object(w.jsx)("img",{src:r.photo_3,alt:"photo_3",className:"listingdetail__display__image"})}):null})]},1)),e.push(Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-1-of-3",children:r.photo_4?Object(w.jsx)("div",{className:"listingdetail__display",children:Object(w.jsx)("img",{src:r.photo_4,alt:"photo_4",className:"listingdetail__display__image"})}):null}),Object(w.jsx)("div",{className:"col-1-of-3",children:r.photo_5?Object(w.jsx)("div",{className:"listingdetail__display",children:Object(w.jsx)("img",{src:r.photo_5,alt:"photo_5",className:"listingdetail__display__image"})}):null}),Object(w.jsx)("div",{className:"col-1-of-3",children:r.photo_6?Object(w.jsx)("div",{className:"listingdetail__display",children:Object(w.jsx)("img",{src:r.photo_6,alt:"photo_6",className:"listingdetail__display__image"})}):null})]},2)),e}()]})},J=function(){var e=Object(a.useState)([]),t=Object(q.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(0),i=Object(q.a)(n,2),l=i[0],o=i[1],r=Object(a.useState)(""),j=Object(q.a)(r,2),m=j[0],b=j[1],_=Object(a.useState)(""),p=Object(q.a)(_,2),O=p[0],x=p[1],g=Object(a.useState)(1),f=Object(q.a)(g,2),N=f[0],v=f[1];Object(a.useEffect)((function(){window.scrollTo(0,0),function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("http://localhost:8000/api/listings/?page=1");case 3:t=e.sent,c(t.data.results),o(t.data.count),b(t.data.previous),x(t.data.next),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[]);return Object(w.jsxs)("main",{className:"listings",children:[Object(w.jsxs)(A.b,{children:[Object(w.jsx)("title",{children:"QuickOwner - Listings"}),Object(w.jsx)("meta",{name:"description",content:"Listings page"})]}),Object(w.jsx)("section",{className:"listings__listings",children:function(){var e=[],t=[];s.map((function(t){return e.push(Object(w.jsx)(B,{title:t.title,address:t.address,city:t.city,state:t.state,price:t.price,sale_type:t.sale_type,home_type:t.home_type,bedrooms:t.bedrooms,bathrooms:t.bathrooms,sqft:t.sqft,photo_main:t.photo_main,slug:t.slug},t.id))}));for(var a=0;a<s.length;a+=3)t.push(Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-1-of-3",children:e[a]}),Object(w.jsx)("div",{className:"col-1-of-3",children:e[a+1]?e[a+1]:null}),Object(w.jsx)("div",{className:"col-1-of-3",children:e[a+2]?e[a+2]:null})]},a));return t}()}),Object(w.jsx)("section",{className:"listings__pagination",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)(R,{itemsPerPage:3,count:l,visitPage:function(e){h.a.get("http://localhost:8000/api/listings/?page=".concat(e)).then((function(t){c(t.data.results),b(t.data.previous),x(t.data.next),v(e)})).catch((function(e){console.log(e)}))},previous:function(){h.a.get(m).then((function(e){c(e.data.results),x(e.data.next),b(e.data.previous),m&&v(N-1)})).catch((function(e){console.log(e)}))},next:function(){h.a.get(O).then((function(e){c(e.data.results),x(e.data.next),b(e.data.previous),O&&v(N+1)})).catch((function(e){console.log(e)}))},active:N,setActive:v})})})]})},G=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:y})((function(e){var t=e.login,s=e.isAuthenticated,c=Object(a.useState)({email:"",password:""}),n=Object(q.a)(c,2),i=n[0],r=n[1],j=i.email,d=i.password,u=function(e){return r(Object(P.a)(Object(P.a)({},i),{},Object(T.a)({},e.target.name,e.target.value)))};return s?Object(w.jsx)(o.a,{to:"/"}):Object(w.jsxs)("div",{className:"auth",children:[Object(w.jsx)("h1",{className:"auth__title",children:" Log In"}),Object(w.jsx)("p",{className:"auth__lead",children:"Sign into Your Account"}),Object(w.jsxs)("form",{className:"auth__form",onSubmit:function(e){return function(e){e.preventDefault(),t(j,d)}(e)},children:[Object(w.jsx)("div",{className:"auth__form__group",children:Object(w.jsx)("input",{className:"auth__form__input",type:"email",placeholder:"johnDoe@QuickOwner.com",name:"email",value:j,onChange:function(e){return u(e)},required:!0})}),Object(w.jsx)("div",{className:"auth__form__group",children:Object(w.jsx)("input",{className:"auth__form__input",type:"password",placeholder:"******",name:"password",value:d,onChange:function(e){return u(e)},minLength:"6",required:!0})}),Object(w.jsx)("button",{className:"auth__form__button",children:"Login"})]}),Object(w.jsxs)("p",{className:"auth__authtext",children:["Don't have an account?-",Object(w.jsx)(l.b,{className:"auth__authtext__link",to:"/signup",children:"Sign Up"})]}),Object(w.jsxs)("p",{className:"auth__authtext",children:["Forgot password?-",Object(w.jsx)(l.b,{className:"auth__authtext__link",to:"/signup",children:"Reset"})]})]})})),z=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,s,a,c){return function(){var n=Object(u.a)(d.a.mark((function n(i){var l,o,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l={headers:{"Content-Type":"application/json"}},o=JSON.stringify({first_name:e,last_name:t,email:s,password:a,password2:c}),n.prev=2,n.next=5,h.a.post("http://127.0.0.1:8000/api/accounts/sign-up/",o,l);case 5:r=n.sent,i({type:O,payload:r.data}),i(y(s,a)),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),i({type:x}),i(v("Error Authenticating","error"));case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()},setAlert:v})((function(e){var t=e.setAlert,s=e.signup,c=e.isAuthenticated,n=Object(a.useState)({first_name:"",last_name:"",email:"",password:"",password2:""}),i=Object(q.a)(n,2),r=i[0],j=i[1],d=r.first_name,u=r.last_name,m=r.email,h=r.password,b=r.password2,_=function(e){return j(Object(P.a)(Object(P.a)({},r),{},Object(T.a)({},e.target.name,e.target.value)))};return c?Object(w.jsx)(o.a,{to:"/"}):Object(w.jsxs)("div",{className:"auth",children:[Object(w.jsx)("h1",{className:"auth__title",children:" Sign Up"}),Object(w.jsx)("p",{className:"auth__lead",children:"Create an Account"}),Object(w.jsxs)("form",{className:"auth__form",onSubmit:function(e){return function(e){e.preventDefault(),h!==b?t("Password do not match","error"):s(d,u,m,h,b)}(e)},children:[Object(w.jsx)("div",{className:"auth__form__group",children:Object(w.jsx)("input",{className:"auth__form__input",type:"text",placeholder:"John",name:"first_name",value:d,onChange:function(e){return _(e)},required:!0})}),Object(w.jsx)("div",{className:"auth__form__group",children:Object(w.jsx)("input",{className:"auth__form__input",type:"text",placeholder:"Doe",name:"last_name",value:u,onChange:function(e){return _(e)},required:!0})}),Object(w.jsx)("div",{className:"auth__form__group",children:Object(w.jsx)("input",{className:"auth__form__input",type:"email",placeholder:"johnDoe@QuickOwner.com",name:"email",value:m,onChange:function(e){return _(e)},required:!0})}),Object(w.jsx)("div",{className:"auth__form__group",children:Object(w.jsx)("input",{className:"auth__form__input",type:"password",placeholder:"password",name:"password",value:h,onChange:function(e){return _(e)},minLength:"6",required:!0})}),Object(w.jsx)("div",{className:"auth__form__group",children:Object(w.jsx)("input",{className:"auth__form__input",type:"password",placeholder:"Repeat Password",name:"password2",value:b,onChange:function(e){return _(e)},minLength:"6",required:!0})}),Object(w.jsx)("button",{className:"auth__form__button",children:"Sign Up"})]}),Object(w.jsxs)("p",{className:"auth__authtext",children:["Already have an account?-",Object(w.jsx)(l.b,{className:"auth__authtext__link",to:"/login",children:"Login"})]})]})})),V=function(){return Object(w.jsxs)("div",{className:"notfound",children:[Object(w.jsx)("h1",{className:"notfound__heading",children:"404 Not Found"}),Object(w.jsx)("p",{className:"notfound__paragraph",children:"The requested link doesn't exist on QuickOwner"})]})},W=(s(94),s(18)),K=s(43),Y=s(44),Z=s(45),X=[],$={token:localStorage.getItem("token"),isAuthenticated:null,loading:!1},ee=Object(W.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,s=t.type,a=t.payload;switch(s){case _:return[].concat(Object(Z.a)(e),[a]);case p:return e.filter((function(e){return e.id!==a}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,s=t.type,a=t.payload;switch(s){case g:return localStorage.setItem("token",a.access),Object(P.a)(Object(P.a)({},e),{},{isAuthenticated:!0,loading:!1,token:a.access});case O:return Object(P.a)(Object(P.a)({},e),{},{isAuthenticated:!1,loading:!0});case x:case f:case N:return localStorage.removeItem("token"),Object(P.a)(Object(P.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}}}),te=[Y.a],se=Object(W.createStore)(ee,{},Object(K.composeWithDevTools)(W.applyMiddleware.apply(void 0,te))),ae=s(46),ce=Object(r.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,s=e.auth,a=s.isAuthenticated,c=s.loading,n=Object(ae.a)(e,["component","auth"]);return Object(w.jsx)(o.b,Object(P.a)(Object(P.a)({},n),{},{render:function(e){return a||c?Object(w.jsx)(t,Object(P.a)({},e)):Object(w.jsx)(o.a,{to:"/login"})}}))})),ne=function(){return Object(w.jsx)(r.a,{store:se,children:Object(w.jsx)(l.a,{children:Object(w.jsx)(C,{children:Object(w.jsxs)(o.d,{children:[Object(w.jsx)(o.b,{exact:!0,path:"/",component:H}),Object(w.jsx)(o.b,{exact:!0,path:"/about",component:F}),Object(w.jsx)(o.b,{exact:!0,path:"/contact",component:I}),Object(w.jsx)(o.b,{exact:!0,path:"/listings",component:J}),Object(w.jsx)(ce,{exact:!0,path:"/listings/:id",component:M}),Object(w.jsx)(o.b,{exact:!0,path:"/login",component:G}),Object(w.jsx)(o.b,{exact:!0,path:"/signup",component:z}),Object(w.jsx)(o.b,{component:V})]})})})})},ie=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,98)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(ne,{})}),document.getElementById("root")),ie()}},[[95,1,2]]]);
//# sourceMappingURL=main.99801020.chunk.js.map