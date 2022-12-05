"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9],{9:(M,d,n)=>{n.r(d),n.d(d,{RegisterPageModule:()=>c});var m=n(6362),i=n(5708),g=n(993),h=n(4929),v=n(4576),e=n(3184),f=n(3352),P=n(8787),T=n(7556),S=n(1354);class u{constructor(o,t,r,a,p){this.dataService=o,this.router=t,this.photoService=r,this.authService=a,this.alertController=p,this.form={name:"",status:"",email:""}}ngOnInit(){}onClick(o){var t;this.authService.showLoader=!0,this.authService.form.deviceToken=null!==(t=this.authService.form)&&void 0!==t&&t.deviceToken?this.authService.form.deviceToken:"No Token";let r=new v.Y("subscribe","addUserToDatabase",this.authService.form);this.dataService.socket$.emit("subscribe",r,a=>(0,h.mG)(this,void 0,void 0,function*(){this.authService.showLoader=!1,"Success"===a.subscriptionType?this.router.navigate(["/tabs"]):yield(yield this.alertController.create({header:"Error",subHeader:"Something went wrong",message:"Try again later",buttons:["OK"]})).present()}))}uploadImage(){this.photoService.addNewToGallery().then(o=>{})}}u.\u0275fac=function(o){return new(o||u)(e.Y36(f.W),e.Y36(g.F0),e.Y36(P.T),e.Y36(T.$),e.Y36(i.Br))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-register"]],decls:25,vars:9,consts:[[1,"ion-padding"],[1,"avatar",3,"click"],["alt","Avatar",3,"src"],[1,"edit"],["name","create-outline"],[3,"placeholder","id","input"],["autoGrow","",3,"placeholder","id","input"],["label","Get started",3,"clickEvent"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Get Started ... "),e.qZA()()(),e.TgZ(4,"ion-content",0)(5,"h2"),e._uU(6,"Create Your Profile,"),e.qZA(),e.TgZ(7,"h3"),e._uU(8,"To get started!"),e.qZA(),e.TgZ(9,"form")(10,"ion-avatar",1),e.NdJ("click",function(){return t.uploadImage()}),e._UZ(11,"ion-img",2),e.TgZ(12,"div",3),e._UZ(13,"ion-icon",4),e.TgZ(14,"span"),e._uU(15,"Edit"),e.qZA()()(),e.TgZ(16,"ion-item")(17,"ion-textarea",5),e.NdJ("input",function(a){return t.authService.form.name=a.target.value}),e.qZA()(),e.TgZ(18,"ion-item")(19,"ion-textarea",5),e.NdJ("input",function(a){return t.authService.form.email=a.target.value}),e.qZA()(),e.TgZ(20,"ion-item")(21,"ion-textarea",5),e.NdJ("input",function(a){return t.authService.form.phone=a.target.value}),e.qZA()(),e.TgZ(22,"ion-item")(23,"ion-textarea",6),e.NdJ("input",function(a){return t.authService.form.status=a.target.value}),e.qZA()(),e.TgZ(24,"app-button",7),e.NdJ("clickEvent",function(a){return t.onClick(a)}),e.qZA()()()),2&o&&(e.xp6(11),e.Q6J("src",t.authService.form.profilePicture),e.xp6(6),e.Q6J("placeholder",t.authService.form.name)("id","name"),e.xp6(2),e.Q6J("placeholder",t.authService.form.email)("id","email"),e.xp6(2),e.Q6J("placeholder",t.authService.form.phone)("id","phone"),e.xp6(2),e.Q6J("placeholder",t.authService.form.status)("id","status"))},dependencies:[i.BJ,i.W2,i.Gu,i.gu,i.Xz,i.Ie,i.g2,i.wd,i.sr,i.j9,S.r],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0}h2[_ngcontent-%COMP%]{margin-top:4%;font-weight:700}h3[_ngcontent-%COMP%]{color:#939fab;font-weight:600}form[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{display:block;margin-top:2rem}.avatar[_ngcontent-%COMP%]{margin:20px auto;width:120px;height:120px}.edit[_ngcontent-%COMP%]{margin-top:-28px;margin-left:41px;font-size:14px;font-weight:600;z-index:-9}.edit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute}ion-item[_ngcontent-%COMP%]{margin-bottom:10px}textarea[_ngcontent-%COMP%]{padding:0}"]});const Z=[{path:"",component:u}];class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[g.Bz.forChild(Z),g.Bz]});var C=n(881);class c{}c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[m.ez,i.Pc,s,C.m]})}}]);
//# sourceMappingURL=9.20f93771273c2a25.js.map