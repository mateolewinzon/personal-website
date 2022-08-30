const experience = [
  {
    id: "first job",
    name: "Software Company",
    short_description: "description about Software Company",
    full_description: "long description about Software Company",
    years: { start: 2020, end: 2022 },
  },
  {
    id: "some job",
    name: "Consultors",
    years: { start: 2022, end: null },
    short_description: "description about Consultors",
    full_description: "long description about Consultors",
  },
];

const getExperience = () => experience;

export { getExperience };
