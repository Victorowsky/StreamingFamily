(this["webpackJsonpsf-react"]=this["webpackJsonpsf-react"]||[]).push([[0],{123:function(e,t,s){},124:function(e,t,s){},160:function(e,t,s){},161:function(e,t,s){},162:function(e,t,s){},163:function(e,t,s){},164:function(e,t,s){},165:function(e,t,s){},166:function(e,t,s){},167:function(e,t,s){},168:function(e,t,s){},169:function(e,t,s){},170:function(e,t,s){},171:function(e,t,s){},172:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(0),a=s.n(n),r=s(14),i=s.n(r),o=(s(123),s(4)),j=(s(124),s(101)),l=s.n(j),u=s(30),d=s.n(u),b=s(8),O=function(e){var t=e.name,s=e.color,a=Object(n.useState)(),r=Object(o.a)(a,2),i=r[0],j=r[1],l={boxShadow:"2px 2px 20px ".concat(s),borderColor:s};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(b.b,{to:t,children:Object(c.jsx)("div",{className:"square",onMouseOver:function(){return j(!0)},onMouseLeave:function(){return j(!1)},style:i?l:{},children:t})})})},x=function(){var e="Find your streaming family.",t=Object(n.useState)(""),s=Object(o.a)(t,2),a=s[0],r=s[1];return e=Array.from(e),Object(n.useEffect)((function(){var t=[];return r(""),e.forEach((function(e,s){var c=setTimeout((function(){r((function(t){return t+e}))}),100*s);t.push(c)})),function(){t.forEach((function(e){clearTimeout(e)}))}}),[]),Object(c.jsx)("div",{className:"title",children:a})},h=s(204),m=s(206),f=Object(h.a)((function(e){return{root:{"& > *":{borderColor:"white",color:"white",transtion:"1s",margin:"5px",width:"fit-content"},"& > *:hover":{borderColor:"white",boxShadow:"0px 0px 10px white",backgroundColor:"white",color:"black",width:"fit-content"}}}}));function p(e){var t=e.text,s=e.onClick,n=e.style,a=f();return Object(c.jsx)("div",{className:a.root,children:Object(c.jsx)(m.a,{style:n||{},variant:"outlined",onClick:s,children:t})})}var g=s(107),v=s.n(g),y=s(105),C=s.n(y),w=s(106),k=s.n(w),S=s(208),N=function(){var e=Object(n.useContext)(Ie),t=e.nickname,s=e.setUserID,a=e.setUserData,r=e.setNickname,i=e.socket,j=e.userID,l=Object(n.useState)(!1),u=Object(o.a)(l,2),h=u[0],m=u[1];Object(n.useEffect)((function(){i.emit("CheckUserID",j),window.innerWidth<520&&m(!0),window.addEventListener("resize",(function(){window.innerWidth<520?m(!0):m(!1)}))}),[]);var f=function(){r(null),s(null),d.a.remove("userID"),a(null)};return Object(c.jsxs)(c.Fragment,{children:[h?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"header",children:[t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.b,{to:"/account",children:Object(c.jsx)(S.a,{children:Object(c.jsx)(C.a,{style:{color:"white"}})})}),Object(c.jsx)(b.b,{to:"/myparties",children:Object(c.jsx)(S.a,{children:Object(c.jsx)(k.a,{style:{color:"white"}})})})]}):Object(c.jsx)(b.b,{to:"/login",children:Object(c.jsx)(p,{text:"Login"})}),t?Object(c.jsx)(S.a,{children:Object(c.jsx)(v.a,{style:{color:"white"},onClick:f})}):Object(c.jsx)(b.b,{to:"/signup",children:Object(c.jsx)(p,{text:"Sign Up"})})]})}):Object(c.jsxs)("div",{className:"header",children:[t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.b,{to:"/account",children:Object(c.jsx)(p,{text:t})}),Object(c.jsx)(b.b,{to:"/myparties",children:Object(c.jsx)(p,{text:"My Parties"})})]}):Object(c.jsx)(b.b,{to:"/login",children:Object(c.jsx)(p,{text:"Login"})}),t?Object(c.jsx)(p,{text:"LogOut",onClick:f}):Object(c.jsx)(b.b,{to:"/signup",children:Object(c.jsx)(p,{text:"Sign Up"})})]}),Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)("div",{className:"homepage",children:[Object(c.jsx)(x,{}),Object(c.jsxs)("div",{className:"streamingOffers",children:[Object(c.jsx)(O,{name:"Netflix",color:"#e50914"}),Object(c.jsx)(O,{name:"Spotify",color:"#1DB954"}),Object(c.jsx)(O,{name:"HBOGO",color:"white"}),Object(c.jsx)(O,{name:"Disney+",color:"#113CCF"})]})]})})]})},P=s(13),D=s(66),I=s(220),E=s(219);function M(e){return Object(c.jsx)(E.a,Object(D.a)({elevation:6,variant:"filled"},e))}var A=Object(h.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function U(){var e=Object(n.useContext)(Ie),t=e.setIsError,s=e.isError,a=e.errorMessage,r=A();return Object(c.jsx)("div",{className:r.root,children:Object(c.jsx)(I.a,{open:s,autoHideDuration:4e3,onClose:function(e,s){"clickaway"!==s&&t(!1)},children:Object(c.jsx)(M,{onClose:function(){return t(!1)},severity:"error",children:a})})})}s(160);var F=s(218);function B(e){var t=e.setChecked,s=e.checked;return Object(c.jsxs)("div",{children:[Object(c.jsx)(F.a,{checked:s,onChange:function(e){t(e.target.checked)},inputProps:{"aria-label":"primary checkbox"},color:"primary"}),"I accept everything."]})}var L=s(65),T=function(){var e=Object(n.useContext)(Ie),t=e.socket,s=e.setIsSuccess,a=e.setSuccessMessage,r=e.setUserID,i=e.setIsError,j=e.setErrorMessage,l=Object(n.useState)(""),u=Object(o.a)(l,2),O=u[0],x=u[1],h=Object(n.useState)(""),f=Object(o.a)(h,2),g=f[0],v=f[1],y=Object(n.useState)(""),C=Object(o.a)(y,2),w=C[0],k=C[1],S=Object(n.useState)(""),N=Object(o.a)(S,2),D=N[0],I=N[1],E=Object(n.useState)(""),M=Object(o.a)(E,2),A=M[0],U=M[1],F=Object(n.useState)(!1),T=Object(o.a)(F,2),_=T[0],H=T[1],R=Object(P.g)(),G=Object(n.useState)(!1),V=Object(o.a)(G,2),W=V[0],J=V[1];Object(n.useEffect)((function(){Object(L.a)({targets:".signInContainer",scale:[0,1],duration:2e3})}),[]);var Y=function(){if(O&&g&&w&&A&&D){if(!A.includes("@"))return j("Check your email"),i(!0);if(!_)return j("Accept everything"),i(!0);if(w.length<6)return j("Password is to short"),i(!0);if(w!==D)return j("Passwords are not the same"),i(!0);t.emit("SignUpData",{name:O,username:g,password:w,email:A})}else i(!0)};return t.on("SignUpAnswer",(function(e){e.success?(s(!0),x(""),v(""),k(""),U(""),a(e.message),d.a.set("userID",e.userID,{expires:3}),r(e.userID),setTimeout((function(){R.push("/")}),1)):(j(e.message),i(!0))})),t.on("sendValidationCodeAnswer",(function(e){var t=e.message;e.success?a(t):(j(t),i(!0))})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)(p,{variant:"outlined",text:"Back"})})}),Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(c.jsxs)("div",{className:"signInContainer",children:[Object(c.jsx)("h1",{children:"Create free account"}),Object(c.jsx)("div",{className:"signUp",children:Object(c.jsxs)("form",{autoComplete:"off",className:"forms",children:[Object(c.jsx)("input",{autoComplete:"nope",type:"text",name:"name",value:O,onChange:function(e){return x(e.target.value)},placeholder:"Name"}),Object(c.jsx)("input",{type:"text",name:"username",value:g,onChange:function(e){return v(e.target.value)},placeholder:"Username"}),Object(c.jsx)("input",{autoComplete:"off",type:"password",name:"password",onChange:function(e){return k(e.target.value)},value:w,placeholder:"Password"}),Object(c.jsx)("input",{autoComplete:"off",type:"password",name:"checkPassword",onChange:function(e){return I(e.target.value)},value:D,placeholder:"Repeat password"}),Object(c.jsx)("input",{autoComplete:"off",type:"email",name:"email",onChange:function(e){return U(e.target.value)},value:A,placeholder:"Email"}),Object(c.jsx)(B,{checked:_,setChecked:H}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),Y()},style:{display:"none"},type:"submit"}),Object(c.jsx)(m.a,{onMouseOver:function(){return J(!0)},onMouseOut:function(){J(!1)},variant:"outlined",disabled:!_,style:W?{marginTop:"5px",borderColor:"#4361ee",width:"fit-content",alignSelf:"center",backgroundColor:"#4361ee"}:{marginTop:"5px",color:"black",borderColor:"black",width:"fit-content",alignSelf:"center"},onClick:Y,children:"Create Account"})]})})]})})})]})},_=(s(161),s(210)),H=Object(h.a)((function(e){return{root:{position:"relative",top:"-4px",borderRadius:"5px",width:"100%","& .MuiLinearProgress-root":{borderRadius:"0 0 5px 5px"}}}}));function R(){var e=H();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(_.a,{})})}var G=function(e){var t=e.turnOffBack,s=Object(n.useContext)(Ie),a=s.socket,r=s.setUserID,i=s.setNickname,j=s.setIsSuccess,l=s.setSuccessMessage,u=s.setIsError,O=s.setErrorMessage,x=s.setIsLoginPage,h=Object(n.useRef)(),f=Object(n.useState)(""),g=Object(o.a)(f,2),v=g[0],y=g[1],C=Object(n.useState)(""),w=Object(o.a)(C,2),k=w[0],S=w[1],N=Object(P.g)(),D=Object(n.useState)(!1),I=Object(o.a)(D,2),E=I[0],M=I[1],A=Object(n.useState)(!1),U=Object(o.a)(A,2),F=U[0],B=U[1];Object(n.useEffect)((function(){Object(L.a)({targets:".loginContainer",scale:[0,1],duration:2e3})}),[]);var T=function(){v&&k?(a.emit("Login",{username:v,password:k}),B(!0)):(O("Check your details again"),u(!0))};return a.on("LoginAnswer",(function(e){var t;e.success?(i(v),y(""),S(""),j(!0),l(e.message),t=e.userID,d.a.set("userID",t,{expires:3}),r(e.userID),setTimeout((function(){N.push("/")}),1),B(!1),x(!1)):(O(e.message),u(!0),B(!1),S(""),h.current&&(h.current.style.transition="0.3s",h.current.style.boxShadow="0px 0px 20px red",setTimeout((function(){h.current.style.boxShadow="0px 0px 20px black"}),1e3)))})),Object(c.jsxs)(c.Fragment,{children:[!t&&Object(c.jsx)("div",{className:"header",children:Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)(p,{variant:"outlined",text:"Back"})})}),Object(c.jsx)("div",{className:"loginContent",children:Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(c.jsxs)("div",{ref:h,className:"loginContainer",children:[Object(c.jsx)("h1",{children:"Log in to your account"}),Object(c.jsx)("div",{className:"login",children:Object(c.jsxs)("form",{autoComplete:"off",className:"forms",children:[Object(c.jsx)("input",{type:"text",name:"username",value:v,onChange:function(e){return y(e.target.value)},placeholder:"Username"}),Object(c.jsx)("input",{autoComplete:"off",type:"password",name:"password",onChange:function(e){return S(e.target.value)},value:k,placeholder:"Password"}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),T()},style:{display:"none"},type:"submit"}),Object(c.jsx)(m.a,{onMouseOver:function(){return M(!0)},onMouseOut:function(){M(!1)},variant:"outlined",style:E?{marginTop:"5px",borderColor:"#4361ee",width:"fit-content",alignSelf:"center",backgroundColor:"#4361ee"}:{marginTop:"5px",color:"black",borderColor:"black",width:"fit-content",alignSelf:"center"},onClick:T,children:"Login"})]})})]}),F?Object(c.jsx)(R,{}):Object(c.jsx)("div",{style:{height:"4px"}})]})})]})},V=(s(162),function(){var e=Object(n.useContext)(Ie).userData,t=e.name,s=e.username,a=e.email,r=e.accountCreated,i=e.isVerified;return Object(c.jsxs)("div",{className:"accountInfo",children:[Object(c.jsxs)("div",{children:["Name: ",t]}),Object(c.jsxs)("div",{children:["Username: ",s]}),Object(c.jsx)("div",{children:"Password: ******"}),Object(c.jsxs)("div",{children:["Email: ",a]}),Object(c.jsxs)("div",{children:["Account created: ",r]}),i?Object(c.jsx)("div",{style:{color:"#90be6d"},children:"Your account is verifed"}):Object(c.jsx)(b.b,{to:"/activate",children:Object(c.jsx)("div",{style:{color:"#f94144"},children:"Click here to verify your account. And check your email!"})})]})}),W=(s(163),function(){var e=Object(n.useContext)(Ie),t=e.socket,s=e.userID,a=e.setIsSuccess,r=e.setSuccessMessage,i=e.setIsError,j=e.setErrorMessage,l=Object(n.useState)(""),u=Object(o.a)(l,2),d=u[0],b=u[1],O=Object(n.useState)(""),x=Object(o.a)(O,2),h=x[0],m=x[1],f=Object(n.useState)(""),g=Object(o.a)(f,2),v=g[0],y=g[1],C=Object(n.useState)(!1),w=Object(o.a)(C,2),k=w[0],S=w[1],N=function(e){e.preventDefault(),s&&d&&h&&v?t.emit("changePassword",{userID:s,oldPassword:d,newPassword:h,code:v}):(i(!0),j("Check it one more time"))};t.on("changePasswordCodeAnswer",(function(e){var t=e.message,s=e.success;s&&(a(s),r(t))})),t.on("changePasswordAnswer",(function(e){var t=e.message,s=e.success;s?(a(s),r(t),b(""),m(""),y("")):(i(!0),j(t))}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"changePassword",children:[Object(c.jsx)("h2",{children:"CHANGE PASSWORD"}),k?Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"password",value:d,onChange:function(e){b(e.target.value)},placeholder:"Old password"}),Object(c.jsx)("input",{type:"password",value:h,onChange:function(e){m(e.target.value)},placeholder:"New password"}),Object(c.jsx)("input",{type:"text",value:v,onChange:function(e){y(e.target.value)},placeholder:"Code from email"}),Object(c.jsxs)("div",{style:{width:"fit-content"},children:[Object(c.jsx)(p,{onClick:N,style:{width:"100%"},text:"Change password"}),Object(c.jsx)("button",{style:{display:"none"},onClick:N,type:"submit"})]})]}):Object(c.jsx)("div",{style:{width:"fit-content",height:"fit-content",alignSelf:"center",padding:"15px 20px",backgroundColor:"transparent"},children:Object(c.jsx)(p,{text:"Send code to email!",onClick:function(){t.emit("changePasswordCode",{userID:s}),S(!0)}})})]})})}),J=(s(164),function(){var e=Object(n.useContext)(Ie),t=e.socket,s=e.userID,a=e.setIsSuccess,r=e.setSuccessMessage,i=e.setIsError,j=e.setErrorMessage,l=Object(n.useState)(""),u=Object(o.a)(l,2),d=u[0],b=u[1],O=Object(n.useState)(""),x=Object(o.a)(O,2),h=x[0],m=x[1],f=Object(n.useState)(!1),g=Object(o.a)(f,2),v=g[0],y=g[1],C=function(e){e.preventDefault(),s&&d&&h?d.includes("@")?t.emit("changeEmail",{userID:s,newEmail:d,code:h}):(i(!0),j("Check your new email!")):(i(!0),j("Check it one more time"))};t.on("changeEmailCodeAnswer",(function(e){var t=e.message,s=e.success;s&&(a(s),r(t))})),t.on("changeEmailAnswer",(function(e){var t=e.message,s=e.success;s?(a(s),r(t),b(""),m("")):(i(!0),j(t))}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"changeEmail",children:[Object(c.jsx)("h2",{children:"CHANGE EMAIL"}),v?Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",value:d,onChange:function(e){b(e.target.value)},placeholder:"New email"}),Object(c.jsx)("input",{type:"text",value:h,onChange:function(e){m(e.target.value)},placeholder:"Code from email"}),Object(c.jsxs)("div",{style:{width:"fit-content"},children:[Object(c.jsx)(p,{onClick:C,style:{width:"100%"},text:"Change password"}),Object(c.jsx)("button",{style:{display:"none"},onClick:C,type:"submit"})]})]}):Object(c.jsx)("div",{style:{width:"fit-content",height:"fit-content",alignSelf:"center",padding:"15px 20px",backgroundColor:"transparent"},children:Object(c.jsx)(p,{text:"Send code to email!",onClick:function(){t.emit("changeEmailCode",{userID:s}),y(!0)}})})]})})}),Y=function(){var e=Object(n.useContext)(Ie).userData.name,t=Object(n.useState)("Account"),s=Object(o.a)(t,2),a=s[0],r=s[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)(p,{variant:"outlined",text:"Back"})})}),Object(c.jsxs)("div",{className:"accountContent",children:[Object(c.jsxs)("h1",{children:["Hello, ",e]}),Object(c.jsxs)("div",{className:"account",children:[Object(c.jsxs)("div",{onClick:function(e){!function(e){"leftPanelItem"===e.target.className&&r(e.target.textContent)}(e)},className:"leftPanel",children:[Object(c.jsx)("p",{className:"leftPanelItem",children:"Account"}),Object(c.jsx)("p",{className:"leftPanelItem",children:"Change Password"}),Object(c.jsx)("p",{className:"leftPanelItem",children:"Change Email"})]}),Object(c.jsxs)("div",{className:"rightPanel",children:["Account"===a&&Object(c.jsx)(V,{}),"Change Password"===a&&Object(c.jsx)(W,{}),"Change Email"===a&&Object(c.jsx)(J,{})]})]})]})]})},z=(s(165),s(108)),q=s.n(z),K=(s(166),function(e){var t=e.name,s=e.users,a=e.maxUsers,r=e.color,i=e.dateCreated,j=e.creator,l=e.partyID,u=e.text,d=e.join,b=Object(n.useState)(),O=Object(o.a)(b,2),x=O[0],h=O[1],m=Object(n.useContext)(Ie),f=m.userID,p=m.socket,g=m.setIsError,v=m.setErrorMessage,y={boxShadow:"0px 0px 20px ".concat(r),borderColor:r},C=Object(n.useRef)();return Object(c.jsxs)("div",{className:"party",style:x?y:{},onMouseOver:function(){return h(!0)},onMouseLeave:function(){return h(!1)},children:[Object(c.jsx)("h1",{children:t}),d&&Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"fit-content",alignSelf:"center"},children:[Object(c.jsx)(S.a,{onClick:function(){var e=C.current.dataset.id;f&&e?p.emit("joinParty",{userID:f,partyID:e}):(g(!0),v("Please login!"))},"data-id":l,ref:C,style:{color:"white"},children:Object(c.jsx)(q.a,{style:{color:"white",fontSize:"50px"}})}),"JOIN"]}),Object(c.jsx)("h2",{children:u}),Object(c.jsxs)("span",{children:["Users: ",s.length,"/",a]}),Object(c.jsxs)("span",{children:["Created: ",i]}),Object(c.jsxs)("span",{children:["Created by: ",j]})]})}),Q=function(e){var t=e.parties,s=e.streamingPlatform;return Object(c.jsxs)(c.Fragment,{children:["  ",t.length>0&&Object(c.jsxs)("div",{className:"myPartiesColumn",children:[Object(c.jsx)("h2",{children:s}),t]})]})},X=s(211),Z=Object(h.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function $(){var e=Z();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(X.a,{})})}var ee=function(){var e=Object(n.useContext)(Ie),t=e.userData,s=e.socket,a=Object(n.useState)([]),r=Object(o.a)(a,2),i=r[0],j=r[1];Object(n.useEffect)((function(){return s.emit("getMyParties",t.myParties),function(){j([])}}),[]),s.on("getMyPartiesAnswer",(function(e){j(e)}));var l=[],u=[],d=[],O=[];return i.forEach((function(e){switch(e.streamingPlatform){case"Netflix":l.push(e);break;case"Spotify":u.push(e);break;case"HBOGO":d.push(e);break;case"Disney+":O.push(e);break;default:console.log("streaming Party Error")}})),l=l.map((function(e){var t;switch(e.streamingPlatform){case"Netflix":t="#e50914";break;case"Spotify":t="#1DB954";break;case"HBO GO":t="white";break;case"Disney +":t="#113CCF";break;default:t="white"}return Object(c.jsx)(b.b,{to:"/party/".concat(e._id),children:Object(c.jsx)(K,{join:!1,partyID:e._id,name:e.partyName,text:e.textContent,users:e.users,maxUsers:e.maxUsers,creator:e.creatorUsername,dateCreated:e.dateCreated,color:t},e._id)})})),u=u.map((function(e){var t;switch(e.streamingPlatform){case"Netflix":t="#e50914";break;case"Spotify":t="#1DB954";break;case"HBO GO":t="white";break;case"Disney +":t="#113CCF";break;default:t="white"}return Object(c.jsx)(b.b,{to:"/party/".concat(e._id),children:Object(c.jsx)(K,{join:!1,partyID:e._id,name:e.partyName,text:e.textContent,users:e.users,maxUsers:e.maxUsers,creator:e.creatorUsername,dateCreated:e.dateCreated,color:t},e._id)})})),d=d.map((function(e){var t;switch(e.streamingPlatform){case"Netflix":t="#e50914";break;case"Spotify":t="#1DB954";break;case"HBO GO":t="white";break;case"Disney +":t="#113CCF";break;default:t="white"}return Object(c.jsx)(b.b,{to:"/party/".concat(e._id),children:Object(c.jsx)(K,{join:!1,partyID:e._id,name:e.partyName,text:e.textContent,users:e.users,maxUsers:e.maxUsers,creator:e.creatorUsername,dateCreated:e.dateCreated,color:t},e._id)})})),O=O.map((function(e){var t;switch(e.streamingPlatform){case"Netflix":t="#e50914";break;case"Spotify":t="#1DB954";break;case"HBO GO":t="white";break;case"Disney+":t="#113CCF";break;default:t="white"}return Object(c.jsx)(b.b,{to:"/party/".concat(e._id),children:Object(c.jsx)(K,{join:!1,partyID:e._id,name:e.partyName,text:e.textContent,users:e.users,maxUsers:e.maxUsers,creator:e.creatorUsername,dateCreated:e.dateCreated,color:t},e._id)})})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)(p,{variant:"outlined",text:"Back"})})}),i?Object(c.jsxs)("div",{className:"myPartiesContent",children:[Object(c.jsx)("h1",{children:"My Parties"}),Object(c.jsxs)("div",{className:"myParties",children:[Object(c.jsx)(Q,{parties:l,streamingPlatform:"Netflix"}),Object(c.jsx)(Q,{parties:u,streamingPlatform:"Spotify"}),Object(c.jsx)(Q,{parties:d,streamingPlatform:"HBO GO"}),Object(c.jsx)(Q,{parties:O,streamingPlatform:"Disney+"})]})]}):Object(c.jsx)("div",{className:"myPartiesLoading",children:Object(c.jsx)($,{})})]})},te=function(){var e=Object(n.useContext)(Ie),t=e.socket,s=e.userID,a=e.setIsSuccess,r=e.setIsError,i=e.setErrorMessage,j=e.setSuccessMessage,l=Object(n.useState)(""),u=Object(o.a)(l,2),d=u[0],b=u[1],O=Object(n.useState)(!1),x=Object(o.a)(O,2),h=x[0],m=x[1],f=function(e){e.preventDefault(),d&&t.emit("sendValidationCode",{userID:s,ValidateToken:d})};return t.on("sendValidationCodeAnswer",(function(e){var t=e.message,s=e.success;s?(a(s),j(t),m(s)):(r(!0),i(t))})),Object(c.jsxs)(c.Fragment,{children:[!!h&&Object(c.jsx)(P.a,{to:"/"}),Object(c.jsxs)("div",{className:"confirmAccount",children:[Object(c.jsx)("h1",{children:"Confirm your account"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",placeholder:"Put code from your email",onChange:function(e){return b(e.target.value)},value:d}),Object(c.jsx)("button",{style:{display:"none"},onClick:function(e){f(e)},type:"submit"})]}),Object(c.jsx)(p,{text:"Confirm",onClick:f})]})]})};function se(e){return Object(c.jsx)(E.a,Object(D.a)({elevation:6,variant:"filled"},e))}var ce=Object(h.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function ne(){var e=Object(n.useContext)(Ie),t=e.isSuccess,s=e.setIsSuccess,a=e.successMessage,r=ce();return Object(c.jsx)("div",{className:r.root,children:Object(c.jsx)(I.a,{open:t,autoHideDuration:4e3,onClose:function(e,t){"clickaway"!==t&&s(!1)},children:Object(c.jsx)(se,{onClose:function(){return s(!1)},severity:"success",children:a||"Success"})})})}var ae=s(110),re=Object(h.a)((function(e){return{root:{display:"flex",justifyContent:"center",padding:"15px 20px","& > * + *":{marginLeft:e.spacing(2)}}}}));function ie(){var e=re();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(X.a,{})})}s(167);var oe,je=function(e){var t=e.color,s=e.streamingPlatform,a=Object(n.useState)(!1),r=Object(o.a)(a,2),i=r[0],j=r[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),d=u[0],O=u[1],x=Object(n.useState)(""),h=Object(o.a)(x,2),m=h[0],f=h[1],g=Object(n.useState)([]),v=Object(o.a)(g,2),y=v[0],C=v[1],w=Object(n.useContext)(Ie),k=w.handleCreateParty,S=w.userID,N=w.socket,P=w.setIsSuccess,D=w.setIsError,I=w.setSuccessMessage,E=w.setErrorMessage,M=w.nickname,A=Object(n.useState)("".concat(M,"'s party")),U=Object(o.a)(A,2),F=U[0],B=U[1],L=Object(n.useRef)();Object(n.useEffect)((function(){return N.emit("getPartiesData",s),function(){C([])}}),[]),N.on("getParitesDataAnswer",(function(e){C(e)})),N.on("newPartyAddedAnswer",(function(e){var t=e.addedParty;t.streamingPlatform===s&&C([].concat(Object(ae.a)(y),[t]))})),N.on("joinPartyAnswer",(function(e){var t=e.message;e.success?(P(!0),I(t)):(D(!0),E(t))})),N.on("updateParty",(function(e){var t,s=e.partyChanged,c=y.filter((function(e,c){return e._id===s._id&&(t=c),e._id!==s._id}));c.splice(t,0,s),C(c)})),N.on("createPartyAnswer",(function(e){var t=e.message;e.success?(P(!0),I(t),B(""),O(""),f(""),j(!1)):(D(!0),E(t))}));var T=y.map((function(e){return Object(c.jsx)(K,{join:!0,partyID:e._id,name:e.partyName,text:e.textContent,users:e.users,maxUsers:e.maxUsers,creator:e.creatorUsername,dateCreated:e.dateCreated,color:t},e._id)}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{onClick:function(e){i&&(L.current.contains(e.target)||j(!1))},style:{height:"100%"},children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)(p,{variant:"outlined",text:"Back"})})}),Object(c.jsx)("div",{className:"streamingContent",children:Object(c.jsxs)("div",{className:"partiesContainer",children:[Object(c.jsxs)("h1",{children:[s," Families"]}),Object(c.jsx)(p,{text:"Create own party",onClick:function(){j((function(e){return!e}))}}),T?Object(c.jsx)("div",{className:"Parties",children:T}):Object(c.jsx)(ie,{})]})}),i&&Object(c.jsx)("div",{className:"createPartyContainer",ref:L,children:Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{ref:L,type:"text",placeholder:"Party name",onChange:function(e){return B(e.target.value)},value:F}),Object(c.jsx)("input",{ref:L,type:"text",placeholder:"Text",onChange:function(e){return O(e.target.value)},value:d}),Object(c.jsx)("input",{type:"number",style:{width:"263px"},max:5,min:1,placeholder:"How many friends",onChange:function(e){return f(e.target.value)},value:m}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),k(S,F,d,m,s)},style:{display:"none"},type:"submit"}),Object(c.jsx)(p,{text:"Create",onClick:function(){return k(S,F,d,m,s)}})]})})]})})},le=(s(168),s(169),function(e){var t=e.time,s=e.nickname,n=e.message,a=e.myMessage;return Object(c.jsx)(c.Fragment,{children:a?Object(c.jsx)("div",{title:t,style:{alignSelf:"flex-end"},children:Object(c.jsx)("p",{style:{borderRadius:"20px 20px 0px 20px"},children:n})}):Object(c.jsx)(c.Fragment,{children:""===s?Object(c.jsx)("div",{title:t,children:Object(c.jsx)("p",{style:{color:"grey",borderColor:"grey"},children:n})}):Object(c.jsx)("div",{title:t,children:Object(c.jsxs)("p",{children:[Object(c.jsxs)("span",{children:[s," : "]})," "," ",n]})})})})}),ue=function(e){var t=e.chat,s=Object(n.useContext)(Ie).nickname,a=Object(n.useRef)(),r=t.map((function(e,t){var n=!1;return e.nickname===s&&(n=!0),Object(c.jsx)(le,{index:t,myMessage:n,nickname:e.nickname,message:e.message,time:e.time},t)}));return Object(n.useEffect)((function(){a.current.scrollTo({top:a.current.scrollHeight})}),[t]),Object(c.jsx)("div",{ref:a,className:"chat",children:r||"There are no messages"})},de=s(221),be=s(213),Oe=s(214),xe=s(215),he=s(216),me=s(212),fe=s(217),pe=s(109),ge=s.n(pe),ve=s(67),ye=["username@gmail.com","user02@gmail.com"],Ce=Object(h.a)({avatar:{backgroundColor:ve.a[100],color:ve.a[600]}});function we(e){var t=Ce(),s=e.onClose,n=e.selectedValue,a=e.open;return Object(c.jsxs)(fe.a,{className:t.root,style:{color:"red"},onClose:function(){s(n)},"aria-labelledby":"simple-dialog-title",open:a,children:[Object(c.jsx)(me.a,{id:"simple-dialog-title",children:"Users in the party"}),Object(c.jsx)(be.a,{children:oe.map((function(e){return Object(c.jsxs)(Oe.a,{button:!0,onClick:function(){s(e)},children:[Object(c.jsx)(xe.a,{children:Object(c.jsx)(de.a,{className:t.avatar,children:Object(c.jsx)(ge.a,{})})}),Object(c.jsx)(he.a,{primary:e})]},e)}))})]})}function ke(e){var t=e.users,s=e.admin,n=a.a.useState(!1),r=Object(o.a)(n,2),i=r[0],j=r[1],l=a.a.useState(ye[1]),u=Object(o.a)(l,2),d=u[0],b=u[1];oe=t,s;return Object(c.jsxs)("div",{children:[Object(c.jsx)(p,{text:"USERS",variant:"outlined",color:"primary",onClick:function(){j(!0)}}),Object(c.jsx)(we,{selectedValue:d,open:i,onClose:function(e){j(!1),b(e)}})]})}var Se=function(e){var t=Object(P.h)().partyID,s=Object(n.useContext)(Ie),a=s.socket,r=s.nickname,i=s.setIsError,j=s.setErrorMessage,l=s.userID,u=s.setIsSuccess,d=s.setSuccessMessage,O=Object(P.g)(),x=Object(n.useState)(),h=Object(o.a)(x,2),m=h[0],f=h[1],g=Object(n.useState)(""),v=Object(o.a)(g,2),y=v[0],C=v[1];Object(n.useEffect)((function(){t&&r&&a.emit("getParty",{partyID:t,nickname:r})}),[r,t,a]),a.on("getPartyAnswer",(function(e){var t=e.docs,s=e.success,c=e.message;s?f(t):(i(!0),j(c))})),a.on("messageAnswer".concat(t),(function(e){f(e)}));return a.on("leavePartyAnswer",(function(e){var t=e.message;e.success?(u(!0),d(t),O.push("/")):(i(!0),j("Error"))})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)(b.b,{to:"/myParties",children:Object(c.jsx)(p,{variant:"outlined",text:"Back"})})}),m?Object(c.jsx)("div",{className:"partyInfoContainer",children:Object(c.jsxs)("div",{className:"partyInfo",children:[Object(c.jsxs)("div",{className:"partyName",children:[Object(c.jsxs)("div",{className:"info",children:[Object(c.jsx)("h1",{children:m.partyName}),Object(c.jsxs)("span",{className:"partyName__createdBy",children:["Created by: ",m.creatorUsername," |"," ",m.dateCreated]})]}),Object(c.jsxs)("div",{className:"partyInfoButtons",children:[Object(c.jsx)(ke,{users:m.users,admin:m.admin}),Object(c.jsx)(p,{onClick:function(){a.emit("leaveParty",{nickname:r,partyID:t,userID:l})},text:"LEAVE PARTY"})]})]}),Object(c.jsx)("div",{className:"partyUsers"}),Object(c.jsx)("div",{className:"chatAndUsersContainer",children:Object(c.jsxs)("div",{className:"chatContainer",children:[Object(c.jsx)(ue,{chat:m.chat}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",value:y,onChange:function(e){return C(e.target.value)},placeholder:"Send a message"}),Object(c.jsx)("button",{onClick:function(e){return function(e){e&&e.preventDefault(),y&&t&&r&&a.emit("messageSend",{message:y,partyID:t,nickname:r}),C("")}(e)},type:"submit",style:{display:"none"}})]})]})})]})}):Object(c.jsx)("div",{className:"partyInfoLoading",children:Object(c.jsx)($,{})})]})},Ne=(s(170),function(){var e=Object(n.useContext)(Ie),t=e.socket,s=e.setIsSuccess,a=e.setIsError,r=e.setSuccessMessage,i=Object(n.useRef)(),j=Object(n.useState)(!1),l=Object(o.a)(j,2),u=l[0],d=l[1],O=Object(n.useState)(""),x=Object(o.a)(O,2),h=x[0],m=x[1],f=function(){h.includes("@")?(t.emit("forgotPasswordCode",{email:h}),m(""),d(!1)):a(!0)};return t.on("forgotPasswordCodeAnswer",(function(e){var t=e.message;e.success?(s(!0),r(t)):a(!0)})),Object(c.jsxs)("div",{onClick:function(e){!function(e){i.current&&(i.current.contains(e.target)||d(!1))}(e)},className:"firstComp",children:[Object(c.jsxs)("div",{className:"welcomeText",children:[Object(c.jsx)("h1",{className:"streamingFamily",children:"Streaming Family"}),Object(c.jsx)("p",{children:"First website where you can find people to share your accounts!"})]}),Object(c.jsxs)("div",{className:"loginContainerFirst",children:[Object(c.jsx)(G,{turnOffBack:"true"}),Object(c.jsxs)("div",{className:"createAccount",children:[Object(c.jsx)("h2",{children:"Don't have account?"}),Object(c.jsx)(b.b,{to:"/signup",children:Object(c.jsx)("p",{children:"Register now for free!"})}),Object(c.jsx)("hr",{}),Object(c.jsx)("p",{className:"forgotPasswordParagraph",onClick:function(){return d(!0)},children:"Forgot password?"})]})]}),u&&Object(c.jsx)("div",{ref:i,className:"forgotPasswordComp",children:Object(c.jsxs)("form",{autoComplete:"off",className:"forms",children:[Object(c.jsx)("h2",{children:"Enter your account email"}),Object(c.jsx)("input",{autoComplete:"off",type:"text",name:"email",onChange:function(e){return m(e.target.value)},value:h,placeholder:"Enter your email"}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),f()},style:{display:"none"},type:"submit"}),Object(c.jsx)("div",{style:{width:"fit-content"},children:Object(c.jsx)(p,{onClick:function(){f()},style:{color:"black",borderColor:"black"},text:"Send Code"})})]})})]})}),Pe=(s(171),function(){var e=Object(P.g)(),t=Object(P.h)().code,s=Object(n.useContext)(Ie),a=s.socket,r=s.setIsSuccess,i=s.setSuccessMessage,j=s.setIsError,l=s.setErrorMessage,u=Object(n.useState)(""),d=Object(o.a)(u,2),b=d[0],O=d[1],x=Object(n.useState)(""),h=Object(o.a)(x,2),m=h[0],f=h[1],g=Object(n.useState)(""),v=Object(o.a)(g,2),y=v[0],C=v[1];Object(n.useEffect)((function(){a.emit("remindPasswordCheckCode",{code:t})}),[]),a.on("remindPasswordCheckCodeAnswer",(function(t){var s=t.success,c=t.userID;s?C(c):e.push("/")}));var w=function(){b===m&&y?a.emit("remindPasswordChange",{userID:y,password:b}):b!==m&&(j(!0),l("Passwords are not the same"))};return a.on("remindPasswordChangeAnswer",(function(t){var s=t.message;t.success?(r(!0),i(s),O(""),setTimeout((function(){e.push("/")}),1)):j(!0)})),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"remindPassword",children:[Object(c.jsx)("h2",{children:"CHANGE PASSWORD"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"password",value:b,onChange:function(e){O(e.target.value)},placeholder:"Password"}),Object(c.jsx)("input",{type:"password",value:m,onChange:function(e){f(e.target.value)},placeholder:"Confirm password"}),Object(c.jsxs)("div",{style:{width:"fit-content"},children:[Object(c.jsx)(p,{onClick:w,style:{width:"100%"},text:"Change password"}),Object(c.jsx)("button",{style:{display:"none"},onClick:function(e){e.preventDefault(),w()},type:"submit"})]})]})]})})}),De=l()("https://stormy-refuge-26952.herokuapp.com/"),Ie=a.a.createContext();var Ee=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(n.useState)(),i=Object(o.a)(r,2),j=i[0],l=i[1],u=Object(n.useState)(),b=Object(o.a)(u,2),O=b[0],x=b[1],h=Object(n.useState)(!1),m=Object(o.a)(h,2),f=m[0],p=m[1],g=Object(n.useState)(""),v=Object(o.a)(g,2),y=v[0],C=v[1],w=Object(n.useState)(!1),k=Object(o.a)(w,2),S=k[0],D=k[1],I=Object(n.useState)("Try again!"),E=Object(o.a)(I,2),M=E[0],A=E[1],F=Object(n.useState)(!1),B=Object(o.a)(F,2),L=B[0],_=B[1];return De.on("CheckUserIDAnswer",(function(e){x(e),l(e.username)})),Object(n.useEffect)((function(){d.a.get("userID")?(a(d.a.get("userID")),setTimeout((function(){De.emit("CheckUserID",s)}),1)):_(!0)}),[s]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(Ie.Provider,{value:{userID:s,setUserID:a,nickname:j,setNickname:l,userData:O,setUserData:x,socket:De,isSuccess:f,setIsSuccess:p,successMessage:y,setSuccessMessage:C,isError:S,setIsError:D,errorMessage:M,setErrorMessage:A,handleCreateParty:function(e,t,s,c,n){e&&t&&s&&c<6&&n?De.emit("createParty",{userID:e,partyName:t,text:s,maxUsers:c,streamingPlatform:n}):e?c>5?(D(!0),A("Party can have max 5 users")):(D(!0),A("Check it one more time")):(D(!0),A("You need to login!"))},setIsLoginPage:_},children:[Object(c.jsx)("div",{className:"app",children:L?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(P.b,{path:"/",exact:!0,children:Object(c.jsx)(Ne,{})}),Object(c.jsx)(P.b,{path:"/signup",exact:!0,children:Object(c.jsx)(T,{})}),Object(c.jsx)(P.b,{path:"/remindpassword/:code",children:Object(c.jsx)(Pe,{})})]}):Object(c.jsxs)(P.d,{children:[Object(c.jsx)(P.b,{path:"/",exact:!0,children:Object(c.jsx)(N,{})}),Object(c.jsx)(P.b,{path:"/login",children:Object(c.jsx)(G,{})}),Object(c.jsx)(P.b,{path:"/LoginPage",children:Object(c.jsx)(Ne,{})}),Object(c.jsx)(P.b,{path:"/account",children:O&&Object(c.jsx)(Y,{})}),Object(c.jsx)(P.b,{path:"/activate",children:Object(c.jsx)(te,{})}),Object(c.jsx)(P.b,{path:"/myparties",children:O&&Object(c.jsx)(ee,{})}),Object(c.jsx)(P.b,{path:"/Netflix",children:Object(c.jsx)(je,{color:"#e50914",streamingPlatform:"Netflix"})}),Object(c.jsx)(P.b,{path:"/Spotify",children:Object(c.jsx)(je,{color:"#1DB954",streamingPlatform:"Spotify"})}),Object(c.jsx)(P.b,{path:"/HBOGO",children:Object(c.jsx)(je,{color:"white",streamingPlatform:"HBOGO"})}),Object(c.jsx)(P.b,{path:"/Disney+",children:Object(c.jsx)(je,{color:"#113CCF",streamingPlatform:"Disney+"})}),Object(c.jsx)(P.b,{path:"/party/:partyID",component:Se})]})}),Object(c.jsx)(ne,{}),Object(c.jsx)(U,{})]})})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(b.a,{children:Object(c.jsx)(Ee,{})})}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.2cfdeecd.chunk.js.map