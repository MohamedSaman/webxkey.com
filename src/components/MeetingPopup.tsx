import { useEffect, useState } from "react";

// Meeting Popup Component
const MeetingPopup = ({ onClose }: { onClose: () => void }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [step, setStep] = useState<
    "date" | "time" | "details" | "confirmation"
  >("date");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bookedSlots, setBookedSlots] = useState<Record<string, string[]>>({});

  // Calendar navigation state
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Helper function to create date string without timezone issues
  const toLocalISODateString = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Fetch booked slots from the server
  useEffect(() => {
    const fetchBookedSlots = async () => {
      try {
        const response = await fetch(
          "https://webxkey.com/api/get_booked_slots.php"
        );
        const data = await response.json();
        if (response.ok) {
          setBookedSlots(data.bookedSlots || {});
        }
      } catch (error) {
        console.error("Error fetching booked slots:", error);
      }
    };

    fetchBookedSlots();
  }, []);

  // Generate all possible time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (const minute of ["00", "30"]) {
        slots.push(
          `${hour === 0 ? 12 : hour > 12 ? hour - 12 : hour}:${minute} ${
            hour >= 12 ? "PM" : "AM"
          }`
        );
      }
    }
    return slots;
  };

  // Get available time slots for selected date
  const getAvailableTimeSlots = () => {
    if (!selectedDate) return [];

    const allSlots = generateTimeSlots();
    const bookedForDate = bookedSlots[selectedDate] || [];

    return allSlots.filter((slot) => !bookedForDate.includes(slot));
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const availableTimeSlots = selectedDate ? getAvailableTimeSlots() : [];

  // Generate days for the current month view
  const generateDaysForMonthView = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    // Get day of week for first day (0 = Sunday, 6 = Saturday)
    const startingDayOfWeek = firstDayOfMonth.getDay();

    // Calculate days from previous month to show
    const prevMonthDays = [];
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = 0; i < startingDayOfWeek; i++) {
      const date = new Date(
        currentYear,
        currentMonth - 1,
        prevMonthLastDay - i
      );
      prevMonthDays.push({
        date,
        isCurrentMonth: false,
        isSelectable: false,
      });
    }
    prevMonthDays.reverse();

    // Current month days
    const currentMonthDays = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const dateString = toLocalISODateString(date);
      const isPastDate = date < today;
      const isFullyBooked =
        bookedSlots[dateString]?.length === generateTimeSlots().length;

      currentMonthDays.push({
        date,
        isCurrentMonth: true,
        isSelectable: !isPastDate && !isFullyBooked,
        isPastDate,
        isFullyBooked,
        dateString,
      });
    }

    // Next month days to fill the grid
    const nextMonthDays = [];
    const totalCells =
      prevMonthDays.length + currentMonthDays.length > 35 ? 42 : 35;
    const remainingCells =
      totalCells - (prevMonthDays.length + currentMonthDays.length);

    for (let i = 1; i <= remainingCells; i++) {
      const date = new Date(currentYear, currentMonth + 1, i);
      nextMonthDays.push({
        date,
        isCurrentMonth: false,
        isSelectable: false,
      });
    }

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  // Handle month/year navigation
  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://webxkey.com/api/send_meeting_email.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            date: selectedDate,
            time: selectedTime,
            notes,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to schedule meeting");
      }

      // Update local booked slots state
      if (selectedDate && selectedTime) {
        setBookedSlots((prev) => ({
          ...prev,
          [selectedDate]: [...(prev[selectedDate] || []), selectedTime],
        }));
      }

      setStep("confirmation");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  // Calendar component with proper date selection
  const renderDateSelection = () => {
    const monthName = new Date(currentYear, currentMonth).toLocaleDateString(
      "en-US",
      {
        month: "long",
      }
    );

    const daysForMonth = generateDaysForMonthView();

    return (
      <div>
        <h3 className="text-xl font-semibold mb-4">Select a Date</h3>

        {/* Month/Year Navigation */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => navigateMonth("prev")}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <h4 className="text-lg font-medium">
            {monthName} {currentYear}
          </h4>

          <button
            onClick={() => navigateMonth("next")}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {daysForMonth.map((day, index) => {
            const isSelected = selectedDate === day.dateString;
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const isToday = day.date.getTime() === today.getTime();

            return (
              <button
                key={index}
                onClick={() => {
                  if (day.isSelectable && day.dateString) {
                    setSelectedDate(day.dateString);
                    setStep("time");
                  }
                }}
                disabled={!day.isSelectable}
                className={`py-2 rounded-full text-center text-sm
                    ${!day.isCurrentMonth ? "text-gray-300" : ""}
                    ${day.isPastDate ? "text-gray-400" : ""}
                    ${day.isFullyBooked ? "text-gray-400" : ""}
                    ${isSelected ? "bg-blue-100 text-blue-600 font-medium" : ""}
                    ${isToday && !isSelected ? "bg-gray-100 font-medium" : ""}
                    ${
                      day.isSelectable
                        ? "hover:bg-blue-50 cursor-pointer"
                        : "cursor-not-allowed"
                    }
                  `}
                title={
                  day.isPastDate
                    ? "Past date"
                    : day.isFullyBooked
                    ? "No available slots"
                    : ""
                }
              >
                {day.date.getDate()}
                {day.isFullyBooked && day.isCurrentMonth && !day.isPastDate && (
                  <span className="block w-1 h-1 bg-gray-400 rounded-full mx-auto mt-1"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  // Time slot selection component
  const renderTimeSelection = () => {
    if (!selectedDate) return null;

    const allTimeSlots = generateTimeSlots();
    const bookedForDate = bookedSlots[selectedDate] || [];

    // Create date object without timezone conversion
    const [year, month, day] = selectedDate.split("-").map(Number);
    const dateObj = new Date(year, month - 1, day);

    const formattedDate = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Select a Time</h3>
        </div>
        <p className="mb-4">{formattedDate}</p>
        <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto">
          {allTimeSlots.map((time) => {
            const isBooked = bookedForDate.includes(time);
            return (
              <button
                key={time}
                onClick={() => {
                  if (!isBooked) {
                    setSelectedTime(time);
                    setStep("details");
                  }
                }}
                disabled={isBooked}
                className={`py-2 px-4 rounded-lg border text-center
                  ${
                    isBooked
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "hover:bg-blue-50"
                  }
                  ${
                    selectedTime === time && !isBooked
                      ? "bg-blue-100 text-blue-600"
                      : ""
                  }
                `}
                title={isBooked ? "This slot is already booked" : ""}
              >
                {time}
                {isBooked && (
                  <span className="block text-xs text-gray-500">Booked</span>
                )}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => setStep("date")}
          className="mt-4 text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          ← Back to dates
        </button>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg max-w-md w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ✕
        </button>

        {step === "date" && renderDateSelection()}
        {step === "time" && renderTimeSelection()}

        {step === "details" && (
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Your Information</h3>
            </div>
            <div className="mb-4 p-3 bg-gray-50 rounded-md">
              <p className="font-medium">
                {new Date(selectedDate!).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-gray-600">{selectedTime}</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Meeting Notes (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>
            </div>
            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-md">
                {error}
              </div>
            )}
            {/*             <button
                onClick={() => setStep("time")}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                ← Change time
              </button> */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => setStep("time")}
                className="text-blue-600 hover:text-blue-800 px-4 py-2 cursor-pointer"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Scheduling...
                  </span>
                ) : (
                  "Schedule Meeting"
                )}
              </button>
            </div>
          </form>
        )}

        {step === "confirmation" && (
          <div className="text-center py-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Meeting Scheduled!</h3>
            <p className="mb-6 text-gray-600">
              We&#39;ve sent a confirmation email with the Google Meet link to{" "}
              {email}.
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingPopup;
