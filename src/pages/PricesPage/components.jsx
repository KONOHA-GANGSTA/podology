import { useGetPricesQuery } from "../../redux/services/api";
import { PricesTables } from "../../components/PricesTables/component";

export const PricesPage = () => {
  const { data, isFetching } = useGetPricesQuery();

  if (isFetching) return <div>GRUZIM</div>;

  return <PricesTables data={data} />;
};
