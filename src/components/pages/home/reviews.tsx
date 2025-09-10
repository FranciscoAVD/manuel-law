import { Container } from "@/components/ui/container";
import { InfiniteMovingCards } from "@/components/ui/infinite-carousel";

function Reviews({
  content,
}: {
  content: {
    title: string;
    cards: {
      client: string;
      review: string;
    }[];
  };
}) {
  return (
    <section className="">
      <Container className="py-20 space-y-6">
        <h2 className="text-4xl text-center capitalize">{content.title}</h2>

        <InfiniteMovingCards speed="slow" reviews={content.cards} />
      </Container>
    </section>
  );
}

export { Reviews };
