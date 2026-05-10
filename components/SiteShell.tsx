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
  Theme,
} from "@carbon/react";
import { Calendar } from "@carbon/icons-react";
import { BrandLogo } from "@/components/BrandLogo";

export function SiteShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Theme theme="g100">
        <Header aria-label="JASADA, LLC" className="site-shell-header">
          <SkipToContent />
          <HeaderName href="/" prefix="">
            <span className="site-header-lockup">
              <BrandLogo variant="header" alt="" />
              <span className="site-header-lockup__text">JASADA, LLC</span>
            </span>
          </HeaderName>
          <HeaderNavigation aria-label="Primary navigation">
            <HeaderMenuItem href="#welcome">Welcome</HeaderMenuItem>
            <HeaderMenuItem href="#services">What We Do</HeaderMenuItem>
            <HeaderMenuItem href="#about">About</HeaderMenuItem>
            <HeaderMenuItem href="#contact">Contact</HeaderMenuItem>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Email us"
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
      </Theme>
      <Content id="main-content">{children}</Content>
    </>
  );
}
