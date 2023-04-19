import React, {useEffect, useState, useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './createActivityStyle';
import InputText from '../components/InputText/index';
import Label from '../components/Label/index';
import SelectBox from '../components/SelectBox/index';
import {getActivityLibraryData} from '../controller/activityData';
import {
  SELECTBOX_DEFAULT_LABEL,
  MASTERS_EE,
  delay,
  planLibrary,
} from '../utils/constants';
import CustomDatePicker from '../components/CustomDatePicker/index';
import Button from '../components/Button/index';
import color from '../utils/color';
import weeklyStyles from './createWeeklyPlanStyles';
import PlanModal from '../components/PlanModal/index';
import {useRoute} from '@react-navigation/native';

const weekdayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const CreateWeeklyPlan = props => {
  const [isLoading, setLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [activityLibraryData, setActivityLibraryData] = useState({});
  const [activityOptionsData, setActivityOptionsData] = useState({});
  const [weeklyPlanData, setWeeklyPlanData] = useState({});
  const modalRef = useRef({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const prePopulateWeeklyPlan = useRoute()?.params?.prePopulateWeeklyPlan ?? {};
  const viewMode = useRoute()?.params?.viewMode;

  const getActivityObject = activities => {
    let activityObject = {};
    activities.forEach(activity => {
      activityObject[activity.ActivityTypeKey] = activity;
    });
    return activityObject;
  };

  useEffect(() => {
    if (prePopulateWeeklyPlan?.ActivityList?.length) {
      let activityLibrary = {};
      prePopulateWeeklyPlan?.ActivityList.forEach(data => {
        activityLibrary[data.Day] = {
          ...data,
          Activities: getActivityObject(data.Activities),
        };
      });
      setWeeklyPlanData(activityLibrary);
    }
  }, [prePopulateWeeklyPlan]);

  const {control, handleSubmit, getValues} = useForm({
    defaultValues: {
      planLibrary: prePopulateWeeklyPlan?.planLibraryId,
      planName: prePopulateWeeklyPlan?.planName,
      teacherName: prePopulateWeeklyPlan?.teacherName,
      createdDate:
        prePopulateWeeklyPlan?.createdDate &&
        new Date(prePopulateWeeklyPlan?.createdDate),
      notes: prePopulateWeeklyPlan?.notes,
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async () => {
    setLoading(true);
    const formValues = getValues();
    const formData = {};
    formData['class'] = '';
    formData['classId'] = '';
    formData['planLibraryId'] = formValues?.planLibrary;
    formData['planName'] = formValues?.planName;
    formData['teacherName'] = formValues?.teacherName;
    formData['teacherId'] = '';
    formData['notes'] = formValues?.notes ?? '';
    formData['createdDate'] = formValues?.createdDate ?? new Date();
    formData['ActivityList'] = Object.values(weeklyPlanData).map(
      dayActivity => {
        return {
          ...dayActivity,
          Activities: Object.values(dayActivity?.Activities),
        };
      },
    );
    await delay(1000);
    setLoading(false);
  };

  const onError = error => {
    console.log(error);
  };

  useEffect(() => {
    setActivityLibraryData(getActivityLibraryData());
  }, []);

  const setActivityOptions = (ActivityLibraryID, ActivityTypeKey) => {
    const activityData = activityLibraryData[
      ActivityLibraryID
    ]?.activityList.filter(data => {
      return data.ActivityTypeKey === ActivityTypeKey;
    });
    const mappedObject = {};
    activityData?.forEach(
      data =>
        (mappedObject[data.ActivityId] = {
          ...data,
          key: data.ActivityId,
          value: data.ActivityName,
        }),
    );
    setActivityOptionsData(mappedObject);
  };

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    modalRef.current = {};
    setVisible(false);
  };

  /**
   *
   * @param {*} ActivityTypeKey key from activity type select box
   * @param {*} weekday weekday monday to friday
   */
  const addActivityModal = (ActivityTypeKey, weekday) => {
    modalRef.current = {ActivityTypeKey, weekday};
    openModal();
  };

  const addPlan = (planData = {}) => {
    const libraryData = activityLibraryData[planData?.ActivityLibraryID] ?? {};
    if (weeklyPlanData[planData?.weekday]) {
      weeklyPlanData[planData?.weekday].Activities[planData?.ActivityTypeKey] =
        {
          ...activityOptionsData[planData?.activityId],
          ActivityTypeKey: planData?.ActivityTypeKey,
        };
    } else {
      weeklyPlanData[planData?.weekday] = {
        Day: planData?.weekday,
        Date: '10-Apr-2023',
        isHoliday: 'No',
        Activities: {
          [planData?.ActivityTypeKey]: {
            ...activityOptionsData[planData?.activityId],
            ActivityTypeKey: planData?.ActivityTypeKey,
            ActivityLibraryID: libraryData?.key,
            ActivityLibraryName: libraryData?.value,
          },
        },
      };
    }
    setWeeklyPlanData({...weeklyPlanData});
  };

  const renderCell = (key, weekday) => {
    return (
      <TouchableOpacity
        onPress={() => addActivityModal(key, weekday)}
        style={weeklyStyles.cellStyle2}>
        <Text
          numberOfLines={1}
          style={[
            weeklyStyles.bodyText,
            {
              fontWeight: weeklyPlanData?.[weekday]?.Activities?.[key]
                ?.ActivityName
                ? 'bold'
                : 'normal',
            },
          ]}>
          {weeklyPlanData?.[weekday]?.Activities?.[key]?.ActivityName ??
            'Add Activity'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Label title={'Select Weekly Plan Library'} />
          <Controller
            control={control}
            name="planLibrary"
            rules={{
              required: {
                value: true,
                message: 'Weekly Plan Library is required!',
              },
              validate: value =>
                value === SELECTBOX_DEFAULT_LABEL
                  ? 'Please select a valid option'
                  : null,
            }}
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => (
              <SelectBox
                data={planLibrary}
                placeholder={'select'}
                errorMessage={isSubmitted && errors?.planLibrary?.message}
                error={errors?.planLibrary?.message && isSubmitted}
                id={'class'}
                preSelected={value ?? SELECTBOX_DEFAULT_LABEL}
                onValueChange={onChange}
              />
            )}
          />
          <Label title={'Plan Name'} />
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Plan name are required!',
              },
              validate: value =>
                value.length > 100
                  ? 'Length should be less than 100'
                  : undefined,
            }}
            name="planName"
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => {
              return (
                <InputText
                  errorMessage={isSubmitted && errors?.planName?.message}
                  error={errors?.planName?.message && isSubmitted}
                  maxLength={100}
                  value={value}
                  editable
                  onChangeText={text => {
                    onChange(text);
                  }}
                />
              );
            }}
          />
          <Label title={'Teacher Name'} />
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Teacher are required!',
              },
              validate: value =>
                value.length > 100
                  ? 'Length should be less than 100'
                  : undefined,
            }}
            name="teacherName"
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => {
              return (
                <InputText
                  errorMessage={isSubmitted && errors?.teacherName?.message}
                  error={errors?.teacherName?.message && isSubmitted}
                  maxLength={100}
                  value={value}
                  editable
                  onChangeText={text => {
                    onChange(text);
                  }}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="createdDate"
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => {
              return (
                <CustomDatePicker
                  pickerLabel={'Plan week (First day of the week)'}
                  name="createdDate"
                  updateFormValue={(name, createdDate) => {
                    onChange(createdDate);
                  }}
                  defaultDate={value ?? new Date()} // default date should be in date format like new Date(10-05-2023)
                />
              );
            }}
          />
          <View
            pointerEvents={viewMode ? 'none' : 'auto'}
            style={{borderWidth: 1, marginBottom: 20, marginTop: 50}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: color.PRIMARY_BLUE,
              }}>
              <View style={weeklyStyles.cellStyle2}>
                <Text style={weeklyStyles.headerText}>Time of day</Text>
              </View>
              {weekdayArray.map(week => (
                <View style={weeklyStyles.cellStyle2}>
                  <Text style={weeklyStyles.headerText}>{week}</Text>
                </View>
              ))}
            </View>
            {MASTERS_EE.type &&
              MASTERS_EE.type.map((data, ind) => (
                <View
                  key={ind}
                  style={{
                    flexDirection: 'row',
                    borderTopWidth: 0.5,
                  }}>
                  <View style={weeklyStyles.cellStyle2}>
                    <Text numberOfLines={1} style={[weeklyStyles.flexStart]}>
                      {data.name ?? ''}
                    </Text>
                  </View>
                  {weekdayArray.map(week => renderCell(data.key, week))}
                </View>
              ))}
          </View>
          <Label title={'Notes'} />
          <Controller
            control={control}
            name="notes"
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => {
              return (
                <InputText
                  errorMessage={isSubmitted && errors?.keywords?.message}
                  error={errors?.keywords?.message && isSubmitted}
                  maxLength={100}
                  value={value}
                  editable
                  onChangeText={text => {
                    onChange(text);
                  }}
                />
              );
            }}
          />

          {!viewMode && (
            <Button
              style={{marginTop: 20}}
              title={'Save Plan'}
              onPress={handleSubmit(onSubmit, onError)}
            />
          )}
        </KeyboardAvoidingView>
        {/* <ActivityTable data={TABLE_DATA} /> */}
      </ScrollView>
      {isLoading && (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator
            style={{transform: [{scaleX: 3}, {scaleY: 3}]}}
            color="#000"
          />
        </View>
      )}
      <PlanModal
        activityLibraryData={Object.values(activityLibraryData)}
        activityOptionsData={Object.values(activityOptionsData)}
        setActivityOptions={setActivityOptions}
        closeModal={closeModal}
        isVisible={isVisible}
        ActivityTypeKey={modalRef.current.ActivityTypeKey}
        weekday={modalRef.current.weekday}
        addPlan={addPlan}
      />
    </View>
  );
};

export default CreateWeeklyPlan;
