import Image from "next/image";

export default function About() {
    return (
        <main className="flex h-full flex-col items-center justify-between px-4 sm:px-8 md:px-12 pt-24 pb-24 text-normalText">
            <div className={"flex flex-col-reverse md:flex-row gap-10 items-center md:items-start"}>
                <div className={"bg-[#000000] relative h-[300px] w-[300px] rounded-xl flex-none"}>
                    <Image
                        className="p-0 object-contain object-center" src="/assets/nut-2.png" alt="Nut" fill
                    />
                </div>
                <div className={"whitespace-pre-wrap"}>
{`
So, who is this dipshit you're seeing on your screen at this moment?

As you hopefully read on the homepage, I'm Nut, a creature that keeps existing solely to make sure the housing crisis doesn't decrease by one.

In all seriousness, I'm just an ever so slightly teeny tiny bit autistic programmer with the most inconsistent activity on the internet.
Really. I'm willing to bet like 10 bucks on that.
`}
                </div>
            </div>
        </main>
    );
}
