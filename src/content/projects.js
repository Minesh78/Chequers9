const image = (projectSlug, file, alt) => ({
  src: `/images/projects/${projectSlug}/${file}-1200.webp`,
  avifSrcSet: [640, 1200, 1800]
    .map((width) => `/images/projects/${projectSlug}/${file}-${width}.avif ${width}w`)
    .join(", "),
  webpSrcSet: [640, 1200, 1800]
    .map((width) => `/images/projects/${projectSlug}/${file}-${width}.webp ${width}w`)
    .join(", "),
  alt,
});

const defaultProjectDescription =
  "A considered response to place, light and the patterns of everyday life.";

export const projectTypeLabels = {
  architecture: "Architecture",
  interior: "Interior Design",
};

export const projects = [
  {
    id: "01",
    slug: "deepali-joshi-residence",
    title: "Deepali Joshi Residence",
    clientLabel: "Project for Deepali Joshi",
    location: "Kolhapur",
    type: "architecture",
    description: defaultProjectDescription,
    cover: image("deepali-joshi-residence", "cover", "Contemporary residence designed for Deepali Joshi in Kolhapur"),
    gallery: [],
    featured: true,
    services: ["Architecture"],
  },
  {
    id: "02",
    slug: "amit-chavan-interiors",
    title: "Amit Chavan Interiors",
    clientLabel: "Project for Mr. Amit Chavan",
    location: "",
    type: "interior",
    description: defaultProjectDescription,
    cover: image("amit-chavan-interiors", "cover", "Interior designed for Amit Chavan"),
    gallery: [image("amit-chavan-interiors", "01", "Bedroom with warm timber panelling, a circular vanity mirror and an integrated study desk")],
    featured: true,
    services: ["Interior Design"],
  },
  {
    id: "03",
    slug: "arun-patil-residence",
    title: "Arun Patil Residence",
    clientLabel: "Project for Mr. Arun Patil",
    location: "Kolhapur",
    type: "architecture",
    description: defaultProjectDescription,
    cover: image("arun-patil-residence", "cover", "Exterior view of the Arun Patil residence in Kolhapur"),
    gallery: [
      image("arun-patil-residence", "01", "Front elevation at night with classical columns, arches and balconies"),
      image("arun-patil-residence", "02", "Daytime corner view of the cream residence with red roofs and columned balconies"),
    ],
    featured: true,
    services: ["Architecture"],
  },
  {
    id: "04",
    slug: "ganesh-sawant-residence",
    title: "Ganesh Sawant Residence",
    clientLabel: "Project for Mr. Ganesh Sawant",
    location: "Bhor, Pune",
    type: "architecture",
    description: defaultProjectDescription,
    cover: image("ganesh-sawant-residence", "cover", "Residence designed for Ganesh Sawant in Bhor, Pune"),
    gallery: [],
    featured: true,
    services: ["Architecture"],
  },
  {
    id: "05",
    slug: "lm-kumbhar-residence",
    title: "L. M. Kumbhar Residence",
    clientLabel: "Project for Mr. L. M. Kumbhar",
    location: "Kolhapur",
    type: "architecture",
    description: defaultProjectDescription,
    cover: image("lm-kumbhar-residence", "cover", "Residence designed for L. M. Kumbhar in Kolhapur"),
    gallery: [image("lm-kumbhar-residence", "01", "Night view of a narrow three-storey residence with brick screens and projecting balconies")],
    featured: false,
    services: ["Architecture"],
  },
  {
    id: "06",
    slug: "sanjay-sawant-residence",
    title: "Sanjay Sawant Residence",
    clientLabel: "Project for Mr. Sanjay Sawant",
    location: "Kudal, Sindhudurg",
    type: "architecture",
    description: defaultProjectDescription,
    cover: image("sanjay-sawant-residence", "cover", "Residence designed for Sanjay Sawant in Kudal"),
    gallery: [image("sanjay-sawant-residence", "01", "Wide site view of a multi-storey building and palm-lined parking area")],
    featured: false,
    services: ["Architecture"],
  },
  {
    id: "07",
    slug: "sarjoshi-residence",
    title: "Sarjoshi Residence",
    clientLabel: "Project for Mr. Sarjoshi",
    location: "Achara, Malvan",
    type: "architecture",
    description: defaultProjectDescription,
    cover: image("sarjoshi-residence", "cover", "Residence designed for the Sarjoshi family in Achara, Malvan"),
    gallery: [image("sarjoshi-residence", "01", "Sweeping brick roofscape with curved profiles and tiered black finials")],
    featured: false,
    services: ["Architecture"],
  },
  {
    id: "08",
    slug: "vikas-mane-residence",
    title: "Vikas Mane Residence",
    clientLabel: "Project for Mr. Vikas Mane",
    location: "Islampur",
    type: "architecture",
    description: defaultProjectDescription,
    cover: image("vikas-mane-residence", "cover", "Residence designed for Vikas Mane in Islampur"),
    gallery: [image("vikas-mane-residence", "01", "Upper-level view of a white-and-grey residence with deep rectangular frames and solar panels")],
    featured: true,
    services: ["Architecture"],
  },
  {
    id: "09",
    slug: "mouni-maharaj-math",
    title: "Shree Mouni Maharaj Math",
    clientLabel: "Shree Mouni Maharaj Math",
    location: "Patgaon",
    type: "architecture",
    description: defaultProjectDescription,
    cover: image("mouni-maharaj-math", "cover", "Shree Mouni Maharaj Math at Patgaon"),
    gallery: [image("mouni-maharaj-math", "01", "Stone-paved courtyard enclosed by carved timber colonnades at Shree Mouni Maharaj Math")],
    featured: true,
    services: ["Architecture"],
  },
  {
    id: "11",
    slug: "rohan-kadam-interiors",
    title: "Rohan Kadam Interiors",
    clientLabel: "Project for Mr. Rohan Kadam",
    location: "",
    type: "interior",
    description: defaultProjectDescription,
    cover: image("rohan-kadam-interiors", "cover", "Interior designed for Rohan Kadam"),
    gallery: [
      image("rohan-kadam-interiors", "01", "Galley kitchen with glossy cabinets, black counters and patterned tile backsplash"),
      image("rohan-kadam-interiors", "02", "Compact dining area with a glass table, timber ceiling panel and full-height curtains"),
      image("rohan-kadam-interiors", "03", "Carved timber home shrine set against a yellow accent wall with concealed lighting"),
    ],
    featured: false,
    services: ["Interior Design"],
  },
  {
    id: "12",
    slug: "chetan-desai-interiors",
    title: "Chetan Desai Interiors",
    clientLabel: "Project for Mr. Chetan Desai",
    location: "",
    type: "interior",
    description: defaultProjectDescription,
    cover: image("chetan-desai-interiors", "cover", "Interior designed for Chetan Desai"),
    gallery: [],
    featured: false,
    services: ["Interior Design"],
  },
  {
    id: "13",
    slug: "ray-associates-interiors",
    title: "Ray Associates Interiors",
    clientLabel: "Project for Ray Associates",
    location: "Kolhapur",
    type: "interior",
    description: defaultProjectDescription,
    cover: image("ray-associates-interiors", "cover", "Interior designed for Ray Associates in Kolhapur"),
    gallery: [],
    featured: false,
    services: ["Interior Design"],
  },
];

const requiredFields = ["id", "slug", "title", "type", "cover"];

export function validateProjects(items = projects) {
  const seenIds = new Set();
  const seenSlugs = new Set();

  items.forEach((project) => {
    requiredFields.forEach((field) => {
      if (!project[field]) throw new Error(`Project ${project.id || "unknown"} is missing ${field}.`);
    });
    if (seenIds.has(project.id)) throw new Error(`Duplicate project id: ${project.id}`);
    if (seenSlugs.has(project.slug)) throw new Error(`Duplicate project slug: ${project.slug}`);
    if (!project.cover.src || !project.cover.alt) throw new Error(`Project ${project.id} needs a cover src and alt.`);
    seenIds.add(project.id);
    seenSlugs.add(project.slug);
  });

  return true;
}

if (import.meta.env?.DEV) validateProjects();
