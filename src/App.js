import Box from './component/Box.js';
import './App.css';
import Data from './component/Data.js';
import Grid from './component/Grid.js';
import Footer from './component/footer.js';
import UseState from './component/UseState.js';
import Increment from './component/Increment.js';
import ChangeText from './component/ChangeText.js';
function App() {
 
  return (
   <div className='wrapper'>

{/* <Box propsName={Data} /> */}
{/* <Grid propsGrid={Data}/> 
<Footer propsFooter={Data}/> */}
{/* what inside of {} */}

<UseState/>
<Increment/>
<ChangeText/>


   </div>
  );
}

export default App;

/*
import Component from "./Card";

const App = () => {
  let data = [
    {
      id: 1,
      title: "Dark",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 2,
      title: "Stranger",
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
    },
    {
      id: 3,
      title: "Lucy",
      image:
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=466&q=80",
    },
    {
      id: 4,
      title: "Rainbow",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80",
    },
  ];
  return (
    <div>
      <h1 className="card_header"></h1>
      <Component series={data} />
    </div>
  );
};

export default App;
*/