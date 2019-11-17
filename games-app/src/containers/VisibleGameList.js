import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GameList from '../components/GameList'
import { getVisibleGames } from '../selectors'


const mapStateToProps = state => ({
    filteredGames: getVisibleGames(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GameActions, dispatch)
})

const VisibleGameList = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameList)

export default VisibleGameList