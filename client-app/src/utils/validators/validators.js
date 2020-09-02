export const required = (value) => {
  if (value) return undefined;
  return "Поле не може бути пустим";
};
