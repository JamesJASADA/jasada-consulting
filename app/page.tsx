import {
  Button,
  Column,
  Grid,
  Layer,
  Link,
  Tile,
} from "@carbon/react";
import { HeroBand } from "@/components/HeroBand";
import { HistoryExpandable } from "@/components/HistoryExpandable";
import { SiteShell } from "@/components/SiteShell";
import { HISTORY_FULL, HISTORY_TEASER, SITE } from "@/lib/site";

export default function Home() {
  return (
    <SiteShell>
      <HeroBand />

      <Layer level={1}>
        <section
          id="welcome"
          aria-labelledby="welcome-heading"
          className="cds--padding-top-07 cds--padding-bottom-07"
        >
          <Grid narrow>
            <Column lg={8} md={6} sm={4}>
              <h2
                id="welcome-heading"
                className="cds--type-productive-heading-04 cds--margin-bottom-05"
              >
                Welcome
              </h2>
              <p className="cds--type-body-01">
                Have a look around and learn all there is to know about JASADA,
                LLC. Take a moment to drop us a line so we can talk about next
                steps.
              </p>
              <div className="cds--margin-top-05">
                <Link href="#services">Find out more</Link>
              </div>
            </Column>
          </Grid>
        </section>
      </Layer>

      <section
        id="services"
        aria-labelledby="services-heading"
        className="cds--padding-top-07 cds--padding-bottom-07"
      >
        <Grid narrow>
          <Column lg={10} md={8} sm={4}>
            <h2
              id="services-heading"
              className="cds--type-productive-heading-04 cds--margin-bottom-06"
            >
              What we do
            </h2>

            <h3 className="cds--type-productive-heading-03 cds--margin-bottom-03">
              Quick history
            </h3>
            <HistoryExpandable
              teaser={HISTORY_TEASER}
              fullParagraphs={HISTORY_FULL}
            />

            <h3 className="cds--type-productive-heading-03 cds--margin-top-07 cds--margin-bottom-03">
              Our expertise
            </h3>
            <Tile className="cds--margin-bottom-05">
              <p className="cds--type-body-01 cds--text-secondary">
                (Add historical expertise here)
              </p>
            </Tile>
          </Column>
        </Grid>
      </section>

      <Layer level={1}>
        <section
          id="about"
          aria-labelledby="about-heading"
          className="cds--padding-top-07 cds--padding-bottom-07"
        >
          <Grid narrow>
            <Column lg={8} md={6} sm={4}>
              <h2
                id="about-heading"
                className="cds--type-productive-heading-04 cds--margin-bottom-05"
              >
                About JASADA, LLC
              </h2>
              <h3 className="cds--type-productive-heading-03 cds--margin-bottom-03">
                Why us?
              </h3>
              <p className="cds--type-body-01">
                Business partners are key—that&apos;s why when it comes to
                partner and client selection, we&apos;re choosy. We want to give
                each of you the time and guidance you deserve. Whether you&apos;re
                seeking a strategic alliance with the right partner or a special
                skillset or tool, call us today. Together we&apos;ll create and
                refine your plan for success. We didn&apos;t get there alone. And
                neither will you.
              </p>
            </Column>
          </Grid>
        </section>
      </Layer>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="cds--padding-top-07 cds--padding-bottom-09"
      >
        <Grid narrow>
          <Column lg={6} md={6} sm={4}>
            <Tile>
              <h2
                id="contact-heading"
                className="cds--type-productive-heading-04 cds--margin-bottom-05"
              >
                Book online
              </h2>
              <p className="cds--type-body-01 cds--margin-bottom-05">
                Ready to talk? Send us a message and we&apos;ll follow up on next
                steps.
              </p>
              <Button kind="primary" href={`mailto:${SITE.contactEmail}`}>
                Email us
              </Button>
            </Tile>
          </Column>
        </Grid>
      </section>

      <footer className="cds--padding-bottom-07">
        <Grid narrow>
          <Column lg={16}>
            <p className="cds--helper-text-01">
              Copyright © {new Date().getFullYear()} JASADA, LLC — All rights
              reserved.
            </p>
          </Column>
        </Grid>
      </footer>
    </SiteShell>
  );
}
