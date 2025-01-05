import { authUserSession } from "@/libs/auth-libs"
import Image from 'next/image'

const dashboard = async () => {
    const user = await authUserSession()
    if (!user) {
        return <div className="text-color-primary">Loading...</div>
    }

    return (
        <div className="text-color-primary">
            <h3>DASHBOARD</h3>
            <Image src={user.image ?? "/default-image.png"} alt="User Image" width={100} height={100} />
        </div>
    )
}

export default dashboard