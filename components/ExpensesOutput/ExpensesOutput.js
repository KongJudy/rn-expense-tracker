import { StyleSheet, View } from 'react-native';

import { GlobalStyles } from '../../constants/styles';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-07-01')
  },
  {
    id: 'e2',
    description: 'A pair of pants',
    amount: 89.99,
    date: new Date('2023-07-02')
  },
  {
    id: 'e3',
    description: 'Bananas',
    amount: 2.22,
    date: new Date('2023-07-04')
  },
  {
    id: 'e4',
    description: 'Book',
    amount: 15.92,
    date: new Date('2023-07-10')
  },
  {
    id: 'e5',
    description: 'Food',
    amount: 55.98,
    date: new Date('2023-07-22')
  },
  {
    id: 'e6',
    description: 'A pair of pants',
    amount: 89.99,
    date: new Date('2023-07-02')
  },
  {
    id: 'e7',
    description: 'Bananas',
    amount: 2.22,
    date: new Date('2023-07-04')
  },
  {
    id: 'e8',
    description: 'Book',
    amount: 15.92,
    date: new Date('2023-07-10')
  },
  {
    id: 'e9',
    description: 'Food',
    amount: 55.98,
    date: new Date('2023-07-22')
  }
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};
export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
});
