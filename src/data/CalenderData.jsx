export const calendarData = [
  {
    day: "Mon",
    date: 25,
    times: [
      { time: "10:00", color: "bg-transparent" },
      { time: "11:00", color: "bg-transparent" },
      { time: "12:00", color: "bg-transparent" },
    ],
  },
  {
    day: "Tues",
    date: 26,
    times: [
      { time: "08:00", color: "bg-transparent" },
      { time: "09:00", color: "bg-indigo-600 text-white" },
      { time: "10:00", color: "bg-transparent" },
    ],
  },
  {
    day: "Wed",
    date: 27,
    times: [
      { time: "12:00", color: "bg-transparent" },
      { time: "—", color: "" },
      { time: "13:00", color: "bg-transparent" },
    ],
  },
  {
    day: "Thurs",
    date: 28,
    times: [
      { time: "10:00", color: "bg-transparent" },
      { time: "11:00", color: "bg-indigo-200" },
      { time: "—", color: "" },
    ],
  },
  {
    day: "Fri",
    date: 29,
    times: [
      { time: "14:00", color: "bg-transparent" },
      { time: "—", color: "" },
      { time: "16:00", color: "bg-transparent" },
    ],
  },
  {
    day: "Sat",
    date: 30,
    times: [
      { time: "12:00", color: "bg-indigo-200" },
      { time: "14:00", color: "bg-transparent" },
      { time: "15:00", color: "bg-transparent" },
    ],
  },
  {
    day: "Sun",
    date: 31,
    times: [
      { time: "09:00", color: "bg-indigo-200" },
      { time: "10:00", color: "bg-transparent text-gray-400" },
      { time: "11:00", color: "bg-transparent text-gray-400" },
    ],
  },
];

export const appointmentDetails = [
  {
    label: "Dentiest",
    time: "09:00 - 11:00",
    Dr: "Dr. Cameron Willianson",
    icon: "tooth.png",
    class: "w-[200px] bg-blue-900 text-white h-[90px]",
  },
  {
    label: "Physiotherapy Appointment",
    time: "11:00 - 12:00",
    Dr: "Dr. Kevine Djones",
    icon: "muscle.png",
    class: " w-[300px] bg-indigo-200 text-indigo-900 h-[90px]",
  },
];

export const upcomingScheduleDetailsTurs = [
  {
    label: "Health Checkup Complete", // typo fixed
    time: "11:00 AM",
    icon: "injection.png",
    class: "w-[400px] bg-blue-900 text-white ",
    height: "h-[70px]",
  },
  {
    label: "Ophthalmologist", // typo fixed
    time: "2:00 PM",
    icon: "eye.png",
    class: "w-[200px] bg-indigo-200 text-indigo-900 ",
    height: "h-[70px]",
  },
];

export const SaturdatAppDetails = [
  {
    label: "Cardiologist",
    time: "12:00 AM",
    icon: "heart.png",
    class: "w-[200px] bg-indigo-200 text-indigo-900 ",
    height: "h-[70px]",
  },
  {
    label: "Neurologist",
    time: "6:00 PM",
    icon: "male-face-avatar.avif",
    class: "w-[200px] bg-indigo-200 text-indigo-900 ",
    height: "h-[70px]",
  },
];

export const cardList = [
  {
    label: "Lungs",
    date: "26 Oct 2021",
    icon: "red-lungs.avif",
    progress: 80,
    color: "bg-red-500",
  },
  {
    label: "Teeth",
    date: "26 Oct 2021",
    icon: "tooth.png",
    progress: 65,
    color: "bg-green-400",
  },
  {
    label: "Bone",
    date: "26 Oct 2021",
    icon: "bone.webp",
    progress: 40,
    color: "bg-orange-400",
  },
];

export const chartData = [
  { day: "Mon", bars: [45, 60, 30, 40, 20] },
  { day: "Tues", bars: [25, 50, 65, 30, 40] },
  { day: "Wed", bars: [35, 45, 20, 50] },
  { day: "Thurs", bars: [40, 60, 30, 25, 35] },
  { day: "Fri", bars: [60, 40, 45, 30] },
  { day: "Sat", bars: [50, 20, 35, 25] },
  { day: "Sun", bars: [35, 50, 45, 30] },
];

export const colors = ["bg-cyan-400", "bg-gray-300", "bg-indigo-500"];
