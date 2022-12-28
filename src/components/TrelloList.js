import { Paper, CssBaseline, makeStyles } from '@material-ui/core';
import AddCardOrList from './AddCardOrList';
import ListTitle from './ListTitle';
import TrelloCard from './TrelloCard';

const TrelloList = ({list}) => {
  console.log(list)
  const clases = useStyle();

  return (
    <Paper className={clases.root}>
      <CssBaseline />
      <ListTitle title={list.title} listId={list.id} />
      {
        list.cards.map(card => (
          <TrelloCard card={card} key={card.id} />
        ))
      }
      <AddCardOrList type="card" />
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
