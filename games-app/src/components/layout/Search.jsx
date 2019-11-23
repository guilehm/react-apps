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


const Search = ({ actions, loading, error }) => {
    const classes = useStyles()

    function handleSubmit(e) {
        const name = e.target.value.trim()
        if (name) {
            actions.addGame({ name })
            actions.setLoading()
        }
        e.target.value = ''
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-basic"
                label={loading ? 'Loading ...' : 'Game name'}
                onBlur={handleSubmit}
                variant="outlined" />
        </form>
    )
}

export default Search
