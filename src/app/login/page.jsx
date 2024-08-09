// 'use client'
// import Image from 'next/image';
// import React from 'react';
// import { Button, Checkbox, Label, TextInput } from "flowbite-react";
// import Link from "next/link"
// import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
// import { signIn } from 'next-auth/react'
// import { useRouter, useSearchParams } from 'next/navigation';
// const LogIn = () => {

//     const seacrparams = useSearchParams()
//     const path = seacrparams.get('redirect')

//     const router = useRouter()
//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         const email = e.target.email.value
//         const password = e.target.password.value
//         const resp = await signIn('credentials', {
//             email,
//             password,
//             redirect: true,
//             callbackUrl: path ? path : '/'
//         })
//         console.log(resp);
//         if (resp.status === 200) {
//             router.push('/')
//         }
//     }
//     return (
//         <div className='container mx-auto'>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
//                 <div className='p-14'>
//                     <Image src={'/assets/images/login/login.svg'} width={540} height={540} alt='log in image' />
//                 </div>

//                 <div className=''>
//                     <div className='border-2 p-12'>
//                         <h1 className='text-center p-9 font-bold text-red-600'>Sign up</h1>

//                         <form className="flex  w-full flex-col gap-4" onSubmit={handleSubmit}>
//                             <div>
//                                 <div className="mb-2 block">
//                                     <Label htmlFor="email2" value="Your email" />
//                                 </div>
//                                 <TextInput className='w-full block' name='email' id="email2" type="email" placeholder="name@flowbite.com" required shadow />
//                             </div>

//                             <div>
//                                 <div className="mb-2 block">
//                                     <Label htmlFor="repeat-password" value="Confirm password" />
//                                 </div>
//                                 <TextInput id="repeat-password" name='password' type="password" required shadow />
//                             </div>

//                             <Button type="submit">Log In</Button>
//                         </form>

//                         <div className=''>
//                             <p className='text-center py-4'> or Sign in with </p>
//                             <div className=''>
//                                 <div className='flex gap-1 justify-center w-full'>
//                                     <FaFacebook className='hover:text-green-500 text-2xl'></FaFacebook>
//                                     <FaLinkedin className='hover:text-green-500 text-2xl'></FaLinkedin>
//                                     <FaGoogle className='hover:text-green-500 text-2xl' onClick={() => signIn('google', {
//                                         redirect: true,
//                                         callbackUrl: path ? path : '/'
//                                     })}></FaGoogle>
//                                     <FaGithub className='hover:text-green-500 text-2xl'></FaGithub>
//                                 </div>
//                             </div>
//                             <p className='text-center mt-3'>Have any account <span><Link className='font-bold text-red-500' href={'/signup'}>Sign up</Link></span></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LogIn;



'use client'
import Image from 'next/image';
import React, { Suspense } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link"
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation';

const LogIn = () => {

    const searchParams = useSearchParams();
    const path = searchParams.get('redirect');

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const resp = await signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: path ? path : '/'
        });
        console.log(resp);
        if (resp.status === 200) {
            router.push('/')
        }
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
                                <TextInput className='w-full block' name='email' id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="repeat-password" value="Confirm password" />
                                </div>
                                <TextInput id="repeat-password" name='password' type="password" required shadow />
                            </div>

                            <Button type="submit">Log In</Button>
                        </form>

                        <div className=''>
                            <p className='text-center py-4'> or Sign in with </p>
                            <div className=''>
                                <div className='flex gap-1 justify-center w-full'>
                                    <FaFacebook className='hover:text-green-500 text-2xl'></FaFacebook>
                                    <FaLinkedin className='hover:text-green-500 text-2xl'></FaLinkedin>
                                    <FaGoogle className='hover:text-green-500 text-2xl' onClick={() => signIn('google', {
                                        redirect: true,
                                        callbackUrl: path ? path : '/'
                                    })}></FaGoogle>
                                    <FaGithub className='hover:text-green-500 text-2xl'></FaGithub>
                                </div>
                            </div>
                            <p className='text-center mt-3'>Have any account <span><Link className='font-bold text-red-500' href={'/signup'}>Sign up</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function WrappedLogIn() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LogIn />
        </Suspense>
    );
}
