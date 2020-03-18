const timeReports = [
  {
    id: 1,
    date: "2020-03-23",
    startingTime: "08.00",
    endTime: "17.00"
  },
  {
    id: 2,
    date: "2020-08-18",
    startingTime: "07.00",
    endTime: "16.00"
  },
  {
    id: 3,
    date: "2020-03-23",
    startingTime: "06.00",
    endTime: "18.00"
  }
];

export function getTimeReports() {
  return timeReports;
}

export function getTimeReport(id) {
  return timeReports.find(timeReport => timeReport.id === id);
}

export function deleteTimeReport(id) {
  const index = timeReports.findIndex(timeReport => timeReport.id === id);

  timeReports.splice(index, 1);
}

export function saveTimeReport(timeReport) {
  const timeReportInDb = timeReports.find(tr => tr.id === timeReport.id) || {};
  timeReportInDb.date = timeReport.date;
  timeReportInDb.startingTime = timeReport.startingTime;
  timeReportInDb.endTime = timeReport.endTime;

  if (!timeReport.id) {
    timeReport.id = timeReports.length + 1;
    timeReport.push(timeReportInDb);
  }

  return timeReportInDb;
}

export default timeReports;
