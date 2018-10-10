(function() {
  /**
   * Check if number.
   *
   * @param {Number}
   * @returns {Boolean}
   */

  const isNumber = num => {
    return typeof num === "number" ? true : false;
  };

  /**
   * Calculate percentage of a number.
   *
   * @param {Number}
   * @param {Number}
   * @returns {Number}
   */

  const of = (perc, num) => {
    if (isNumber(perc) && isNumber(num)) return (perc / 100) * num;
  };

  /**
   * Calculate percent of a number from another number
   *
   * @param {Number}
   * @param {Number}
   * @returns {Number}
   */

  const from = (part, target) => {
    if (isNumber(part) && isNumber(target)) return (part / target) * 100;
  };

  if (typeof module === "undefined") {
    this.percentage = percentage;
  } else {
    module.exports = { isNumber, of, from };
  }
})();
