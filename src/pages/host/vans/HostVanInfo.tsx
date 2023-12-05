import { TVan } from "@/type/van";
import { useOutletContext } from "react-router-dom";

// const currentvan = {
//   name: "Modest Explorer",
//   type: "Simple",
//   description:
//     "Description: The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
// };

const HostVanInfo = () => {
  const { currentvan } = useOutletContext<{ currentvan: TVan }>();
  // const [currentvan, setCurrentvan] = useState<TVan>();
  // const { id } = useParams();

  // const getrcurrentvan = async () => {
  //   const currentvan = await get<{ vans: TVan[] }>(`/api/host/vans/${id}`);
  //   setCurrentvan(currentvan.vans[0]);
  // };

  // useEffect(() => {
  //   getrcurrentvan();
  // }, [id]);
  console.log(currentvan);

  if (!currentvan) return <h1>Loding......</h1>;

  return (
    <div className="flex flex-col p-6 gap-4">
      <h1 className="font-bold text-sm text-[#161616]">
        Name: <span className="font-medium">{currentvan.name}</span>
      </h1>
      <h2 className="font-bold text-sm text-[#161616]">
        Category : <span className="font-medium">{currentvan.type}</span>
      </h2>
      <p className="font-bold text-sm text-[#161616]">
        Description{" "}
        <span className="font-medium">{currentvan.description}</span>
      </p>
      <p className="font-bold text-sm text-[#161616]">
        Visibility: <span className="font-medium">Public</span>
      </p>
    </div>
  );
};

export default HostVanInfo;
