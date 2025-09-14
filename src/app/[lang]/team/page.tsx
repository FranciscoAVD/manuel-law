import { Container } from "@/components/ui/container";
import { getDictionay } from "@/lib/dictionaries/get-dictionary";
import Image from "next/image";
import hero from "@p/images/team-bg.jpg";
import boss from "@p/images/team/manuel-hover.jpg";

async function Team({ params }: { params: Promise<{ lang: "en" | "es" }> }) {
  const { pages } = await getDictionay((await params).lang);

  return (
    <main>
      <section className="relative h-[420px] flex flex-col">
        <div className="absolute inset-0 bg-neutral-900">
          <Image
            src={hero}
            alt=""
            className="h-full [object-position:0_15%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent to-30%"></div>
        </div>

        <h1 className="relative mt-auto text-center text-white">
          {pages.team.title}
        </h1>
      </section>
      <section>
        <Container className="max-w-2xl">
          <div className="relative py-20 space-y-8">
            <section className="lg:flex gap-x-6">
              <Image
                src={boss}
                alt=""
                className="w-[300px] aspect-square border-4 border-[#21393E] object-cover"
              />

              <div className="">
                <h2 className="mb-4">
                  {pages.team.boss.name}
                  <br />
                </h2>
                {/*Headers */}
                <div className="space-y-2 mb-4">
                  <h3 className="border-l-2 border-amber-500 pl-4 ">
                    {pages.team.boss.headers.education.label}
                  </h3>
                  <ul className="space-y-4">
                    {pages.team.boss.headers.education.degrees.map((d) => (
                      <li key={d.title} className="text-sm text-black/90">
                        {d.title} <br /> {d.school}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2 mb-4">
                  <h3 className="border-l-2 border-amber-500 pl-4 ">
                    {pages.team.boss.headers.law.label}
                  </h3>
                  <ul className="">
                    {pages.team.boss.headers.law.bars.map((b) => (
                      <li key={b} className="text-sm text-black/90">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            {/*Bio*/}
            {pages.team.boss.bio.map((b, idx) => (
              <p key={idx} className="mb-3 text-justify">
                {b}
              </p>
            ))}
          </div>

          {pages.team.members.map((t, idx) => (
            <div key={idx} className="relative py-20 space-y-8">
              <section className="lg:flex gap-x-6">
                <Image
                  src={t.imgPath}
                  width={300}
                  height={500}
                  alt=""
                  className="w-[300px] aspect-square border-4 border-[#21393E] object-cover"
                />
                {/*Headers */}
                <div className="">
                  <h2 className="mb-4">
                    {t.name}
                    <br />
                  </h2>
                  {t.headers.map((h) => (
                    <div key={h.label} className="space-y-2 mb-4">
                      <h3 className="border-l-2 border-amber-500 pl-4">
                        {h.label}
                      </h3>
                      <p className="text-sm text-black/90 text-justify">
                        {h.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
              {/*Bio*/}
              {t.bio.map((b, idx) => (
                <p key={idx} className="mb-3 text-justify">
                  {b}
                </p>
              ))}
            </div>
          ))}
        </Container>
      </section>
    </main>
  );
}

export default Team;
