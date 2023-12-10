interface IMenuItem {
  name: string;
  url: string;
  icon: string;
}

export const MENU: IMenuItem = [
  {
    name: "Home",
    icon: "radix-icons:dashboard",
    url: "/",
  },
  {
    name: "Products",
    icon: "icon-park-outline:ad-product",
    url: "/products",
  },
  {
    name: "Payments",
    icon: "ic:baseline-payment",
    url: "/payments",
  },
  {
    name: "Orders",
    icon: "streamline:shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products",
    url: "/orders",
  },
  {
    name: "Customers",
    icon: "ph:users",
    url: "/customers",
  },
  {
    name: "Feedback",
    icon: "material-symbols:android-chat",
    url: "/feedback",
  },
  {
    name: "Settings",
    icon: "radix-icons:gear",
    url: "/settings",
  },
  {
    name: "Help center",
    icon: "radix-icons:question-mark",
    url: "/help",
  },
];
