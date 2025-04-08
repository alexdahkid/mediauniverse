import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="select-none">
            <div>
                <h1 className="text-2xl font-bold">Media<span className="opacity-50">Universe</span></h1>
            </div>
        </Link>
    )
}