import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import {
  RecoilRoot,
  atom,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

const countState = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function App() {
  //const [count, setCount] = useState(0)
  return (
    <RecoilRoot>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <Card variant="outlined" style={{
          width: 500,
        }}>
          <Typography textAlign={'center'} variant='h4'>Welcome to the Counter Game</Typography>
          <Buttons />
          <Count />
        </Card>
      </div>
    </RecoilRoot>
  )
}


function Increase() {
  const setCount = useSetRecoilState(countState);   //setcount has the current state value inside it so we do not need count thus this component would not be rerendered
  return (
    <div>
      <Button variant="contained"
        onClick={() => {
          setCount((existingCount) => existingCount + 1)
        }}
      >Increase</Button>
    </div>
  )
}
function Buttons() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around"
    }}>
      <Increase />
      <Decrease />
    </div>
  )
}
function Decrease() {
  const setCount = useSetRecoilState(countState);
  return (
    <div >
      <Button variant="contained"
        onClick={() => {
          setCount((existingCount) => existingCount - 1);
        }}
      >Decrease</Button>
    </div>
  )
}

function Count() {
  const count = useRecoilValue(countState);
  return (
    <div style={{
      display: "flex",
      justifyContent: "center"
    }} >
      <Typography variant='h6'>{count}</Typography>
    </div>
  )
}


export default App
