const btnFilterByNumeric = (column, number, compare, context) => {
  if (column === 'population' && compare === 'maior que' && number === 0) {
    const filtered = context.filter((result) => result[column] > 0);

    return [filtered, column];
  }

  if (compare === 'menor que') {
    const filtered = context.filter((result) => Number(result[column]) < Number(number));

    return [filtered, column];
  }

  if (compare === 'maior que') {
    const filtered = context.filter((result) => Number(result[column]) > Number(number));

    return [filtered, column];
  }

  if (compare === 'igual a') {
    const filtered = context.filter(
      (result) => Number(result[column]) === Number(number),
    );
    return [filtered, column];
  }
};

export default btnFilterByNumeric;
