import {StyleSheet} from 'react-native';
import Color from '../../utils/color';

export default StyleSheet.create({
  cellStyle1: {
    padding: 5,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellStyle2: {
    padding: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  bodyText: {
    fontSize: 17,
    alignSelf: 'flex-start',
  },
});
