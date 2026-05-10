"use client";

import {
  ExpandableTile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent,
} from "@carbon/react";

type Props = {
  teaser: string;
  /** Full paragraphs shown when expanded (includes complete versions of teaser content). */
  fullParagraphs: readonly string[];
};

export function HistoryExpandable({ teaser, fullParagraphs }: Props) {
  return (
    <ExpandableTile
      tileCollapsedLabel="Show more"
      tileExpandedLabel="Show less"
      tileCollapsedIconText="Expand history"
      tileExpandedIconText="Collapse history"
    >
      <TileAboveTheFoldContent>
        <p className="cds--type-body-01">{teaser}</p>
      </TileAboveTheFoldContent>
      <TileBelowTheFoldContent>
        {fullParagraphs.map((text, index) => (
          <p
            key={index}
            className="cds--type-body-01 cds--margin-bottom-03"
          >
            {text}
          </p>
        ))}
      </TileBelowTheFoldContent>
    </ExpandableTile>
  );
}
