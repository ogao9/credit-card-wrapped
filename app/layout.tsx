import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Credit Card Wrapped",
	description: "Your credit card transaction history wrapped.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<body className="max-w-[400px] mx-auto m-0 p-0 min-h-screen">{children}</body>
		</html>
	);
}
