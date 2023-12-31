import { getServerSession } from "next-auth";
import { UserInfo } from "@/app/models/UserInfo";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export default async function handler(req, res) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    if (!userEmail) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const userInfo = await UserInfo.findOne({ email: userEmail });

    if (!userInfo) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    return res.status(200).json({ isAdmin: userInfo.admin });
}