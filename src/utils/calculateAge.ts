/**
 * Calculate age based on birthdate
 * @param birthDate - Date object representing the birthdate
 * @returns Current age
 */
export const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // If birthday hasn't occurred this year yet, subtract 1 from age
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

export const BIRTHDATE = new Date(1999, 6, 10);

export const getAge = () => calculateAge(BIRTHDATE);
