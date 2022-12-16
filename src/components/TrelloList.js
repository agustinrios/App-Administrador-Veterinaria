import { Paper, CssBaseline, makeStyles } from '@material-ui/core';
import AddCardOrList from './AddCardOrList';
import ListTitle from './ListTitle';
import TrelloCard from './TrelloCard';

const TrelloList = () => {

  const clases = useStyle();

  return (
    <Paper className={clases.root}>
      <CssBaseline />
      <ListTitle />
      <TrelloCard />
      <AddCardOrList />
    </Paper>
  )
}

const useStyle = makeStyles(theme => ({
  root: {
    width: "300px",
    background: "#ebecf0",
    margin: theme.spacing(1),
  }
}))

export default TrelloList
