import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { increment as incrementA } from 'store/a';
import { increment as incrementB } from 'store/b';

export default function Component() {
  const countA = useSelector((state: RootState) => state.a);
  const countB = useSelector((state: RootState) => state.b);
  const dispatch = useDispatch();

  return (
    <p>
      A: {countA} <button onClick={() => dispatch(incrementA())}>++A</button>
      <br />
      B: {countB} <button onClick={() => dispatch(incrementB())}>++B</button>
    </p>
  );
}
