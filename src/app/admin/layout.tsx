export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={params.locale}>
      <body className="font-inter h-screen bg-gray-50 bg-gradient-to-tl from-gray-200/50 from-50%">
        {children}
      </body>
    </html>
  );
}
