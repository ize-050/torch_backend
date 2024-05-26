import { useEffect, useState, React,useCallback } from "react"
import { useForm, Controller } from "react-hook-form"
import { router } from '@inertiajs/react'
import Swal from 'sweetalert2'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Dropzone from 'react-dropzone'
import { useDropzone } from 'react-dropzone';


const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    position: 'relative',
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

export default function Add({ catgory }) {
    const { handleSubmit, setValue, control, formState: { errors }, } = useForm()
    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
      const newFiles = acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }));

    console.log('file',files)
      setFiles(prevFiles => [...prevFiles, ...newFiles]);
    }, []);
  
    const handleDelete = useCallback((fileName) => {
      setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
    }, []);
  
    const { getRootProps, getInputProps } = useDropzone({
      accept: {
        'image/*': []
      },
      onDrop
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
                <button
                    onClick={() => handleDelete(file.name)}
                    className="absolute top-0 right-0 p-1 bg-gray-800 rounded-full text-white text-xs"
                    style={{ zIndex: 1 }}
                >
                    X
                </button>
            </div>
        </div>
    ));


    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append('product_name', data.product_name);
        formData.append('product_title', data.product_title);
        formData.append('cat_id', data.cat_id);
        formData.append('product_status', data.product_status);
        formData.append('product_price', data.product_price);
        formData.append('product_detail', data.product_detail);
        for (let i = 0; i < files.length; i++) {
            console.log('files', files[i])
            formData.append('product_images[]', files[i]);
        }
        formData.append('cat_detail', data.cat_detail);
        Swal.fire({
            title: 'บันทึกข้อมูล',
            text: "คุณต้องการบันทึกข้อมูลหรือไม่",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'บันทึกข้อมูล',
            cancelButtonText: 'ยกเลิก'
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(`/product/save`, formData)
            }
        })
    }


    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">สินค้า</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">หน้าแรก</a></li>
                                    <li className="breadcrumb-item active">สินค้า1</li>

                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" gap-6 mb-6 md:grid-cols-1 flex flex-col flex-1 p-3">
                            <div>
                                <label for="product_name" className="block mb-2 text-sm font-medium text-gray-900">ชื่อสินค้า</label>
                                <Controller
                                    control={control}
                                    name="product_name"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value, referrors }
                                        , fieldState: { errors }
                                    }) => (
                                        <input type="text" id="product_name" value={value} className={`border  border-gray-300  text-black-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 
                                 ${errors ? 'border border-red-500' : ''}`}
                                            onChange={onChange} placeholder="กรุณารอกชื่อสินค้า" />
                                    )}
                                />
                                {errors.product_name && <p className="text-red-500">กรุณากรอกข้อมูล</p>}
                            </div>
                            <div>
                                <label for="product_title" class="block mb-2 text-sm font-medium text-gray-90">ลำดับ</label>
                                <Controller
                                    control={control}
                                    name="product_title"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <input type="text" value={value} id="product_title" className="border border-gray-300  text-black-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400
                                  dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} placeholder="คำอธิบายย่อ" />
                                    )}
                                />
                            </div>
                            <div>
                                <label for="product_detail" className="block mb-2 text-sm font-medium text-gray-90">รายละเอียด</label>
                                <Controller
                                    control={control}
                                    name="product_detail"
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <CKEditor
                                            editor={ClassicEditor}

                                            onReady={editor => {
                                                // You can store the "editor" and use when it is needed.
                                                console.log('Editor is ready to use!', editor);
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                onChange(data)
                                                console.log({ event, editor, data });
                                            }}
                                            onBlur={(event, editor) => {
                                                console.log('Blur.', editor);
                                            }}
                                            onFocus={(event, editor) => {
                                                console.log('Focus.', editor);
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <div>
                                <label for="product_price" class="block mb-2 text-sm font-medium text-gray-90">ราคา</label>
                                <Controller
                                    control={control}
                                    name="product_price"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <input type="text" value={value} id="product_title" className="border border-gray-300  text-black-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400
                                  dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} placeholder="ราคา" />
                                    )}
                                />
                            </div>
                            <div>
                                <label for="catory" className="block mb-2 text-sm font-medium text-gray-900 ">หมวดหมู่</label>
                                <Controller
                                    control={control}
                                    name="cat_id"
                                    render={({ field: { onChange, onBlur, value, ref } }) => (

                                        <select value={value} onChange={onChange} className="w-full border border-gray-300  text-black-500 text-sm rounded-lg">
                                            <option value="">{"<--กรุณาเลือก-->"}</option>
                                            {catgory.map((item, index) => {
                                                return (
                                                    <option value={item.id}>{item.cat_name}</option>
                                                )
                                            })}
                                        </select>

                                    )}
                                />
                            </div>
                            <div>
                                <label for="product_status" className="block mb-2 text-sm font-medium text-gray-900 ">เปิด/ปิด</label>
                                <Controller
                                    control={control}
                                    name="product_status"
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <select value={value} onChange={onChange} className="w-full border border-gray-300  text-black-500 text-sm rounded-lg">
                                            <option value="เปิดใช้งาน">{"<--กรุณาเลือก-->"}</option>
                                            <option value="1">เปิดใช้งาน</option>
                                            <option value="0">ปิดใช้งาน</option>
                                        </select>
                                    )}
                                />
                            </div>
                            <div>
                                <label for="product_images" className="block mb-2 text-sm font-medium text-gray-900 ">รูปสินค้า</label>
                                <Controller
                                    control={control}
                                    name="product_images"
                                    render={({ field: { onChange, value, ref } }) => (
                                        <section className="container">
                                            <div {...getRootProps({ className: 'dropzone' })}>
                                                <input {...getInputProps()} onChange={e => {
                                                    const files = Array.from(e.target.files);
                                                    onDrop(files);
                                                    onChange(files);
                                                }} />
                                                <div className="w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
                                                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" />
                                                    <div className="text-center">
                                                        <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="" />

                                                        <h3 className="mt-2 text-sm font-medium text-gray-900">
                                                            <label htmlFor="file-upload" className="relative cursor-pointer">
                                                                <span>Drag and drop</span>
                                                                <span className="text-indigo-600"> or browse</span>
                                                                <span>to upload</span>
                                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                            </label>
                                                        </h3>
                                                        <p className="mt-1 text-xs text-gray-500">
                                                            PNG, JPG, GIF up to 5MB
                                                        </p>
                                                    </div>
                                                    <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
                                                </div>
                                            </div>
                                            <aside style={thumbsContainer}>
                                                {thumbs}
                                            </aside>
                                        </section>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="my-16 p-3">
                            <button type="submit" className="text-white mr-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">บันทึกข้อมูล</button>
                            <button type="button" onClick={() => {
                                router.get(`/product`)
                            }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">ยกเลิก</button>
                        </div>
                    </form >
                </div >

            </div >
        </>
    )

}
