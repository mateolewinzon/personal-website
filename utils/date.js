import moment from "moment";
import 'moment/locale/es'


const formatDate = (locale, date) => {
  const format = `${locale === 'es' ? 'D MMM' : 'MMM D,'} YYYY`
  const jsDate = new Date(date);
  moment.locale(locale);
  return moment(jsDate).format(format);
};

export default formatDate;