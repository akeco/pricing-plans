export const calculatePercentage = (value: number, percentage: number): number => {
  if (isNaN(value) || isNaN(percentage)) {
    throw new Error('Invalid input. Please provide valid numbers for value and percentage.');
  }

  return value - (value * (percentage / 100));
}