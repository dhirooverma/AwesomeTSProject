import {StyleSheet} from 'react-native';
import colors from '../utils/color';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 50,
    paddingTop: '5%',
    backgroundColor: '#fff',
  },
  indicatorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
  },
  multiSelectContainer: {
    borderColor: colors.LIGHT_BLUE,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  dropDownTextStyle: {fontSize: 16, marginTop: 5},
  searchInput: {color: '#000', fontSize: 16, padding: 15},
  styleDropdownMenuSubsection: {borderBottomWidth: 0},
});
