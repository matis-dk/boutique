export type AllProducts = {
  allProducts: ProductId[];
};

export type ProductId = {
  id: string;
};

export type ProductCategories = "øl" | "slik" | "package" | "chokolade";

export type Product = {
  id: string;
  price: number;
  title: string;
  categories: ProductCategories;
  createdAt: string;
  description: string;
  isLegalDrinkingAgeRequired: boolean;
  productImage: [ImageType];
};

export type ImageType = {
  alt: string | null;
  id: string;
  responsiveImage: {
    src: string;
    srcSet: string;
    webpSrcSet: string;
    bgColor: string;
  };
};

export type ProductList = {
  id: string;
  title: string;
  price: number;
  categories: ProductCategories;
  productImage: [ImageType];
};
