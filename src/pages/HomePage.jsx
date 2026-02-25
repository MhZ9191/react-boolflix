import MainMovie from "../components/MainMovie";
import MainSeries from "../components/MainSeries";
export default function HomePage() {
  return (
    <>
      <section className="sec-main">
        <div className="div-main">
          <MainMovie />
          <MainSeries />
        </div>
      </section>
    </>
  );
}
