import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GameItem from '../components/GameItem'
import * as GameActions from '../actions'


const mapStateToProps = (state, ownProps) => {
    // hardcoded for the first result
    // I must find a better way to solve this
    let props = state.games.filter(game => game.name === ownProps.name)[0]
    return {...props}
  }


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GameActions, dispatch)
})

const VisibleGameItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameItem)

export { VisibleGameItem }