import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);


  return (
    <main>
      <div className="items-container">
        {items.map((items) => (
          <HomeItem key={items.id} item={items} />
        ))}
      </div>
    </main>
  );
};

export default Home;
