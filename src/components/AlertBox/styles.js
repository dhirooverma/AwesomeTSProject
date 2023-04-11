
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // width: '60%', // set the width to 80%
    // padding: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBox: {
    backgroundColor: '#fff',
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
    color: 'black',
  },
  message: {
    color: 'black',
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  okButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 5,
    marginRight: 10,
  },
  okText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 5,
  },
  cancelText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

