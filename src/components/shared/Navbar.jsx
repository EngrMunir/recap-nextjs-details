import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-blue-600 text-white py-4 shadow-md'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href='/' className='text-2xl font-bold'>
                    My App
                </Link>
                <div className='space-x-6'>
                    <Link href='/counter' className='hover:underline'>
                        Counter
                    </Link>
                    <Link href='/products' className='hover:underline'>
                        Products
                    </Link>
                    <Link href='/register' className='hover:underline'>
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;