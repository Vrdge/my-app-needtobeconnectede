"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[512],{3512:function(t,e,s){s.r(e),s.d(e,{default:function(){return T}});var n=s(1413),i=s(2791),u=s(8413),o=s(3433),r="myPosts_posts__EZz0X",a="Posts_item__MFm8n",l=s(184),f=function(t){return(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",alt:""}),t.post]})},c=s(5705),d=function(t){var e=(0,o.Z)(t.ProfilePage.Posts).reverse().map((function(t){return(0,l.jsx)(f,{post:t.message,id:t.id},t.id)}));return(0,l.jsxs)("div",{className:r,children:[e,(0,l.jsx)(c.J9,{Formik:!0,initialValues:{newPostText:""},onChange:function(){return console.log("aosidj")},onSubmit:function(e,s){var n,i=s.setSubmitting;return n=e.newPostText,t.addNewPost(n),e.newPostText="",i(!1)},children:function(t){var e=t.values,s=t.errors,n=t.touched,i=t.handleChange,u=t.handleBlur,o=t.handleSubmit,r=t.isSubmitting;return(0,l.jsxs)("form",{onSubmit:o,children:[(0,l.jsx)("input",{onChange:i,type:"text",name:"newPostText",onBlur:u,value:e.newPostText}),s.newPostText&&n.newPostText&&s.newPostText,(0,l.jsx)("button",{type:"submit",disabled:r,children:"Submit"})]})}})]})},p=s(9101),P=(0,p.$j)((function(t){return{ProfilePage:t.ProfilePage,newPostText:t.ProfilePage.newPostText}}),(function(t){return{addNewPost:function(e){t((0,u.Wl)(e))}}}))(d),x="Profile_content__Duu-d",h=s(4837),m=function(t){return t.Profile?t.Profile.photos.small?(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:t.Profile.photos.small,alt:""}),(0,l.jsx)("h1",{color:"white",children:t.Profile.UserName})]}):(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{width:"100px",height:"100px",src:"https://e1.pxfuel.com/desktop-wallpaper/214/623/desktop-wallpaper-dark-pfp-dark.jpg"}),(0,l.jsx)("h1",{color:"white",children:t.Profile.UserName})]}):(0,l.jsx)("img",{src:h,alt:""})},g=s(9439),j=function(t){var e=(0,i.useState)(t.status),s=(0,g.Z)(e,2),n=s[0],u=s[1],o=(0,i.useState)(!1),r=(0,g.Z)(o,2),a=r[0],f=r[1];(0,i.useEffect)((function(){u(t.status)}),[t.status]);var c=function(t){f(t)};return(0,l.jsx)("div",{children:a?(0,l.jsx)("input",{onChange:function(e){t.updateStatus(e.target.value)},onBlur:function(){c(!1)},value:n,type:"text"}):(0,l.jsx)("span",{onDoubleClick:function(){c(!0)},children:["",null,void 0].includes(n)?"Write Your Status Here":n})})},w=function(t){return(0,l.jsxs)("div",{className:x,children:[(0,l.jsx)(m,{Profile:t.Profile}),(0,l.jsx)(j,{Profile:t.Profile,status:t.status,updateStatus:t.updateStatus}),(0,l.jsx)(P,{})]})},v=s(7689),S=s(3725),b=s(7781),_=i.memo((function(t){var e=(0,v.UO)().userId,s=t.getProfile,u=t.getStatus;return e&&null!==e||(e=29401),(0,i.useEffect)((function(){s(e),u(e)}),[e]),(0,l.jsx)(w,(0,n.Z)((0,n.Z)({},t),{},{Profile:t.Profile,status:t.status,updateStatus:t.updateStatus}))})),k={getProfile:u.B,getStatus:u.$b,updateStatus:u.dw},T=(0,b.qC)((0,p.$j)((function(t){return{Profile:t.ProfilePage.profile,status:t.ProfilePage.status}}),k),S.N)(_)}}]);
//# sourceMappingURL=512.02ef0117.chunk.js.map