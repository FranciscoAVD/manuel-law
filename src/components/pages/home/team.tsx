import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import stock from "@p/stock.jpg";

function Team({
  content,
}: {
  content: {
    title: string;
    team: {
      name: string;
      role: string;
      href: string;
    }[];
    button: {
      label: string;
      href: string;
    };
  };
}) {
  return (
    <section className="bg-neutral-100">
      <Container className="grid place-items-center pt-20 pb-32 space-y-10">
        <h2 className="capitalize text-center">{content.title}</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {content.team.map((t) => (
            <Link
              key={t.name}
              href={t.href}
              className="group flex flex-col gap-2 items-center "
            >
              <div className=" relative w-[140px] aspect-square rounded-full overflow-hidden group-hover:scale-105 group-hover:-translate-y-[5px] transition-all duration-300">
                <Image
                  src={stock}
                  alt=""
                  className="absolute h-full object-cover"
                />
                <Image
                  src={stock}
                  alt=""
                  className="absolute h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                />
              </div>
              <div className="text-center">
                <p className="font-quattrocento group-hover:text-yellow-600 transition-colors">
                  {t.name}
                </p>
                <span>{t.role}</span>
              </div>
            </Link>
          ))}
        </div>

        <Button className="w-fit mx-auto" asChild>
          <Link href={content.button.href}>{content.button.label}</Link>
        </Button>
      </Container>
    </section>
  );
}

export { Team };
