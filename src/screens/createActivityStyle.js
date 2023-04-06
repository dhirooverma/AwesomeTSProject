import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    paddingHorizontal: '10%',
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
});
