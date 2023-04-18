import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import styles from './styles';
import {View, TouchableWithoutFeedback, Modal} from 'react-native';
import Button from '../../components/Button/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Label from '../../components/Label/index';
import color from '../../utils/color';
import {SELECTBOX_DEFAULT_LABEL} from '../../utils/constants';
import SelectBox from '../../components/SelectBox/index';

const PlanModal = ({
  closeModal,
  isVisible,
  activityLibraryData = [],
  activityOptionsData = [],
  setActivityOptions,
  activityTypeKey,
  weekday,
  addPlan,
}) => {
  const {control, handleSubmit, getValues, reset} = useForm({
    defaultValues: {},
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = () => {
    const formValues = getValues();
    const planData = {
      activityId: formValues?.select_activity,
      weekday: weekday,
      activityTypeKey: activityTypeKey,
      activityLibrary: formValues?.activity_library,
    };
    addPlan(planData);
    closeModal();
    reset();
  };

  const close = () => {
    reset();
    closeModal();
  };

  const onError = error => {
    console.log('error', error);
  };

  const setActivity = ActivityLibraryID => {
    setActivityOptions(ActivityLibraryID, activityTypeKey);
  };

  return (
    <Modal
      supportedOrientations={['portrait', 'landscape']}
      animationType="slide"
      transparent={true}
      visible={isVisible}>
      <View style={styles.modalContainerStyle}>
        <TouchableWithoutFeedback onPress={e => e.preventDefault()}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <Label title={'ADD ACTIVITY'} />
              <Ionicons
                onPress={close}
                name="close"
                size={30}
                color={color.BLACK}
              />
            </View>
            <Label title={'Activity Library'} />
            <Controller
              control={control}
              name="activity_library"
              rules={{
                required: {
                  value: true,
                  message: 'Activity Library is required!',
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
                  data={activityLibraryData}
                  errorMessage={
                    isSubmitted && errors?.activity_library?.message
                  }
                  error={errors?.activity_library?.message && isSubmitted}
                  preSelected={value ?? SELECTBOX_DEFAULT_LABEL}
                  onValueChange={option => {
                    onChange(option);
                    setActivity(option);
                  }}
                />
              )}
            />
            <Label title={'Select Activity'} />
            <Controller
              control={control}
              name="select_activity"
              rules={{
                required: {
                  value: true,
                  message: 'Activity is required!',
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
                  data={activityOptionsData}
                  errorMessage={isSubmitted && errors?.select_activity?.message}
                  error={errors?.select_activity?.message && isSubmitted}
                  preSelected={value ?? SELECTBOX_DEFAULT_LABEL}
                  onValueChange={onChange}
                />
              )}
            />
            <Button
              style={{marginTop: 20}}
              title={'Add to Plan'}
              onPress={
                // () => {
                //   onSubmit();
                // }
                handleSubmit(onSubmit, onError)
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default PlanModal;
