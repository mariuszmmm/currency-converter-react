export const formatCurrentDay = (currentDate) => currentDate.toLocaleString(undefined, {
   weekday: "long",
});

export const formatCurrentTime = (currentDate) => currentDate.toLocaleString(undefined, {
   hour: "2-digit",
   minute: "2-digit",
   second: "2-digit",
   day: "numeric",
   month: "long"
});