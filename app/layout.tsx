import { CustomCursor } from "@/components/custom-cursor";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <CustomCursor />
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
