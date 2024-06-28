import Sidebar from "@/components/myUI/Sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
}
