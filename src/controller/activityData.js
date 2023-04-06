import {MASTERS_EE} from '../utils/constants';

export const getActivityFormData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MASTERS_EE);
    }, 3000);
  });
};
