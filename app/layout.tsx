import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
});

const monument = localFont({
	src: [
		{
			path: '../public/fonts/MonumentExtended-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/MonumentExtended-Ultrabold.otf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-bold-sans',
});

export const metadata: Metadata = {
	title: 'Altux Studio',
	description:
		'Crafting modern web experiences with cutting-edge development, UI/UX design, and innovative coding solutions.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='dark'
			suppressHydrationWarning>
			<body
				className={`${inter.className} ${monument.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
