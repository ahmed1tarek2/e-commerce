import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata = {
  title: "My Website",
  description: "Next.js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
