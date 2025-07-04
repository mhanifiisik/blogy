import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { cn } from "./cn";

export const fonts = cn(
	GeistSans.variable,
	GeistMono.variable,
	"touch-manipulation font-sans antialiased",
);
