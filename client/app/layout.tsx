import React from "react";
import AppBar from "../components/AppBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppBar />
        {children}
      </body>
    </html>
  );
}
