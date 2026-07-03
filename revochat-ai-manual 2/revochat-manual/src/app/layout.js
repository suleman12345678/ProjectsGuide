import "./globals.css";

export const metadata = {
  title: "RevoChat AI — Setup & Walkthrough Guide",
  description:
    "A step-by-step visual guide to the RevoChat AI landing page and dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
