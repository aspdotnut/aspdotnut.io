import Image from "next/image";
import Link from "next/link";

export default function Socials() {
    return (
        <main className="flex h-full flex-col items-center justify-between px-4 sm:px-8 md:px-12 pt-24 pb-24 text-normalText">
            <div className={"flex flex-col-reverse md:flex-row gap-10 items-center md:items-start"}>
                <div className="whitespace-pre-wrap">
{`
Though fairly inactive, you can find me doing stuff on the following places:
X: `}<Link className="text-special hover:underline" href="https://x.com/aspdotnut">@aspdotnut</Link>{`
Fedi: `}<Link className="text-special hover:underline" href="https://blahaj.zone/@aspdotnut">@aspdotnut@blahaj.zone</Link>{`
Bluesky: `}<Link className="text-special hover:underline" href="https://bsky.app/profile/aspdotnut.io">@aspdotnut.io</Link>{`
Discord: `}<Link className="text-special hover:underline" href="https://discordapp.com/users/701854179395895316">asp.nut</Link>{`
Github: `}<Link className="text-special hover:underline" href="https://github.com/aspdotnut">aspdotnut</Link>{`
Twitch: `}<Link className="text-special hover:underline" href="https://twitch.tv/aspdotnut">aspdotnut</Link>
                </div>
                <div className={"bg-[#000000] relative h-[300px] w-[300px] rounded-xl flex-none"}>
                    <Image
                        className="p-0 object-contain object-center" src="/assets/nut-3.png" alt="Nut" fill
                    />
                </div>
            </div>
        </main>
    );
}
