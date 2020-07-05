export function createCounter(options = {}) {
  let value = options.initVal || 0;

  return {
    val() {
      return value;
    },
    inc() {
      return value + 1;
    },
    dec() {
      if (value === options.min)
        return value;
      else
        return value - 1;
    },
    isMax() {
      return false;
    },
    isMin() {
      return false;
    }
  };
}
