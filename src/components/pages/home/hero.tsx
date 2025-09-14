import Image from "next/image";
import hero from "@p/images/hero.jpg";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero({
  content,
}: {
  content: {
    title: string[];
    description: string;
    button: {
      label: string;
      href: string;
    };
  };
}) {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt=""
          className="ml-auto w-full lg:w-[50%] h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 lg:bg-gradient-to-r lg:from-neutral-900 lg:from-50% lg:to-transparent lg:to-70%"></div>
      </div>
      <Container className="relative pt-20 pb-32">
        <div>
          <h1 className="text-white space-y-2">
            {content.title.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </h1>
          <p className="text-lg md:text-base max-w-sm mb-6 text-white text-justify">
            {content.description}
          </p>
        </div>
        <Button
          className="text-base bg-yellow-600 hover:bg-yellow-600/90"
          asChild
        >
          <Link href={content.button.href}>{content.button.label}</Link>
        </Button>
      </Container>
    </section>
  );
}

export { Hero };
