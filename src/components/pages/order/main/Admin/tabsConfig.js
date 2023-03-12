import { BsPlusLg } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

export const tabsConfig = [
  {
    index: 'add',
    icon: <BsPlusLg />,
    label: "Ajouter un produit",
  },
  {
    index: 'edit',
    icon: <MdEdit />,
    label: "Modifier un produit",
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected)