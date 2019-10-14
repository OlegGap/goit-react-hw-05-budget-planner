import { connect } from 'react-redux';
import * as plannerActions from '../../redux/plannerActions';
import * as plannerSelectors from '../../redux/plannerSelectors';
import App from './App.jsx';

const mapStateToProps = state => ({
  budget: plannerSelectors.getBudget(state),
  expenses: plannerSelectors.getExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  removeExpense: id => dispatch(plannerActions.removeExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
