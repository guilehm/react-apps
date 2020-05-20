import { connect } from 'react-redux'
import Inputs from '../components/Inputs'
import { bindActionCreators } from 'redux'
import * as PlayerActions from '../actions'
import { getErrorStatus, getPlayerList } from '../selectors'


const mapStateToProps = (state, ownProps) => ({
    players: getPlayerList(state),
    error: getErrorStatus(state),
})


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(PlayerActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)
