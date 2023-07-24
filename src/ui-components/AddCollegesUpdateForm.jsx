/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { AddColleges } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AddCollegesUpdateForm(props) {
  const {
    id: idProp,
    addColleges: addCollegesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    college: "",
    details: "",
  };
  const [college, setCollege] = React.useState(initialValues.college);
  const [details, setDetails] = React.useState(initialValues.details);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = addCollegesRecord
      ? { ...initialValues, ...addCollegesRecord }
      : initialValues;
    setCollege(cleanValues.college);
    setDetails(
      typeof cleanValues.details === "string"
        ? cleanValues.details
        : JSON.stringify(cleanValues.details)
    );
    setErrors({});
  };
  const [addCollegesRecord, setAddCollegesRecord] =
    React.useState(addCollegesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(AddColleges, idProp)
        : addCollegesModelProp;
      setAddCollegesRecord(record);
    };
    queryData();
  }, [idProp, addCollegesModelProp]);
  React.useEffect(resetStateValues, [addCollegesRecord]);
  const validations = {
    college: [],
    details: [{ type: "JSON" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          college,
          details,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            AddColleges.copyOf(addCollegesRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AddCollegesUpdateForm")}
      {...rest}
    >
      <TextField
        label="College"
        isRequired={false}
        isReadOnly={false}
        value={college}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              college: value,
              details,
            };
            const result = onChange(modelFields);
            value = result?.college ?? value;
          }
          if (errors.college?.hasError) {
            runValidationTasks("college", value);
          }
          setCollege(value);
        }}
        onBlur={() => runValidationTasks("college", college)}
        errorMessage={errors.college?.errorMessage}
        hasError={errors.college?.hasError}
        {...getOverrideProps(overrides, "college")}
      ></TextField>
      <TextAreaField
        label="Details"
        isRequired={false}
        isReadOnly={false}
        value={details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              college,
              details: value,
            };
            const result = onChange(modelFields);
            value = result?.details ?? value;
          }
          if (errors.details?.hasError) {
            runValidationTasks("details", value);
          }
          setDetails(value);
        }}
        onBlur={() => runValidationTasks("details", details)}
        errorMessage={errors.details?.errorMessage}
        hasError={errors.details?.hasError}
        {...getOverrideProps(overrides, "details")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || addCollegesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || addCollegesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
