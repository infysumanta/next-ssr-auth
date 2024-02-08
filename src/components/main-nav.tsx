"use client";
import React from "react";
import { Button } from "./ui/button";
import { CustomLink } from "./custom-link";

export function MainNav() {
  return (
    <div className="flex items-center space-x-2 lg:space-x-6">
      <CustomLink href="/">
        <Button variant="ghost" className="p-0">
          Logo
        </Button>
      </CustomLink>
    </div>
  );
}
