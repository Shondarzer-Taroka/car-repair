import Image from 'next/image';
import React from 'react';
import { Button, Label, TextInput } from "flowbite-react";
const page = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='p-14'>
                    <Image src={'/assets/images/login/login.svg'} width={540} height={540} alt='log in image' />
                </div>

                <div className=''>
                    <div className='border-2 p-12'>
                        <h1 className='text-center p-9 font-bold text-red-600'>Sign up</h1>

                        <form className="flex  w-full flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email2" value="Your email" />
                                </div>
                                <TextInput className='w-full block' id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Your name" />
                                </div>
                                <TextInput className='w-full block' id="name" type="email" placeholder="Hasnat Abdullah" required shadow />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="repeat-password" value="Confirm password" />
                                </div>
                                <TextInput id="repeat-password" type="password" required shadow />
                            </div>

                            <Button type="submit">Log In</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;