import { Background } from "@/components/Background";
import Header from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Header />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}