
import {StyleSheet} from 'react-native';
import colors from "../../utils/color"

export default StyleSheet.create({
  container: {
    flex: 1,
    // width: '60%', // set the width to 80%
    // padding: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.  BLACK_BLUR_BACKGROUND
    },
  alertBox: {
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    padding: 20,
    width: '30%',
    // alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    alignItems: 'flex-start',
    fontSize: 20,
    marginBottom: 10,
    color: colors.BLACK,
  },
  message: {
    color: colors.BLACK,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  okButton: {
    backgroundColor: colors.GREEN_AQI,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 5,
    marginRight: 10,
  },
  okText: {
    color: colors.WHITE,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: colors.RED,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 5,
  },
  cancelText: {
    color: colors.WHITE,
    fontWeight: 'bold',
  },
});

