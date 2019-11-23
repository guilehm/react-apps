import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))


const Search = ({ actions }) => {
    const classes = useStyles()

    function handleSubmit(e) {
        const name = e.target.value.trim()
        if (name) actions.addGame({ name })
        e.target.value = ''
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-basic"
                label="Game name"
                onBlur={handleSubmit}
                variant="outlined" />
        </form>
    )
}

export default Search
