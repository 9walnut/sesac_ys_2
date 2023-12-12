import { useDispatch, useSelector } from "react-redux";
import { Money2 } from "../components/Prac";
import { chulgm, ipgm } from "../store/counterReducer";

export function PracContainer() {
  const money = useSelector((state) => state.counter.money);
  const dispatch = useDispatch();
  const ipgm1 = () => dispatch(ipgm());
  const chulgm1 = () => dispatch(chulgm());

  return <Money2 money={money} ipgm={ipgm1} chulgm={chulgm1}></Money2>;
}
