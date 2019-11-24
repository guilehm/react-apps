import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Checkbox from '@material-ui/core/Checkbox'
import Avatar from '@material-ui/core/Avatar'


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}))

const SearchList = ({ items }) => {

    const classes = useStyles()
    const [checked, setChecked] = React.useState([1])

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }

    const isChecked = item => {
        return Boolean(checked.filter(i => i.id === item.id).length)
    }

    return (
        <List dense className={classes.root}>
            {items.slice(0, 5).map(item => {
                const labelId = `checkbox-list-secondary-label-${item.slug}`
                return (
                    <ListItem key={item.id} button>
                        <ListItemAvatar>
                            <Avatar
                                alt={item.name}
                                src={item.background_image}
                            />
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={item.name} />
                        <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(item)}
                                checked={false}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default SearchList
