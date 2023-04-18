import {StyleSheet} from 'react-native';
import color from '../../utils/color';

export default StyleSheet.create({
  dateContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: color.WHITE,
    height: 45,
    borderRadius: 4,
    color: color.BLACK,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {borderWidth: 1, borderColor: color.LIGHT_BLUE},
  calenderIcon: {marginLeft: 15},
  calenderPlaceHolder: {marginLeft: 10},
  fontStyle: {fontSize: 20},
});
