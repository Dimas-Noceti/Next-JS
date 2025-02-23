import Link from "next/link";

export default function ButtonLink( { href, children} ) {
    return (
        <Link href={href} className="text-white text-4xl font-bold p-4">{children}</Link>
    )
}