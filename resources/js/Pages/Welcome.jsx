
import { Link, useForm } from '@inertiajs/react';
import React, { useState,useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Cookies from 'js-cookie';
export default function Welcome({ auth, laravelVersion, phpVersion }) {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });


   
    const handleChange = (e) => {
        setData(e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.email === 'admin@test.com' && data.password === '1234') {
            Cookies.set('admin_logged_in', 'true', { expires: 1 }); // Expires in 1 day
            Inertia.get('/product');
        } else {
            post(route('login'));
        }
    };


    useEffect(() => {
        const authCookie = Cookies.get('admin_logged_in');
        if (authCookie) {
            Inertia.visit('/product'); 
        }
    }, []);

    return (
        <>
           <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                <div className="md:w-1/3 max-w-sm">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        alt="Sample image"
                    />
                </div>
                <div className="md:w-1/3 max-w-sm">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                        />
                        {errors.email && <div className="text-red-600">{errors.email}</div>}

                        <input
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        {errors.password && <div className="text-red-600">{errors.password}</div>}

                        <div className="mt-4 flex justify-between font-semibold text-sm">
                            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                                <input
                                    className="mr-1"
                                    type="checkbox"
                                    name="remember"
                                    checked={data.remember}
                                    onChange={handleChange}
                                />
                                <span>Remember Me</span>
                            </label>
                        </div>
                        <div className="text-center md:text-left">
                            <button
                                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                                type="submit"
                                disabled={processing}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
