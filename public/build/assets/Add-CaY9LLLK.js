import{r as v,j as e,y as m}from"./app-tKDJcObQ.js";import{u as w,C as a}from"./index.esm-CeyrmCcp.js";import{S as k}from"./sweetalert2.all-D9dqaZPf.js";import{u as _,d as N,C as B}from"./index-D69htRfc.js";const C={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},R={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},S={position:"relative",display:"flex",minWidth:0,overflow:"hidden"},D={display:"block",width:"auto",height:"100%"};function P({catgory:x}){const{handleSubmit:p,setValue:F,control:o,formState:{errors:b}}=w(),[i,c]=v.useState([]),{getRootProps:h,getInputProps:g}=_({accept:{"image/*":[]},onDrop:r=>{c(r.map(t=>Object.assign(t,{preview:URL.createObjectURL(t)})))}}),f=r=>{c(i.filter(t=>t.name!==r))},j=i.map(r=>e.jsx("div",{style:R,children:e.jsxs("div",{style:S,children:[e.jsx("img",{src:r.preview,style:D,onLoad:()=>{URL.revokeObjectURL(r.preview)}}),e.jsx("button",{onClick:()=>f(r.name),className:"absolute top-0 right-0 p-1 bg-gray-800 rounded-full text-white text-xs",style:{zIndex:1},children:"X"})]})},r.name)),y=r=>{const t=new FormData;t.append("product_name",r.product_name),t.append("product_title",r.product_title),t.append("cat_id",r.cat_id),t.append("product_status",r.product_status),t.append("product_price",r.product_price),t.append("product_detail",r.product_detail);for(let s=0;s<i.length;s++)console.log("files",i[s]),t.append("product_images[]",i[s]);t.append("cat_detail",r.cat_detail),k.fire({title:"บันทึกข้อมูล",text:"คุณต้องการบันทึกข้อมูลหรือไม่",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"บันทึกข้อมูล",cancelButtonText:"ยกเลิก"}).then(s=>{s.isConfirmed&&m.post("/product/save",t)})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"content-wrapper",children:[e.jsx("div",{className:"content-header",children:e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-sm-6",children:e.jsx("h1",{className:"m-0",children:"สินค้า"})}),e.jsx("div",{className:"col-sm-6",children:e.jsxs("ol",{className:"breadcrumb float-sm-right",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"#",children:"หน้าแรก"})}),e.jsx("li",{className:"breadcrumb-item active",children:"สินค้า"})]})})]})})}),e.jsx("div",{className:"container-lg  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",children:e.jsxs("form",{onSubmit:p(y),children:[e.jsxs("div",{className:" gap-6 mb-6 md:grid-cols-1 flex flex-col flex-1 p-3",children:[e.jsxs("div",{children:[e.jsx("label",{for:"product_name",className:"block mb-2 text-sm font-medium text-gray-900",children:"ชื่อสินค้า"}),e.jsx(a,{control:o,name:"product_name",rules:{required:!0},render:({field:{onChange:r,onBlur:t,value:s,referrors:n},fieldState:{errors:l}})=>e.jsx("input",{type:"text",id:"product_name",value:s,className:`border  border-gray-300  text-black-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 
                                 ${l?"border border-red-500":""}`,onChange:r,placeholder:"กรุณารอกชื่อสินค้า"})}),b.product_name&&e.jsx("p",{className:"text-red-500",children:"กรุณากรอกข้อมูล"})]}),e.jsxs("div",{children:[e.jsx("label",{for:"product_title",class:"block mb-2 text-sm font-medium text-gray-90",children:"ลำดับ"}),e.jsx(a,{control:o,name:"product_title",rules:{required:!0},render:({field:{onChange:r,onBlur:t,value:s,ref:n}})=>e.jsx("input",{type:"text",value:s,id:"product_title",className:`border border-gray-300  text-black-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400
                                  dark:focus:ring-blue-500 dark:focus:border-blue-500`,onChange:r,placeholder:"คำอธิบายย่อ"})})]}),e.jsxs("div",{children:[e.jsx("label",{for:"product_detail",className:"block mb-2 text-sm font-medium text-gray-90",children:"รายละเอียด"}),e.jsx(a,{control:o,name:"product_detail",render:({field:{onChange:r,onBlur:t,value:s,ref:n}})=>e.jsx(N.CKEditor,{editor:B,onReady:l=>{console.log("Editor is ready to use!",l)},onChange:(l,d)=>{const u=d.getData();r(u),console.log({event:l,editor:d,data:u})},onBlur:(l,d)=>{console.log("Blur.",d)},onFocus:(l,d)=>{console.log("Focus.",d)}})})]}),e.jsxs("div",{children:[e.jsx("label",{for:"product_price",class:"block mb-2 text-sm font-medium text-gray-90",children:"ราคา"}),e.jsx(a,{control:o,name:"product_price",rules:{required:!0},render:({field:{onChange:r,onBlur:t,value:s,ref:n}})=>e.jsx("input",{type:"text",value:s,id:"product_title",className:`border border-gray-300  text-black-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400
                                  dark:focus:ring-blue-500 dark:focus:border-blue-500`,onChange:r,placeholder:"ราคา"})})]}),e.jsxs("div",{children:[e.jsx("label",{for:"catory",className:"block mb-2 text-sm font-medium text-gray-900 ",children:"หมวดหมู่"}),e.jsx(a,{control:o,name:"cat_id",render:({field:{onChange:r,onBlur:t,value:s,ref:n}})=>e.jsxs("select",{value:s,onChange:r,className:"w-full border border-gray-300  text-black-500 text-sm rounded-lg",children:[e.jsx("option",{value:"",children:"<--กรุณาเลือก-->"}),x.map((l,d)=>e.jsx("option",{value:l.id,children:l.cat_name}))]})})]}),e.jsxs("div",{children:[e.jsx("label",{for:"product_status",className:"block mb-2 text-sm font-medium text-gray-900 ",children:"เปิด/ปิด"}),e.jsx(a,{control:o,name:"product_status",render:({field:{onChange:r,onBlur:t,value:s,ref:n}})=>e.jsxs("select",{value:s,onChange:r,className:"w-full border border-gray-300  text-black-500 text-sm rounded-lg",children:[e.jsx("option",{value:"เปิดใช้งาน",children:"<--กรุณาเลือก-->"}),e.jsx("option",{value:"1",children:"เปิดใช้งาน"}),e.jsx("option",{value:"0",children:"ปิดใช้งาน"})]})})]}),e.jsxs("div",{children:[e.jsx("label",{for:"product_images",className:"block mb-2 text-sm font-medium text-gray-900 ",children:"รูปสินค้า"}),e.jsx(a,{control:o,name:"product_images",render:({field:{onChange:r,onBlur:t,value:s,ref:n}})=>e.jsxs("section",{className:"container",children:[e.jsxs("div",{...h({className:"dropzone"}),children:[e.jsx("input",{...g()}),e.jsxs("div",{class:"w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6",id:"dropzone",children:[e.jsx("input",{type:"file",class:"absolute inset-0 w-full h-full opacity-0 z-50"}),e.jsxs("div",{class:"text-center",children:[e.jsx("img",{class:"mx-auto h-12 w-12",src:"https://www.svgrepo.com/show/357902/image-upload.svg",alt:""}),e.jsx("h3",{class:"mt-2 text-sm font-medium text-gray-900",children:e.jsxs("label",{for:"file-upload",class:"relative cursor-pointer",children:[e.jsx("span",{children:"Drag and drop"}),e.jsx("span",{class:"text-indigo-600",children:" or browse"}),e.jsx("span",{children:"to upload"}),e.jsx("input",{id:"file-upload",name:"file-upload",type:"file",class:"sr-only"})]})}),e.jsx("p",{class:"mt-1 text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]}),e.jsx("img",{src:"",class:"mt-4 mx-auto max-h-40 hidden",id:"preview"})]})]}),e.jsx("aside",{style:C,children:j})]})})]})]}),e.jsxs("div",{className:"my-8 p-3",children:[e.jsx("button",{type:"submit",className:"text-white mr-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"บันทึกข้อมูล"}),e.jsx("button",{type:"button",onClick:()=>{m.get("/product")},className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800",children:"ยกเลิก"})]})]})})]})})}export{P as default};
