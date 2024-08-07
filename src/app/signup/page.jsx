'use client'
import Image from 'next/image';
import React from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import Link from 'next/link';
const page = () => {

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const newUser={
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }

       let res=await fetch('http://localhost:3000/signup/api',{
            method:'POST',
            body:JSON.stringify(newUser),
            headers:{
                'content-type':'application/json'
            }
        })
        console.log(res);
        // if (res) {
        //     e.target.reset()
        // }
        
        // console.log(newUser);
        
    }
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='p-14'>
                    <Image src={'/assets/images/login/login.svg'} width={540} height={540} alt='log in image' />
                </div>

                <div className=''>
                    <div className='border-2 p-12'>
                        <h1 className='text-center p-9 font-bold text-red-600'>Sign up</h1>

                        <form className="flex  w-full flex-col gap-4" onSubmit={handleSubmit}>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email2" value="Your email" />
                                </div>
                                <TextInput className='w-full block' id="email2" type="email" name='email' placeholder="name@flowbite.com" required shadow />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Your name" />
                                </div>
                                <TextInput className='w-full block' name='name' id="name" type="text" placeholder="Hasnat Abdullah" required shadow />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="repeat-password" value="Confirm password" />
                                </div>
                                <TextInput id="repeat-password" name='password' type="password" required shadow />
                            </div>

                            <Button type="submit">Sign up</Button>
                        </form>
                        <p className='text-center mt-6'>Alrady have account? <span className='font-bold text-orange-500'><Link href={'/login'}>Log in</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;