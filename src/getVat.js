const getVat = (total) => {
  const vat = (total * 7) / 107;
  return +vat.toFixed(2);
};

export default getVat;
