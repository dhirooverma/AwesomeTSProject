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
import AlertBox from '../components/AlertBox';

const SearchActivity = props => {
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

  const editActivity =(data)=>{
    props.navigation.navigate('ViewEditActivity', {data, view:true});
  }

  const [alertVisible, setAlertVisible] = useState(false);

  const handlePress = (title) => {
    setAlertVisible(true);
    
  };
  const handlePressOK = () => {
    // Handle OK button press
    console.log("okay pressed")
        setAlertVisible(false);

  };

  const handlePressCancel = () => {
    // Handle Cancel button press
    console.log("cancel pressed")

        setAlertVisible(false);

  };

  const ViewActivity = data => {
    props.navigation.navigate('ViewEditActivity', {data, view:false});
  };


  console.log(formData?.classValue);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Label title={'Select Class'} />
          <Controller
            control={control}
            name="class"
            rules={{
              required: {
                value: true,
                message: 'Class is required!',
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
                data={formData?.classValue}
                placeholder={'select'}
                errorMessage={isSubmitted && errors?.class?.message}
                error={errors?.class?.message && isSubmitted}
                id={'class'}
                preSelected={value ?? SELECTBOX_DEFAULT_LABEL}
                onValueChange={onChange}
              />
            )}
          />
          <Label title={'Select Library'} />
          <Controller
            control={control}
            name="library"
            rules={{
              required: {
                value: true,
                message: 'Library is required!',
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
                data={formData?.planLibrary}
                errorMessage={isSubmitted && errors?.library?.message}
                error={errors?.library?.message && isSubmitted}
                disabled={false}
                id={'library'}
                preSelected={value ?? SELECTBOX_DEFAULT_LABEL}
                onValueChange={onChange}
              />
            )}
          />
          <Label title={'Select Type'} />
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Type is required!',
              },
              validate: value =>
                value === SELECTBOX_DEFAULT_LABEL
                  ? 'Please select a valid option'
                  : null,
            }}
            name="type"
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => (
              <SelectBox
                data={formData?.type}
                errorMessage={isSubmitted && errors?.type?.message}
                error={errors?.type?.message && isSubmitted}
                id={'type'}
                preSelected={value ?? SELECTBOX_DEFAULT_LABEL}
                onValueChange={onChange}
              />
            )}
          />
          <Label title={'Keywords'} />
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Keywords are required!',
              },
              validate: value =>
                value.length > 100 ? 'Length should be less than 100' : null,
            }}
            name="keywords"
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
          <View style={{marginBottom: 50}}></View>
        </KeyboardAvoidingView>
        <ActivityTable
          data={TABLE_DATA}
          editActivity={editActivity}
          deleteActivity={handlePress}
          ViewActivity={ViewActivity}
        />
        <AlertBox
          title="Are you sure you want to delete this item?"
          message="Delete Item"
          visible={alertVisible}
          onPressOK={handlePressOK}
          onPressCancel={handlePressCancel}
        />
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

export default SearchActivity;
