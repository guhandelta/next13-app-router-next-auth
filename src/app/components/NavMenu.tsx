"use client";
// Nav Menu to hold all the link in the app
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-900 bg-gray-700";
const INACTIVE_ROUTE = "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

function AuthButton() {
    // useSession is used anytim in the client component to get the current session from the SessionProvider
    const { data: session } = useSession();

    if(session){
        return (
            <>
                {/* Mention the UserName & give the option to sign out when the user is signed in */}
                {session?.user?.name} <br />
                <button
                    onClick={() => signOut()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign Out
                </button>
            </>
        );
    }
    return(
        <>
            {/* If the user is not signed in, then displayed this message adn hte button to sign in */}
            Not signed in <br />
            <button 
                onClick={() => signIn()} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
            Sign In
            </button>
        </>
    );
}

export default function NavMenu() {
    const pathname = usePathname();
    return(
        <div>
            <AuthButton />
            <hr className="ny-4" />
            <ul>
                <Link href="/">
                    <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                        Home
                    </li>
                </Link>
                <Link href="/protected">
                    <li
                        className={
                        pathname === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE
                        }
                    >
                        Protected Route
                    </li>
                </Link>
                <Link href="/serverAction">
                    <li
                        className={
                        pathname === "/serverAction" ? ACTIVE_ROUTE : INACTIVE_ROUTE
                        }
                    >
                        Server Action
                    </li>
                </Link>
                <Link href="/apiFromClient">
                    <li
                        className={
                        pathname === "/apiFromClient" ? ACTIVE_ROUTE : INACTIVE_ROUTE
                        }
                    >
                        API From Client
                    </li>
                </Link>
                <Link href="/apiFromServer">
                    <li
                        className={
                        pathname === "/apiFromServer" ? ACTIVE_ROUTE : INACTIVE_ROUTE
                        }
                    >
                        API From Server
                    </li>
                </Link>
            </ul>
        </div>
    );
};