(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7964a60f"],{"0d94":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"100%"}},[a("v-card",{staticClass:"mb-2"},[a("v-container",[a("v-row",[a("v-col",[a("v-row",[a("v-col",[a("v-icon",{attrs:{color:"black",large:""}},[e._v("mdi-account-details-outline")])],1)],1),a("v-row",[a("v-col",[a("h4",{staticClass:"text-uppercase text-h5 font-weight-bold"},[e._v("Moji podatci")]),a("p",{staticClass:"ma-0"},[e._v("Ovdje možete pregledati i promijeniti Vaše podatke.")])])],1)],1)],1)],1)],1),a("v-card",[a("v-container",[a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"Ime"},model:{value:e.user.ime,callback:function(t){e.$set(e.user,"ime",t)},expression:"user.ime"}})],1)],1),a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"Prezime"},model:{value:e.user.prezime,callback:function(t){e.$set(e.user,"prezime",t)},expression:"user.prezime"}})],1)],1),a("v-row",[a("v-col",[a("v-text-field",{attrs:{disabled:"",label:"E-mail adresa"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1),a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"Broj mobitela"},model:{value:e.user.mobitel,callback:function(t){e.$set(e.user,"mobitel",t)},expression:"user.mobitel"}})],1)],1),a("div",{staticClass:"actions py-7"},[a("v-btn",{staticClass:"primary",on:{click:e.updateUserDetails}},[e._v("Spremi promjene")])],1)],1)],1)],1)},i=[],r=a("5530"),o=a("2f62"),l={name:"MyDetails",data:function(){return{}},created:function(){this.fetchUserDetails()},methods:{fetchUserDetails:function(){this.$store.dispatch("userAccountDetails/fetchUserDetails",null,{root:!0})},updateUserDetails:function(){this.$store.dispatch("userAccountDetails/updateUserDetails",this.user,{root:!0}).catch((function(e){console.log(e)}))}},computed:Object(r["a"])({},Object(o["c"])("userAccountDetails",["isLoading","user"]))},c=l,n=a("2877"),d=a("6544"),u=a.n(d),v=a("8336"),h=a("b0af"),m=a("62ad"),p=a("a523"),f=a("132d"),b=a("0fd9"),g=a("8654"),k=Object(n["a"])(c,s,i,!1,null,"1502910c",null);t["default"]=k.exports;u()(k,{VBtn:v["a"],VCard:h["a"],VCol:m["a"],VContainer:p["a"],VIcon:f["a"],VRow:b["a"],VTextField:g["a"]})},"615b":function(e,t,a){},b0af:function(e,t,a){"use strict";a("0481"),a("4069"),a("a9e3");var s=a("5530"),i=(a("615b"),a("10d2")),r=a("297c"),o=a("1c87"),l=a("58df");t["a"]=Object(l["a"])(r["a"],o["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var e=Object(s["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=r["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),a=t.tag,s=t.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),e(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-7964a60f.5a11b120.js.map