"use client";

import { Button, Column, Grid, Theme } from "@carbon/react";
import { ArrowRight } from "@carbon/icons-react";
import { BrandLogo } from "@/components/BrandLogo";
import {
  EMBLEM_IMAGE_ALT,
  EMBLEM_TRADEMARK_NOTICE,
  SITE,
} from "@/lib/site";

export function HeroBand() {
  return (
    <Theme theme="g100">
      <section
        aria-labelledby="hero-heading"
        className="hero-band cds--padding-top-09 cds--padding-bottom-09"
      >
        <div className="hero-band__inner">
          <Grid narrow>
            <Column lg={8} md={6} sm={4}>
              <p className="cds--label-01 cds--text-secondary cds--margin-bottom-03 hero-band__eyebrow">
                {SITE.title}
              </p>
              <h1 id="hero-heading" className="cds--type-productive-heading-07">
                {SITE.heroHeading}
              </h1>
              <p className="cds--type-body-02 cds--margin-top-05 cds--margin-bottom-07 hero-band__tagline">
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
            <Column lg={8} md={6} sm={4} className="hero-band__emblem-column">
              <figure className="hero-band__figure">
                <div className="hero-band__emblem-ring">
                  <BrandLogo
                    variant="hero"
                    alt={EMBLEM_IMAGE_ALT}
                    priority
                  />
                </div>
                <figcaption
                  id="hero-emblem-notice"
                  className="hero-band__emblem-caption cds--helper-text-01 cds--margin-top-05"
                >
                  {EMBLEM_TRADEMARK_NOTICE}
                </figcaption>
              </figure>
            </Column>
          </Grid>
        </div>
      </section>
    </Theme>
  );
}
