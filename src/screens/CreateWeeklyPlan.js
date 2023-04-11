import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import styles from './createActivityStyle';
import InputText from '../components/InputText/index';
import Label from '../components/Label/index';
import SelectBox from '../components/SelectBox/index';
import {getActivityFormData} from '../controller/activityData';
import {SELECTBOX_DEFAULT_LABEL, TABLE_DATA} from '../utils/constants';
import ActivityTable from '../components/ActivityTable/index';

const CreateWeeklyPlan = props => {
  const [formData, setFormData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const {control, handleSubmit, getValues} = useForm({
    defaultValues: {},
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    setLoading(true);
    getActivityFormData().then(data => {
      setFormData(data);
      setLoading(false);
    });
  }, []);

  console.log(formData?.classValue);

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
                data={formData?.planLibraryValue}
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
                value.length > 100 ? 'Length should be less than 100' : null,
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
                value.length > 100 ? 'Length should be less than 100' : null,
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
          <View style={{marginBottom: 50}}></View>
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
    </View>
  );
};

export default CreateWeeklyPlan;
