import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="
        min-h-screen
        bg-gray-50 dark:bg-gray-950
        text-black dark:text-white
        transition-colors
      ">
        <Navbar />
<main className="w-full px-4 sm:px-8 lg:px-12 py-6">
  {children}
</main>
      </body>
    </html>
  );
}