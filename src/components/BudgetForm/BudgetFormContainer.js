import { connect } from 'react-redux';
import * as plannerActions from '../../redux/planner/plannerActions';
import BudgetForm from './BudgetForm.jsx';
import * as plannerSelectors from '../../redux/planner/plannerSelectors';

const mapStateToProps = state => ({
  expenses: plannerSelectors.calculateTotalExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(plannerActions.addBudget(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BudgetForm);
