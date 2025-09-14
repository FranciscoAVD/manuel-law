import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

import stock from "@p/images/stock.jpg";

function Services({
  content,
}: {
  content: {
    title: string;
    cards: {
      label: string;
      hover: string;
      href: string;
      imgPath: string;
    }[];
    button: {
      label: string;
      href: string;
    };
  };
}) {
  return (
    <section className="">
      <Container className="py-20 pb-32 space-y-10">
        <h2 className="text-center">{content.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
          {content.cards.map((c) => (
            <Card
              key={c.label}
              label={c.label}
              img={c.imgPath}
              href={c.href}
              hover={c.hover}
            />
          ))}
        </div>
        <Button className="block w-fit mx-auto" asChild>
          <Link href={content.button.href}>{content.button.label}</Link>
        </Button>
      </Container>
    </section>
  );
}

function Card(props: {
  label: string;
  img: StaticImageData | string;
  href: string;
  hover: string;
}) {
  return (
    <div>
      <div className="relative aspect-video rounded-md overflow-hidden">
        <Image
          src={props.img}
          alt=""
          className="w-full h-full object-cover"
          width={500}
          height={300}
        />
        <div className="absolute inset-0 grid place-content-center bg-neutral-900/70 opacity-0 hover:opacity-100 transition-all duration-300">
          <Button variant="link" className="text-white" asChild>
            <Link
              href={`${props.href}#${props.label
                .toLowerCase()
                .split(" ")
                .join("-")}`}
            >
              {props.hover}
            </Link>
          </Button>
        </div>
      </div>
      <Button variant={"link"} className="block w-fit mx-auto text-lg" asChild>
        <Link
          href={`${props.href}#${props.label
            .toLowerCase()
            .split(" ")
            .join("-")}`}
          className="underline"
        >
          {props.label}
        </Link>
      </Button>
    </div>
  );
}

export { Services };
