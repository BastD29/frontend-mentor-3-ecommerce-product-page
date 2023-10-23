import iconCart from "@assets/icons/icon-cart.svg";
import iconClose from "@assets/icons/icon-close.svg";
import iconDelete from "@assets/icons/icon-delete.svg";
import iconMenu from "@assets/icons/icon-menu.svg";
import iconMinus from "@assets/icons/icon-minus.svg";
import iconNext from "@assets/icons/icon-next.svg";
import iconPlus from "@assets/icons/icon-plus.svg";
import iconPrevious from "@assets/icons/icon-previous.svg";
import iconBasket from "@assets/icons/icon-basket.svg";

export const icons = [
  {
    id: 0,
    value: iconCart,
    name: "icon-cart",
    width: "22",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg",
    path: {
      d: "M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114Z",
      fill: "#69707D",
      fillRule: "nonzero",
    },
  },
  {
    id: 1,
    value: iconClose,
    name: "icon-close",
    width: "14",
    height: "15",
    xmlns: "http://www.w3.org/2000/svg",
    path: {
      d: "m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z",
      fill: "#69707D",
      fillRule: "evenodd",
    },
  },
  {
    id: 2,
    value: iconDelete,
    name: "icon-delete",
    width: "14",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    xmlns_xlink: "http://www.w3.org/1999/xlink",
    // defs: {
    path: {
      d: "M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z",
      id: "a",
    },
    // },
    use: {
      fill: "#C3CAD9",
      fillRule: "nonzero",
      xlink_href: "#a",
    },
  },
  {
    id: 3,
    value: iconMenu,
    name: "icon-menu",
    width: "16",
    height: "15",
    xmlns: "http://www.w3.org/2000/svg",
    path: {
      d: "M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z",
      fill: "#69707D",
      fillRule: "evenodd",
    },
  },
  {
    id: 4,
    value: iconMinus,
    name: "icon-minus",
    width: "12",
    height: "4",
    xmlns: "http://www.w3.org/2000/svg",
    xmlns_xlink: "http://www.w3.org/1999/xlink",
    // defs: {
    path: {
      d: "M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z",
      id: "a",
    },
    // },
    use: {
      fill: "#FF7E1B",
      fillRule: "nonzero",
      xlink_href: "#a",
    },
  },
  {
    id: 5,
    value: iconNext,
    name: "icon-next",
    width: "13",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg",
    path: {
      d: "m2 1 8 8-8 8",
      stroke: "#1D2026",
      strokeWidth: "3",
      fill: "none",
      fillRule: "evenodd",
    },
  },
  {
    id: 6,
    value: iconPlus,
    name: "icon-plus",
    width: "12",
    height: "12",
    xmlns: "http://www.w3.org/2000/svg",
    xmlns_xlink: "http://www.w3.org/1999/xlink",
    // defs: {
    path: {
      d: "M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z",
      id: "b",
    },
    // },
    use: {
      fill: "#FF7E1B",
      fillRule: "nonzero",
      xlink_href: "#b",
    },
  },
  {
    id: 7,
    value: iconPrevious,
    name: "icon-previous",
    width: 12,
    height: 18,
    xmlns: "http://www.w3.org/2000/svg",
    path: {
      d: "M11 1 3 9l8 8",
      stroke: "#1D2026",
      strokeWidth: 3,
      fill: "none",
      fillRule: "evenodd",
    },
  },
  {
    id: 8,
    value: iconBasket,
    name: "icon-basket",
    width: 16,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 16",
    path: {
      d: "M3.0905 2.91311H16.7397C17.2062 2.91311 17.5482 3.35211 17.4353 3.80391L15.9785 9.63048C15.9025 9.93446 15.6378 10.1539 15.3251 10.1723L3.86762 10.8456C4.07245 11.3243 4.54702 11.6529 5.09162 11.6529H13.0982C14.2967 11.6529 15.2717 12.628 15.2717 13.8264C15.2717 15.0249 14.2967 16 13.0982 16C11.5964 16 10.5406 14.502 11.0544 13.0868H7.13056C7.645 14.5038 6.58692 16 5.08677 16C3.27933 16 2.26409 13.9081 3.37522 12.4891C2.75894 12.0009 2.40119 11.2825 2.34268 10.6204C1.43419 0.498541 1.47444 0.946953 1.55953 1.89506L1.56008 1.9012C1.61714 2.53699 1.6934 3.38676 1.51811 1.43385H0.716927C0.320978 1.43385 0 1.11288 0 0.716927C0 0.320978 0.320978 0 0.716927 0H2.17355C2.54465 0 2.85443 0.28322 2.88761 0.652847L3.0905 2.91311ZM4.3471 13.8264C4.3471 14.2343 4.67894 14.5661 5.08677 14.5661C5.49463 14.5661 5.82647 14.2343 5.82647 13.8264C5.82647 13.4186 5.49463 13.0868 5.08677 13.0868C4.67894 13.0868 4.3471 13.4186 4.3471 13.8264ZM13.0982 14.5661C12.6903 14.5661 12.3585 14.2343 12.3585 13.8264C12.3585 13.4186 12.6903 13.0868 13.0982 13.0868C13.506 13.0868 13.8379 13.4186 13.8379 13.8264C13.8379 14.2343 13.506 14.5661 13.0982 14.5661ZM3.67463 9.42062L14.7152 8.77181L15.8215 4.34693H3.21921L3.67463 9.42062Z",
      fill: "white",
      fillRule: "evenodd",
      clipRule: "evenodd",
    },
  },
];
