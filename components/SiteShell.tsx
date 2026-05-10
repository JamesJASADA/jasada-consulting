"use client";

import {
  Content,
  Header,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenuItem,
  HeaderNavigation,
  HeaderName,
  SkipToContent,
} from "@carbon/react";
import { Calendar } from "@carbon/icons-react";

export function SiteShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header aria-label="JASADA, LLC">
        <SkipToContent />
        <HeaderName href="/" prefix="">
          JASADA, LLC
        </HeaderName>
        <HeaderNavigation aria-label="Primary navigation">
          <HeaderMenuItem href="#welcome">Welcome</HeaderMenuItem>
          <HeaderMenuItem href="#services">What We Do</HeaderMenuItem>
          <HeaderMenuItem href="#about">About</HeaderMenuItem>
          <HeaderMenuItem href="#contact">Contact</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Book online"
            tooltipAlignment="end"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Calendar size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
      <Content id="main-content">{children}</Content>
    </>
  );
}
