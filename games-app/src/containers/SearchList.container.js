import { connect } from 'react-redux'
import SearchList from '../components/SearchList'
import { bindActionCreators } from 'redux'
import * as GameActions from '../actions'
import { getSearchItems } from '../selectors'


const mapStateToProps = (state, ownProps) => ({
    items: getSearchItems(state),
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GameActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)
