import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-5 backdrop-blur-3xl mt-8 px-6 md:px-20 lg:px-32">
            {/* <div>
                <h1 className="text-xl font-bold">Media<span className="opacity-50">Universe</span></h1>
            </div> */}
            <p className="text-center text-muted-foreground text-sm mt-2 max-w-lg font-light">Online Media Streaming by MediaUniverse</p>
            <p className="text-center text-sm text-muted-foreground">Kidd Alex<a className="underline text-primary hover:text-primary" href="https://github.com/alexdahkid">Networks</a>.</p>
            <div className="flex gap-3 items-center justify-center mt-3">
                <Link target="_blank" className="text-sm opacity-80 font-light underline hover:opacity-100" href="https://facebook.com/mediauniverse">Facebook</Link>
                <Link target="_blank" className="text-sm opacity-80 font-light underline hover:opacity-100" href="https://t.me/mediauniverse">Telegram</Link>
                <Link target="_blank" className="text-sm opacity-80 font-light underline hover:opacity-100" href="https://instagram.com/mediauniverse">Instagram</Link>
            </div>
        </footer>
    )
}