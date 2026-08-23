"use client";

import { Fragment, type ReactNode } from "react";
import { LegalNav } from "./LegalNav";
import { useLang } from "@/lib/language";
import { links } from "@/lib/content";
import { legalDocs, type LegalKind } from "@/lib/legal";

function LinkedText({ text }: { text: string }) {
  const parts = text.split(/(\{email\}|\{phone\})/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part === "{email}") {
          return (
            <a key={index} href={`mailto:${links.email}`}>
              {links.email}
            </a>
          );
        }
        if (part === "{phone}") {
          return (
            <a key={index} href={`tel:${links.phone}`}>
              {links.phoneDisplay}
            </a>
          );
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

export function LegalDoc({ kind }: { kind: LegalKind }) {
  const { lang, dict } = useLang();
  const doc = legalDocs[lang][kind];

  const body: ReactNode = (
    <>
      {dict.legal.officialNote ? (
        <p className="legal-doc__note">{dict.legal.officialNote}</p>
      ) : null}
      {doc.blocks.map((block, index) => {
        if (block.type === "h2") {
          return <h2 key={index}>{block.text}</h2>;
        }
        if (block.type === "ul") {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index}>
            <LinkedText text={block.text} />
          </p>
        );
      })}
    </>
  );

  return (
    <LegalNav>
      <h1>{doc.title}</h1>
      {body}
    </LegalNav>
  );
}
