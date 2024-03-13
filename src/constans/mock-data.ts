import { IProductType } from "../types/product.type";
import IMG1 from "../assets/images/img01.jpg";
import IMG2 from "../assets/images/img02.jpg";
import IMG3 from "../assets/images/img03.jpg";
import IMG4 from "../assets/images/img04.jpg";
import IMG5 from "../assets/images/img05.jpg";
import IMG6 from "../assets/images/img06.jpg";
import IMG7 from "../assets/images/img07.jpg";
import IMG8 from "../assets/images/img08.jpg";
import IMG9 from "../assets/images/img09.jpg";
import IMG10 from "../assets/images/img10.jpg";

export const mockData: IProductType[] = [
  {
    id: 1,
    name: "Nike LD Waffle Sacai Black Nylon",
    price: 401,
    image: IMG1,
    description:
      "Stylish Nike LD Waffle collaboration with Sacai in black nylon construction.",
    validityDate: "2020/01/30 23:30:14",
  },
  {
    id: 2,
    name: "Nike Dunk Low Off-White Pine Green",
    price: 304,
    image: IMG2,
    description:
      "Exclusive Nike Dunk Low collaboration with Off-White in university colorway.",
    validityDate: "2020/01/30 23:30:14",
  },
  {
    id: 3,
    name: "Nike Air Force 1 Low Supreme Black",
    price: 475,
    image: IMG3,
    description: "Iconic black Nike Air Force 1 with supreme detailing.",
    validityDate: String(new Date()),
  },
  {
    id: 4,
    name: "Nike LD Waffle Sacai White Nylon",
    price: 399,
    image: IMG4,
    description:
      "Sacai-designed Nike LD Waffle in white with durable nylon material.",
    validityDate: String(new Date()),
  },
  {
    id: 5,
    name: "Nike Dunk Low SP Kentucky (2021)",
    price: 405,
    image: IMG5,
    description:
      "Limited edition Nike Dunk Low SP inspired by the Kentucky Wildcats.",
    validityDate: String(new Date()),
    // img1: " https://stockx-360.imgix.net/Nike-Dunk-Low-SP-Kentucky/Images/Nike-Dunk-Low-SP-Kentucky/Lv2/img",
    // img2: ".jpg?auto=format,compress&q=90&updated_at=1606322330&w=1000",
    // cantidad: 1
  },
  {
    id: 6,
    name: "Nike Dunk Low Off-White University",
    price: 285,
    image: IMG6,
    description:
      "Exclusive Nike Dunk Low collaboration with Off-White in university colorway.",
    // img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img",
    // img2: ".jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
    // cantidad: 1
    validityDate: String(new Date()),
  },
  {
    id: 7,
    name: "Nike Air Max 2 Light Atmos",
    price: 360,
    image: IMG7,
    description:
      "Atmos-designed Nike Air Max 2 Light, known for its unique color scheme.",
    // img1: "https://stockx-360.imgix.net/Nike-Air-Max-2-Light-Atmos/Images/Nike-Air-Max-2-Light-Atmos/Lv2/img",
    // img2: ".jpg?auto=format,compress&q=90&updated_at=1606320966&w=1000",
    // cantidad: 1
    validityDate: String(new Date()),
  },
  {
    id: 8,
    name: "Nike Air Force 1 Low CLOT Blue Silk",
    price: 335,
    image: IMG8,
    description:
      "Collaborative Nike Air Force 1 with CLOT featuring blue silk material.",
    // img1: "https://stockx-360.imgix.net/Nike-Air-Max-2-Light-Atmos/Images/Nike-Air-Max-2-Light-Atmos/Lv2/img",
    // img2: ".jpg?auto=format,compress&q=90&updated_at=1606320966&w=1000",
    // cantidad: 1
    validityDate: String(new Date()),
  },
  {
    id: 9,
    name: "Nike Air Max 90 OG Volt (2020)",
    price: 799,
    image: IMG9,
    description:
      "Stylish Nike Air Max 90 in vibrant volt color, released in 2020.",
    // img1: "https://stockx-360.imgix.net/Nike-Air-Max-2-Light-Atmos/Images/Nike-Air-Max-2-Light-Atmos/Lv2/img",
    // img2: ".jpg?auto=format,compress&q=90&updated_at=1606320966&w=1000",
    // cantidad: 1
    validityDate: String(new Date()),
  },
  {
    id: 10,
    name: "Nike Dunk High Varsity Maize",
    price: 501,
    image: IMG10,
    description: "Classic Nike Dunk High in varsity maize colorway.",
    // img1: "https://stockx-360.imgix.net/Nike-Air-Max-2-Light-Atmos/Images/Nike-Air-Max-2-Light-Atmos/Lv2/img",
    // img2: ".jpg?auto=format,compress&q=90&updated_at=1606320966&w=1000",
    // cantidad: 1
    validityDate: String(new Date()),
  },
];
