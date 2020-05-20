import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PlayerDetail from '../components/PlayerDetail'
import * as PlayerActions from '../actions'

const mapStateToProps = (state, ownProps) => {
    return { ...ownProps }
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(PlayerActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerDetail)
