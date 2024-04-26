import Header from "../components/Header/Header";
import Schedule from "../components/Schedule/Schedule";
import ScheduleContainer from "../components/ScheduleContainer/ScheduleContainer";

export default function FlightSchedule() {
  return (
    <div className="bg-slate-300 ">
      <Header />
      <Schedule />
      <ScheduleContainer />
    </div>
  );
}
