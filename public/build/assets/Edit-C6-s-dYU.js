import{r as x,j as e,y as b}from"./app-tKDJcObQ.js";import{u as w,C as u}from"./index.esm-CeyrmCcp.js";import{S as N}from"./sweetalert2.all-D9dqaZPf.js";import{u as k}from"./index-D69htRfc.js";const _={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},B={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:450,height:250,padding:4,boxSizing:"border-box"},C={position:"relative",display:"flex",minWidth:0,overflow:"hidden"},S={display:"block",width:"auto",height:"100%"};function R({banner:n}){const{handleSubmit:p,setValue:m,control:l,formState:{errors:h}}=w(),[i,d]=x.useState([]),{getRootProps:g,getInputProps:f}=k({accept:{"image/*":[]},onDrop:async r=>{const s=new FormData;s.append("banner_picture",r[0]);try{const t=await axios.post("http://testtourchpro.com/api/banner/images/"+n.id,s,{headers:{"Content-Type":"multipart/form-data"}}),a=t.data[0].url;console.log("url",a);const o=t.data[0].banner_id,c=[...i];c.splice(0,1,{url:a,banner_id:o}),d(c)}catch(t){console.error("Error uploading images:",t)}}}),j=async(r,s)=>{try{const t=await axios.delete("http://testtourchpro.com/api/banner/images/"+s,{headers:{"Content-Type":"multipart/form-data"}}),a=i.filter((o,c)=>o.banner_id!==s);d(a)}catch(t){console.error("Error uploading images:",t)}};x.useEffect(()=>{console.log("banner",n),m("banner_name",n.banner_name),m("banner_status",n.banner_status);const r=n.banner_picture;d(s=>[...s,{url:r,banner_id:n.id}])},[n]);const y=i.map(r=>e.jsx("div",{style:B,children:e.jsxs("div",{style:C,children:[e.jsx("img",{src:r.url,style:S,onLoad:()=>{URL.revokeObjectURL(r.url)}}),e.jsx("button",{type:"button",onClick:()=>j(r.id,r.banner_id),className:"absolute top-0 right-0 p-1 bg-gray-800 rounded-full text-white text-xs",style:{zIndex:1},children:"X"})]})},r.id)),v=r=>{N.fire({title:"บันทึกข้อมูล",text:"คุณต้องการบันทึกข้อมูลหรือไม่",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"บันทึกข้อมูล",cancelButtonText:"ยกเลิก"}).then(s=>{s.isConfirmed&&b.put("/banner/edit/"+n.id,r)})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"content-wrapper",children:[e.jsx("div",{className:"content-header",children:e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-sm-6",children:e.jsx("h1",{className:"m-0",children:"แก้ไขรูปBanner"})}),e.jsx("div",{className:"col-sm-6",children:e.jsxs("ol",{className:"breadcrumb float-sm-right",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"#",children:"หน้าแรก"})}),e.jsx("li",{className:"breadcrumb-item active",children:"แก้ไขรูปBanner"})]})})]})})}),e.jsx("div",{className:"container-lg  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",children:e.jsxs("form",{onSubmit:p(v),children:[e.jsxs("div",{className:" gap-6 mb-6 md:grid-cols-1 flex flex-col flex-1  p-3",children:[e.jsxs("div",{children:[e.jsx("label",{for:"banner_name",className:"block mb-2 text-sm font-medium text-gray-900",children:"คำอธิบายรูปภาพ"}),e.jsx(u,{control:l,name:"banner_name",rules:{required:!0},render:({field:{onChange:r,onBlur:s,value:t,referrors:a},fieldState:{errors:o}})=>e.jsx("input",{type:"text",id:"banner_name",value:t,className:`border  border-gray-300  text-black-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 
                                 ${o?"border border-red-500":""}`,onChange:r,placeholder:"กรุณารอกชื่ออธิบายรูปภาพ"})}),h.banner_name&&e.jsx("p",{className:"text-red-500",children:"กรุณากรอกข้อมูล"})]}),e.jsxs("div",{children:[e.jsx("label",{for:"banner_picture",className:"block mb-2 text-sm font-medium text-gray-900 ",children:"รูปBanner"}),e.jsx(u,{control:l,name:"banner_picture",render:({field:{onChange:r,onBlur:s,value:t,ref:a}})=>e.jsxs("section",{className:"container",children:[e.jsxs("div",{...g({className:"dropzone"}),children:[e.jsx("input",{...f()}),e.jsxs("div",{class:"relative border-2 border-gray-300 border-dashed rounded-lg p-6",id:"dropzone",children:[e.jsx("input",{type:"file",class:"absolute inset-0 w-full h-full opacity-0 z-50"}),e.jsxs("div",{class:"text-center",children:[e.jsx("img",{class:"mx-auto h-12 w-12",src:"https://www.svgrepo.com/show/357902/image-upload.svg",alt:""}),e.jsx("h3",{class:"mt-2 text-sm font-medium text-gray-900",children:e.jsxs("label",{for:"file-upload",class:"relative cursor-pointer",children:[e.jsx("span",{children:"Drag and drop"}),e.jsx("span",{class:"text-indigo-600",children:" or browse"}),e.jsx("span",{children:"to upload"}),e.jsx("input",{id:"file-upload",name:"file-upload",type:"file",class:"sr-only"})]})}),e.jsx("p",{class:"mt-1 text-xs text-gray-500",children:"PNG, JPG, GIF up to 3MB"})]}),e.jsx("img",{src:"",class:"mt-4 mx-auto h-[500] hidden",id:"preview"})]})]}),e.jsx("aside",{style:_,children:y})]})})]}),e.jsxs("div",{children:[e.jsx("label",{for:"banner_status",className:"block mb-2 text-sm font-medium text-gray-900 ",children:"เปิด/ปิด"}),e.jsx(u,{control:l,name:"banner_status",render:({field:{onChange:r,onBlur:s,value:t,ref:a}})=>e.jsxs("select",{value:t,onChange:r,className:"w-full border border-gray-300  text-black-500 text-sm rounded-lg",children:[e.jsx("option",{value:"",children:"<--กรุณาเลือก-->"}),e.jsx("option",{value:"1",children:"เปิดใช้งาน"}),e.jsx("option",{value:"0",children:"ปิดใช้งาน"})]})})]})]}),e.jsxs("div",{className:"my-8 p-3",children:[e.jsx("button",{type:"submit",className:"text-white mr-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"บันทึกข้อมูล"}),e.jsx("button",{type:"button",onClick:()=>{b.get("/banner")},className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800",children:"ยกเลิก"})]})]})})]})})}export{R as default};
