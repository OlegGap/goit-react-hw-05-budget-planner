import { connect } from 'react-redux';
import * as plannerActions from '../../redux/plannerActions';
// import * as plannerSelectors from '../../redux/plannerSelectors.js';
import BudgetForm from './BudgetForm.jsx';

const mapStateToProps = state => ({ budget: state.palenner.budget });

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(plannerActions.addBudget(value)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BudgetForm);
