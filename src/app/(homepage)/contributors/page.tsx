import { Metadata } from "next";
import { ogImageUrl, siteUrl } from "~/lib/env-urls";
import { DynamicFooter } from "../_components/footer/dynamic-footer";

export const metadata: Metadata = {
  title: "Contributors",
  description:
    "Meet the contributors behind Zedu - the developers, designers, and educators building an AI-powered learning platform for bootcamps, schools, and cohorts.",
  keywords: [
    "Zedu contributors",
    "Zedu team",
    "open source contributors",
    "learning platform builders",
    "Zedu community",
    "education technology contributors",
  ],
  icons: {
    icon: "/TelexIcon.svg",
  },
  openGraph: {
    title: "Zedu Contributors - The People Behind the Platform",
    description:
      "Celebrate the community of developers, designers, and educators building Zedu, an AI-powered learning platform for modern cohorts.",
    url: siteUrl("/contributors"),
    siteName: "Zedu",
    images: [
      {
        url: ogImageUrl("og-image-5.png"),
        width: 1200,
        height: 630,
        alt: "Zedu contributors page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zedu Contributors - The People Behind the Platform",
    description:
      "Meet the community of builders behind Zedu, an AI-powered learning platform for bootcamps, schools, and cohorts.",
    images: [ogImageUrl("og-image-5.png")],
  },
  alternates: {
    canonical: siteUrl("/contributors"),
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Contributor = {
  name: string;
  alias: string;
};

const contributors: Contributor[] = [
  { name: "Edafe Akpokiniovo", alias: "Edafe" },
  { name: "Samuel Mukoro", alias: "samuel mukoro" },
  { name: "Yolanda Amos", alias: "yolanda amos" },
  { name: "Helen Agbro", alias: "Helen Agbro" },
  { name: "Umunnakwe Clara Chioma", alias: "CeeCee - Clara" },
  { name: "Awosika Ayomide", alias: "awosika_ayomide" },
  { name: "Abd Kabeer Salako", alias: "Abd Kabeer" },
  { name: "Brian Ibekwe", alias: "Monkey Monkey" },
  { name: "Reneilwe Taunyane", alias: "Reneilwe - Taunyane" },
  { name: "Timothy Mayor", alias: "tsmayor" },
  { name: "Funsho Kamoru", alias: "Funsho Kamoru" },
  { name: "Baruwa Abdul-Azeez", alias: "Abdul-Azeez Mayowa" },
  { name: "Barakat Oladejo", alias: "Barakat_O" },
  { name: "Charles Nwaobasi", alias: "Igwecharles" },
  { name: "Drenkat Nathan Nankaham", alias: "KIZZYDEDESIGNER" },
  { name: "Mustapha Agboola", alias: "MustaphaAgboola" },
  { name: "Nie Osaoboh", alias: "nieosas" },
  { name: "Ali Ogochukwu Peter", alias: "Ali - Peter" },
  { name: "Ayodeji Saberedowo", alias: "sabhayor" },
  { name: "Jennifer Francis", alias: "Jenie" },
  { name: "Olubunmi Elegbeleye", alias: "Bunnies" },
  { name: "Folorunso Tolulope", alias: "Tolulope_builds" },
  { name: "Ibrahim Joy", alias: "Joy / tolhim17" },
  { name: "Richard Oduh", alias: "richard_oduh" },
  { name: "Ikeanyionwu Blessing Ngozi", alias: "PurpleTechie" },
  { name: "Faith Dombe", alias: "faith.dombe04" },
];

const avatarGradients = [
  "from-primary-500 to-primary-300",
  "from-blue-500 to-blue-200",
  "from-secondary-500 to-tertiary-400",
  "from-tertiary-500 to-secondary-300",
  "from-primary-400 to-blue-400",
  "from-blue-200 to-primary-300",
];

const getInitials = (name: string) => {
  const parts = name.split(/[\s-]+/).filter(Boolean);
  return `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`.toUpperCase();
};

const getAvatarGradient = (name: string) => {
  const hash = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return avatarGradients[hash % avatarGradients.length];
};

const isAliasRedundant = (contributor: Contributor) =>
  contributor.alias.trim().toLowerCase() ===
  contributor.name.trim().toLowerCase();

const ContributorsPage = () => {
  return (
    <div className="space-y-20">
      <section className="relative isolate flex w-full flex-col items-center gap-4 overflow-hidden px-4 py-10 text-center sm:gap-6 sm:px-8 sm:py-16 lg:gap-8 lg:px-12 mt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[30%] bg-gradient-to-t from-blue-50/30 to-white"
        />
        <h1 className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-4xl md:text-5xl text-center">
          The People Behind <span className="text-primary-500">Zedu</span>
        </h1>
        <p className="max-w-[95%] text-xs text-neutral-600 sm:max-w-[90%] sm:text-base md:max-w-[65%] lg:max-w-[45%] lg:text-lg">
          Zedu is built by a community of developers, designers, and educators.
          This page celebrates everyone who has contributed to making the
          platform what it is.
        </p>
        <p className="rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-medium text-primary-500 sm:text-sm">
          {contributors.length} Contributors and counting
        </p>
      </section>

      <section className="w-full px-4 sm:px-8 lg:px-12">
        <ul className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5">
          {contributors.map((contributor) => (
            <li key={contributor.name}>
              <article className="flex h-full flex-col items-center gap-3 rounded-xl border border-neutral-200 px-4 py-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary-200 hover:shadow-md">
                <div
                  aria-hidden="true"
                  className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br text-lg font-semibold text-white ${getAvatarGradient(contributor.name)}`}
                >
                  {getInitials(contributor.name)}
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-semibold text-neutral-900">
                    {contributor.name}
                  </h2>
                  {!isAliasRedundant(contributor) && (
                    <p className="text-sm text-neutral-500">
                      {contributor.alias}
                    </p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <DynamicFooter
        text="Want to See Your Name Here?"
        description="Join the Zedu community of builders. Contribute code, design, or ideas and help shape the future of organized learning."
      />
    </div>
  );
};

export default ContributorsPage;
