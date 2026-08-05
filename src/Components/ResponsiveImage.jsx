export default function ResponsiveImage({ image, eager = false, sizes = "(max-width: 768px) 100vw, 50vw", className = "" }) {
  if (!image) return null;

  return (
    <picture className={className}>
      {image.avifSrcSet && <source type="image/avif" srcSet={image.avifSrcSet} sizes={sizes} />}
      {image.webpSrcSet && <source type="image/webp" srcSet={image.webpSrcSet} sizes={sizes} />}
      <img
        src={image.src}
        alt={image.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        width="1800"
        height="1200"
      />
    </picture>
  );
}
