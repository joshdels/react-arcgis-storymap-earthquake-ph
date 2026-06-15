export default function Author() {
  return (
    <section className="author">
      {/* 1. Prompt */}
      <div className="author-context">
        <h1>Got any question?</h1>
        <p>Feel free to connect with me</p>
      </div>

      {/* 2. Identity */}
      <div className="author-inner">
        <div className="author-identity">
          <calcite-icon icon="user" />
          <h2>Joshua De Leon</h2>
          <p>GIS Developer / Analyst</p>
          <p>Tagum - Philippines</p>
        </div>

        {/* 3. Contact links stacked */}
        <div className="author-links">
          <div>
            <calcite-icon icon="web" />
            <a
              href="https://github.com/joshdels"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/joshua-de-leon-8b0310301/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <calcite-icon icon="envelope" />
            <a href="mailto:joshdels@topmapsolutions.com">
              joshdels@topmapsolutions.com
            </a>
          </div>

          <a href="mailto:assistantgisjosh@gmail.com">
            assistantgisjosh@gmail.com
          </a>

          <div>
            <calcite-icon icon="blog" />
            <a href="https://joshdels.topmapsolutions.com/">porfolio</a>
          </div>
        </div>
      </div>
    </section>
  );
}
