import { Toaster } from "@/components/ui/sonner";
import Header from "../components/ui/Header";

export default function Home() {
  return (
    <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Toaster />
      <Header />
    </main>
  );
}
