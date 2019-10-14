import { connect } from 'react-redux';
import * as plannerActions from '../../redux/plannerActions';
import ExpenseForm from './ExpenseForm.jsx';

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(plannerActions.addExpense(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
