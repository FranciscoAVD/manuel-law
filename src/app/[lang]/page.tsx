import { Contact } from "@/components/pages/home/contact";
import { Hero } from "@/components/pages/home/hero";
import { Reviews } from "@/components/pages/home/reviews";
import { Services } from "@/components/pages/home/services";
import { Team } from "@/components/pages/home/team";
import { getDictionay } from "@/lib/dictionaries/get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionay(lang);

  return (
    <main>
      <Hero content={dict.pages.home.hero} />
      <Services content={dict.pages.home.services} />
      <Team content={dict.pages.home.team} />
      <Reviews content={dict.pages.home.reviews} />
      <Contact content={dict.pages.home.contact} />
    </main>
  );
}
