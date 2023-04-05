import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import styles from './createActivityStyle';
import InputText from '../components/InputText/index';
import Button from '../components/Button/index';
import Label from '../components/Label/index';
import SelectBox from '../components/SelectBox/index';
import {Picker} from '@react-native-picker/picker';
import Multiselect from 'multiselect-react-dropdown';

const CreateActivity = props => {
  const {control, handleSubmit, getValues} = useForm({
    defaultValues: {
      title: 'title',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = () => {
    const formValues = getValues();
    console.log('formValues', formValues);
  };

  const options = [
    {name: 'option1', id: 1},
    {name: 'option2', id: 2},
  ];

  const optionsArr = ['option1', 'option2'];

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Label title={'Select Class'} />
        <Controller
          control={control}
          name="class"
          render={({field: {onChange, value}}) => (
            <SelectBox
              disabled={false}
              id={'class'}
              preSelected={'Kyaminipa'}
              onValueChange={onChange}>
              <Picker.Item label="Please Select" value="" />
              <Picker.Item label="Kyaminipa" value="kyaminipa" />
              <Picker.Item label="Other" value="other" />
            </SelectBox>
          )}
        />
        <Label title={'Select Library'} />
        <Controller
          control={control}
          name="library"
          render={({field: {onChange, value}}) => (
            <SelectBox
              disabled={false}
              id={'library'}
              preSelected={value ?? 'please select'}
              onValueChange={onChange}>
              <Picker.Item label="Please Select" value={'please select'} />
              <Picker.Item label="Activities" value="activities" />
            </SelectBox>
          )}
        />
        <Label title={'Select Type'} />
        <Controller
          control={control}
          name="type"
          render={({field: {onChange, value}}) => (
            <SelectBox
              disabled={false}
              id={'type'}
              preSelected={value ?? 'enhancement'}
              onValueChange={onChange}>
              <Picker.Item label="Please Select" value="" />
              <Picker.Item label="Enhancement" value="enhancement" />
            </SelectBox>
          )}
        />
        <Label title={'Title'} />
        <Controller
          control={control}
          name="title"
          render={({field: {onChange, value}}) => (
            <InputText
              value={value}
              editable
              onChangeText={text => {
                onChange(text);
              }}
            />
          )}
        />
        <View style={{alignSelf: 'center'}}>
          <Label title={'Activity Details'} />
        </View>
        <Label title={'Preparation'} />
        <Controller
          control={control}
          name="preparation"
          render={({field: {onChange, value}}) => (
            <InputText
              value={value}
              multiline
              maxLength={100}
              style={styles.notesTextInput}
              editable
              onChangeText={text => {
                onChange(text);
              }}
            />
          )}
        />
        <Label title={'Notes'} />
        <Controller
          control={control}
          name="notes"
          render={({field: {onChange, value}}) => (
            <InputText
              value={value}
              multiline
              maxLength={100}
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
              maxLength={100}
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
              maxLength={100}
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
          name="keywords"
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
        <Label title={'Select Scale'} />
        <Controller
          control={control}
          name="select_scale"
          render={({field: {onChange, value}}) => (
            <SelectBox
              disabled={false}
              id={'select_scale'}
              preSelected={value ?? 'scale1'}
              onValueChange={onChange}>
              <Picker.Item label="scale1" value="scale1" />
              <Picker.Item label="scale2" value="scale2" />
            </SelectBox>
          )}
        />
        <Label title={'Select Goals'} />
        {/* <Multiselect
          options={optionsArr}
          isObject={false}
          selectedValues={['option1']}
          // onSelect={() => {}} // Function will trigger on select event
          // onRemove={() => {}} // Function will trigger on remove event
          // displayValue={'name'} // Property name to display in the dropdown options
          // showCheckbox={true}
        /> */}
        <Controller
          control={control}
          name="select_goals"
          render={({field: {onChange, value}}) => (
            <SelectBox
              disabled={false}
              id={'select_goals'}
              preSelected={value ?? 'goal1'}
              onValueChange={onChange}>
              <Picker.Item label="goal1" value="goal1" />
              <Picker.Item label="goal2" value="goal2" />
            </SelectBox>
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
        <View style={{marginBottom: 50}}>
          <Button title={'Submit'} onPress={onSubmit} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default CreateActivity;
