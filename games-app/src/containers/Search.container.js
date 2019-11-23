import { connect } from 'react-redux'
import Search from '../components/layout/Search'
import { bindActionCreators } from 'redux'
import * as GameActions from '../actions'
import { getErrorStatus, getLoadingStatus } from '../selectors'


const mapStateToProps = (state, ownProps) => ({
    loading: getLoadingStatus(state),
    error: getErrorStatus(state),
})


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GameActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
