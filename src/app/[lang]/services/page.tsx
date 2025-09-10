import { ServiceDetails } from "@/components/pages/services/service-details";
import { getDictionay } from "@/lib/dictionaries/get-dictionary";
import Image from "next/image";
import stock from "@p/stock.jpg";
async function Services({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const lang = (await params).lang;
  const dict = await getDictionay(lang);
  return (
    <main>
      <section className="relative h-[320px]">
        <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
          <Image
            src={stock}
            alt=""
            className="h-full [object-position:0_15%] object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/50"></div>
        </div>
        <div className="relative h-full flex flex-col text-white">
          <h1 className="text-white text-center mt-auto">
            {dict.pages.services.title}
          </h1>
          {/* <p className="text-center">
          Home / <span className="text-yellow-500 underline underline-offset-2">Services</span>
        </p> */}
        </div>
      </section>
      <ServiceDetails content={dict.pages.services.services} />{" "}
    </main>
  );
}

export default Services;
