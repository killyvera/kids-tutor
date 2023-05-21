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
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import {
  Resources,
  Category,
  Tags as Tags0,
  ResourcesCategory,
  TagsResources,
} from "../models";
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
export default function ResourcesCreateForm(props) {
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
    title: "",
    description: "",
    files: "",
    Categories: [],
    cover: "",
    autor: "",
    Tags: [],
    rating: "",
    short: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [files, setFiles] = React.useState(initialValues.files);
  const [Categories, setCategories] = React.useState(initialValues.Categories);
  const [cover, setCover] = React.useState(initialValues.cover);
  const [autor, setAutor] = React.useState(initialValues.autor);
  const [Tags, setTags] = React.useState(initialValues.Tags);
  const [rating, setRating] = React.useState(initialValues.rating);
  const [short, setShort] = React.useState(initialValues.short);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setFiles(initialValues.files);
    setCategories(initialValues.Categories);
    setCurrentCategoriesValue(undefined);
    setCurrentCategoriesDisplayValue("");
    setCover(initialValues.cover);
    setAutor(initialValues.autor);
    setTags(initialValues.Tags);
    setCurrentTagsValue(undefined);
    setCurrentTagsDisplayValue("");
    setRating(initialValues.rating);
    setShort(initialValues.short);
    setErrors({});
  };
  const [currentCategoriesDisplayValue, setCurrentCategoriesDisplayValue] =
    React.useState("");
  const [currentCategoriesValue, setCurrentCategoriesValue] =
    React.useState(undefined);
  const CategoriesRef = React.createRef();
  const [currentTagsDisplayValue, setCurrentTagsDisplayValue] =
    React.useState("");
  const [currentTagsValue, setCurrentTagsValue] = React.useState(undefined);
  const TagsRef = React.createRef();
  const getIDValue = {
    Categories: (r) => JSON.stringify({ id: r?.id }),
    Tags: (r) => JSON.stringify({ id: r?.id }),
  };
  const CategoriesIdSet = new Set(
    Array.isArray(Categories)
      ? Categories.map((r) => getIDValue.Categories?.(r))
      : getIDValue.Categories?.(Categories)
  );
  const TagsIdSet = new Set(
    Array.isArray(Tags)
      ? Tags.map((r) => getIDValue.Tags?.(r))
      : getIDValue.Tags?.(Tags)
  );
  const categoryRecords = useDataStoreBinding({
    type: "collection",
    model: Category,
  }).items;
  const tagsRecords = useDataStoreBinding({
    type: "collection",
    model: Tags0,
  }).items;
  const getDisplayValue = {
    Categories: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    Tags: (r) => `${r?.tag_name ? r?.tag_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    title: [],
    description: [],
    files: [{ type: "JSON" }],
    Categories: [],
    cover: [],
    autor: [],
    Tags: [],
    rating: [],
    short: [],
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
          description,
          files,
          Categories,
          cover,
          autor,
          Tags,
          rating,
          short,
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
          const modelFieldsToSave = {
            title: modelFields.title,
            description: modelFields.description,
            files: modelFields.files,
            cover: modelFields.cover,
            autor: modelFields.autor,
            rating: modelFields.rating,
            short: modelFields.short,
          };
          const resources = await DataStore.save(
            new Resources(modelFieldsToSave)
          );
          const promises = [];
          promises.push(
            ...Categories.reduce((promises, category) => {
              promises.push(
                DataStore.save(
                  new ResourcesCategory({
                    resources,
                    category,
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...Tags.reduce((promises, tags) => {
              promises.push(
                DataStore.save(
                  new TagsResources({
                    resources,
                    tags,
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "ResourcesCreateForm")}
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
              description,
              files,
              Categories,
              cover,
              autor,
              Tags,
              rating,
              short,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              files,
              Categories,
              cover,
              autor,
              Tags,
              rating,
              short,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextAreaField
        label="Files"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              files: value,
              Categories,
              cover,
              autor,
              Tags,
              rating,
              short,
            };
            const result = onChange(modelFields);
            value = result?.files ?? value;
          }
          if (errors.files?.hasError) {
            runValidationTasks("files", value);
          }
          setFiles(value);
        }}
        onBlur={() => runValidationTasks("files", files)}
        errorMessage={errors.files?.errorMessage}
        hasError={errors.files?.hasError}
        {...getOverrideProps(overrides, "files")}
      ></TextAreaField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              description,
              files,
              Categories: values,
              cover,
              autor,
              Tags,
              rating,
              short,
            };
            const result = onChange(modelFields);
            values = result?.Categories ?? values;
          }
          setCategories(values);
          setCurrentCategoriesValue(undefined);
          setCurrentCategoriesDisplayValue("");
        }}
        currentFieldValue={currentCategoriesValue}
        label={"Categories"}
        items={Categories}
        hasError={errors?.Categories?.hasError}
        errorMessage={errors?.Categories?.errorMessage}
        getBadgeText={getDisplayValue.Categories}
        setFieldValue={(model) => {
          setCurrentCategoriesDisplayValue(
            model ? getDisplayValue.Categories(model) : ""
          );
          setCurrentCategoriesValue(model);
        }}
        inputFieldRef={CategoriesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Categories"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Category"
          value={currentCategoriesDisplayValue}
          options={categoryRecords
            .filter((r) => !CategoriesIdSet.has(getIDValue.Categories?.(r)))
            .map((r) => ({
              id: getIDValue.Categories?.(r),
              label: getDisplayValue.Categories?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentCategoriesValue(
              categoryRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCategoriesDisplayValue(label);
            runValidationTasks("Categories", label);
          }}
          onClear={() => {
            setCurrentCategoriesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Categories?.hasError) {
              runValidationTasks("Categories", value);
            }
            setCurrentCategoriesDisplayValue(value);
            setCurrentCategoriesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Categories", currentCategoriesDisplayValue)
          }
          errorMessage={errors.Categories?.errorMessage}
          hasError={errors.Categories?.hasError}
          ref={CategoriesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Categories")}
        ></Autocomplete>
      </ArrayField>
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
              description,
              files,
              Categories,
              cover: value,
              autor,
              Tags,
              rating,
              short,
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
        label="Autor"
        isRequired={false}
        isReadOnly={false}
        value={autor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              files,
              Categories,
              cover,
              autor: value,
              Tags,
              rating,
              short,
            };
            const result = onChange(modelFields);
            value = result?.autor ?? value;
          }
          if (errors.autor?.hasError) {
            runValidationTasks("autor", value);
          }
          setAutor(value);
        }}
        onBlur={() => runValidationTasks("autor", autor)}
        errorMessage={errors.autor?.errorMessage}
        hasError={errors.autor?.hasError}
        {...getOverrideProps(overrides, "autor")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              description,
              files,
              Categories,
              cover,
              autor,
              Tags: values,
              rating,
              short,
            };
            const result = onChange(modelFields);
            values = result?.Tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue(undefined);
          setCurrentTagsDisplayValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={Tags}
        hasError={errors?.Tags?.hasError}
        errorMessage={errors?.Tags?.errorMessage}
        getBadgeText={getDisplayValue.Tags}
        setFieldValue={(model) => {
          setCurrentTagsDisplayValue(model ? getDisplayValue.Tags(model) : "");
          setCurrentTagsValue(model);
        }}
        inputFieldRef={TagsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Tags"
          value={currentTagsDisplayValue}
          options={tagsRecords
            .filter((r) => !TagsIdSet.has(getIDValue.Tags?.(r)))
            .map((r) => ({
              id: getIDValue.Tags?.(r),
              label: getDisplayValue.Tags?.(r),
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
            runValidationTasks("Tags", label);
          }}
          onClear={() => {
            setCurrentTagsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Tags?.hasError) {
              runValidationTasks("Tags", value);
            }
            setCurrentTagsDisplayValue(value);
            setCurrentTagsValue(undefined);
          }}
          onBlur={() => runValidationTasks("Tags", currentTagsDisplayValue)}
          errorMessage={errors.Tags?.errorMessage}
          hasError={errors.Tags?.hasError}
          ref={TagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Tags")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rating}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              description,
              files,
              Categories,
              cover,
              autor,
              Tags,
              rating: value,
              short,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
      ></TextField>
      <TextField
        label="Short"
        isRequired={false}
        isReadOnly={false}
        value={short}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              files,
              Categories,
              cover,
              autor,
              Tags,
              rating,
              short: value,
            };
            const result = onChange(modelFields);
            value = result?.short ?? value;
          }
          if (errors.short?.hasError) {
            runValidationTasks("short", value);
          }
          setShort(value);
        }}
        onBlur={() => runValidationTasks("short", short)}
        errorMessage={errors.short?.errorMessage}
        hasError={errors.short?.hasError}
        {...getOverrideProps(overrides, "short")}
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
