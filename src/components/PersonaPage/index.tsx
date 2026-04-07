import React from "react";
import Link from "@docusaurus/Link";
import { personas, type Persona, type Pattern } from "@site/src/data/personas";
import { categories } from "@site/src/data/categories";
import styles from "./styles.module.css";

function groupByCategory(patterns: Pattern[]): Map<string, Pattern[]> {
  const map = new Map<string, Pattern[]>();
  for (const p of patterns) {
    const group = map.get(p.category) ?? [];
    group.push(p);
    map.set(p.category, group);
  }
  return map;
}

type Props = {
  persona: Persona;
};

export default function PersonaPage({ persona }: Props): JSX.Element {
  const { name, description, patterns } = persona;
  const grouped = groupByCategory(patterns);
  const categoryOrder = ["Requirements", "Architecture", "Development", "Operations"];
  const sortedCategories = [...grouped.keys()].sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerTag}>Persona</div>
        <p className={styles.headerDescription}>{description}</p>
        <span className={styles.headerCount}>
          {patterns.length} pattern{patterns.length !== 1 ? "s" : ""}
        </span>
      </div>

      {patterns.length === 0 ? (
        <p className={styles.emptyState}>No patterns assigned to this persona yet.</p>
      ) : (
        sortedCategories.map((category) => (
          <div key={category} className={styles.categorySection}>
            <h2 className={styles.categoryHeading}>{category}</h2>
            <div className={styles.patternGrid}>
              {grouped.get(category)!.map((pattern) => (
                <Link
                  key={pattern.permalink}
                  to={pattern.permalink}
                  className={styles.patternCard}
                >
                  <span className={styles.patternTitle}>{pattern.title}</span>
                  {pattern.description && (
                    <p className={styles.patternDescription}>{pattern.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export function CategoriesIndexContent(): JSX.Element {
  const patternsByCategory = new Map<string, Set<string>>();
  for (const persona of personas) {
    for (const pattern of persona.patterns) {
      const key = pattern.category;
      if (!patternsByCategory.has(key)) patternsByCategory.set(key, new Set());
      patternsByCategory.get(key)!.add(pattern.permalink);
    }
  }

  return (
    <div className={styles.indexGrid}>
      {categories.map((cat) => {
        const count = patternsByCategory.get(cat.name)?.size ?? 0;
        return (
          <Link key={cat.slug} to={cat.path} className={styles.indexCard}>
            <div className={styles.indexCardHeader}>
              <span className={styles.indexCardName}>{cat.name}</span>
              <span className={styles.indexCardCount}>{count}</span>
            </div>
            <p className={styles.indexCardDescription}>{cat.description}</p>
            <span className={styles.indexCardCta}>View patterns →</span>
          </Link>
        );
      })}
    </div>
  );
}

export function PersonasIndexContent(): JSX.Element {
  return (
    <div className={styles.indexGrid}>
      {personas.map((persona) => (
        <Link key={persona.slug} to={`/personas/${persona.slug}`} className={styles.indexCard}>
          <div className={styles.indexCardHeader}>
            <span className={styles.indexCardName}>{persona.name}</span>
            <span className={styles.indexCardCount}>{persona.patterns.length}</span>
          </div>
          <p className={styles.indexCardDescription}>{persona.description}</p>
          <span className={styles.indexCardCta}>View patterns →</span>
        </Link>
      ))}
    </div>
  );
}
