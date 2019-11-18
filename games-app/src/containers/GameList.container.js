import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GameList from '../components/GameList'
import { getGameList } from '../selectors'
import * as GameActions from '../actions'


const mapStateToProps = state => ({
    games: getGameList(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GameActions, dispatch)
})

const VisibleGameList = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameList)

export default VisibleGameList