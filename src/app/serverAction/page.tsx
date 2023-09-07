import { getServerSession } from "next-auth";
import WhoAmIButton from "./WhoAmIButton";


export default async function ServerActionPage() {
    const whoAmI = async () => {
        "use server";
        const session = await getServerSession();
        return session?.user?.name || "Not logged in"; // return the user name if logged in or "Not logged in" if not logged in
    };

    return (
        <div>
            <WhoAmIButton whoAmIAction={whoAmI} />
        </div>
    );    
}
