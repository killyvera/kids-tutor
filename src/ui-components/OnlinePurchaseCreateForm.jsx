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
import { OnlinePurchase } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function OnlinePurchaseCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    customer_name: "",
    customer_email: "",
    details: "",
    uuid: "",
  };
  const [customer_name, setCustomer_name] = React.useState(
    initialValues.customer_name
  );
  const [customer_email, setCustomer_email] = React.useState(
    initialValues.customer_email
  );
  const [details, setDetails] = React.useState(initialValues.details);
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCustomer_name(initialValues.customer_name);
    setCustomer_email(initialValues.customer_email);
    setDetails(initialValues.details);
    setUuid(initialValues.uuid);
    setErrors({});
  };
  const validations = {
    customer_name: [],
    customer_email: [],
    details: [{ type: "JSON" }],
    uuid: [],
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
          customer_name,
          customer_email,
          details,
          uuid,
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
          await DataStore.save(new OnlinePurchase(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "OnlinePurchaseCreateForm")}
      {...rest}
    >
      <TextField
        label="Customer name"
        isRequired={false}
        isReadOnly={false}
        value={customer_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_name: value,
              customer_email,
              details,
              uuid,
            };
            const result = onChange(modelFields);
            value = result?.customer_name ?? value;
          }
          if (errors.customer_name?.hasError) {
            runValidationTasks("customer_name", value);
          }
          setCustomer_name(value);
        }}
        onBlur={() => runValidationTasks("customer_name", customer_name)}
        errorMessage={errors.customer_name?.errorMessage}
        hasError={errors.customer_name?.hasError}
        {...getOverrideProps(overrides, "customer_name")}
      ></TextField>
      <TextField
        label="Customer email"
        isRequired={false}
        isReadOnly={false}
        value={customer_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_name,
              customer_email: value,
              details,
              uuid,
            };
            const result = onChange(modelFields);
            value = result?.customer_email ?? value;
          }
          if (errors.customer_email?.hasError) {
            runValidationTasks("customer_email", value);
          }
          setCustomer_email(value);
        }}
        onBlur={() => runValidationTasks("customer_email", customer_email)}
        errorMessage={errors.customer_email?.errorMessage}
        hasError={errors.customer_email?.hasError}
        {...getOverrideProps(overrides, "customer_email")}
      ></TextField>
      <TextAreaField
        label="Details"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_name,
              customer_email,
              details: value,
              uuid,
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
      <TextField
        label="Uuid"
        isRequired={false}
        isReadOnly={false}
        value={uuid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_name,
              customer_email,
              details,
              uuid: value,
            };
            const result = onChange(modelFields);
            value = result?.uuid ?? value;
          }
          if (errors.uuid?.hasError) {
            runValidationTasks("uuid", value);
          }
          setUuid(value);
        }}
        onBlur={() => runValidationTasks("uuid", uuid)}
        errorMessage={errors.uuid?.errorMessage}
        hasError={errors.uuid?.hasError}
        {...getOverrideProps(overrides, "uuid")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
