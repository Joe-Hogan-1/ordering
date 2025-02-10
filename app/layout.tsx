import { CustomCursor } from "@/components/custom-cursor";
import { SplashScreen } from "@/components/splash-screen";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
          <CustomCursor />
          <SplashScreen />
        </body>
      </html>
    </ClerkProvider>
  );
}
