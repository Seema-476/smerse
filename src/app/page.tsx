import About from "@/components/About";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Smerse",
  description: "SMERSE FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE",
  metadataBase: new URL('https://allsome-next-eight.vercel.app/'),
  openGraph: {
    images: '/meta-image.png',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
    </>
  );
}
