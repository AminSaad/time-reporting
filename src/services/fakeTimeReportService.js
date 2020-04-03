const timeReports = [
  {
    id: 1,
    date: "2020-03-23",
    startHours: 8,
    endHour: 17,
    startMinutes: 5,
    endMinutes: 30,
    activity: { _id: 1, name: "Arbete" },
  },
  {
    id: 2,
    date: "2020-08-18",
    startHours: 14,
    endHour: 22,
    startMinutes: 15,
    endMinutes: 25,
    activity: { _id: 4, name: "Ledighet" },
  },
  {
    id: 3,
    date: "2020-12-09",
    startHours: 5,
    endHour: 15,
    startMinutes: 45,
    endMinutes: 10,
    activity: { _id: 2, name: "Sjukdom" },
  },
];

export function getTimeReports() {
  return timeReports;
}

export function getTimeReport(date) {
  return timeReports.find((timeReport) => timeReport.date === date);
}

export function deleteTimeReport(date) {
  const index = timeReports.findIndex((timeReport) => timeReport.date === date);
  if (index >= 0) {
    timeReports.splice(index, 1);
  }
}

export function saveTimeReport(timeReport) {
  const timeReportInDb =
    timeReports.find((tr) => tr.id === timeReport.id) || {};
  timeReportInDb.date = timeReport.date;
  timeReportInDb.startHours = timeReport.startHours;
  timeReportInDb.endHour = timeReport.endHour;
  timeReportInDb.startMinutes = timeReport.startMinutes;
  timeReportInDb.endMinutes = timeReport.endMinutes;
  timeReportInDb.activity = timeReport.activity;

  if (!timeReport.id) {
    timeReport.id = timeReports.length + 1;
    timeReports.push(timeReportInDb);
  }

  return timeReportInDb;
}

export default timeReports;
