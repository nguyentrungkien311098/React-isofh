(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{247:function(n,a,e){"use strict";a.a={loaiSanPham:[{id:10,name:"\u0110\u1ed3 v\u1ea3i",label:"DO_VAI"},{id:20,name:"D\u1ee5ng c\u1ee5 y t\u1ebf",label:"DUNG_CU_Y_TE"}],listStatus:[{id:10,name:"Ch\u01b0a th\u1ef1c hi\u1ec7n",label:"CHUA_THUC_HIEN"},{id:20,name:"\u0110ang th\u1ef1c hi\u1ec7n",label:"DANG_THUC_HIEN"},{id:30,name:"Ho\xe0n th\xe0nh",label:"HOAN_THAN"}],listTreatmentResult:[{id:1,name:"\u0110\u1ee1, gi\u1ea3m",label:"DO_GIAM"},{id:2,name:"Kh\u1ecfi b\u1ec7nh",label:"KHOI_BENH"},{id:3,name:"N\u1eb7ng h\u01a1n",label:"NANG_HON"},{id:4,name:"Kh\xf4ng thay \u0111\u1ed5i",label:"KHONG_THAY_DOI"},{id:5,name:"Ti\xean l\u01b0\u1ee3ng t\u1eed vong xin v\u1ec1",label:"TIEN_LUONG_TU_VONG"},{id:6,name:"T\u1eed vong",label:"TU_VONG"}],listGender:[{id:2,name:"N\u1eef",label:"FEMALE"},{id:1,name:"Nam",label:"MALE"}],listTrangThai:[{id:10,name:"Ch\u01b0a x\u1eed l\xfd",label:"CHUA_XU_LY"},{id:20,name:"\u0110\xe3 thanh tr\xf9ng",label:"DA_THANH_TRUNG"},{id:30,name:"\u0110\xe3 xu\u1ea5t",label:"DA_XUAT"}],listTrangThaiDungCu:[{id:10,name:"Ch\u1edd duy\u1ec7t",label:"CHO_DUYET"},{id:20,name:"Ch\u1edd ti\u1ec7t khu\u1ea9n",label:"CHO_TIET_KHUAN"},{id:30,name:"\u0110\xe3 ti\u1ec7t khu\u1ea9n",label:"DA_TIET_KHUAN"},{id:40,name:"\u0110\xe3 xu\u1ea5t",label:"DA_XUAT"},{id:50,name:"Qu\xe1 h\u1ea1n",label:"QUA_HAN"}],listChuyenTrangThaiDungCu:[{id:20,name:"Ch\u1edd ti\u1ec7t khu\u1ea9n",label:"CHO_TIET_KHUAN"},{id:30,name:"\u0110\xe3 ti\u1ec7t khu\u1ea9n",label:"DA_TIET_KHUAN"},{id:40,name:"\u0110\xe3 xu\u1ea5t",label:"DA_XUAT"}],typeUsers:[{id:1,name:"Super Admin",label:"super_admin"},{id:2,name:"Admin Qu\u1ea3n L\xfd Nhi\u1ec5m Khu\u1ea9n",label:"admin_ql_nhiem_khuan"},{id:3,name:"User Qu\u1ea3n L\xfd Nhi\u1ec5m Khu\u1ea9n",label:"user_ql_nhiem_khuan"},{id:4,name:"Admin Qu\u1ea3n L\xfd M\xf4i Tr\u01b0\u1eddng",label:"admin_ql_moi_truong"},{id:5,name:"User Qu\u1ea3n L\xfd M\xf4i Tr\u01b0\u1eddng",label:"user_ql_moi_truong"},{id:6,name:"User kh\xe1c",label:"user_khac"}],giaiDoanSuCo:[{id:1,name:"Nguy c\u01a1",label:"nguy_co"},{id:2,name:"Ph\xe1t tri\u1ec3n",label:"phat_trien"},{id:3,name:"S\u1ef1 c\u1ed1",label:"su_co"}]}},413:function(n,a,e){"use strict";var t=e(44),u=e(6),i=e(8),o=e.n(i),c={getById:function(n){var a=o.a.api.dmDungCu+"/"+n;return u.a.requestApi("get",a,{})},search:function(n,a,e,t,i){var c=o.a.api.dmDungCu+"?sort=createdAt,desc";return c+="&page="+(0===n?0:n?n-1:0),c+="&size="+(a||10),e&&(c+="&value="+e),t&&(c+="&name="+t),i&&(c+="&loai="+i),u.a.requestApi("get",c,{})},delete:function(n){var a=o.a.api.dmDungCu+"/"+n;return u.a.requestApi("delete",a,{})},createOrEdit:function(n,a,e,t){if(n){var i=o.a.api.dmDungCu+"/"+n;return u.a.requestApi("put",i,{value:a,name:e,loai:t})}var c=o.a.api.dmDungCu;return u.a.requestApi("post",c,{value:a,name:e,loai:t})}},r=e(43),h=(e(20),e(624).a.confirm);function l(n){return function(a){a({type:"DM-DUNG-CU-UPDATE-DATA",data:n})}}function d(n){return function(a,e){a(l({page:n}));var t=e().dmDungcu.size||10,u=e().dmDungcu.searchValue,i=e().dmDungcu.searchName,o=e().dmDungcu.searchLoai;c.search(n,t,u,i,o).then(function(n){n&&0===n.code&&a(l({total:n.totalElements||t,data:n.data||[]}))})}}a.a={createOrEdit:function(){return function(n,a){return new Promise(function(e,t){var u=a().dmDungcu.id,i=a().dmDungcu.name,o=a().dmDungcu.value,h=a().dmDungcu.loai;c.createOrEdit(u,o,i,h).then(function(a){0==a.code?(n(l({isOpen:!1,id:"",value:"",name:"",loai:""})),u?r.a.show("C\u1eadp nh\u1eadt d\u1eef li\u1ec7u th\xe0nh c\xf4ng!","success"):r.a.show("Th\xeam m\u1edbi d\u1eef li\u1ec7u th\xe0nh c\xf4ng!","success"),n(d(0)),e(a.data)):(u?r.a.show(a.message||"C\u1eadp nh\u1eadt d\u1eef li\u1ec7u kh\xf4ng th\xe0nh c\xf4ng!","danger"):r.a.show(a.message||"Th\xeam m\u1edbi d\u1eef li\u1ec7u kh\xf4ng th\xe0nh c\xf4ng!","danger"),t())}).catch(function(n){r.a.show("Th\xeam m\u1edbi d\u1eef li\u1ec7u kh\xf4ng th\xe0nh c\xf4ng!","danger"),t()})})}},updateData:l,gotoPage:d,onSearch:function(n,a){return function(e,t){var u="value"===a?n:t().dmDungcu.searchValue,i="name"===a?n:t().dmDungcu.searchName,o="loai"===a?n:t().dmDungcu.searchLoai;void 0===u&&void 0===i&&void 0===o||e(l({searchValue:u,searchName:i,searchLoai:o})),e(d(0))}},onSizeChange:function(n){return function(a,e){a(l({size:n})),a(d(0))}},onDeleteItem:function(n){return function(a,e){return new Promise(function(u,i){h({title:"X\xe1c nh\u1eadn",content:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a ".concat(n.name,"?"),okText:"X\xf3a",okType:"danger",cancelText:"H\u1ee7y",onOk:function(){c.delete(n.id).then(function(n){if(0==n.code){r.a.show("X\xf3a d\u1eef li\u1ec7u th\xe0nh c\xf4ng!","success");var o=e().dmDungcu.data||[];a(l({data:Object(t.a)(o)})),a(d(0)),u()}else r.a.show("X\xf3a d\u1eef li\u1ec7u kh\xf4ng th\xe0nh c\xf4ng","danger"),i()}).catch(function(n){r.a.show("X\xf3a d\u1eef li\u1ec7u kh\xf4ng th\xe0nh c\xf4ng","danger"),i()})},onCancel:function(){i()}})})}},loadList:function(n,a,e){return function(t,u){c.search(0,1e3,n,a,e).then(function(n){switch(n.code){case 0:t(l({dmDungCu:n.data,total:n.totalElements}))}})}},loadListMedical:function(){return function(n,a){c.search(0,1e3,"","",20).then(function(a){switch(a.code){case 0:n(l({listMedical:a.data,total:a.totalElements}))}})}}}},420:function(n,a,e){"use strict";var t=e(44),u=e(6),i=e(8),o=e.n(i),c={getById:function(n){var a=o.a.api.quanLyDungCu+"/"+n;return u.a.requestApi("get",a,{})},search:function(n,a,e,t,i,c,r,h,l,d){var s=o.a.api.quanLyDungCu+"?sort=createdAt,desc";return s+="&page="+(0===n?0:n?n-1:0),s+="&size="+(a||10),e&&(s+="&value="+e),t&&(s+="&name="+t),i&&(s+="&khoaBanGiao="+i),c&&(s+="&trangThai="+c),r&&(s+="&thoiGianTietKhuanTu="+r),h&&(s+="&thoiGianTietKhuanDen="+h),l&&(s+="&thoiGianBanGiaoTu="+l),d&&(s+="&thoiGianBanGiaoDen="+d),u.a.requestApi("get",s,{})},delete:function(n){var a=o.a.api.quanLyDungCu+"/"+n;return u.a.requestApi("delete",a,{})},createOrEdit:function(n,a,e,t,i,c,r,h,l){if(n){var d=o.a.api.quanLyDungCu+"/"+n;return u.a.requestApi("put",d,{name:e,maSoHopDungCu:a,ghiChu:t,trangThai:i,thoiGianTietKhuan:c,thoiGianBanGiao:r,khoaBanGiaoId:h,chiTiet:l})}var s=o.a.api.quanLyDungCu;return u.a.requestApi("post",s,{maSoHopDungCu:a,name:e,ghiChu:t,trangThai:i,thoiGianTietKhuan:c,thoiGianBanGiao:r,khoaBanGiaoId:h,chiTiet:l})},changeStatus:function(n,a,e,t,i,c,r,h,l){var d=o.a.api.quanLyDungCu+"/doi-trang-thai/"+n;return u.a.requestApi("put",d,{maSoHopDungCu:a,name:e,ghiChu:t,trangThai:i,thoiGianTietKhuan:c,thoiGianBanGiao:r,khoaBanGiaoId:h,chiTiet:l})},duyetDungCu:function(n,a,e,t,i,c,r,h,l){var d=o.a.api.quanLyDungCu+"/duyet-dung-cu/"+n;return u.a.requestApi("put",d,{maSoHopDungCu:a,name:e,ghiChu:t,trangThai:i,thoiGianTietKhuan:c,thoiGianBanGiao:r,khoaBanGiaoId:h,chiTiet:l})}},r=e(43),h=(e(20),e(624).a.confirm);function l(n){return function(a){a({type:"QUAN-LY-DUNG-CU-UPDATE-DATA",data:n})}}function d(n){return function(a,e){a(l({page:n}));var t=e().quanLyDungCu.size||10,u=e().quanLyDungCu.searchValue,i=e().quanLyDungCu.searchName,o=e().quanLyDungCu.searchFaculty,r=e().quanLyDungCu.searchStatus,h=e().quanLyDungCu.searchFromPerform,d=e().quanLyDungCu.searchToPerform,s=e().quanLyDungCu.searchFromHandover,g=e().quanLyDungCu.searchToHandover;c.search(n,t,u,i,o,r,h,d,s,g).then(function(n){n&&0===n.code&&a(l({total:n.totalElements||t,data:n.data||[]}))})}}a.a={loadList:function(){return function(n,a){c.search(0,1e3,"","").then(function(a){switch(a.code){case 0:n(l({quanLyDungCu:a.data,total:a.totalElements}))}})}},createOrEdit:function(){return function(n,a){return new Promise(function(e,t){var u=a().quanLyDungCu.id,i=a().quanLyDungCu.maSoHopDungCu,o=a().quanLyDungCu.name,h=a().quanLyDungCu.ghiChu,s=a().quanLyDungCu.trangThai||10,g=a().quanLyDungCu.thoiGianTietKhuan,m=a().quanLyDungCu.thoiGianBanGiao,D=a().quanLyDungCu.khoaBanGiaoId,C=a().quanLyDungCu.chiTiet;C.length>0?c.createOrEdit(u,i,o,h,s,g,m,D,C).then(function(a){0==a.code?(n(l({id:""})),u?r.a.show("C\u1eadp nh\u1eadt d\u1eef li\u1ec7u th\xe0nh c\xf4ng","success"):r.a.show("Th\xeam d\u1eef li\u1ec7u th\xe0nh c\xf4ng","success"),n(d(0)),e(a.data)):(u?r.a.show(a.message||"S\u1eeda d\u1eef li\u1ec7u kh\xf4ng th\xe0nh c\xf4ng","danger"):r.a.show(a.message||"Th\xeam d\u1eef li\u1ec7u kh\xf4ng th\xe0nh c\xf4ng","danger"),t())}).catch(function(n){r.a.show("Th\xeam d\u1eef li\u1ec7u kh\xf4ng th\xe0nh c\xf4ng","danger"),t()}):r.a.show("Ph\u1ea3i c\xf3 \xedt nh\u1ea5t m\u1ed9t d\u1ee5ng c\u1ee5","danger")})}},updateData:l,gotoPage:d,onSearch:function(n,a){return function(e,t){var u="searchValue"===a?n:t().quanLyDungCu.searchValue,i="searchName"===a?n:t().quanLyDungCu.searchName,o="searchFaculty"===a?n:t().quanLyDungCu.searchFaculty,c="searchStatus"===a?n:t().quanLyDungCu.searchStatus,r="searchFromPerform"===a?n&&new Date(n).format("YYYY-MM-dd"):t().quanLyDungCu.searchFromPerform&&new Date(t().quanLyDungCu.searchFromPerform).format("YYYY-MM-dd"),h="searchToPerform"===a?n&&new Date(n).format("YYYY-MM-dd"):t().quanLyDungCu.searchToPerform&&new Date(t().quanLyDungCu.searchToPerform).format("YYYY-MM-dd"),s="searchFromHandover"===a?n&&new Date(n).format("YYYY-MM-dd"):t().quanLyDungCu.searchFromHandover&&new Date(t().quanLyDungCu.searchFromPerform).format("YYYY-MM-dd"),g="searchToHandover"===a?n&&new Date(n).format("YYYY-MM-dd"):t().quanLyDungCu.searchToHandover&&new Date(t().quanLyDungCu.searchToHandover).format("YYYY-MM-dd");void 0===u&&void 0===i&&void 0===o&&void 0===c&&void 0===r&&void 0===h&&void 0===s&&void 0===g||e(l({searchValue:u,searchName:i,searchFaculty:o,searchStatus:c,searchFromPerform:r,searchToPerform:h,searchFromHandover:s,searchToHandover:g})),e(d(0))}},onSizeChange:function(n){return function(a,e){a(l({size:n})),a(d(0))}},onDeleteItem:function(n){return function(a,e){return new Promise(function(u,i){h({title:"X\xe1c nh\u1eadn",content:"B\u1ea1n c\xf3 mu\u1ed1n xo\xe1 ".concat(n.id,"?"),okText:"X\xf3a",okType:"danger",cancelText:"H\u1ee7y",onOk:function(){c.delete(n.id).then(function(o){if(0==o.code){r.a.show("X\xf3a d\u1eef li\u1ec7u th\xe0nh c\xf4ng","success");var c=e().quanLyDungCu.data||[],h=c.findIndex(function(a){return a.id==n.id});c.splice(h,1),a(l({data:Object(t.a)(c)})),a(d(0)),u()}else r.a.show("X\xf3a d\u1eef li\u1ec7u kh\xf4ng th\xe0nh c\xf4ng","danger"),i()}).catch(function(n){r.a.show("X\xf3a d\u1eef li\u1ec7u kh\xf4ng th\xe0nh c\xf4ng","danger"),i()})},onCancel:function(){i()}})})}},loadDetail:function(n){return function(a,e){return new Promise(function(e,t){c.getById(n).then(function(n){if(n&&0==n.code&&n.data)return a(l({id:n.data.id,maSoHopDungCu:n.data.maSoHopDungCu,name:n.data.name,trangThai:n.data.trangThai,ghiChu:n.data.ghiChu,thoiGianTietKhuan:n.data.thoiGianTietKhuan,khoaBanGiao:n.data.khoaBanGiao,khoaBanGiaoId:n.data.khoaBanGiaoId,thoiGianBanGiao:n.data.thoiGianBanGiao,chiTiet:n.data.chiTiet&&n.data.chiTiet.length?n.data.chiTiet.map(function(n){return{ghiChu:n.ghiChu,dmDungCuId:n.dmDungCuId,soLuong:n.soLuong}}):[]})),void e(n.data);r.a.show("Kh\xf4ng t\xecm th\u1ea5y k\u1ebft qu\u1ea3 ph\xf9 h\u1ee3p","danger"),t(n)}).catch(function(n){r.a.show(n&&n.message?n.message:"X\u1ea3y ra l\u1ed7i, vui l\xf2ng th\u1eed l\u1ea1i sau","danger"),t(n)})})}},changeStatus:function(){return function(n,a){return new Promise(function(e,t){var u=a().quanLyDungCu.id,i=a().quanLyDungCu.maSoHopDungCu,o=a().quanLyDungCu.name,h=a().quanLyDungCu.ghiChu,s=a().quanLyDungCu.trangThai,g=a().quanLyDungCu.thoiGianTietKhuan,m=a().quanLyDungCu.thoiGianBanGiao,D=a().quanLyDungCu.khoaBanGiaoId,C=a().quanLyDungCu.chiTiet;c.changeStatus(u,i,o,h,s,g,m,D,C).then(function(a){0==a.code?(n(l({id:""})),r.a.show("Chuy\u1ec3n tr\u1ea1ng th\xe1i th\xe0nh c\xf4ng","success"),n(d(0)),e(a.data)):(r.a.show(a.message||"C\u1eadp nh\u1eadt tr\u1ea1ng th\xe1i kh\xf4ng th\xe0nh c\xf4ng","danger"),t())}).catch(function(n){r.a.show("C\u1eadp nh\u1eadt tr\u1ea1ng th\xe1i kh\xf4ng th\xe0nh c\xf4ng","danger"),t()})})}},duyetDungCu:function(){return function(n,a){return new Promise(function(e,t){var u=a().quanLyDungCu.id,i=a().quanLyDungCu.maSoHopDungCu,o=a().quanLyDungCu.name,h=a().quanLyDungCu.ghiChu,s=a().quanLyDungCu.thoiGianTietKhuan,g=a().quanLyDungCu.thoiGianBanGiao,m=a().quanLyDungCu.khoaBanGiaoId,D=a().quanLyDungCu.chiTiet;c.duyetDungCu(u,i,o,h,20,s,g,m,D).then(function(a){0==a.code?(n(l({id:""})),r.a.show("Duy\u1ec7t d\u1ee5ng c\u1ee5 th\xe0nh c\xf4ng","success"),n(d(0)),e(a.data)):(r.a.show(a.message||"Duy\u1ec7t d\u1ee5ng c\u1ee5 kh\xf4ng th\xe0nh c\xf4ng","danger"),t())}).catch(function(n){r.a.show("Duy\u1ec7t d\u1ee5ng c\u1ee5 kh\xf4ng th\xe0nh c\xf4ng","danger"),t()})})}}}},472:function(n,a,e){},493:function(n,a,e){"use strict";e.r(a);var t=e(0),u=e.n(t),i=e(309),o=e(396),c=e(14),r=e(420),h=e(191),l=e.n(h);e(413),e(247),e(472),i.a.Option,o.a.TextArea;a.default=Object(c.b)(function(n){return{maSoHopDungCu:n.quanLyDungCu.maSoHopDungCu,id:n.quanLyDungCu.id,chiTiet:n.quanLyDungCu.chiTiet||[],khoaBanGiao:n.quanLyDungCu.khoaBanGiao,ghiChu:n.quanLyDungCu.ghiChu,thoiGianTietKhuan:n.quanLyDungCu.thoiGianTietKhuan&&l()(n.quanLyDungCu.thoiGianTietKhuan).format("HH:mm:ss DD/MM/YYYY")||null,thoiGianBanGiao:n.quanLyDungCu.thoiGianBanGiao&&l()(n.quanLyDungCu.thoiGianBanGiao).format("DD/MM/YYYY")||null}},{loadDetail:r.a.loadDetail})(function(n){return Object(t.useEffect)(function(){n.loadDetail(n.id),setTimeout(function(){window.print()},500)},[]),u.a.createElement("div",{className:"form-print container"},u.a.createElement("div",{className:"form-header"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-4"},u.a.createElement("h3",{className:"text-center"},"C\u1ee4C H\u1eacU C\u1ea6N QU\xc2N KHU I"),u.a.createElement("p",{className:"text-center"},"B\u1ec7nh vi\u1ec7n Qu\xe2n y 110")),u.a.createElement("div",{className:"col-8"}))),u.a.createElement("div",{className:"form-content"},u.a.createElement("h2",{className:"title text-center"},"PHI\u1ebeU H\u1eb8N L\u1ea4Y D\u1ee4NG C\u1ee4 Y T\u1ebe \u0110\xc3 TI\u1ec6T KHU\u1ea8N"),u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"content-detail"},u.a.createElement("label",null,"M\xe3 s\u1ed1 h\u1ed9p: "),u.a.createElement("span",null,n.maSoHopDungCu)),u.a.createElement("div",{className:"content-detail"},u.a.createElement("label",null,"Khoa b\xe0n giao: "),u.a.createElement("span",null,n.khoaBanGiao&&n.khoaBanGiao.name)),u.a.createElement("div",{className:"content-detail"},u.a.createElement("label",null,"Th\u1eddi gian b\xe0n giao: "),u.a.createElement("span",null,n.thoiGianBanGiao)),u.a.createElement("div",{className:"content-detail"},u.a.createElement("label",null,"Th\u1eddi gian d\u1ef1 ki\u1ebfn l\u1ea5y: "),u.a.createElement("span",null,n.thoiGianTietKhuan)),u.a.createElement("div",{className:"content-detail"},u.a.createElement("label",null,"Chi ti\u1ebft: "),u.a.createElement("table",{class:"table table-bordered"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"T\xean d\u1ee5ng c\u1ee5 y t\u1ebf"),u.a.createElement("th",null,"S\u1ed1 l\u01b0\u1ee3ng"),u.a.createElement("th",null,"Ghi ch\xfa"))),n.chiTiet&&n.chiTiet.length?n.chiTiet.map(function(n,a){return u.a.createElement("tr",{key:a},u.a.createElement("td",null,n.dmDungCu&&n.dmDungCu.name),u.a.createElement("td",null,n.soLuong),u.a.createElement("td",null,n.ghiChu))}):null)))),u.a.createElement("div",{className:"form-footer"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-6"},u.a.createElement("p",{style:{marginTop:"34px"},className:"text-center"},"Khoa ph\u1eabu thu\u1eadt")),u.a.createElement("div",{className:"col-6"},u.a.createElement("p",{className:"text-center get-date"},function(){var n=new Date,a=n.getDate(),e=n.getMonth()+1,t=n.getFullYear();return"Ng\xe0y ".concat(a," th\xe1ng ").concat(e," n\u0103m ").concat(t)}()),u.a.createElement("p",{className:"text-center"},"Ng\u01b0\u1eddi l\u1eadp")))),u.a.createElement("div",{className:"sign-print"},u.a.createElement("p",null,"ISOFH - Ng\xe0y in: ",function(){var n=new Date,a=n.getSeconds(),e=n.getMinutes(),t=n.getHours(),u=n.getDate(),i=n.getMonth()+1,o=n.getFullYear();return"".concat(t,":").concat(e,":").concat(a," ").concat(u,"/").concat(i,"/").concat(o)}())))})}}]);
//# sourceMappingURL=43.9cacbd94.chunk.js.map