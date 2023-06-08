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
import { Users } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UsersCreateForm(props) {
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
    sub_cognito: "",
    name: "",
    firstname: "",
    registration_date: "",
    direction: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    purchase_products: "",
    ratings: "",
    comments: "",
  };
  const [sub_cognito, setSub_cognito] = React.useState(
    initialValues.sub_cognito
  );
  const [name, setName] = React.useState(initialValues.name);
  const [firstname, setFirstname] = React.useState(initialValues.firstname);
  const [registration_date, setRegistration_date] = React.useState(
    initialValues.registration_date
  );
  const [direction, setDirection] = React.useState(initialValues.direction);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [country, setCountry] = React.useState(initialValues.country);
  const [postal_code, setPostal_code] = React.useState(
    initialValues.postal_code
  );
  const [purchase_products, setPurchase_products] = React.useState(
    initialValues.purchase_products
  );
  const [ratings, setRatings] = React.useState(initialValues.ratings);
  const [comments, setComments] = React.useState(initialValues.comments);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSub_cognito(initialValues.sub_cognito);
    setName(initialValues.name);
    setFirstname(initialValues.firstname);
    setRegistration_date(initialValues.registration_date);
    setDirection(initialValues.direction);
    setCity(initialValues.city);
    setState(initialValues.state);
    setCountry(initialValues.country);
    setPostal_code(initialValues.postal_code);
    setPurchase_products(initialValues.purchase_products);
    setRatings(initialValues.ratings);
    setComments(initialValues.comments);
    setErrors({});
  };
  const validations = {
    sub_cognito: [],
    name: [],
    firstname: [],
    registration_date: [],
    direction: [],
    city: [],
    state: [],
    country: [],
    postal_code: [],
    purchase_products: [{ type: "JSON" }],
    ratings: [],
    comments: [],
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
          sub_cognito,
          name,
          firstname,
          registration_date,
          direction,
          city,
          state,
          country,
          postal_code,
          purchase_products,
          ratings,
          comments,
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
          await DataStore.save(new Users(modelFields));
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
      {...getOverrideProps(overrides, "UsersCreateForm")}
      {...rest}
    >
      <TextField
        label="Sub cognito"
        isRequired={false}
        isReadOnly={false}
        value={sub_cognito}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub_cognito: value,
              name,
              firstname,
              registration_date,
              direction,
              city,
              state,
              country,
              postal_code,
              purchase_products,
              ratings,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.sub_cognito ?? value;
          }
          if (errors.sub_cognito?.hasError) {
            runValidationTasks("sub_cognito", value);
          }
          setSub_cognito(value);
        }}
        onBlur={() => runValidationTasks("sub_cognito", sub_cognito)}
        errorMessage={errors.sub_cognito?.errorMessage}
        hasError={errors.sub_cognito?.hasError}
        {...getOverrideProps(overrides, "sub_cognito")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub_cognito,
              name: value,
              firstname,
              registration_date,
              direction,
              city,
              state,
              country,
              postal_code,
              purchase_products,
              ratings,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Firstname"
        isRequired={false}
        isReadOnly={false}
        value={firstname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub_cognito,
              name,
              firstname: value,
              registration_date,
              direction,
              city,
              state,
              country,
              postal_code,
              purchase_products,
              ratings,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.firstname ?? value;
          }
          if (errors.firstname?.hasError) {
            runValidationTasks("firstname", value);
          }
          setFirstname(value);
        }}
        onBlur={() => runValidationTasks("firstname", firstname)}
        errorMessage={errors.firstname?.errorMessage}
        hasError={errors.firstname?.hasError}
        {...getOverrideProps(overrides, "firstname")}
      ></TextField>
      <TextField
        label="Registration date"
        isRequired={false}
        isReadOnly={false}
        value={registration_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub_cognito,
              name,
              firstname,
              registration_date: value,
              direction,
              city,
              state,
              country,
              postal_code,
              purchase_products,
              ratings,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.registration_date ?? value;
          }
          if (errors.registration_date?.hasError) {
            runValidationTasks("registration_date", value);
          }
          setRegistration_date(value);
        }}
        onBlur={() =>
          runValidationTasks("registration_date", registration_date)
        }
        errorMessage={errors.registration_date?.errorMessage}
        hasError={errors.registration_date?.hasError}
        {...getOverrideProps(overrides, "registration_date")}
      ></TextField>
      <TextField
        label="Direction"
        isRequired={false}
        isReadOnly={false}
        value={direction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub_cognito,
              name,
              firstname,
              registration_date,
              direction: value,
              city,
              state,
              country,
              postal_code,
              purchase_products,
              ratings,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.direction ?? value;
          }
          if (errors.direction?.hasError) {
            runValidationTasks("direction", value);
          }
          setDirection(value);
        }}
        onBlur={() => runValidationTasks("direction", direction)}
        errorMessage={errors.direction?.errorMessage}
        hasError={errors.direction?.hasError}
        {...getOverrideProps(overrides, "direction")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub_cognito,
              name,
              firstname,
              registration_date,
              direction,
              city: value,
              state,
              country,
              postal_code,
              purchase_products,
              ratings,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub_cognito,
              name,
              firstname,
              registration_date,
              direction,
              city,
              state: value,
              country,
              postal_code,
              purchase_products,
              ratings,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub_cognito,
              name,
              firstname,
              registration_date,
              direction,
              city,
              state,
              country: value,
              postal_code,
              purchase_products,
              ratings,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Postal code"
        isRequired={false}
        isReadOnly={false}
        value={postal_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub_cognito,
              name,
              firstname,
              registration_date,
              direction,
              city,
              state,
              country,
              postal_code: value,
              purchase_products,
              ratings,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.postal_code ?? value;
          }
          if (errors.postal_code?.hasError) {
            runValidationTasks("postal_code", value);
          }
          setPostal_code(value);
        }}
        onBlur={() => runValidationTasks("postal_code", postal_code)}
        errorMessage={errors.postal_code?.errorMessage}
        hasError={errors.postal_code?.hasError}
        {...getOverrideProps(overrides, "postal_code")}
      ></TextField>
      <TextAreaField
        label="Purchase products"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub_cognito,
              name,
              firstname,
              registration_date,
              direction,
              city,
              state,
              country,
              postal_code,
              purchase_products: value,
              ratings,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.purchase_products ?? value;
          }
          if (errors.purchase_products?.hasError) {
            runValidationTasks("purchase_products", value);
          }
          setPurchase_products(value);
        }}
        onBlur={() =>
          runValidationTasks("purchase_products", purchase_products)
        }
        errorMessage={errors.purchase_products?.errorMessage}
        hasError={errors.purchase_products?.hasError}
        {...getOverrideProps(overrides, "purchase_products")}
      ></TextAreaField>
      <TextField
        label="Ratings"
        isRequired={false}
        isReadOnly={false}
        value={ratings}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub_cognito,
              name,
              firstname,
              registration_date,
              direction,
              city,
              state,
              country,
              postal_code,
              purchase_products,
              ratings: value,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.ratings ?? value;
          }
          if (errors.ratings?.hasError) {
            runValidationTasks("ratings", value);
          }
          setRatings(value);
        }}
        onBlur={() => runValidationTasks("ratings", ratings)}
        errorMessage={errors.ratings?.errorMessage}
        hasError={errors.ratings?.hasError}
        {...getOverrideProps(overrides, "ratings")}
      ></TextField>
      <TextField
        label="Comments"
        isRequired={false}
        isReadOnly={false}
        value={comments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sub_cognito,
              name,
              firstname,
              registration_date,
              direction,
              city,
              state,
              country,
              postal_code,
              purchase_products,
              ratings,
              comments: value,
            };
            const result = onChange(modelFields);
            value = result?.comments ?? value;
          }
          if (errors.comments?.hasError) {
            runValidationTasks("comments", value);
          }
          setComments(value);
        }}
        onBlur={() => runValidationTasks("comments", comments)}
        errorMessage={errors.comments?.errorMessage}
        hasError={errors.comments?.hasError}
        {...getOverrideProps(overrides, "comments")}
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
