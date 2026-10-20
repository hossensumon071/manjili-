import { Fragment } from "react";

/**
 * Arabic RTL rule 5: phone numbers and emails always render left-to-right.
 * Wraps every phone/email run inside a string in <bdi dir="ltr">.
 */
const LTR_RUN = /(\+?\d[\d\s]{6,}\d|[\w.+-]+@[\w-]+\.[\w.]+)/g;

export function Bidi({ text }: { text: string }) {
  const parts = text.split(LTR_RUN);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <bdi key={i} dir="ltr">
            {p}
          </bdi>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}
