import { Marqy } from "marqy";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/utils/sanityFetch/sanity";

const Marquee = ({ data }) => {
  const { items, speed, reverse, pausable } = data
  if (!items?.length) return null;

  return (
    <div className="marquee-section whitespace-normal">
      <Marqy
        speed={speed}
        direction={reverse ? "right" : "left"}
        pauseOnHover={pausable}
      >
        <div className="flex">
          {items.map((item, key) => {
            switch (item._type) {
              case "simple":
                return (
                  <span key={key} className="block p-32 text-48 leading-100">
                    {item.text}
                  </span>
                );
              case "photo":
                if (item.linkType == "external") {
                  return (
                    <Link key={key} href={item.url}>
                      <section className="block p-9 ">
                        <Image
                          src={urlFor(item.asset._ref).url()}
                          width="100"
                          height="100"
                          alt={item.alt}
                        />
                      </section>
                    </Link>
                  );
                } else if (item.linkType == "internal") {
                  return (
                    <Link key={key} href={item.slug}>
                      <div className="block p-9 ">
                        <Image
                          src={urlFor(item.asset._ref).url()}
                          width="100"
                          height="100"
                          alt={item.alt}
                        />
                      </div>
                    </Link>
                  );
                }
            }
          })}
        </div>
      </Marqy>
    </div>
  );
};

export default Marquee;
