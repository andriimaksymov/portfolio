"use client";

import { useCallback, useRef } from "react";

type WorkPreviewProps = {
  num: string;
  title: string;
  year: string;
  meta: string;
  image: string;
  imageAlt: string;
  href?: string;
};

export function WorkPreview({ num, title, year, meta, image, imageAlt, href }: WorkPreviewProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Clicks on the dialog element itself land on the backdrop area;
  // clicks inside .preview-frame have a child as target.
  const onDialogClick = useCallback((e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) dialogRef.current.close();
  }, []);

  return (
    <>
      <button
        type="button"
        className="work-preview-btn mono"
        aria-haspopup="dialog"
        aria-label={`Preview ${title}`}
        onClick={open}
      >
        Preview
      </button>

      <dialog ref={dialogRef} className="preview" aria-label={`${title} preview`} onClick={onDialogClick}>
        <div className="preview-frame">
          <header className="preview-head mono">
            <span className="preview-name">
              <span className="preview-num">{num}</span> {title} &mdash; {year}
            </span>
            <button type="button" className="preview-close" onClick={close}>
              Close <span className="preview-kbd" aria-hidden="true">Esc</span>
            </button>
          </header>
          <img className="preview-img" src={image} alt={imageAlt} width={1440} height={900} loading="lazy" />
          <footer className="preview-foot mono">
            <span className="preview-meta">{meta}</span>
            {href && (
              <a href={href} target="_blank" rel="noopener noreferrer">
                Open live site <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </footer>
        </div>
      </dialog>
    </>
  );
}
