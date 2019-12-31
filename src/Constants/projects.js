import PropTypes from "prop-types";

export const PROJECTS = [
  {
    id: 1,
    name: "Silversheet",
    title: "software engineer",
    image: "https://i.imgur.com/tc3cpVo.png",
    url: "https://www.silversheet.com",
    importance: 5,
  },
  {
    id: 2,
    name: "npm create-redux-component",
    title: "author",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png",
    url: "https://www.npmjs.com/package/create-redux-component",
    importance: 5,
  },
  {
    id: 5,
    name: "Leaflet",
    title: "backend engineer",
    url: "https://mgr-leaflet.herokuapp.com/main/",
    importance: 2,
    area: "leaflet",
  },
  {
    id: 7,
    name: "OnePP",
    title: "fullstack engineer",
    url: "http://one-pp.herokuapp.com/",
    importance: 4,
  },
  {
    id: 6,
    name: "Housemates",
    title: "fullstack engineer",
    url: "http://house--mates.herokuapp.com/",
    importance: 2,
  },
  {
    id: 3,
    name: "text to binary translator",
    title: "author",
    url: "https://weronikaviola.github.io/text-to-binary-translator",
    importance: 1,
  },
  {
    id: 4,
    name: "Izabela Bujak - professional website",
    title: "co-author",
    url: "https://www.izabelabujak.com",
    importance: 2,
  },
];

export const GRAPH_PROP_TYPES = PropTypes.shape({
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  importance: PropTypes.number.isRequired,
});
