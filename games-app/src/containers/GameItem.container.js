import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GameItem from '../components/GameItem'
import { getGameList } from '../selectors'
import * as GameActions from '../actions'


// const mapStateToProps = state => ({
//     games: getGameList(state)
// })

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GameActions, dispatch)
})

const VisibleGameItem = connect(
    null,
    mapDispatchToProps
)(GameItem)

export { VisibleGameItem }