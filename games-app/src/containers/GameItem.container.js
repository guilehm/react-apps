import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GameItem from '../components/GameItem'
import * as GameActions from '../actions'


const mapStateToProps = (state, ownProps) => {
    return {...ownProps}
  }


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GameActions, dispatch)
})

const VisibleGameItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameItem)

export { VisibleGameItem }