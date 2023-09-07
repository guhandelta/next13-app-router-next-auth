import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function ProtectedRoute() {
    const session = await getServerSession();
    if(!session || !session?.user){
        redirect("/api/auth/signin")
    }

    return (
        <div>
            <h1>This is a Protected Route</h1> <br />
            <h2>Only signed in users can see this.</h2>
        </div>
    );   
}