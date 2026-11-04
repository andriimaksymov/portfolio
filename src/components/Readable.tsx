import { Fragment } from "react";

/**
 * Renders "11% → 99%" so screen readers say "11% to 99%" instead of
 * "11% right arrow 99%". The arrow stays visible.
 */
export function Readable({ text }: { text: string }) {
  const parts = text.split("→");
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <>
              <span aria-hidden="true">→</span>
              <span className="sr-only">to</span>
            </>
          )}
          {part}
        </Fragment>
      ))}
    </>
  );
}
