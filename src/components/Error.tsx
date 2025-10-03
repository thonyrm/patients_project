import type { ReactNode } from "react"

type ErrorProps = {
    children: ReactNode
}
export default function Error({children}: ErrorProps) {
    return (
        <p className="text-center my-4 bg-red-300 text-white font-bold p-3 uppercase text-sm rounded-lg ">
            {children}
        </p>
    )
}
