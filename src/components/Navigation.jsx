import React from "react";
import { NavLink } from "react-router-dom";

function Item({ to, label }) {
  return (
    <li>
      <NavLink to={to}>{label}</NavLink>
    </li>
  );
}
const pages = [
  {
    to: "/",
    label: "Ana Sayfa",
  },
  {
    to: "/projeler",
    label: "Projeler",
  },
  {
    to: "/hizmetler",
    label: "Hizmetler",
  },
  {
    to: "/hakkimda",
    label: "Hakkımızda",
  },
  {
    to: "/iletisim",
    label: "İletişim",
  },
];

function Body() {
  return (
    <ul>
      {pages.map((page, index) => {
        return <Item key={index} to={page.to} label={page.label} />;
      })}
    </ul>
  );
}
function Navigation() {
  return (
    <nav>
      <Body />
    </nav>
  );
}

export default Navigation;
