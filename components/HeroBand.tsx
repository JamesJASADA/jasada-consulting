"use client";

import { Button, Column, Grid, Theme } from "@carbon/react";
import { ArrowRight } from "@carbon/icons-react";
import { SITE } from "@/lib/site";

export function HeroBand() {
  return (
    <Theme theme="g100">
      <section
        aria-labelledby="hero-heading"
        className="cds--padding-top-09 cds--padding-bottom-09"
      >
        <Grid narrow>
          <Column lg={9} md={6} sm={4}>
            <p className="cds--label-01 cds--text-secondary cds--margin-bottom-03">
              {SITE.title}
            </p>
            <h1 id="hero-heading" className="cds--type-productive-heading-07">
              {SITE.heroHeading}
            </h1>
            <p className="cds--type-body-02 cds--margin-top-05 cds--margin-bottom-07">
              {SITE.heroSubheading}
            </p>
            <Button
              href="#contact"
              renderIcon={ArrowRight}
              iconDescription="Go to booking"
            >
              Book online
            </Button>
          </Column>
        </Grid>
      </section>
    </Theme>
  );
}
