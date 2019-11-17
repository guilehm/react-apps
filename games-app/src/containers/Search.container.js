import { connect } from 'react-redux'
import Search from '../components/layout/Search'
import { bindActionCreators } from 'redux'
import * as GameActions from '../actions'


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GameActions, dispatch)
})

export default connect(null, mapDispatchToProps)(Search)
