/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Comments } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CommentsCreateForm(props) {
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
    content: "",
    published_date: "",
    parent_coment: "",
    replies: "",
  };
  const [content, setContent] = React.useState(initialValues.content);
  const [published_date, setPublished_date] = React.useState(
    initialValues.published_date
  );
  const [parent_coment, setParent_coment] = React.useState(
    initialValues.parent_coment
  );
  const [replies, setReplies] = React.useState(initialValues.replies);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setContent(initialValues.content);
    setPublished_date(initialValues.published_date);
    setParent_coment(initialValues.parent_coment);
    setReplies(initialValues.replies);
    setErrors({});
  };
  const validations = {
    content: [],
    published_date: [],
    parent_coment: [],
    replies: [],
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
          content,
          published_date,
          parent_coment,
          replies,
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
          await DataStore.save(new Comments(modelFields));
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
      {...getOverrideProps(overrides, "CommentsCreateForm")}
      {...rest}
    >
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              content: value,
              published_date,
              parent_coment,
              replies,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Published date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={published_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              content,
              published_date: value,
              parent_coment,
              replies,
            };
            const result = onChange(modelFields);
            value = result?.published_date ?? value;
          }
          if (errors.published_date?.hasError) {
            runValidationTasks("published_date", value);
          }
          setPublished_date(value);
        }}
        onBlur={() => runValidationTasks("published_date", published_date)}
        errorMessage={errors.published_date?.errorMessage}
        hasError={errors.published_date?.hasError}
        {...getOverrideProps(overrides, "published_date")}
      ></TextField>
      <TextField
        label="Parent coment"
        isRequired={false}
        isReadOnly={false}
        value={parent_coment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              content,
              published_date,
              parent_coment: value,
              replies,
            };
            const result = onChange(modelFields);
            value = result?.parent_coment ?? value;
          }
          if (errors.parent_coment?.hasError) {
            runValidationTasks("parent_coment", value);
          }
          setParent_coment(value);
        }}
        onBlur={() => runValidationTasks("parent_coment", parent_coment)}
        errorMessage={errors.parent_coment?.errorMessage}
        hasError={errors.parent_coment?.hasError}
        {...getOverrideProps(overrides, "parent_coment")}
      ></TextField>
      <TextField
        label="Replies"
        isRequired={false}
        isReadOnly={false}
        value={replies}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              content,
              published_date,
              parent_coment,
              replies: value,
            };
            const result = onChange(modelFields);
            value = result?.replies ?? value;
          }
          if (errors.replies?.hasError) {
            runValidationTasks("replies", value);
          }
          setReplies(value);
        }}
        onBlur={() => runValidationTasks("replies", replies)}
        errorMessage={errors.replies?.errorMessage}
        hasError={errors.replies?.hasError}
        {...getOverrideProps(overrides, "replies")}
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
