import React from 'react';
import Layout from '@theme/Layout';
import styles from './contribute.module.css';

export default function Contribute(): JSX.Element {
  return (
    <Layout
      title="Propose a Green Software Pattern"
      description="Have an idea for a green software pattern? Submit your idea to the Green Software Foundation."
    >
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Propose a Green Software Pattern</h1>

          <div className={styles.intro}>
            <p>
              Have an idea for a green software pattern? We&rsquo;d love to hear it.
            </p>
            <p>
              You don&rsquo;t need to write the full pattern yourself &mdash; just tell us the
              problem you want to solve and why it matters. Our team will take it from there and
              develop it into a fully reviewed pattern for the catalogue.
            </p>
            <p>This usually takes around 5 minutes to complete.</p>
          </div>

          <iframe
            src="https://grnsft.notion.site/ebd//e258d2be7bdd40579293b8cc02fbef88"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </main>
    </Layout>
  );
}
