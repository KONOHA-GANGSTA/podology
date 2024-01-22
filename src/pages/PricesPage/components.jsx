import { useGetPricesQuery } from "../../redux/services/api";
import { PricesTables } from "../../components/PricesTables/component";
import { Spiner } from "../../components/Spiner/component";

export const PricesPage = () => {
  const { data, isFetching } = useGetPricesQuery();

  if (isFetching) return <Spiner />;

  return <PricesTables data={data} />;
};
