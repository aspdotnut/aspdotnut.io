import Image from "next/image";

export default function Home() {
  return (
      <main className="flex h-full flex-col items-center justify-between px-4 sm:px-8 md:px-12 pt-24 pb-24 text-normalText">
          <div className={"flex flex-col-reverse md:flex-row gap-10 items-center md:items-start"}>
              <div className={"whitespace-pre-wrap"}>
{`
Hiya!
I'm Nut, the creator of this incomprehensible shitshow.

In case you noticed, this site is made using Next.js. 
"But Nut, isn't that heavily overqualified for a simple site that's just a couple pretty static pages?" You might be thinking.
Yes. Yes it is.

We ballin.
`}
              </div>
              <div className={"bg-[#000000] relative h-[300px] w-[300px] rounded-xl flex-none"}>
                  <Image
                      className="p-0 pb-6 object-contain object-center" src="/assets/nut-1.png" alt="Nut" fill
                  />
              </div>
          </div>
      </main>
  );
}
