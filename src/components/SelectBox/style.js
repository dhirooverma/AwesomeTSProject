import {StyleSheet} from 'react-native';
import colors from '../../utils/color';

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 150,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.BLACK_OPACITY70,
  },
  button: {
    marginTop: 20,
    borderRadius: 8,
    padding: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: colors.BLACK,
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 20,
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: '#666',
  },
  modalContent: {
    width: '100%',
    height: '30%',
    backgroundColor: '#eee',
    overflow: 'hidden',
  },
  modalView: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  selectBox: {
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.LIGHT_BLUE,
  },
  selectBoxText: {
    color: colors.BLACK,
    fontSize: 16,
  },
  h5: {
    fontSize: 25,
    color: colors.WHITE,
  },
  formControl: {
    width: '90%',
    minHeight: 100,
  },
  disabledFormControl: {
    width: '90%',
    minHeight: 80,
  },
});

export default styles;
