import { Collapse, Fade, makeStyles, Paper, Typography } from '@material-ui/core'
import { useState } from 'react'
import AddCardListOrText from './AddCardListOrText'

const AddCardOrList = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Collapse in={open}>
        <AddCardListOrText />
      </Collapse>
      <Collapse in={!open}>
      
      </Collapse>
    </div>
  )
}

export default AddCardOrList