export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  /** Legacy fallback: src/assets/port-*.jpg until you add {slug}.jpg in assets/ or assets/portfolio/ */
  imageSlug?: string;
};

export const portfolioFilters = [
  "All",
  "Hoardings",
  "Flex Boards",
  "Advertising",
  "Social Media",
  "Vehicle Ads",
] as const;

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "city-hoarding",
    title: "City Hoarding Campaign",
    category: "Hoardings",
    imageSlug: "port-hoarding",
  },
  {
    slug: "flex-retail",
    title: "Flex Board – Retail Store",
    category: "Flex Boards",
    imageSlug: "port-flex",
  },
  {
    slug: "wall-painting",
    title: "Wall Painting",
    category: "Advertising",
  },
  {
    slug: "social-campaign",
    title: "Social Media Campaign",
    category: "Social Media",
    imageSlug: "port-social",
  },
  {
    slug: "bus-wrap",
    title: "Bus Wrap Advertising",
    category: "Vehicle Ads",
    imageSlug: "port-vehicle",
  },
  {
    slug: "highway-hoarding",
    title: "Highway Hoarding",
    category: "Hoardings",
    imageSlug: "port-hoarding",
  },
  {
    slug: "shelter-ads",
    title: "Shelter Ads",
    category: "Advertising",
    imageSlug: "newspaper-ads",
  },
  {
    slug: "press-ads",
    title: "Press Ads",
    category: "Advertising",
    imageSlug: "newspaper-ads",
  },
];
