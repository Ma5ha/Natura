import SideNav from "@/app/components/side-nav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <div className="flex h-full gap-5">
      <SideNav />
      {children}
    </div>
  );
}
