import { InputBase, makeStyles, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useContext, useState } from 'react';
import contextAPI from "../ContextAPI";

export const ListTitle = ({title, listId}) => {
  const [open, setOpen] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const {updateListTitle} = useContext(contextAPI)
  const clases = useStyle();

  const handleBlur = () => {
    //actualizar title a newTitle
    updateListTitle(newTitle, listId)
    setOpen(false)
  }

  return (
    <div>
      { open ? 
        (
          <div>
            <InputBase 
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              onBlur={handleBlur}
              autoFocus
              fullWidth
              inputProps={{className: clases.input}}
            />
          </div>
        )
        : 
        (
          <div className={clases.title}>
            <Typography 
              className={clases.titleText}
              onClick={() => setOpen(true)}
            >
              {title}
            </Typography>
            <MoreHorizIcon />
          </div>
        )
      }
    </div>
  )
}

const useStyle = makeStyles(theme => ({
  title: {
    display: "flex",
    margin: theme.spacing(1),
  },
  titleText: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    '&:focus': {
      backgroundColor: "#ddd"
    }
  }
}))

export default ListTitle
