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

const weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const CreateWeeklyPlan = props => {
  const [isLoading, setLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [activityLibraryData, setActivityLibraryData] = useState({});
  const [activityOptionsData, setActivityOptionsData] = useState({});
  const [weeklyPlanData, setWeeklyPlanData] = useState({activity: {}});
  const modalRef = useRef({});
  const {control, handleSubmit, getValues} = useForm({
    defaultValues: {},
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async () => {
    setLoading(true);
    const formValues = getValues();
    weeklyPlanData['class'] = '';
    weeklyPlanData['classId'] = '';
    weeklyPlanData['planLibraryId'] = formValues?.planLibrary;
    weeklyPlanData['planName'] = formValues?.plan;
    weeklyPlanData['teacherName'] = formValues?.teacher;
    weeklyPlanData['teacherId'] = '';
    weeklyPlanData['notes'] = formValues?.notes ?? '';
    weeklyPlanData['createdDate'] = formValues?.date ?? new Date();
    await delay();
    console.log('formValues', weeklyPlanData);
    setLoading(false);
  };

  const onError = error => {
    console.log(error);
  };

  useEffect(() => {
    setActivityLibraryData(getActivityLibraryData());
  }, []);

  const setActivityOptions = (ActivityLibraryID, activityTypeKey) => {
    const activityData = activityLibraryData[
      ActivityLibraryID
    ]?.activityList.filter(data => {
      return data.ActivityTypeKey === activityTypeKey;
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
   * @param {*} activityTypeKey key from activity type select box
   * @param {*} dayIndex day index monday to friday 1 to 5
   */
  const addActivityModal = (activityTypeKey, dayIndex) => {
    modalRef.current = {activityTypeKey, dayIndex};
    openModal();
  };

  const addPlan = (planData = {}) => {
    weeklyPlanData['activity'][
      `${planData.activityTypeKey},${planData?.weekday}`
    ] = {
      activityId: activityOptionsData[planData.activityId]?.ActivityName,
      activityLibrary: planData.activityLibrary,
    };
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
              fontWeight: weeklyPlanData?.activity?.[`${key},${weekday}`]
                ?.activityId
                ? 'bold'
                : 'normal',
            },
          ]}>
          {weeklyPlanData?.activity?.[`${key},${weekday}`]?.activityId ??
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
            name="plan"
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => {
              return (
                <InputText
                  errorMessage={isSubmitted && errors?.plan?.message}
                  error={errors?.plan?.message && isSubmitted}
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
            name="teacher"
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => {
              return (
                <InputText
                  errorMessage={isSubmitted && errors?.teacher?.message}
                  error={errors?.teacher?.message && isSubmitted}
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
            name="date"
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => {
              return (
                <CustomDatePicker
                  pickerLabel={'Plan week (First day of the week)'}
                  name="date"
                  updateFormValue={(name, date) => {
                    onChange(date);
                  }}
                  defaultDate={value ?? new Date()} // default date should be in date format like new Date(10-05-2023)
                />
              );
            }}
          />
          <View style={{borderWidth: 1, marginBottom: 20, marginTop: 50}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: color.PRIMARY_BLUE,
              }}>
              <View style={weeklyStyles.cellStyle2}>
                <Text style={weeklyStyles.headerText}>Time of day</Text>
              </View>
              {weekday.map(week => (
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
                  {weekday.map((week, index) =>
                    renderCell(data.key, index + 1),
                  )}
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

          <Button
            style={{marginTop: 20}}
            title={'Save Plan'}
            onPress={handleSubmit(onSubmit, onError)}
          />
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
        activityTypeKey={modalRef.current.activityTypeKey}
        weekday={modalRef.current.dayIndex}
        addPlan={addPlan}
      />
    </View>
  );
};

export default CreateWeeklyPlan;
