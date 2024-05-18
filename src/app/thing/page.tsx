"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Building2Icon, ThumbsUpIcon, Users2Icon } from "lucide-react";
import OrbitingCirclesDemo from "@/components/global/globe"
import TextReveal from "@/components/ui/text-reveal";
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
                    Welcome to my portfolio! Heres a little bit about me.
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
      <div className="z-10 flex min-h-[16rem] items-center justify-center">
        <TextReveal text="Aspiring software engineer, entrepeneur, and developer." />
      </div>
            {/* Icon Blocks */}
            <div className="container py-24 lg:py-32">
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">About Me</h2>
              <p className="mt-3 text-muted-foreground">
              My love for coding started years ago when I became obsessed with PC building. 
              I slowly realized that building these high-power computers became the only activity 
              that satisfied my desire to create. Years later that passion for building and creating 
              transitioned into coding as I became more familiar with computers. Watching my wildest 
              ideas come to life on a screen in front of me consistently gives my mind a spark of inspiration 
              and excitement. I got my introduction to programming in just the 10th grade, when I created my 
              very first app. Using Javascript and a New York Stock Exchange database, I built an app that 
              informed its user how much potential profit they could have made on a Stock or ETF, had they 
              invested at any user-specified time period. This project sent me spiraling down a rabbit hole of 
              ideas and projects that inspired me to learn more about coding and how I could use it to create. 
              Today I am a Computer Science Technician at Hofstra University where I build, fix, and optimize 
              the department&apos;s software and hardware, collaborate with peers and coworkers on projects to ensure 
              a functional tech ecosystem, research systems and products that could increase workflow, and document 
              code and guides for newly imlplemented systems. I am also actively pursuing a B.S. in Computer Science at Hofstra University.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    High quality Co-Living spaces
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our fully furnished spaces are designed and purpose-built
                    with Co-Living in mind, featuring high-end finishes and
                    amenities that go far beyond traditional apartment
                    buildings.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Fostering vibrant communities
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our passion is bringing people together. Beyond creating
                    beautiful spaces, we provide shared experiences.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Simple and all-inclusive
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We worry about the details so that our residents don&apos;t
                    have to. From our online application process to simple,
                    all-inclusive billing we aim to make the living experience
                    as effortless as possible.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </motion.div>
    </>
  );
}
