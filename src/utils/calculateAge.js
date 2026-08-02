export const calculateAge = (birthDate) => {
  const today = new Date();
  let years =today.getFullYear() -birthDate.getFullYear();
  let months =today.getMonth() -birthDate.getMonth();
  let days =today.getDate() -birthDate.getDate();
  if (days < 0) {
    months--;
    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += previousMonth;
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return {
    years,
    months,
    days,
  };
};