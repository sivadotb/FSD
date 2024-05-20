import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state);

  return (
    <div>
      <div>
        <p>Counter: { 
          counter ? counter.counter : 0
         }</p>
      </div>

      <div>
        <button
          onClick={
            () => dispatch({ type: 'INCR' })
          }
        >
          plus
        </button>
        <button>minus</button>
        <button>zero</button>
      </div>
    </div>
  )
}

export default App;