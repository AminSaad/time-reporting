const timeReports = [
  {
    id: 1,
    date: "2020-03-23",
    startHours: 8,
    endHour: 17,
    startMinutes: 5,
    endMinutes: 30,
    activity: "Arbete"
  },
  {
    id: 2,
    date: "2020-08-18",
    startHours: 14,
    endHour: 22,
    startMinutes: 15,
    endMinutes: 25,
    activity: "Semester"
  },
  {
    id: 3,
    date: "2020-12-3",
    startHours: 5,
    endHour: 15,
    startMinutes: 45,
    endMinutes: 10,
    activity: "Sjuk"
  }
];

export function getTimeReports() {
  return timeReports;
}

export function getTimeReport(id) {
  return timeReports.find(timeReport => timeReport.id === id);
}

export function deleteTimeReport(date) {
  const index = timeReports.findIndex(timeReport => timeReport.date === date);
  if (index >= 0) {
    timeReports.splice(index, 1);
  }
}

export function saveTimeReport(timeReport) {
  const timeReportInDb = timeReports.find(tr => tr.id === timeReport.id) || {};
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
