import "./globals.css";

export const metadata = {
  title: "Full Stack Open Next.js",
  description: "Learning Next.js with the University of Helsinki Full Stack Open course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}