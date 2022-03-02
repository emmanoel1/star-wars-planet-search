const filterPlanets = (input, context) => {
  if (context !== undefined) {
    const filtered = context.filter((result) => result.name.includes(input));
    return filtered;
  }
};

export default filterPlanets;
