export default function HeroSection() {
  return (
    <section id="about" className="border-b-2 border-black pb-8 mb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-4" style={{ fontFamily: 'Libre Baskerville' }}>
          Visual Designer & Frontend Developer
        </h2>
        <div className="h-1 w-24 bg-black mx-auto mb-6"></div>
        <p className="text-xl leading-relaxed" style={{ fontFamily: 'Source Sans' }}>
          Crafting pixel-perfect interfaces and bringing designs to life through code. 
          Specializing in visual design with a deep understanding of frontend development, 
          I bridge the gap between beautiful aesthetics and functional implementation. 
          From concept to deployment, I create digital experiences that are both visually 
          striking and technically sound.
        </p>
      </div>
    </section>
  );
}