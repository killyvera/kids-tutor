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
import { BlogPost, Tags, BlogPostTags } from "../models";
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
export default function BlogPostUpdateForm(props) {
  const {
    id: idProp,
    blogPost: blogPostModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    cover: "",
    content: "",
    author: "",
    tags: [],
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [cover, setCover] = React.useState(initialValues.cover);
  const [content, setContent] = React.useState(initialValues.content);
  const [author, setAuthor] = React.useState(initialValues.author);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = blogPostRecord
      ? { ...initialValues, ...blogPostRecord, tags: linkedTags }
      : initialValues;
    setTitle(cleanValues.title);
    setCover(cleanValues.cover);
    setContent(cleanValues.content);
    setAuthor(cleanValues.author);
    setTags(cleanValues.tags ?? []);
    setCurrentTagsValue(undefined);
    setCurrentTagsDisplayValue("");
    setErrors({});
  };
  const [blogPostRecord, setBlogPostRecord] = React.useState(blogPostModelProp);
  const [linkedTags, setLinkedTags] = React.useState([]);
  const canUnlinkTags = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(BlogPost, idProp)
        : blogPostModelProp;
      setBlogPostRecord(record);
      const linkedTags = record
        ? await Promise.all(
            (
              await record.tags.toArray()
            ).map((r) => {
              return r.tags;
            })
          )
        : [];
      setLinkedTags(linkedTags);
    };
    queryData();
  }, [idProp, blogPostModelProp]);
  React.useEffect(resetStateValues, [blogPostRecord, linkedTags]);
  const [currentTagsDisplayValue, setCurrentTagsDisplayValue] =
    React.useState("");
  const [currentTagsValue, setCurrentTagsValue] = React.useState(undefined);
  const tagsRef = React.createRef();
  const getIDValue = {
    tags: (r) => JSON.stringify({ id: r?.id }),
  };
  const tagsIdSet = new Set(
    Array.isArray(tags)
      ? tags.map((r) => getIDValue.tags?.(r))
      : getIDValue.tags?.(tags)
  );
  const tagsRecords = useDataStoreBinding({
    type: "collection",
    model: Tags,
  }).items;
  const getDisplayValue = {
    tags: (r) => `${r?.tag_name ? r?.tag_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    title: [],
    cover: [],
    content: [],
    author: [],
    tags: [],
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
          title,
          cover,
          content,
          author,
          tags,
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
          const promises = [];
          const tagsToLinkMap = new Map();
          const tagsToUnLinkMap = new Map();
          const tagsMap = new Map();
          const linkedTagsMap = new Map();
          tags.forEach((r) => {
            const count = tagsMap.get(getIDValue.tags?.(r));
            const newCount = count ? count + 1 : 1;
            tagsMap.set(getIDValue.tags?.(r), newCount);
          });
          linkedTags.forEach((r) => {
            const count = linkedTagsMap.get(getIDValue.tags?.(r));
            const newCount = count ? count + 1 : 1;
            linkedTagsMap.set(getIDValue.tags?.(r), newCount);
          });
          linkedTagsMap.forEach((count, id) => {
            const newCount = tagsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                tagsToUnLinkMap.set(id, diffCount);
              }
            } else {
              tagsToUnLinkMap.set(id, count);
            }
          });
          tagsMap.forEach((count, id) => {
            const originalCount = linkedTagsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                tagsToLinkMap.set(id, diffCount);
              }
            } else {
              tagsToLinkMap.set(id, count);
            }
          });
          tagsToUnLinkMap.forEach(async (count, id) => {
            const blogPostTagsRecords = await DataStore.query(
              BlogPostTags,
              (r) =>
                r.and((r) => {
                  const recordKeys = JSON.parse(id);
                  return [
                    r.tagsId.eq(recordKeys.id),
                    r.blogPostId.eq(blogPostRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(blogPostTagsRecords[i]));
            }
          });
          tagsToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new BlogPostTags({
                    blogPost: blogPostRecord,
                    tags: tagsRecords.find((r) =>
                      Object.entries(JSON.parse(id)).every(
                        ([key, value]) => r[key] === value
                      )
                    ),
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            title: modelFields.title,
            cover: modelFields.cover,
            content: modelFields.content,
            author: modelFields.author,
          };
          promises.push(
            DataStore.save(
              BlogPost.copyOf(blogPostRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BlogPostUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              cover,
              content,
              author,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Cover"
        isRequired={false}
        isReadOnly={false}
        value={cover}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              cover: value,
              content,
              author,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.cover ?? value;
          }
          if (errors.cover?.hasError) {
            runValidationTasks("cover", value);
          }
          setCover(value);
        }}
        onBlur={() => runValidationTasks("cover", cover)}
        errorMessage={errors.cover?.errorMessage}
        hasError={errors.cover?.hasError}
        {...getOverrideProps(overrides, "cover")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              cover,
              content: value,
              author,
              tags,
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
        label="Author"
        isRequired={false}
        isReadOnly={false}
        value={author}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              cover,
              content,
              author: value,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          if (errors.author?.hasError) {
            runValidationTasks("author", value);
          }
          setAuthor(value);
        }}
        onBlur={() => runValidationTasks("author", author)}
        errorMessage={errors.author?.errorMessage}
        hasError={errors.author?.hasError}
        {...getOverrideProps(overrides, "author")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              cover,
              content,
              author,
              tags: values,
            };
            const result = onChange(modelFields);
            values = result?.tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue(undefined);
          setCurrentTagsDisplayValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={tags}
        hasError={errors?.tags?.hasError}
        errorMessage={errors?.tags?.errorMessage}
        getBadgeText={getDisplayValue.tags}
        setFieldValue={(model) => {
          setCurrentTagsDisplayValue(model ? getDisplayValue.tags(model) : "");
          setCurrentTagsValue(model);
        }}
        inputFieldRef={tagsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Tags"
          value={currentTagsDisplayValue}
          options={tagsRecords
            .filter((r) => !tagsIdSet.has(getIDValue.tags?.(r)))
            .map((r) => ({
              id: getIDValue.tags?.(r),
              label: getDisplayValue.tags?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTagsValue(
              tagsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTagsDisplayValue(label);
            runValidationTasks("tags", label);
          }}
          onClear={() => {
            setCurrentTagsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tags?.hasError) {
              runValidationTasks("tags", value);
            }
            setCurrentTagsDisplayValue(value);
            setCurrentTagsValue(undefined);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsDisplayValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          ref={tagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tags")}
        ></Autocomplete>
      </ArrayField>
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
          isDisabled={!(idProp || blogPostModelProp)}
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
              !(idProp || blogPostModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
