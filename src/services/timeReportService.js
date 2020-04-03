import http from "./httpService";

const apiEndPoint = "http://localhost:3000/api/timereports";

export function getTimeReports() {
  return http.get(apiEndPoint);
}

export function getTimeReport(date) {
  return http.get(apiEndPoint + "/" + date);
}

export function deleteTimeReport(timeReport) {
  return http.delete(apiEndPoint + "/" + timeReport._id);
}

export function saveTimeReport(timeReport) {
  return http.post(apiEndPoint, timeReport);
}
