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
        link: "/tu-vung",
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
    name: "Ngữ pháp",
    link: "/ngu-phap",

    subRoutes: [
      {
        name: "N1",
        link: "/ngu-phap/N1",
      },
      {
        name: "N2",
        link: "/ngu-phap/N2",
      },
      {
        name: "N3",
        link: "/ngu-phap/N3",
      },
      {
        name: "N4",
        link: "/ngu-phap/N4",
      },
      {
        name: "N5",
        link: "/ngu-phap/N5",
      },
      {
        name: "JLPTにない文型",
        link: "/ngu-phap/mau-cau-ngoai-JLPT",
      },
    ],
  },
  {
    name: "Đề thi",
    link: "/de-thi",

    subRoutes: [
      {
        name: "N1",
        link: "/de-thi/N1",
      },
      {
        name: "N2",
        link: "/de-thi/N2",
      },
      {
        name: "N3",
        link: "/de-thi/N3",
      },
      {
        name: "N4",
        link: "/de-thi/N4",
      },
      {
        name: "N5",
        link: "/de-thi/N5",
      },
      {
        name: "Tổng hợp",
        link: "/de-thi/tong-hop",
      },
    ],
  },
  {
    name: "Media",
    link: "/media",

    subRoutes: [
      {
        name: "Video",
        link: "/media/video",
      },
      {
        name: "Audio",
        link: "/media/audio",
      },
    ],
  },
  {
    name: "Games",
    link: "/games",

    subRoutes: [
      {
        name: "Nhìn Kanji đoán chữ",
        link: "/games/nhin-kanji-doan-chu",
      },
      {
        name: "Nhìn hình đoán chữ",
        link: "/games/nhin-hinh-doan-chu",
      },
    ],
  },
  {
    name: "Blog",
    link: "/blog",
  },
];
