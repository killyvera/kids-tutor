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
import { Resources, Category, ResourcesCategory } from "../models";
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
export default function ResourcesUpdateForm(props) {
  const {
    id: idProp,
    resources: resourcesModelProp,
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
    rating: "",
    short: "",
    tags: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [files, setFiles] = React.useState(initialValues.files);
  const [Categories, setCategories] = React.useState(initialValues.Categories);
  const [cover, setCover] = React.useState(initialValues.cover);
  const [autor, setAutor] = React.useState(initialValues.autor);
  const [rating, setRating] = React.useState(initialValues.rating);
  const [short, setShort] = React.useState(initialValues.short);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = resourcesRecord
      ? { ...initialValues, ...resourcesRecord, Categories: linkedCategories }
      : initialValues;
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setFiles(
      typeof cleanValues.files === "string"
        ? cleanValues.files
        : JSON.stringify(cleanValues.files)
    );
    setCategories(cleanValues.Categories ?? []);
    setCurrentCategoriesValue(undefined);
    setCurrentCategoriesDisplayValue("");
    setCover(cleanValues.cover);
    setAutor(cleanValues.autor);
    setRating(cleanValues.rating);
    setShort(cleanValues.short);
    setTags(cleanValues.tags);
    setErrors({});
  };
  const [resourcesRecord, setResourcesRecord] =
    React.useState(resourcesModelProp);
  const [linkedCategories, setLinkedCategories] = React.useState([]);
  const canUnlinkCategories = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Resources, idProp)
        : resourcesModelProp;
      setResourcesRecord(record);
      const linkedCategories = record
        ? await Promise.all(
            (
              await record.Categories.toArray()
            ).map((r) => {
              return r.category;
            })
          )
        : [];
      setLinkedCategories(linkedCategories);
    };
    queryData();
  }, [idProp, resourcesModelProp]);
  React.useEffect(resetStateValues, [resourcesRecord, linkedCategories]);
  const [currentCategoriesDisplayValue, setCurrentCategoriesDisplayValue] =
    React.useState("");
  const [currentCategoriesValue, setCurrentCategoriesValue] =
    React.useState(undefined);
  const CategoriesRef = React.createRef();
  const getIDValue = {
    Categories: (r) => JSON.stringify({ id: r?.id }),
  };
  const CategoriesIdSet = new Set(
    Array.isArray(Categories)
      ? Categories.map((r) => getIDValue.Categories?.(r))
      : getIDValue.Categories?.(Categories)
  );
  const categoryRecords = useDataStoreBinding({
    type: "collection",
    model: Category,
  }).items;
  const getDisplayValue = {
    Categories: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    title: [],
    description: [],
    files: [{ type: "JSON" }],
    Categories: [],
    cover: [],
    autor: [],
    rating: [],
    short: [],
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
          description,
          files,
          Categories,
          cover,
          autor,
          rating,
          short,
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
          const categoriesToLinkMap = new Map();
          const categoriesToUnLinkMap = new Map();
          const categoriesMap = new Map();
          const linkedCategoriesMap = new Map();
          Categories.forEach((r) => {
            const count = categoriesMap.get(getIDValue.Categories?.(r));
            const newCount = count ? count + 1 : 1;
            categoriesMap.set(getIDValue.Categories?.(r), newCount);
          });
          linkedCategories.forEach((r) => {
            const count = linkedCategoriesMap.get(getIDValue.Categories?.(r));
            const newCount = count ? count + 1 : 1;
            linkedCategoriesMap.set(getIDValue.Categories?.(r), newCount);
          });
          linkedCategoriesMap.forEach((count, id) => {
            const newCount = categoriesMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                categoriesToUnLinkMap.set(id, diffCount);
              }
            } else {
              categoriesToUnLinkMap.set(id, count);
            }
          });
          categoriesMap.forEach((count, id) => {
            const originalCount = linkedCategoriesMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                categoriesToLinkMap.set(id, diffCount);
              }
            } else {
              categoriesToLinkMap.set(id, count);
            }
          });
          categoriesToUnLinkMap.forEach(async (count, id) => {
            const resourcesCategoryRecords = await DataStore.query(
              ResourcesCategory,
              (r) =>
                r.and((r) => {
                  const recordKeys = JSON.parse(id);
                  return [
                    r.categoryId.eq(recordKeys.id),
                    r.resourcesId.eq(resourcesRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(resourcesCategoryRecords[i]));
            }
          });
          categoriesToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new ResourcesCategory({
                    resources: resourcesRecord,
                    category: categoryRecords.find((r) =>
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
            description: modelFields.description,
            files: modelFields.files,
            cover: modelFields.cover,
            autor: modelFields.autor,
            rating: modelFields.rating,
            short: modelFields.short,
            tags: modelFields.tags,
          };
          promises.push(
            DataStore.save(
              Resources.copyOf(resourcesRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ResourcesUpdateForm")}
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
              rating,
              short,
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
              rating,
              short,
              tags,
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
        value={files}
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
              rating,
              short,
              tags,
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
              rating,
              short,
              tags,
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
              rating,
              short,
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
              rating,
              short,
              tags,
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
              rating: value,
              short,
              tags,
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
              rating,
              short: value,
              tags,
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
      <TextField
        label="Tags"
        isRequired={false}
        isReadOnly={false}
        value={tags}
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
              rating,
              short,
              tags: value,
            };
            const result = onChange(modelFields);
            value = result?.tags ?? value;
          }
          if (errors.tags?.hasError) {
            runValidationTasks("tags", value);
          }
          setTags(value);
        }}
        onBlur={() => runValidationTasks("tags", tags)}
        errorMessage={errors.tags?.errorMessage}
        hasError={errors.tags?.hasError}
        {...getOverrideProps(overrides, "tags")}
      ></TextField>
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
          isDisabled={!(idProp || resourcesModelProp)}
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
              !(idProp || resourcesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
