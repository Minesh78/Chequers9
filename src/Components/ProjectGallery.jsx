import ResponsiveImage from "./ResponsiveImage";
import Reveal from "./Reveal";

export default function ProjectGallery({ images }) {
  if (!images.length) return null;
  return (
    <div className="project-gallery">
      {images.map((image, index) => (
        <Reveal key={`${image.src}-${index}`} className={index % 3 === 0 ? "gallery-wide" : ""}>
          <ResponsiveImage image={image} sizes={index % 3 === 0 ? "100vw" : "(max-width: 767px) 100vw, 50vw"} />
        </Reveal>
      ))}
    </div>
  );
}
