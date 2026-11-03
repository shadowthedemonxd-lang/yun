import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yun · Asian Fusion & Sushi by Ismael Zhu" },
      {
        name: "description",
        content:
          "Yun Restaurant — chef Ismael Zhu blends traditional and contemporary Asian flavours into fusion sushi and seasonal plates. Book a table.",
      },
      { property: "og:title", content: "Yun · Asian Fusion & Sushi by Ismael Zhu" },
      {
        property: "og:description",
        content:
          "Fusion sushi and seasonal Asian plates from chef Ismael Zhu. Reserve your table at Yun.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const menu = [
  {
    name: "Zhu Tuna Crown",
    img: "/yun2.jpg",
    price: "$$",
    detail: "Bluefin tartare, avocado mousse, crisp nori, toasted sesame, yuzu soy",
  },
  {
    name: "Seared Tuna Tataki",
    img: "/yun.jpg",
    price: "$$$",
    detail: "Sesame crust, mango, daikon slaw, crispy shiso, ponzu emulsion",
  },
  {
    name: "Crimson Maki",
    img: "/yun5.jpg",
    price: "$$",
    detail: "Tuna cloak, eel, avocado, chive, sweet soy glaze",
  },
  {
    name: "Golden Spring Rolls",
    img: "/yun6.jpg",
    price: "$",
    detail: "Chicken, glass noodle, shiitake, black vinegar dip",
  },
  {
    name: "Amber Ikura Bite",
    img: "/yun7.jpg",
    price: "$$",
    detail: "Cured yolk, scallop, squid ink, aged mirin lacquer",
  },
  {
    name: "Jade Garden Roll",
    img: "/yun3.jpg",
    price: "$$",
    detail: "Soy paper, herb salad, cucumber ribbon, wasabi crème",
  },
];

const gallery = ["/yun3.jpg", "/yun7.jpg", "/yun5.jpg", "/yun.jpg", "/yun6.jpg", "/yun2.jpg"];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src="/yun8.jpg"
            alt="Fusion sushi bite topped with tuna and sesame"
            className="h-full w-full scale-110 object-cover opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,transparent,var(--background)_72%)]" />
        </div>

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <span className="font-display text-2xl font-extrabold tracking-tight">YUN</span>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#chef" className="transition-colors hover:text-primary">
              Chef
            </a>
            <a href="#menu" className="transition-colors hover:text-primary">
              Menu
            </a>
            <a href="#vibe" className="transition-colors hover:text-primary">
              The Room
            </a>
            <a href="#book" className="transition-colors hover:text-primary">
              Reserve
            </a>
          </div>
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#book">Book a Table</a>
          </Button>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-10 md:grid-cols-[1.1fr_0.9fr] md:pt-16">
          <Reveal>
            <p className="mb-6 inline-flex rounded-full border border-border bg-card/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground backdrop-blur">
              Asian Fusion · Sushi
            </p>
            <h1 className="font-display text-[19vw] font-extrabold leading-[0.82] md:text-[11rem]">
              <span className="text-gradient-warm">Yun</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Ismael Zhu&rsquo;s masterfully blended Asian flavours — where the discipline of
              tradition meets a restless, contemporary kitchen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#book">Book a Table</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-card/40 px-8 backdrop-blur hover:bg-card"
              >
                <a href="#menu">View Menu</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="animate-float relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-elegant">
              <img
                src="/yun5.jpg"
                alt="Crimson tuna maki roll plated at Yun"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Chef */}
      <section id="chef" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-elegant">
              <img
                src="/yun7.jpg"
                alt="Chef Ismael Zhu plating in the Yun kitchen"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">The Chef</p>
            <h2 className="mt-5 text-4xl font-bold md:text-5xl">Ismael Zhu</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Yun is built on a single idea: that the quiet precision of classic Asian cooking and
              the freedom of a modern kitchen belong on the same plate. Chef Ismael Zhu works close
              to the source — day-boat fish, hand-pressed rice, sauces reduced slowly — then lets
              contemporary technique tilt each dish somewhere unexpected.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                ["Daily", "Fish market"],
                ["12", "Seat counter"],
                ["1", "Tasting menu"],
              ].map(([big, small]) => (
                <div key={small} className="rounded-2xl bg-card p-5 text-center">
                  <p className="font-display text-2xl font-bold text-primary">{big}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{small}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Signatures</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold md:text-5xl">
            Fusion sushi and plates that travel
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <article className="group relative overflow-hidden rounded-[1.75rem] bg-card shadow-elegant transition-transform duration-500 hover:-translate-y-2">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4 p-6">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="text-primary">{item.price}</span>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-background/92 p-6 backdrop-blur transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vibe */}
      <section id="vibe" className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">The Room</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold md:text-5xl">
            Low light, open kitchen, slow evenings
          </h2>
        </Reveal>
        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-5 md:grid-cols-4">
          {gallery.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 70}
              className={i === 0 || i === 3 ? "col-span-2 row-span-2" : ""}
            >
              <div className="h-full overflow-hidden rounded-[1.75rem]">
                <img
                  src={src}
                  alt="Atmosphere at Yun restaurant"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reservation */}
      <section id="book" className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-8 rounded-[2.5rem] bg-card p-8 shadow-elegant md:grid-cols-2 md:p-12">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Reserve</p>
            <h2 className="mt-5 text-4xl font-bold">Book a table</h2>
            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Input required placeholder="Your name" className="h-12 rounded-2xl" />
              <Input
                required
                type="email"
                placeholder="Email address"
                className="h-12 rounded-2xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input required type="date" className="h-12 rounded-2xl" />
                <Input required type="time" className="h-12 rounded-2xl" />
              </div>
              <Textarea placeholder="Guests, allergies, occasion…" className="rounded-2xl" />
              <Button type="submit" size="lg" className="w-full rounded-full">
                {sent ? "Request sent — we'll confirm by email" : "Request reservation"}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src="/yun3.jpg"
                alt="Yun kitchen pass during service"
                loading="lazy"
                className="h-56 w-full object-cover"
              />
            </div>
            <div className="rounded-[1.75rem] bg-secondary p-7">
              <h3 className="text-lg font-semibold">Hours</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Tuesday – Thursday</span> <span>18:00 – 23:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday – Saturday</span> <span>18:00 – 00:30</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span> <span>13:00 – 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Monday</span> <span>Closed</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-full">
                  <a href="https://m.me" target="_blank" rel="noreferrer">
                    Messenger
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex h-40 items-center justify-center rounded-[1.75rem] border border-dashed border-border text-sm text-muted-foreground">
              Map — add your exact address
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p className="font-display text-xl font-extrabold text-foreground">YUN</p>
        <p className="mt-2">Asian fusion &amp; sushi by Ismael Zhu</p>
      </footer>
    </main>
  );
}
