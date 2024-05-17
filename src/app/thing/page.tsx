"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import OrbitingCirclesDemo from "@/components/global/globe"
import Link from "next/link";

export default function HeroSectionGradientBackground() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
      }}
    >
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="relative z-10">
            <div className="container py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
                <div className="mt-5 max-w-2xl">
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Hi, my name is Aadil!
                  </h1>
                </div>
                <div className="mt-5 max-w-3xl">
                  <p className="text-xl text-muted-foreground">
                    Welcome to my portfolio! I am a computer science student at Hofstra University.
                  </p>
                </div>
                <div className="mt-8 gap-3 flex justify-center">
                  <Button size={"lg"}>Take a look</Button>
                  <Button size={"lg"} variant={"outline"} asChild>
                    <Link href="https://github.com/Aadil1505">
                      GitHub&nbsp;<Github />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="flex justify-center py-8">
        <OrbitingCirclesDemo />
      </div>
    </motion.div>
    </>
  );
}
