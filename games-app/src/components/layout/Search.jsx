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

    const label = () => {
        if (loading) return 'Loading ...'
        if (error) return 'Error'
        return 'Game'
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                error={error}
                helperText={
                    error ? 'Ops... Game not found' : ''
                }
                id="outlined-basic"
                label={label()}
                onBlur={handleSubmit}
                autoFocus={true}
                variant="outlined" />
        </form>
    )
}

export default Search
