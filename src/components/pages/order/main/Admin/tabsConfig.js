import { BsPlusLg } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import AddForm from "./Panel/AddForm";
import EditForm from "./Panel/EditForm";

export const tabsConfig = [
  {
    index: 'add',
    icon: <BsPlusLg />,
    label: "Ajouter un produit",
    content: <AddForm/>
  },
  {
    index: 'edit',
    icon: <MdEdit />,
    label: "Modifier un produit",
    content: <EditForm/>
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected)