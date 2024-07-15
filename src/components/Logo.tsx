import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { SwitchCamera } from "lucide-react"

function Logo() {
    return (
        <Link href={'/dashboard'}
            className={buttonVariants({ className: 'hidden md:flex mx-auto navLink !mb-10 lg:hover:bg-transparent lg:!p-0', variant: 'ghost', size: 'lg' }
            )}>
            <SwitchCamera className="h-6 w-6 shrink-0 lg:hidden" />
            <p className={'font-semibold text-xl hidden lg:block'}>Pixelgram</p>
        </Link>
    )
}

export default Logo
