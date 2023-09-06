"use client";
// Nav Menu to hold all the link in the app
import { signIn, signOut, useSession } from "next-auth/react";

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
    return(
        <div>
            <AuthButton />
        </div>
    );
};