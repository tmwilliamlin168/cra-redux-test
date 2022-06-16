import { useDispatch, useSelector } from 'react-redux';
import { increment as incrementA } from 'store/a';
import { increment as incrementB } from 'store/b';

export default function Component() {
  const countA = useSelector((state: any) => state.a);
  const countB = useSelector((state: any) => state.b);
  const dispatch = useDispatch();

  return (
    <p>
      A: {countA} <button onClick={() => dispatch(incrementA())}>++A</button>
      <br />
      B: {countB} <button onClick={() => dispatch(incrementB())}>++B</button>
    </p>
  );
}
