import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-black text-white">
      <h1 className="text-4xl font-bold">Coming Soon</h1>
      <Button
        className="mt-4"
        size="lg"
        variant="bordered"
        as={Link}
        href="/"
        color="primary"
      >
        Go Home
      </Button>
    </main>
  );
}
