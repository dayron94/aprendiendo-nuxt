(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{382:function(r,e,t){"use strict";t.r(e);var o=t(72),n={data:function(){return{form:{}}},methods:{registro:function(){var r=this;o.a.createUserWithEmailAndPassword(this.form.email,this.form.password).then(function(e){e.user.updateProfile({displayName:r.form.nombre}),r.$router.push({path:"/"})}).catch(function(r){alert("error"+r.message)})}}},l=t(19),component=Object(l.a)(n,function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("b-form",{on:{submit:function(e){return e.preventDefault(),r.registro(e)}}},[t("H3",[r._v("LOGIN")]),r._v(" "),t("b-form-group",{attrs:{label:"Nombre:","label-for":"input-2"}},[t("b-form-input",{attrs:{id:"nombre",type:"text",required:"",placeholder:"Nombre de usuario "},model:{value:r.form.nombre,callback:function(e){r.$set(r.form,"nombre",e)},expression:"form.nombre"}})],1),r._v(" "),t("b-form-group",{attrs:{label:"Correo:","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",type:"email",required:"",placeholder:"Correo"},model:{value:r.form.email,callback:function(e){r.$set(r.form,"email",e)},expression:"form.email"}})],1),r._v(" "),t("b-form-group",{attrs:{label:"Contraseña:","label-for":"input-2"}},[t("b-form-input",{attrs:{id:"password",type:"password",required:"",placeholder:"Contraseña"},model:{value:r.form.password,callback:function(e){r.$set(r.form,"password",e)},expression:"form.password"}})],1),r._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-12 offset-sm-5"},[t("b-button-toolbar",[t("b-button-group",{staticClass:"mx-2",attrs:{right:""}},[t("b-button",{attrs:{id:"guardar",type:"submit",variant:"primary"}},[r._v("Guardar")]),r._v(" "),t("b-button",{attrs:{variant:"danger"}},[r._v("Cancelar")])],1)],1)],1)])],1)},[],!1,null,null,null);e.default=component.exports}}]);