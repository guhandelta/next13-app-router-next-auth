import { headers } from 'next/headers'

export default async function APIFromServer() {
    // The URL has to be absolute as it is being called from the server
    const res = await fetch("http://localhost:3000/api/whoAmI",{
        method: "GET",
        /*The UI will display that the user is not logged in, thought the user is logged in, becuase an authenticated request is received for the route /apiFromServer, but on the server, the route handler is making a request to itself, but it does not contain any headers with the authentication, which is executed by using herders() from next/header*/
        headers: headers(),
    }).then(res => res.json());
   
    return (
        <div className="">
            <div className="text-center">
                API Route from
                <span className="font-bold underline">
                    Server
                </span>
            </div>
            <div className="">
                Name: {res?.name}
            </div>
        </div>
    );
}