import { Collapse, fade, makeStyles, Paper, Typography } from '@material-ui/core'
import { useState } from 'react'
import AddCardListOrText from './AddCardListOrText'

const AddCardOrList = ({type}) => {
  
  const [open, setOpen] = useState(true)
  const clases = useStyle();

  return (
    <div className={clases.root}>
      <Collapse in={open}>
        <AddCardListOrText type={type} setOpen={setOpen} />
      </Collapse>
      <Collapse in={!open}>
        <Paper className={clases.addCard} onClick={() => setOpen(true)}>
          <Typography>
            {
              type === 'card' ? '+ Add a Card' : '+ Add Another List'
            }
          </Typography>
        </Paper>
      </Collapse>
    </div>
  )
}

const useStyle = makeStyles(theme => ({
  root: {
    width: '300px',
    margin: theme.spacing(1,0,1,0),
  },
  addCard: {
    padding: theme.spacing(1,1,1,2),
    margin: theme.spacing(0,1,1,1),
    background: "#ebecf0",
    '&:hover': {
      backgroundColor: fade('#000', 0.25)
    }
  }
}))

export default AddCardOrList
