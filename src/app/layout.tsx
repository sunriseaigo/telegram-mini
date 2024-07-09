import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { Root } from "@/components/Root/Root";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css/normalize.css";
import "./_assets/globals.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Application Title Goes Here",
  description: "Your application description goes here",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen w-full bg-donate-bg pt-[15px] relative overflow-x-hidden">
          <div className="w-full px-[19px]">
            <Root>{children}</Root>
          </div>
        </div>
      </body>
    </html>
  );
}
