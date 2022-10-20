function convertCurrency(from: string, to: string, value: number) {
  if (from === "EUR" && to === "USD") {
    return value / 1.03;
  }

  if (from === "USD" && to === "EUR") {
    return value * 1.03;
  }

  return value
}

export { convertCurrency };