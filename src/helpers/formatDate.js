import { format, parseISO } from "date-fns/";
import { uk } from "date-fns/locale";

export const formatCurrentDate = () => {
  const currentDate = new Date();
  return format(currentDate, "dd MMMM, yyyy | HH:mm", { locale: uk });
};
