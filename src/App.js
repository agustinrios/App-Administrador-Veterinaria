import './App.css';
import { makeStyles } from '@material-ui/core';
import TrelloList from './components/TrelloList';
import backgroun_image from './images/f.jpg';
import AddCardOrList from './components/AddCardOrList';

function App() {

  const clases = useStyle();

  return (
    <div className={clases.root}>
      <div className={clases.container}>
        <TrelloList />
        <TrelloList />
        <TrelloList />
        <div>
          <AddCardOrList type="list" />
        </div>
      </div>
    </div>
  );
}

const useStyle = makeStyles(theme => ({
  root: {
    minHeight:"100vh",
    overflowY: "auto",
    backgroundImage: `url(${backgroun_image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  container:{
    display: "flex",
  }
}))

export default App;

//rafce