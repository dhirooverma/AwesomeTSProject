import {MASTERS_EE, ActivityListInfo} from '../utils/constants';

export const getActivityFormData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MASTERS_EE);
    }, 3000);
  });
};

export const makeActivityListObject = activityList => {
  const mappedObject = {};
  activityList?.forEach(
    data =>
      (mappedObject[data.ActivityId] = {
        ...data,
        key: data.ActivityId,
        value: data.ActivityName,
      }),
  );
  return mappedObject;
};

export const getActivityLibraryData = () => {
  let activityLibrary = {};
  ActivityListInfo.forEach(data => {
    activityLibrary[data.ActivityLibraryID] = {
      key: data.ActivityLibraryID,
      value: data.ActivityLibraryName,
      activityList: data.ActivityList,
    };
  });
  return activityLibrary;
};
