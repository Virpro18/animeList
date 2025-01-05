
import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link"

const AuthButton = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "signout" : "signin"
    return (
        <div>
            <Link href={`/api/auth/${actionURL}`}>{actionLabel}</Link>
        </div>
    )
}

export default AuthButton