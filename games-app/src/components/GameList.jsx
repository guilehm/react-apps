import React from 'react'
import { VisibleGameItem as Game } from '../containers/GameItem.container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }))


const GameList = ({ games, actions }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
                {games.map(game =>
                    <Grid item xs={12} sm={6} md={4}>
                        <Game {...game} actions={actions} />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default GameList