import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './contribute.module.css';

export default function Contribute(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Layout
      title="Propose a Green Software Pattern"
      description="Have an idea for a green software pattern? Submit your idea to the Green Software Foundation."
    >
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Propose a Green Software Pattern</h1>

          {!submitted ? (
            <>
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

              <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>

                {/* ── About your idea ── */}
                <section className={styles.section}>
                  <h2 className={styles.sectionHeading}>About your idea</h2>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="working-title">
                      Give your pattern a working title{' '}
                      <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <input
                      className={styles.input}
                      type="text"
                      id="working-title"
                      name="working-title"
                      placeholder='e.g. "Reduce database queries in idle periods"'
                      required
                    />
                    <p className={styles.helpText}>
                      Don&rsquo;t worry about getting this perfect. A rough title helps us understand
                      the idea &mdash; we&rsquo;ll refine it during development. A good title follows
                      the pattern &ldquo;Action on Resource&rdquo;.
                    </p>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="problem-statement">
                      What problem does this pattern solve?{' '}
                      <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <textarea
                      className={styles.textarea}
                      id="problem-statement"
                      name="problem-statement"
                      rows={4}
                      placeholder="Describe the situation or behaviour in software development that leads to unnecessary emissions."
                      required
                    />
                    <p className={styles.helpText}>
                      Be as specific as you can. What does the problem look like in practice? Who
                      experiences it?
                    </p>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="why-it-matters">
                      Why is this important for green software?{' '}
                      <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <textarea
                      className={styles.textarea}
                      id="why-it-matters"
                      name="why-it-matters"
                      rows={4}
                      placeholder="Explain the significance of this problem and the opportunity to reduce emissions if it's solved."
                      required
                    />
                    <p className={styles.helpText}>
                      This helps us prioritise and communicate the value of the pattern to the
                      community.
                    </p>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="potential-solutions">
                      What approaches could solve this problem?{' '}
                      <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <textarea
                      className={styles.textarea}
                      id="potential-solutions"
                      name="potential-solutions"
                      rows={4}
                      placeholder="Describe one or more techniques, strategies, or changes in practice that could address the problem."
                      required
                    />
                    <p className={styles.helpText}>
                      You don&rsquo;t need a complete solution &mdash; share what you know or have
                      seen work. Even a rough direction is helpful.
                    </p>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="emission-impact">
                      How do you expect this to reduce software emissions?{' '}
                      <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <textarea
                      className={styles.textarea}
                      id="emission-impact"
                      name="emission-impact"
                      rows={3}
                      placeholder='e.g. "Reducing unnecessary compute cycles lowers energy consumption, which reduces the carbon intensity of the software."'
                      required
                    />
                    <p className={styles.helpText}>
                      Think about which part of the Software Carbon Intensity (SCI) equation this
                      affects &mdash; energy (E), hardware (M), or carbon intensity (I). If
                      you&rsquo;re not sure, just describe the impact in plain language.
                    </p>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="category">
                      Which part of the software lifecycle does this pattern apply to?{' '}
                      <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <select
                      className={styles.select}
                      id="category"
                      name="category"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a category&hellip;
                      </option>
                      <option value="requirements">
                        Requirements &mdash; defining what the software needs to do
                      </option>
                      <option value="architecture">
                        Architecture &mdash; structural and system design decisions
                      </option>
                      <option value="development">
                        Development &mdash; writing and optimising code
                      </option>
                      <option value="testing">
                        Testing &mdash; test strategy and environment management
                      </option>
                      <option value="deployment">
                        Deployment &mdash; releasing and provisioning software
                      </option>
                      <option value="operations">
                        Operations &mdash; running software in production
                      </option>
                      <option value="maintenance">
                        Maintenance &mdash; updating, refactoring, and managing live systems
                      </option>
                      <option value="ai-ml">
                        AI/ML Lifecycle &mdash; building, training, and serving AI and ML systems
                      </option>
                    </select>
                    <p className={styles.helpText}>
                      Choose the phase where the decision would most naturally be made. If
                      you&rsquo;re unsure, pick the closest match &mdash; we&rsquo;ll confirm during
                      review.
                    </p>
                  </div>
                </section>

                {/* ── References ── */}
                <section className={styles.section}>
                  <h2 className={styles.sectionHeading}>References</h2>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="references">
                      Do you have any references to support this idea?{' '}
                      <span className={styles.optional}>Optional</span>
                    </label>
                    <textarea
                      className={styles.textarea}
                      id="references"
                      name="references"
                      rows={3}
                      placeholder="Links to research papers, articles, tools, case studies, or existing examples of this pattern in the wild."
                    />
                    <p className={styles.helpText}>
                      References aren&rsquo;t required, but they&rsquo;re incredibly valuable &mdash;
                      they help us validate the pattern and point practitioners to further reading.
                      Paste URLs or describe the source if you don&rsquo;t have a link.
                    </p>
                  </div>
                </section>

                {/* ── About you ── */}
                <section className={styles.section}>
                  <h2 className={styles.sectionHeading}>About you</h2>
                  <p className={styles.sectionIntro}>
                    We&rsquo;ll credit you as the author on the published pattern and tag you in the
                    review process on GitHub.
                  </p>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="name">
                      Your name{' '}
                      <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <input
                      className={styles.input}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="First and last name"
                      required
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="email">
                      Your email address{' '}
                      <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <input
                      className={styles.input}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@organisation.com"
                      required
                    />
                    <p className={styles.helpText}>
                      We&rsquo;ll only use this to contact you about your submission.
                    </p>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="github-username">
                      Your GitHub username{' '}
                      <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <input
                      className={styles.input}
                      type="text"
                      id="github-username"
                      name="github-username"
                      placeholder="e.g. russelltrow"
                      required
                    />
                    <p className={styles.helpText}>
                      We use GitHub to manage the pattern review process. We&rsquo;ll tag you when
                      your submission is under review so you can follow along and contribute to the
                      discussion.
                    </p>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="linkedin-url">
                      Your LinkedIn profile URL{' '}
                      <span className={styles.optional}>Optional</span>
                    </label>
                    <input
                      className={styles.input}
                      type="url"
                      id="linkedin-url"
                      name="linkedin-url"
                      placeholder="https://www.linkedin.com/in/yourname"
                    />
                    <p className={styles.helpText}>
                      If provided, we&rsquo;ll link your name to your LinkedIn profile on the
                      published pattern page.
                    </p>
                  </div>
                </section>

                <div className={styles.submitRow}>
                  <button type="submit" className={styles.submitButton}>
                    Submit your idea
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className={styles.confirmation}>
              <h2 className={styles.confirmationTitle}>
                Thanks for your submission &mdash; we really appreciate it.
              </h2>
              <p className={styles.confirmationText}>
                Our team will review your idea and develop it into a full pattern draft. We&rsquo;ll
                tag you on GitHub when it moves into review so you can follow the progress and
                contribute to the discussion.
              </p>
              <p className={styles.confirmationText}>
                In the meantime, you can explore the current pattern catalogue at the link below.
              </p>
              <a href="/" className={styles.catalogLink}>
                Browse the pattern catalogue
              </a>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
