import { CiMenuKebab } from "react-icons/ci";
import { AiFillShop } from "react-icons/ai";
import { BsFillFolderFill } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa";

export default [
  {
    name: "Inicio",
    icon: <CiMenuKebab />,
    path: "/",
  },
  {
    name: "Productos",
    icon: <AiFillShop />,
    path: "/product",
  },
  {
    name: "Facturar",
    icon: <FaFileInvoice />,
    path: "/invoice",
  },
  {
    name: "Documentos",
    icon: <BsFillFolderFill />,
    path: "/document",
  },

  {
    name: "otro",
    icon: "",
    path: "/otro",
  },
];
