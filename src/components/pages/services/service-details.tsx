import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import stock from "@p/stock.jpg";
function ServiceDetails({
  content,
}: {
  content: {
    name: string;
    description: string;
    closing: string;
  }[];
}) {
  return (
    <section className="grid grid-cols-[16rem_1fr]">
      <aside className="sticky top-20 left-0 h-[calc(100vh-5rem)] p-4 bg-neutral-900 text-white overflow-y-scroll">
        <ol className="text-sm">
          {content.map((s) => {
            const href = s.name.toLowerCase().split(" ").join("-");
            return (
              <li key={s.name} className={cn(`py-1 px-2 rounded-md`)}>
                <Link href={`#${href}`}>{s.name}</Link>
              </li>
            );
          })}
        </ol>
      </aside>
      <ol className="h-full space-y-2 pt-2">
        {content.map((s, idx) => (
          <li
            key={s.name}
            id={s.name.toLowerCase().split(" ").join("-")}
            className={cn(
              `flex h-[550px] ${idx % 2 !== 0 ? "bg-neutral-100" : "bg-white"}`
            )}
          >
            <Image
              src={stock}
              alt={s.name}
              className="w-1/3 h-full object-cover [mask-image:linear-gradient(to_right,black,transparent)]"
            />
            <div className="w-full p-4 grid place-content-center text-justify">
              <h3 className="mb-4 text-2xl text-center">{s.name}</h3>
              <div className="max-w-xl">
                <p>{s.description}</p>
                <br />
                <p>{s.closing}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export { ServiceDetails };