import React from 'react'
import { UserButton} from "@clerk/nextjs";;
import { useAuth } from "@clerk/nextjs";

import Link from 'next/link';
 function Auth() {
    const {  userId } = useAuth();
    return (
        <div className="flex items-center justify-center sm:ml-24 pr-[20px] ml-[20px]">
            {userId ? (
                <div>
                    <UserButton />
                </div>
            ) : (
                <Link
                    href="/sign-in"
                    className="bg-black hover:bg-gray-400 text-white py-1 px-4 rounded-xl ml-1 font-sans outline outline-white outline-1 "
                >
                    Login
                </Link>
            )}
        </div>
    );
}

export default Auth