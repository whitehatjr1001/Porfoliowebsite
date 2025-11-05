"use client";

import { Home, User, Briefcase, GraduationCap, Award, MessageSquare, BookOpen, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Menubar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 p-2 bg-background/50 backdrop-blur-sm rounded-full border">
        <Link href="#home">
          <div className="p-2 rounded-full hover:bg-primary/10">
            <Home className="w-6 h-6" />
          </div>
        </Link>
        <Link href="#experience">
          <div className="p-2 rounded-full hover:bg-primary/10">
            <Briefcase className="w-6 h-6" />
          </div>
        </Link>
        <Link href="#projects">
          <div className="p-2 rounded-full hover:bg-primary/10">
            <Award className="w-6 h-6" />
          </div>
        </Link>
        <Link href="#publications">
          <div className="p-2 rounded-full hover:bg-primary/10">
            <BookOpen className="w-6 h-6" />
          </div>
        </Link>
        <Link href="#education">
          <div className="p-2 rounded-full hover:bg-primary/10">
            <GraduationCap className="w-6 h-6" />
          </div>
        </Link>
        <Link href="#skills">
          <div className="p-2 rounded-full hover:bg-primary/10">
            <Star className="w-6 h-6" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menubar;
