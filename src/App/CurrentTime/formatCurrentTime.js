export const formatCurrentTime = (currentTime) => currentTime.toLocaleString(undefined, {
   weekday: "long",
   hour: "2-digit",
   minute: "2-digit",
   second: "2-digit",
   day: "numeric",
   month: "long"
});