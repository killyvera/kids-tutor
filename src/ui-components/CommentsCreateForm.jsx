/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Comments, Users, BlogPost } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
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
    author: undefined,
    post_id: undefined,
    parent_coment: "",
    replies: "",
    parent_id: "",
  };
  const [content, setContent] = React.useState(initialValues.content);
  const [published_date, setPublished_date] = React.useState(
    initialValues.published_date
  );
  const [author, setAuthor] = React.useState(initialValues.author);
  const [post_id, setPost_id] = React.useState(initialValues.post_id);
  const [parent_coment, setParent_coment] = React.useState(
    initialValues.parent_coment
  );
  const [replies, setReplies] = React.useState(initialValues.replies);
  const [parent_id, setParent_id] = React.useState(initialValues.parent_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setContent(initialValues.content);
    setPublished_date(initialValues.published_date);
    setAuthor(initialValues.author);
    setCurrentAuthorValue(undefined);
    setCurrentAuthorDisplayValue("");
    setPost_id(initialValues.post_id);
    setCurrentPost_idValue(undefined);
    setCurrentPost_idDisplayValue("");
    setParent_coment(initialValues.parent_coment);
    setReplies(initialValues.replies);
    setParent_id(initialValues.parent_id);
    setErrors({});
  };
  const [currentAuthorDisplayValue, setCurrentAuthorDisplayValue] =
    React.useState("");
  const [currentAuthorValue, setCurrentAuthorValue] = React.useState(undefined);
  const authorRef = React.createRef();
  const [currentPost_idDisplayValue, setCurrentPost_idDisplayValue] =
    React.useState("");
  const [currentPost_idValue, setCurrentPost_idValue] =
    React.useState(undefined);
  const post_idRef = React.createRef();
  const getIDValue = {
    author: (r) => JSON.stringify({ id: r?.id }),
    post_id: (r) => JSON.stringify({ id: r?.id }),
  };
  const authorIdSet = new Set(
    Array.isArray(author)
      ? author.map((r) => getIDValue.author?.(r))
      : getIDValue.author?.(author)
  );
  const post_idIdSet = new Set(
    Array.isArray(post_id)
      ? post_id.map((r) => getIDValue.post_id?.(r))
      : getIDValue.post_id?.(post_id)
  );
  const usersRecords = useDataStoreBinding({
    type: "collection",
    model: Users,
  }).items;
  const blogPostRecords = useDataStoreBinding({
    type: "collection",
    model: BlogPost,
  }).items;
  const getDisplayValue = {
    author: (r) => `${r?.sub_cognito ? r?.sub_cognito + " - " : ""}${r?.id}`,
    post_id: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
  };
  const validations = {
    content: [],
    published_date: [],
    author: [],
    post_id: [],
    parent_coment: [],
    replies: [],
    parent_id: [],
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
          author,
          post_id,
          parent_coment,
          replies,
          parent_id,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
              author,
              post_id,
              parent_coment,
              replies,
              parent_id,
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
              author,
              post_id,
              parent_coment,
              replies,
              parent_id,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              content,
              published_date,
              author: value,
              post_id,
              parent_coment,
              replies,
              parent_id,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          setAuthor(value);
          setCurrentAuthorValue(undefined);
          setCurrentAuthorDisplayValue("");
        }}
        currentFieldValue={currentAuthorValue}
        label={"Author"}
        items={author ? [author] : []}
        hasError={errors?.author?.hasError}
        errorMessage={errors?.author?.errorMessage}
        getBadgeText={getDisplayValue.author}
        setFieldValue={(model) => {
          setCurrentAuthorDisplayValue(
            model ? getDisplayValue.author(model) : ""
          );
          setCurrentAuthorValue(model);
        }}
        inputFieldRef={authorRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Author"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Users"
          value={currentAuthorDisplayValue}
          options={usersRecords
            .filter((r) => !authorIdSet.has(getIDValue.author?.(r)))
            .map((r) => ({
              id: getIDValue.author?.(r),
              label: getDisplayValue.author?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAuthorValue(
              usersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAuthorDisplayValue(label);
            runValidationTasks("author", label);
          }}
          onClear={() => {
            setCurrentAuthorDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.author?.hasError) {
              runValidationTasks("author", value);
            }
            setCurrentAuthorDisplayValue(value);
            setCurrentAuthorValue(undefined);
          }}
          onBlur={() => runValidationTasks("author", currentAuthorDisplayValue)}
          errorMessage={errors.author?.errorMessage}
          hasError={errors.author?.hasError}
          ref={authorRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "author")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              content,
              published_date,
              author,
              post_id: value,
              parent_coment,
              replies,
              parent_id,
            };
            const result = onChange(modelFields);
            value = result?.post_id ?? value;
          }
          setPost_id(value);
          setCurrentPost_idValue(undefined);
          setCurrentPost_idDisplayValue("");
        }}
        currentFieldValue={currentPost_idValue}
        label={"Post id"}
        items={post_id ? [post_id] : []}
        hasError={errors?.post_id?.hasError}
        errorMessage={errors?.post_id?.errorMessage}
        getBadgeText={getDisplayValue.post_id}
        setFieldValue={(model) => {
          setCurrentPost_idDisplayValue(
            model ? getDisplayValue.post_id(model) : ""
          );
          setCurrentPost_idValue(model);
        }}
        inputFieldRef={post_idRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Post id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BlogPost"
          value={currentPost_idDisplayValue}
          options={blogPostRecords
            .filter((r) => !post_idIdSet.has(getIDValue.post_id?.(r)))
            .map((r) => ({
              id: getIDValue.post_id?.(r),
              label: getDisplayValue.post_id?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPost_idValue(
              blogPostRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPost_idDisplayValue(label);
            runValidationTasks("post_id", label);
          }}
          onClear={() => {
            setCurrentPost_idDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.post_id?.hasError) {
              runValidationTasks("post_id", value);
            }
            setCurrentPost_idDisplayValue(value);
            setCurrentPost_idValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("post_id", currentPost_idDisplayValue)
          }
          errorMessage={errors.post_id?.errorMessage}
          hasError={errors.post_id?.hasError}
          ref={post_idRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "post_id")}
        ></Autocomplete>
      </ArrayField>
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
              author,
              post_id,
              parent_coment: value,
              replies,
              parent_id,
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
              author,
              post_id,
              parent_coment,
              replies: value,
              parent_id,
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
      <TextField
        label="Parent id"
        isRequired={false}
        isReadOnly={false}
        value={parent_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              content,
              published_date,
              author,
              post_id,
              parent_coment,
              replies,
              parent_id: value,
            };
            const result = onChange(modelFields);
            value = result?.parent_id ?? value;
          }
          if (errors.parent_id?.hasError) {
            runValidationTasks("parent_id", value);
          }
          setParent_id(value);
        }}
        onBlur={() => runValidationTasks("parent_id", parent_id)}
        errorMessage={errors.parent_id?.errorMessage}
        hasError={errors.parent_id?.hasError}
        {...getOverrideProps(overrides, "parent_id")}
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
