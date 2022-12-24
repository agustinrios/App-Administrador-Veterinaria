import React, { useState } from 'react'
import { Button, IconButton, InputBase, fade, makeStyles, Paper } from '@material-ui/core'
import ClearIcon from "@material-ui/icons/Clear"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

const AddCardListOrText = ({type, setOpen}) => {

  const [title, setTitle] = useState("")
  const clases = useStyle();

  return (
    <div>
      <Paper className={clases.card}>
        <InputBase
          multiline
          onBlur={() => setOpen(false)}
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder={
            type === 'card' ? 'Enter a title for this card...': 'Enter list title...'
          }
          inputProps={{className: clases.input}}
        />
      </Paper>
      <div className={clases.confirm}>
        <div  className={clases.btn}>
          <Button className={clases.btnConfirm}>
            {
              type === 'card' ? 'Add Card': 'Add List'
            }
          </Button>
          <IconButton>  
            <ClearIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>  
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

const useStyle = makeStyles(theme => ({
  card: {
    width: '280px',
    margin: theme.spacing(0,1,1,1),
    paddingBottom: theme.spacing(1),
  },
  input: {
    margin: theme.spacing(1),
  },
  confirm: {
    display: 'flex',
    margin: theme.spacing(0,1,1,1),
  },
  btn: {
    flexGrow: 1,
  },
  btnConfirm: {
    background: '#5aac44',
    color: '#fff',
    '&:hover': {
      backgroundColor: fade('#5aac44', 0.75)
    },
  }
}))

export default AddCardListOrText
