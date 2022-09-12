const formatDate = (locale, date) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return new Intl.DateTimeFormat(locale, options).format(new Date(date));
  };
  
  export default formatDate;