import {StyleSheet} from 'react-native';
import Color from '../utils/color';

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
    borderRightWidth: 0.5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Color.WHITE,
  },
  bodyText: {
    fontSize: 15,
    alignSelf: 'center',
  },
  flexStart: {
    alignSelf: 'flex-start',
  },
  modalContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#eee',
    overflow: 'hidden',
    margin: '20%',
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
