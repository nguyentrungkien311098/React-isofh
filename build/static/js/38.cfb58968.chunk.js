(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{247:function(e,t,a){"use strict";t.a={loaiSanPham:[{id:10,name:"\u0110\u1ed3 v\u1ea3i",label:"DO_VAI"},{id:20,name:"D\u1ee5ng c\u1ee5 y t\u1ebf",label:"DUNG_CU_Y_TE"}],listStatus:[{id:10,name:"Ch\u01b0a th\u1ef1c hi\u1ec7n",label:"CHUA_THUC_HIEN"},{id:20,name:"\u0110ang th\u1ef1c hi\u1ec7n",label:"DANG_THUC_HIEN"},{id:30,name:"Ho\xe0n th\xe0nh",label:"HOAN_THAN"}],listTreatmentResult:[{id:1,name:"\u0110\u1ee1, gi\u1ea3m",label:"DO_GIAM"},{id:2,name:"Kh\u1ecfi b\u1ec7nh",label:"KHOI_BENH"},{id:3,name:"N\u1eb7ng h\u01a1n",label:"NANG_HON"},{id:4,name:"Kh\xf4ng thay \u0111\u1ed5i",label:"KHONG_THAY_DOI"},{id:5,name:"Ti\xean l\u01b0\u1ee3ng t\u1eed vong xin v\u1ec1",label:"TIEN_LUONG_TU_VONG"},{id:6,name:"T\u1eed vong",label:"TU_VONG"}],listGender:[{id:2,name:"N\u1eef",label:"FEMALE"},{id:1,name:"Nam",label:"MALE"}],listTrangThai:[{id:10,name:"Ch\u01b0a x\u1eed l\xfd",label:"CHUA_XU_LY"},{id:20,name:"\u0110\xe3 thanh tr\xf9ng",label:"DA_THANH_TRUNG"},{id:30,name:"\u0110\xe3 xu\u1ea5t",label:"DA_XUAT"}],listTrangThaiDungCu:[{id:10,name:"Ch\u1edd duy\u1ec7t",label:"CHO_DUYET"},{id:20,name:"Ch\u1edd ti\u1ec7t khu\u1ea9n",label:"CHO_TIET_KHUAN"},{id:30,name:"\u0110\xe3 ti\u1ec7t khu\u1ea9n",label:"DA_TIET_KHUAN"},{id:40,name:"\u0110\xe3 xu\u1ea5t",label:"DA_XUAT"},{id:50,name:"Qu\xe1 h\u1ea1n",label:"QUA_HAN"}],listChuyenTrangThaiDungCu:[{id:20,name:"Ch\u1edd ti\u1ec7t khu\u1ea9n",label:"CHO_TIET_KHUAN"},{id:30,name:"\u0110\xe3 ti\u1ec7t khu\u1ea9n",label:"DA_TIET_KHUAN"},{id:40,name:"\u0110\xe3 xu\u1ea5t",label:"DA_XUAT"}],typeUsers:[{id:1,name:"Super Admin",label:"super_admin"},{id:2,name:"Admin Qu\u1ea3n L\xfd Nhi\u1ec5m Khu\u1ea9n",label:"admin_ql_nhiem_khuan"},{id:3,name:"User Qu\u1ea3n L\xfd Nhi\u1ec5m Khu\u1ea9n",label:"user_ql_nhiem_khuan"},{id:4,name:"Admin Qu\u1ea3n L\xfd M\xf4i Tr\u01b0\u1eddng",label:"admin_ql_moi_truong"},{id:5,name:"User Qu\u1ea3n L\xfd M\xf4i Tr\u01b0\u1eddng",label:"user_ql_moi_truong"},{id:6,name:"User kh\xe1c",label:"user_khac"}],giaiDoanSuCo:[{id:1,name:"Nguy c\u01a1",label:"nguy_co"},{id:2,name:"Ph\xe1t tri\u1ec3n",label:"phat_trien"},{id:3,name:"S\u1ef1 c\u1ed1",label:"su_co"}]}},404:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),i=a.n(n);a(405);function s(e){var t=e.title,a=e.value,n=e.width,s=e.table,r=e.style;return i.a.createElement("div",{className:"search-type search-type-disabled"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-"+n},i.a.createElement("span",{className:"title-search-input"},t)),i.a.createElement("div",{className:"col-md-"+(12-n),style:r},s?a:i.a.createElement("div",{className:"title-input-disabled"},a))))}},405:function(e,t,a){},439:function(e,t,a){"use strict";var n=a(44),i=a(6),s=a(8),r=a.n(s),o={getById:function(e){var t=r.a.api.sanitationProcesses+"/"+e;return i.a.requestApi("get",t,{})},search:function(e,t,a,n,s,o,c){var l=r.a.api.sanitationProcesses+"?sort=createdAt,desc";return l+="&page="+(0===e?0:e?e-1:0),l+="&size="+(t||10),a&&(l+="&name="+a),n&&(l+="&location="+n),s&&(l+="&fromDateStart="+s),o&&(l+="&fromDateFinish="+o),c&&(l+="&result="+c),i.a.requestApi("get",l,{})},delete:function(e){var t=r.a.api.sanitationProcesses+"/"+e;return i.a.requestApi("delete",t,{})},createOrEdit:function(e,t,a,n,s,o,c,l,u,h,m){if(e){var d=r.a.api.sanitationProcesses+"/"+e;return i.a.requestApi("put",d,{name:a,location:n,fromDate:s,toDate:o,result:c,status:l,executor:u,note:h,lines:m,active:t?1:0})}var g=r.a.api.sanitationProcesses;return i.a.requestApi("post",g,{name:a,location:n,fromDate:s,toDate:o,result:c,status:l,executor:u,note:h,lines:m,active:t?1:0})}},c=a(43),l=(a(20),a(191)),u=a.n(l),h=a(624).a.confirm;function m(e){return function(t){t({type:"SANITATION-PROCESSES-UPDATE-DATA",data:e})}}function d(e){return function(t,a){t(m({page:e}));var n=a().sanitationProcesses.size||10,i=a().sanitationProcesses.searchName,s=a().sanitationProcesses.searchLocation,r=a().sanitationProcesses.searchToDate,c=a().sanitationProcesses.searchFromDate,l=a().sanitationProcesses.searchResult;o.search(e,n,i,s,c,r,l).then(function(e){e&&0===e.code&&t(m({total:e.totalElements||n,data:e.data||[]}))})}}t.a={loadList:function(){return function(e,t){o.search(0,1e3,"","").then(function(t){switch(t.code){case 0:e(m({sanitationProcesses:t.data,total:t.totalElements}))}})}},createOrEdit:function(){return function(e,t){return new Promise(function(a,n){var i=t().sanitationProcesses.id,s=t().sanitationProcesses.name,r=t().sanitationProcesses.location,l=t().sanitationProcesses.fromDate,u=t().sanitationProcesses.toDate,h=t().sanitationProcesses.result,d=t().sanitationProcesses.status,g=t().sanitationProcesses.executor,f=t().sanitationProcesses.note,v=t().sanitationProcesses.lines;o.createOrEdit(i,!0,s,r,l,u,h,d,g,f,v).then(function(t){0==t.code?(e(m({id:"",name:"",location:"",fromDate:null,toDate:null,result:"",status:"",executor:"",note:"",lines:[],content:"",executorLines:"",actDate:"",statusLines:"",noteLines:"",active:!1,sanitationProcessTemplatesId:""})),i?c.a.show("C\u1eadp nh\u1eadt l\u1ecbch v\xe0 quy tr\xecnh v\u1ec7 sinh m\xf4i tr\u01b0\u1eddng B\u1ec7nh vi\u1ec7n th\xe0nh c\xf4ng","success"):c.a.show("Th\xeam l\u1ecbch v\xe0 quy tr\xecnh v\u1ec7 sinh m\xf4i tr\u01b0\u1eddng B\u1ec7nh vi\u1ec7n th\xe0nh c\xf4ng","success"),a(t.data)):(i?c.a.show(t.message||"S\u1eeda l\u1ecbch v\xe0 quy tr\xecnh v\u1ec7 sinh m\xf4i tr\u01b0\u1eddng B\u1ec7nh vi\u1ec7n kh\xf4ng th\xe0nh c\xf4ng","danger"):c.a.show(t.message||"Th\xeam l\u1ecbch v\xe0 quy tr\xecnh v\u1ec7 sinh m\xf4i tr\u01b0\u1eddng B\u1ec7nh vi\u1ec7n kh\xf4ng th\xe0nh c\xf4ng","danger"),n())}).catch(function(e){c.a.show("Th\xeam l\u1ecbch v\xe0 quy tr\xecnh v\u1ec7 sinh m\xf4i tr\u01b0\u1eddng B\u1ec7nh vi\u1ec7n kh\xf4ng th\xe0nh c\xf4ng","danger"),n()})})}},updateData:m,gotoPage:d,onSearch:function(e,t){return function(a,n){var i="name"===t?e:n().sanitationProcesses.searchName,s="location"===t?e:n().sanitationProcesses.searchLocation,r="searchFromDate"===t?e&&u()(e).format("YYYY-MM-DD"):n().sanitationProcesses.searchFromDate&&u()(n().sanitationProcesses.searchFromDate).format("YYYY-MM-DD"),o="searchToDate"===t?e&&u()(e).format("YYYY-MM-DD"):n().sanitationProcesses.searchToDate&&u()(n().sanitationProcesses.searchToDate).format("YYYY-MM-DD"),c="result"===t?e:n().sanitationProcesses.searchResult;void 0===i&&void 0===s&&void 0===o&&void 0===r&&void 0===c||a(m({searchName:i,searchLocation:s,searchToDate:o,searchFromDate:r,searchResult:c})),a(d(0))}},onSizeChange:function(e){return function(t,a){t(m({size:e})),t(d(0))}},onDeleteItem:function(e){return function(t,a){return new Promise(function(i,s){h({title:"X\xe1c nh\u1eadn",content:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a l\u1ecbch v\xe0 quy tr\xecnh v\u1ec7 sinh m\xf4i tr\u01b0\u1eddng B\u1ec7nh vi\u1ec7n ".concat(e.name,"?"),okText:"X\xf3a",okType:"danger",cancelText:"H\u1ee7y",onOk:function(){o.delete(e.id).then(function(r){if(0==r.code){c.a.show("X\xf3a l\u1ecbch v\xe0 quy tr\xecnh v\u1ec7 sinh m\xf4i tr\u01b0\u1eddng B\u1ec7nh vi\u1ec7n th\xe0nh c\xf4ng","success");var o=a().sanitationProcesses.data||[],l=o.findIndex(function(t){return t.id==e.id});o.splice(l,1),t(m({data:Object(n.a)(o)})),t(d(0)),i()}else c.a.show("X\xf3a l\u1ecbch v\xe0 quy tr\xecnh v\u1ec7 sinh m\xf4i tr\u01b0\u1eddng B\u1ec7nh vi\u1ec7n kh\xf4ng th\xe0nh c\xf4ng","danger"),s()}).catch(function(e){c.a.show("X\xf3a l\u1ecbch v\xe0 quy tr\xecnh v\u1ec7 sinh m\xf4i tr\u01b0\u1eddng B\u1ec7nh vi\u1ec7n kh\xf4ng th\xe0nh c\xf4ng","danger"),s()})},onCancel:function(){s()}})})}},loadDetail:function(e){return function(t,a){return new Promise(function(a,n){o.getById(e).then(function(e){if(e&&0==e.code&&e.data)return t(m({id:e.data.id,name:e.data.name,location:e.data.location,fromDate:e.data.fromDate,toDate:e.data.toDate,result:e.data.result,status:e.data.status,executor:e.data.executor,note:e.data.note,lines:e.data.lines})),void a(e.data);c.a.show("Kh\xf4ng t\xecm th\u1ea5y k\u1ebft qu\u1ea3 ph\xf9 h\u1ee3p","danger"),n(e)}).catch(function(e){c.a.show(e&&e.message?e.message:"X\u1ea3y ra l\u1ed7i, vui l\xf2ng th\u1eed l\u1ea1i sau","danger"),n(e)})})}}}},471:function(e,t,a){},614:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(298),r=a(14),o=(a(73),a(404)),c=a(439),l=a(3),u=(a(471),a(191)),h=a.n(u),m=a(247);t.default=Object(r.b)(function(e){return{auth:e.auth.auth,name:e.sanitationProcesses.name,location:e.sanitationProcesses.location,id:e.sanitationProcesses.id,toDate:e.sanitationProcesses.toDate||null,fromDate:e.sanitationProcesses.fromDate||null,status:e.sanitationProcesses.status,result:e.sanitationProcesses.result,executor:e.sanitationProcesses.executor,lines:e.sanitationProcesses.lines||[]}},{loadDetail:c.a.loadDetail})(function(e){var t=e.match.params.id;Object(n.useEffect)(function(){t?e.loadDetail(t).then(function(e){}).catch(function(t){e.history.replace("/sanitation-processes")}):e.updateData({id:null,name:"",value:"",specimenTypeId:"",lines:[]})},[]);var a=function(e){var t=m.a.listStatus.filter(function(t){return parseInt(t.id)===Number(e)});return t.length>0?t[0]:{}};return i.a.createElement(l.a,{className:"mgr-sanitation-processes"},i.a.createElement(l.f,{title:"Chi ti\u1ebft L\u1ecbch v\u1ec7 sinh m\xf4i tr\u01b0\u1eddng",id:"mgr-sanitation-processes",allowClose:!1,allowCollapse:!1},i.a.createElement("div",{className:"detail-body"},i.a.createElement("div",null,i.a.createElement(o.a,{width:2,title:"Ti\xeau \u0111\u1ec1: ",value:e.name}),i.a.createElement(o.a,{width:2,title:"\u0110\u1ecba \u0111i\u1ec3m: ",value:e.location}),i.a.createElement(o.a,{width:2,title:"Ng\u01b0\u1eddi th\u1ef1c hi\u1ec7n: ",value:e.executor}),i.a.createElement(o.a,{width:2,title:"Th\u1eddi gian b\u1eaft \u0111\u1ea7u: ",value:e.fromDate?h()(e.fromDate).format("DD-MM-YYYY"):null}),i.a.createElement(o.a,{width:2,title:"Th\u1eddi gian k\u1ebft th\xfac: ",value:e.toDate?h()(e.toDate).format("DD-MM-YYYY"):null}),i.a.createElement(o.a,{width:2,title:"Tr\u1ea1ng th\xe1i: ",value:a(e.status)?a(e.status).name:null}),i.a.createElement(o.a,{width:2,title:"K\u1ebft qu\u1ea3 \u0111\u1ea1t \u0111\u01b0\u1ee3c: ",value:e.result}),i.a.createElement(o.a,{width:2,title:"Quy tr\xecnh: ",value:i.a.createElement("table",{className:"table-sanitation-processes",style:{width:"100%"}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("td",{style:{width:"20%"}},"N\u1ed9i dung"),i.a.createElement("td",{style:{width:"20%"}},"Ng\u01b0\u1eddi th\u1ef1c hi\u1ec7n c\u1ee5 th\u1ec3"),i.a.createElement("td",{style:{width:"20%"}},"Ng\xe0y th\u1ef1c hi\u1ec7n"),i.a.createElement("td",{style:{width:"20%"}},"Tr\u1ea1ng th\xe1i"),i.a.createElement("td",{style:{width:"20%"}},"Chi ch\xfa"))),i.a.createElement("tbody",null,e.lines.map(function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,e.content),i.a.createElement("td",null,e.executor),i.a.createElement("td",null,e.actDate&&h()(e.actDate).format("DD/MM/YYYY")),i.a.createElement("td",null,a(e.status)&&a(e.status).name),i.a.createElement("td",null,e.note))})))}))),i.a.createElement("div",{style:{width:"100%",borderTop:"1px solid #e9e9e9",padding:"16px 16px 0px",background:"#fff",textAlign:"right"}},i.a.createElement(s.a,{onClick:function(){e.history.push("/sanitation-processes")},type:"primary",style:{marginRight:8}},"Quay l\u1ea1i"))))})}}]);
//# sourceMappingURL=38.cfb58968.chunk.js.map