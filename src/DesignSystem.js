const DesignSystem = () => {
  return (
    <div className="container">
      <h1>Design System</h1>

      <section id="colors" style={{ margin: '4rem 0' }}>
        <h2 className="numbered-title">
          <span>01</span> colors
        </h2>

        <div className="flex">
          <div className="flex-grow">
            <div
              className="bg-dark text-white"
              style={{ padding: '3rem 1rem 1rem', border: '1px solid white' }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>

          <div className="flex-grow">
            <div
              className="bg-accent text-dark"
              style={{ padding: '3rem 1rem 1rem', border: '1px solid white' }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>

          <div className="flex-grow">
            <div
              className="bg-white text-dark"
              style={{ padding: '3rem 1rem 1rem', border: '1px solid white' }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>
        </div>
      </section>

      <section id="typography" style={{ margin: '4rem 0' }}>
        <h2 className="numbered-title">
          <span>02 </span>Typography
        </h2>
        <div className="flex">
          <div
            className="flow"
            style={{ flexBasis: '100%', '--flow-space': '4rem' }}
          >
            <div>
              <p className="text-accent">
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className="fs-900 ff-serif uppercase">Earth</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="fs-800 ff-serif uppercase">Venus</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className="fs-600 ff-serif uppercase">
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className="text-accent">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div
            className="flow"
            style={{ flexBasis: '100%', '--flow-space': '4rem' }}
          >
            <div>
              <p className="text-accent">
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className="fs-500 ff-serif uppercase">384,400 km</p>
            </div>
            <div>
              <p className="text-accent">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="fs-200 ff-sans-cond letter-spacing-3">
                Avg. Distance
              </p>
            </div>
            <div>
              <p className="text-accent">
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className="fs-300 uppercase ff-sans-cond letter-spacing-2">
                Europa
              </p>
            </div>
            <div>
              <p className="text-accent">Body Text</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="flow" id="interactive-elements">
        <h2 class="numbered-title">
          <span>03</span> Interactive elements
        </h2>

        {/* navigation */}
        <div></div>

        <div class="flex">
          <div style={{ marginTop: '5rem' }}>
            {/* explore button */}
            <a
              href="#"
              className="large-button bg-white text-dark ff-serif fs-600 letter-spacing-1 uppercase"
            >
              Explore
            </a>
          </div>

          <div style={{ marginBottom: '50vh' }}>
            {/* Tabs */}

            {/* Dots */}

            {/* Numbers */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignSystem;
