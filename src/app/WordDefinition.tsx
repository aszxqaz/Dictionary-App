"use client";
import { DictApiParser } from "@/dictionary-api/DictApiParser";
import { Word } from "@/dictionary-api/types";
import { useState } from "react";
import styles from "./WordDefinition.module.scss";
import Image from "next/image";
import play from "../assets/icons/play.svg";
import { HorizontalLine } from "@/components/HorizontalLine/HorizontalLine";

type WordDefinitionProps = {
  word: Word;
};

export const WordDefinition: React.FC<WordDefinitionProps> = ({ word }) => {
  const [parsed] = useState(new DictApiParser(word));
  return (
    <article className="container">
      <header className={styles.header}>
        <div className={styles.leftside}>
          <div className={`${styles.heading} heading-large`}>
            {parsed.getWord()}
          </div>
          <div className="heading-medium color-blue">
            {parsed.getPhonetic()}
          </div>
        </div>
        <div>
          <Image src={play} alt="Play speech" />
        </div>
      </header>
      {parsed.getMeanings().map((obj) => (
        <section className={styles.section} key={obj.partOfSpeech}>
          <div className={styles.partOfSpeech}>
            <div className="heading-medium bold">{obj.partOfSpeech}</div>
            <HorizontalLine />
          </div>
          <div className="heading-small text-secondary">Meaning</div>
          <ul className={`${styles.list} paragraph-medium`}>
            {obj.definitions.map((meaning) => (
              <li className={styles.listitem} key={meaning.definition}>
                <p className={styles.meaning}>{meaning.definition}</p>
                {meaning.example ? (
                  <q className="text-secondary">{meaning.example}</q>
                ) : null}
              </li>
            ))}
          </ul>
          {obj.synonyms.length ? (
            <div className="heading-small">
              <span className="text-secondary mr-22">Synonyms</span>
              {obj.synonyms.map((synonym) => (
                <span className="text-blue bold">{synonym}</span>
              ))}
            </div>
          ) : null}
        </section>
      ))}
      <HorizontalLine />
      <div className="paragraph-small mblock-20">
        <span className="text-secondary mr-22">Source</span>
        {parsed.getSourceUrls().map((url) => (
          <a href={url}>{url}</a>
        ))}
      </div>
    </article>
  );
};
