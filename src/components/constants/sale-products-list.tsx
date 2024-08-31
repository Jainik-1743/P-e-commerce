export type IncludeQuantity = Product & {
  quantity: number
}
export interface Product {
  id: number
  imageSrc: string
  productName: string
  productDescription: string
  productPrice: number
  percentageOfSale?: number
}

export const saleProductsList: Product[] = [
  {
    id: 1,
    imageSrc: "/images/gaming-mouse.png",
    productName: "Gaming Mouse",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 29.99,
    percentageOfSale: -20,
  },
  {
    id: 2,
    imageSrc: "/images/gaming-mouse.png",
    productName: "Gaming Keyboard",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 49.99,
  },
  {
    id: 3,
    imageSrc: "/images/gaming-mouse.png",
    productName: "Gaming Headset",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 39.99,
    percentageOfSale: -30,
  },
  {
    id: 4,
    imageSrc: "/images/gaming-mouse.png",
    productName: "Gaming Monitor",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 79.99,
    percentageOfSale: -40,
  },
  {
    id: 5,
    imageSrc: "/images/gaming-mouse.png",
    productName: "Chair",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 32.99,
  },
  {
    id: 6,
    imageSrc: "/images/gaming-mouse.png",
    productName: "Table",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 59.99,
  },
  {
    id: 7,
    imageSrc: "/images/gaming-mouse.png",
    productName: "Sofa",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 89.99,
  },
  {
    id: 8,
    imageSrc: "/images/gaming-mouse.png",
    productName: "Bed",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 69.99,
  },
  {
    id: 9,
    imageSrc: "/images/gaming-mouse.png",
    productName: "Lamp",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 19.99,
  },
  {
    id: 10,
    imageSrc: "/images/gaming-mouse.png",
    productName: "Curtains",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productPrice: 24.99,
  },
]
