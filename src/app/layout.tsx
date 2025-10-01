import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['700'],
});

export const metadata: Metadata = {
  title: "Dilip's Digital Domain",
  description: 'Personal portfolio of Dilip Vishwakarma, a Quality Engineer Analyst with 2+ years of experience in Manual & Automation Testing. Specializing in ServiceNow, Selenium with Java, and more.',
  keywords: ['QA Engineer', 'Software Tester', 'Automation Testing', 'Manual Testing', 'Selenium', 'Java', 'ServiceNow', 'Dilip Vishwakarma', 'Portfolio'],
  authors: [{ name: 'Dilip Vishwakarma' }],
  creator: 'Dilip Vishwakarma',
  openGraph: {
    title: "Dilip's Digital Domain",
    description: 'A showcase of my skills, projects, and achievements in software quality assurance.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#040d1c' },
    { media: '(prefers-color-scheme: dark)', color: '#040d1c' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
