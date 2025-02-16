import React from "react";

const librarySchedule = [
  { day: "Monday", open: "9:00 AM", close: "8:00 PM" },
  { day: "Tuesday", open: "9:00 AM", close: "8:00 PM" },
  { day: "Wednesday", open: "9:00 AM", close: "8:00 PM" },
  { day: "Thursday", open: "9:00 AM", close: "8:00 PM" },
  { day: "Friday", open: "9:00 AM", close: "8:00 PM" },
  { day: "Saturday", open: "10:00 AM", close: "6:00 PM" },
  { day: "Sunday", open: "Closed", close: "Closed" },
];

const LibraryHours = () => {
  return (
    <div className="w-full h-fit rounded-lg shadow-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Library Timings</h2>
      <table id="hours" className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3">Day</th>
            <th className="p-3">Opening Time</th>
            <th className="p-3">Closing Time</th>
          </tr>
        </thead>
        <tbody>
          {librarySchedule.map((schedule, index) => (
            <tr
              key={index}
              className={`border border-gray-300 text-center ${
                schedule.open === "Closed" ? "bg-red-100 text-red-600" : "bg-white"
              }`}
            >
              <td className="p-3 font-semibold">{schedule.day}</td>
              <td className="p-3">{schedule.open}</td>
              <td className="p-3">{schedule.close}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryHours;
