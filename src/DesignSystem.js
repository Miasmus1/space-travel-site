const DesignSystem = () => {
  return (
    <>
      <h1>Design System</h1>

      <section id="colors" className="container bg-dark">
        <div className="bg-accent text-dark">light blue bg, with dark text</div>
        <div className="bg-white text-dark">white bg, with dark text</div>
        <div className="example-component text-white">
          light blue bg with a 20% alpha and white text
        </div>
      </section>
    </>
  );
};

export default DesignSystem;
