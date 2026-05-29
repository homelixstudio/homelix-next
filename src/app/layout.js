import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export const metadata = {
  metadataBase: new URL("https://homelixstudio.in"),

  title: {
    default: "Homelix Studio | Luxury Interior Design in Mumbai",
    template: "%s | Homelix Studio",
  },

  description:
    "Homelix Studio creates luxury interiors, modular kitchens, bedrooms, living rooms and modern home designs with a concept-to-creation approach.",

  openGraph: {
    title: "Homelix Studio | Luxury Interior Design in Mumbai",
    description:
      "Luxury interior design studio specializing in modular kitchens, bedrooms, living rooms and modern home interiors.",
    url: "https://homelixstudio.in",
    siteName: "Homelix Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Homelix Studio Interior Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Homelix Studio",
    description: "Luxury interior design studio for modern homes and spaces.",
    images: ["/og-image.jpg"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
