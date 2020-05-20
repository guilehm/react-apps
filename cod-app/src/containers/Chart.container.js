import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Chart from '../components/Chart'
import * as PlayerActions from '../actions'
import { getPlayerList } from '../selectors'

const mapStateToProps = state => ({
    players: getPlayerList(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(PlayerActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chart)
