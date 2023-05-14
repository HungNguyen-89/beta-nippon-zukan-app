export const routes = [
  {
    name: "Trang chủ",
    link: "/",
  },
  {
    name: "Từ vựng",
    link: "/tu-vung",

    subRoutes: [
      {
        name: "N1",
        link: "/tu-vung/N1",
      },
      {
        name: "N2",
        link: "/tu-vung/N2",
      },
      {
        name: "N3",
        link: "/tu-vung/N3",
      },
      {
        name: "N4",
        link: "/tu-vung/N4",
      },
      {
        name: "N5",
        link: "/tu-vung/N5",
      },
      {
        name: "Theo chủ đề",
        link: "/tu-vung/theo-chu-de",
      },
    ],
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];
