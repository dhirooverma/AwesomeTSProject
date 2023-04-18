import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Dimensions,
  Text
} from 'react-native';
import styles from './createActivityStyle';
import InputText from '../components/InputText/index';
import Button from '../components/Button/index';
import Label from '../components/Label/index';
import SelectBox from '../components/SelectBox/index';
import Multiselect from 'react-native-multiple-select';
import {getActivityFormData} from '../controller/activityData';
import {SELECTBOX_DEFAULT_LABEL, delay} from '../utils/constants';

const ViewEditActivity = props => {
  // console.log(props?.route?.params?.data);
  const [formData, setFormData] = useState({});
  const [goalOptions, setGoalOptions] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const {control, handleSubmit, getValues, setValue} = useForm({
    defaultValues: {},
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const windowDimensions = Dimensions.get('window').width;

  const onSubmit = async () => {
    setLoading(true);
    const formValues = getValues();
    console.log('formValues', formValues);
    await delay();
    setLoading(false);
    props.navigation.navigate('SearchActivity');
  };

  useEffect(() => {
    setLoading(true);
    getActivityFormData().then(data => {
      setFormData(data);
      setLoading(false);
    });
    
  }, []);

  const tableData = props?.route?.params?.data;

   useEffect(() => {
    if (formData?.goals?.[props?.route?.params?.data?.scale]== undefined)
  {null}
  else
   {
      setGoalOptions(formData?.goals?.[props?.route?.params?.data?.scale]);}},
     [formData?.goals?.[props?.route?.params?.data?.scale]]);

  return (
    <View testID="ViewEditActivity">
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
            defaultValue={tableData?.class}
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => (
              <SelectBox
                data={formData?.classValue}
                placeholder={'select'}
                errorMessage={isSubmitted && errors?.class?.message}
                // editable={props?.route?.params?.view}
                disabled={props?.route?.params?.view === false ? true : false}
                error={errors?.class?.message && isSubmitted}
                id={'class'}
                preSelected={tableData?.class}
                onValueChange={option => {
                  onChange(option);
                }}
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
            defaultValue={tableData?.planLibrary}
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => (
              <SelectBox
                data={formData?.planLibrary}
                errorMessage={isSubmitted && errors?.library?.message}
                error={errors?.library?.message && isSubmitted}
                disabled={props?.route?.params?.view == false ? true : false}
                id={'library'}
                preSelected={value ?? tableData?.planLibrary}
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
            defaultValue={tableData?.type}
            name="type"
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => (
              <SelectBox
                data={formData?.type}
                errorMessage={isSubmitted && errors?.type?.message}
                error={errors?.type?.message && isSubmitted}
                disabled={props?.route?.params?.view == false ? true : false}
                id={'type'}
                preSelected={value ?? tableData?.type}
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
            defaultValue={tableData?.title}
            render={({
              field: {onChange, value},
              formState: {isValid, isSubmitted, errors},
            }) => {
              return (
                <InputText
                  testID="activityInput"
                  errorMessage={isSubmitted && errors?.title?.message}
                  error={errors?.title?.message && isSubmitted}
                  maxLength={100}
                  value={value}
                  editable={props?.route?.params?.view}
                  onChangeText={option => {
                    onChange(option);
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
            defaultValue={tableData?.preparation}
            name="preparation"
            render={({field: {onChange, value}}) => {
              return (
                <InputText
                  maxLength={2000}
                  value={value}
                  editable={props?.route?.params?.view}
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
            defaultValue={tableData?.notes}
            render={({field: {onChange, value}}) => (
              <InputText
                value={value}
                multiline
                maxLength={2000}
                style={styles.notesTextInput}
                editable={props?.route?.params?.view}
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
            defaultValue={tableData?.facilitating}
            render={({field: {onChange, value}}) => (
              <InputText
                value={value}
                multiline
                maxLength={2000}
                style={styles.notesTextInput}
                editable={props?.route?.params?.view}
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
            defaultValue={tableData?.description}
            render={({field: {onChange, value}}) => (
              <InputText
                value={value}
                multiline
                maxLength={2000}
                style={styles.notesTextInput}
                editable={props?.route?.params?.view}
                onChangeText={text => {
                  onChange(text);
                }}
              />
            )}
          />
          <Label title={'Keywords'} />
          <Controller
            control={control}
            defaultValue={tableData?.keyword}
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
                  editable={props?.route?.params?.view}
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
                  : undefined,
            }}
            defaultValue={tableData?.scale}
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => (
              <SelectBox
                data={formData?.scales}
                disabled={props?.route?.params?.view == false ? true : false}
                id={'select_scale'}
                uniqueKey="value"
                errorMessage={isSubmitted && errors?.select_scale?.message}
                error={errors?.select_scale?.message && isSubmitted}
                preSelected={value ?? tableData?.scale?.name}
                onValueChange={option => {
                  onChange(option);
                  setValue('select_goals', []);
                  setGoalOptions(formData?.goals?.[option] ?? []);
                }}
              />
            )}
          />
          <Label title={'Select Goals'} />
          <Controller
            defaultValue={tableData?.goals}
            control={control}
            name="select_goals"
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => (
              <ScrollView horizontal={true} style={{width: '100%'}}>
                <View
                  style={{width: windowDimensions - 100}}
                  pointerEvents={
                    props?.route?.params?.view == false ? 'none' : 'auto'
                  }>
                  <Multiselect
                    items={goalOptions}
                    uniqueKey="key"
                    selectText="Select Goals"
                    displayKey="name"
                    onSelectedItemsChange={selectedItem => {
                      console.log(selectedItem);
                      onChange(selectedItem);
                    }}
                    selectedItems={value}
                    styleMainWrapper={styles.multiSelectContainer}
                    styleTextDropdownSelected={styles.dropDownTextStyle}
                    styleTextDropdown={styles.dropDownTextStyle}
                    styleDropdownMenuSubsection={
                      styles.styleDropdownMenuSubsection
                    }
                    style={styles.increaseSizeForAndroid}
                    searchInputStyle={styles.searchInput}
                  />
                  {isSubmitted && errors?.select_scale?.message && (
                    <Text style={{color: 'red'}}>
                      {errors?.select_scale?.message}
                    </Text>
                  )}
                </View>
              </ScrollView>
            )}
          />
          <Label title={'Add Attachment'} />
          <Controller
            control={control}
            name="attachment"
            defaultValue={tableData?.attachment}
            render={({field: {onChange, value}}) => (
              <InputText
                value={value}
                maxLength={100}
                style={styles.notesTextInput}
                editable={props?.route?.params?.view}
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

export default ViewEditActivity;
