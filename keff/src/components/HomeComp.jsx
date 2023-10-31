import courts from "../server/mockCourts.json";

function HomeComp() {
  return (
    <div>
      <h1>Games</h1>

      {courts.map((item) => (
        <ul>
          {" "}
          <li>{`Location: ${item.location}`}</li> <li>{`Day: ${item.day}`}</li>
          <li>{`Time: ${item.time}`}</li> <img src={item.img_src} alt="court" />
        </ul>
      ))}
    </div>
  );
}

export default HomeComp;

//remove li dots
//resize pictures
//add dynamic ID to each court/event
//use styled components

