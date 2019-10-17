import { connect } from 'react-redux';
import * as plannerActions from '../../redux/planner/plannerActions';
import ExpenseForm from './ExpenseForm.jsx';
import * as plannerSelectors from '../../redux/planner/plannerSelectors';

const mapStateToProps = state => ({
  balance: plannerSelectors.calculateBalance(state),
});

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(plannerActions.addExpense(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseForm);
