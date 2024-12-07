export const formatAadharNumber = (aadharNumber) => {
    // Ensure the input is a string and split into groups of 4 digits
    return aadharNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
  };
  