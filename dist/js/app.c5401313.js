(function(t){function o(o){for(var r,s,i=o[0],u=o[1],l=o[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(o);while(f.length)f.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,o=0;o<a.length;o++){for(var e=a[o],r=!0,i=1;i<e.length;i++){var u=e[i];0!==n[u]&&(r=!1)}r&&(a.splice(o--,1),t=s(s.s=e[0]))}return t}var r={},n={app:0},a=[];function s(o){if(r[o])return r[o].exports;var e=r[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,o,e){s.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,o){if(1&o&&(t=s(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)s.d(e,r,function(o){return t[o]}.bind(null,r));return e},s.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(o,"a",o),o},s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=o,i=i.slice();for(var l=0;l<i.length;l++)o(i[l]);var c=u;a.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var r=e("85ec"),n=e.n(r);n.a},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("f9e3");var r=e("5f5b"),n=e("2b0e"),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],i={name:"App",components:{}},u=i,l=(e("034f"),e("2877")),c=Object(l["a"])(u,a,s,!1,null,null,null),d=c.exports,f=e("8c4f"),p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-10"},[e("h1",[t._v("Books")]),e("hr"),e("br"),e("br"),e("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"}},[t._v("Add Book")]),e("br"),e("br"),e("table",{staticClass:"table table-hover"},[t._m(0),e("tbody",t._l(t.books,(function(o,r){return e("tr",{key:r},[e("td",[t._v(t._s(o.title))]),e("td",[t._v(t._s(o.author))]),e("td",[o.read?e("span",[t._v("Yes")]):e("span",[t._v("No")])]),t._m(1,!0)])})),0)])])]),e("b-modal",{ref:"addBookModal",attrs:{id:"book-modal",title:"Add a new book","hide-footer":""}},[e("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[e("b-form-group",{attrs:{id:"form-title-group",label:"Title:","label-for":"form-title-input"}},[e("b-form-input",{attrs:{id:"form-title-input",type:"text",required:"",placeholder:"Enter title"},model:{value:t.addBookForm.title,callback:function(o){t.$set(t.addBookForm,"title",o)},expression:"addBookForm.title"}})],1),e("b-form-group",{attrs:{id:"form-author-group",label:"Author:","label-for":"form-author-input"}},[e("b-form-input",{attrs:{id:"form-author-input",type:"text",required:"",placeholder:"Enter author"},model:{value:t.addBookForm.author,callback:function(o){t.$set(t.addBookForm,"author",o)},expression:"addBookForm.author"}})],1),e("b-form-group",{attrs:{id:"form-read-group"}},[e("b-form-checkbox-group",{attrs:{id:"form-checks"},model:{value:t.addBookForm.read,callback:function(o){t.$set(t.addBookForm,"read",o)},expression:"addBookForm.read"}},[e("b-form-checkbox",{attrs:{value:"true"}},[t._v("Read?")])],1)],1),e("b-button-group",[e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),e("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)],1)],1)},b=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Title")]),e("th",{attrs:{scope:"col"}},[t._v("Author")]),e("th",{attrs:{scope:"col"}},[t._v("Read?")]),e("th")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("td",[e("div",{staticClass:"btn-group",attrs:{role:"group"}},[e("button",{staticClass:"btn btn-warning btn-sm",attrs:{type:"button"}},[t._v("Update")]),e("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"}},[t._v("Delete")])])])}],h=e("bc3a"),m=e.n(h),v={data:function(){return{books:[],addBookForm:{title:"",author:"",read:[]}}},methods:{getBooks:function(){var t=this,o="http://localhost:5000/books";m.a.get(o).then((function(o){t.books=o.data.books})).catch((function(t){console.error(t)}))},addBook:function(t){var o=this,e="http://localhost:5000/books";m.a.post(e,t).then((function(){o.getBooks()})).catch((function(t){console.log(t),o.getBooks()}))},initForm:function(){this.addBookForm.title="",this.addBookForm.author="",this.addBookForm.read=[]},onSubmit:function(t){t.preventDefault(),this.$refs.addBookModal.hide();var o=!1;this.addBookForm.read[0]&&(o=!0);var e={title:this.addBookForm.title,author:this.addBookForm.author,read:o};this.addBook(e),this.initForm()},onReset:function(t){t.preventDefault(),this.$refs.addBookModal.hide(),this.initForm()}},created:function(){this.getBooks()}},k=v,g=Object(l["a"])(k,p,b,!1,null,null,null),_=g.exports,y=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(t._s(t.msg))])])},B=[],F={name:"Ping",data:function(){return{msg:"tes"}},methods:{getMessage:function(){var t=this,o="http://localhost:5000/ping";m.a.get(o).then((function(o){t.msg=o.data})).catch((function(t){console.error(t)}))}},created:function(){this.getMessage()}},w=F,x=Object(l["a"])(w,y,B,!1,null,null,null),O=x.exports;n["default"].use(f["a"]);var j=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Books",component:_},{path:"/ping",name:"Ping",component:O}]});n["default"].use(r["a"]),n["default"].config.productionTip=!1,new n["default"]({router:j,render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,o,e){}});
//# sourceMappingURL=app.c5401313.js.map