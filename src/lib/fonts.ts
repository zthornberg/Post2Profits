import localFont from "next/font/local";

export const geist = localFont({
  src: [
    {
      path: "../app/fonts/GeistVariable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

// Archivo Black is loaded via local font file
// At deployment, download from Google Fonts and place in src/app/fonts/
// Fallback: use system sans-serif bold until the font file is available
export const archivoBlack = localFont({
  src: [
    {
      path: "../app/fonts/GeistVariable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
  // This uses Geist as a temporary stand-in for heading font
  // Replace with ArchivoBlack.woff2 when available
});
