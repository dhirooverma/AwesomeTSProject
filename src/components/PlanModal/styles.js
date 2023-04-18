import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    marginBottom: 20,
  },
});
