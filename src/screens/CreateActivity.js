import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './createActivityStyle';
import InputText from '../components/InputText/index';
import Button from '../components/Button/index';
import Label from '../components/Label/index';
import SelectBox from '../components/SelectBox/index';
import Multiselect from 'react-native-multiple-select';
import {getActivityFormData} from '../controller/activityData';
import {
  SELECTBOX_DEFAULT_LABEL,
  delay,
  prePopulateWeeklyPlan,
} from '../utils/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreateActivity = props => {
  const [formData, setFormData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [goalOptions, setGoalOptions] = useState([]);
  const {control, handleSubmit, getValues, setValue} = useForm({
    defaultValues: {},
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const windowDimensions = Dimensions.get('window').width;

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            style={{marginRight: 30}}
            onPress={() => props.navigation?.navigate('CreateWeeklyPlan')}
            name="calendar"
            size={30}
            color={'#fff'}
          />
          <Ionicons
            onPress={() =>
              props.navigation?.navigate('CreateWeeklyPlan', {
                prePopulateWeeklyPlan,
                viewMode: true,
              })
            }
            name="eye"
            size={30}
            color={'#fff'}
          />
        </View>
      ),
    });
  }, [props.navigation]);

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

  return (
    <View testID="createActivity">
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
                  : undefined,
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
                  : undefined,
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
                  : undefined,
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
                value.length > 100
                  ? 'Length should be less than 100'
                  : undefined,
            }}
            name="title"
            render={({
              field: {onChange, value},
              formState: {isValid, isSubmitted, errors},
            }) => {
              return (
                <InputText
                  testID="inputText"
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
                testID="descriptionInput"
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
                value.length > 100
                  ? 'Length should be less than 100'
                  : undefined,
            }}
            name="keywords"
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => {
              return (
                <InputText
                  testID="activityInput"
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
                  : undefined,
            }}
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => (
              <SelectBox
                data={formData?.scales}
                disabled={false}
                id={'select_scale'}
                uniqueKey="value"
                errorMessage={isSubmitted && errors?.select_scale?.message}
                error={errors?.select_scale?.message && isSubmitted}
                preSelected={value ?? SELECTBOX_DEFAULT_LABEL}
                onValueChange={option => {
                  onChange(option);
                  setValue('select_goals', undefined);
                  setGoalOptions(formData?.goals?.[option] ?? []);
                }}
              />
            )}
          />
          <Label title={'Select Goals'} />
          <Controller
            disabled={true}
            control={control}
            name="select_goals"
            render={({
              field: {onChange, value},
              formState: {isSubmitted, errors},
            }) => (
              <ScrollView horizontal={true} style={{width: '100%'}}>
                <View
                  style={{width: windowDimensions - 100}}
                  pointerEvents={goalOptions.length > 0 ? 'auto' : 'none'}>
                  <Multiselect
                    disabled={true}
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
            <Button
              testID="button"
              title={'Submit'}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      {isLoading && (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator
            testID="loadingIndicator"
            style={{transform: [{scaleX: 3}, {scaleY: 3}]}}
            color="#000"
          />
        </View>
      )}
    </View>
  );
};

export default CreateActivity;
