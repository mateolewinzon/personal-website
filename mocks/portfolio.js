const portfolio = [
  {
    id: "first project",
    name: "First Project",
    short_description: "description about First Project",
    full_description: "long description about First Project",
    years: { start: 2020, end: 2022 },
  },
  {
    id: "some project",
    name: "Some Project",
    years: { start: 2022, end: null },
    short_description: "description about Some Project",
    full_description: "long description about Some Project",
  },
];

export const { getPortfolio } = () => portfolio;
