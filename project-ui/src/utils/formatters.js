export const formatDate = (date, format = 'DD/MM/YY') => {
  let formattedDate = '-';
  try {
    if (date) {
      const actDate = new Date(date);
      formattedDate = `${actDate.getDate()}/${
        actDate.getMonth() + 1
      }/${actDate.getFullYear().toString().substr(2, 2)}`;
    }
    return formattedDate;
  } catch (e) {
    console.log(e);
  }
};
