import { ServiceDetails } from "@/components/pages/services/service-details";
import { getDictionay } from "@/lib/dictionaries/get-dictionary";
import Image from "next/image";
import hero from "@p/images/services-bg.jpg";
import stock from "@p/images/stock.jpg";

async function Services({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const lang = (await params).lang;
  const dict = await getDictionay(lang);
  return (
    <main>
      <section className="relative h-[420px]">
        <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
          <Image
            src={hero}
            alt=""
            className="h-full [object-position:0_15%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent to-30%"></div>
        </div>
        <div className="relative h-full flex flex-col text-white">
          <h1 className="text-white text-center mt-auto">
            {dict.pages.services.title}
          </h1>
        </div>
      </section>
      <ServiceDetails content={dict.pages.services.services} />{" "}
    </main>
  );
}

export default Services;
