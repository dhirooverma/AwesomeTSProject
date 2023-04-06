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
import Button from '../components/Button/index';
import Label from '../components/Label/index';
import SelectBox from '../components/SelectBox/index';
import Multiselect from 'react-native-multiple-select';
import {getActivityFormData} from '../controller/activityData';
import {SELECTBOX_DEFAULT_LABEL, delay} from '../utils/constants';

const CreateActivity = props => {
  const [formData, setFormData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const {control, handleSubmit, getValues} = useForm({
    defaultValues: {},
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async () => {
    setLoading(true);
    const formValues = getValues();
    console.log('formValues', formValues);
    await delay();
    setLoading(false);
    props.navigation.navigate('SearchActivity');
  };

  const options = [
    {name: 'option1', id: 1},
    {name: 'option2', id: 2},
  ];

  useEffect(() => {
    setLoading(true);
    getActivityFormData().then(data => {
      setFormData(data);
      setLoading(false);
    });
  }, []);

  console.log(formData?.classValue);

  return (
    <View>
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
          <Label title={'Title'} />
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Title is required!',
              },
              validate: value =>
                value.length > 100 ? 'Length should be less than 100' : null,
            }}
            name="title"
            render={({
              field: {onChange, value},
              formState: {isValid, isSubmitted, errors},
            }) => {
              return (
                <InputText
                  errorMessage={isSubmitted && errors?.title?.message}
                  error={errors?.title?.message && isSubmitted}
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
          <View style={{alignSelf: 'center'}}>
            <Label title={'Activity Details'} />
          </View>
          <Label title={'Preparation'} />
          <Controller
            control={control}
            name="preparation"
            render={({field: {onChange, value}}) => {
              return (
                <InputText
                  maxLength={2000}
                  value={value}
                  editable
                  multiline
                  onChangeText={text => {
                    onChange(text);
                  }}
                />
              );
            }}
          />
          <Label title={'Notes'} />
          <Controller
            control={control}
            name="notes"
            render={({field: {onChange, value}}) => (
              <InputText
                value={value}
                multiline
                maxLength={2000}
                style={styles.notesTextInput}
                editable
                onChangeText={text => {
                  onChange(text);
                }}
              />
            )}
          />
          <Label title={'Facilitating'} />
          <Controller
            control={control}
            name="facilitating"
            render={({field: {onChange, value}}) => (
              <InputText
                value={value}
                multiline
                maxLength={2000}
                style={styles.notesTextInput}
                editable
                onChangeText={text => {
                  onChange(text);
                }}
              />
            )}
          />
          <Label title={'Description'} />
          <Controller
            control={control}
            name="description"
            render={({field: {onChange, value}}) => (
              <InputText
                value={value}
                multiline
                maxLength={2000}
                style={styles.notesTextInput}
                editable
                onChangeText={text => {
                  onChange(text);
                }}
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
          <Label title={'Select Scale'} />
          <Controller
            control={control}
            name="select_scale"
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
                data={formData?.scales}
                disabled={false}
                id={'select_scale'}
                errorMessage={isSubmitted && errors?.select_scale?.message}
                error={errors?.select_scale?.message && isSubmitted}
                preSelected={value ?? SELECTBOX_DEFAULT_LABEL}
                onValueChange={onChange}
              />
            )}
          />
          <Label title={'Select Goals'} />
          <Controller
            disabled={getValues('select_scale') === SELECTBOX_DEFAULT_LABEL}
            control={control}
            name="select_scale"
            render={({field: {onChange, value}}) => (
              <Multiselect
                disabled={getValues('select_scale') === SELECTBOX_DEFAULT_LABEL}
                items={options}
                uniqueKey="id"
                onChangeInput={text => console.log(text)}
                selectText="Pick Items"
                displayKey="name"
                onSelectedItemsChange={() => {}}
              />
            )}
          />
          <Label title={'Add Attachment'} />
          <Controller
            control={control}
            name="attachment"
            render={({field: {onChange, value}}) => (
              <InputText
                value={value}
                maxLength={100}
                style={styles.notesTextInput}
                editable
                onChangeText={text => {
                  onChange(text);
                }}
              />
            )}
          />
          <View style={{marginBottom: 150}}>
            <Button title={'Submit'} onPress={handleSubmit(onSubmit)} />
          </View>
        </KeyboardAvoidingView>
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

export default CreateActivity;
