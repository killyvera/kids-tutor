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
import {
  Category,
  Product,
  Resources,
  BlogPost,
  ProductCategory,
  ResourcesCategory,
  BlogPostCategory,
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
export default function CategoryCreateForm(props) {
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
    name: "",
    products: [],
    resources: [],
    color: "",
    blogposts: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [products, setProducts] = React.useState(initialValues.products);
  const [resources, setResources] = React.useState(initialValues.resources);
  const [color, setColor] = React.useState(initialValues.color);
  const [blogposts, setBlogposts] = React.useState(initialValues.blogposts);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setProducts(initialValues.products);
    setCurrentProductsValue(undefined);
    setCurrentProductsDisplayValue("");
    setResources(initialValues.resources);
    setCurrentResourcesValue(undefined);
    setCurrentResourcesDisplayValue("");
    setColor(initialValues.color);
    setBlogposts(initialValues.blogposts);
    setCurrentBlogpostsValue(undefined);
    setCurrentBlogpostsDisplayValue("");
    setErrors({});
  };
  const [currentProductsDisplayValue, setCurrentProductsDisplayValue] =
    React.useState("");
  const [currentProductsValue, setCurrentProductsValue] =
    React.useState(undefined);
  const productsRef = React.createRef();
  const [currentResourcesDisplayValue, setCurrentResourcesDisplayValue] =
    React.useState("");
  const [currentResourcesValue, setCurrentResourcesValue] =
    React.useState(undefined);
  const resourcesRef = React.createRef();
  const [currentBlogpostsDisplayValue, setCurrentBlogpostsDisplayValue] =
    React.useState("");
  const [currentBlogpostsValue, setCurrentBlogpostsValue] =
    React.useState(undefined);
  const blogpostsRef = React.createRef();
  const getIDValue = {
    products: (r) => JSON.stringify({ id: r?.id }),
    resources: (r) => JSON.stringify({ id: r?.id }),
    blogposts: (r) => JSON.stringify({ id: r?.id }),
  };
  const productsIdSet = new Set(
    Array.isArray(products)
      ? products.map((r) => getIDValue.products?.(r))
      : getIDValue.products?.(products)
  );
  const resourcesIdSet = new Set(
    Array.isArray(resources)
      ? resources.map((r) => getIDValue.resources?.(r))
      : getIDValue.resources?.(resources)
  );
  const blogpostsIdSet = new Set(
    Array.isArray(blogposts)
      ? blogposts.map((r) => getIDValue.blogposts?.(r))
      : getIDValue.blogposts?.(blogposts)
  );
  const productRecords = useDataStoreBinding({
    type: "collection",
    model: Product,
  }).items;
  const resourcesRecords = useDataStoreBinding({
    type: "collection",
    model: Resources,
  }).items;
  const blogPostRecords = useDataStoreBinding({
    type: "collection",
    model: BlogPost,
  }).items;
  const getDisplayValue = {
    products: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    resources: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
    blogposts: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    products: [],
    resources: [],
    color: [],
    blogposts: [],
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
          name,
          products,
          resources,
          color,
          blogposts,
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
            name: modelFields.name,
            color: modelFields.color,
          };
          const category = await DataStore.save(
            new Category(modelFieldsToSave)
          );
          const promises = [];
          promises.push(
            ...products.reduce((promises, product) => {
              promises.push(
                DataStore.save(
                  new ProductCategory({
                    category,
                    product,
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...resources.reduce((promises, resources) => {
              promises.push(
                DataStore.save(
                  new ResourcesCategory({
                    category,
                    resources,
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...blogposts.reduce((promises, blogPost) => {
              promises.push(
                DataStore.save(
                  new BlogPostCategory({
                    category,
                    blogPost,
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
      {...getOverrideProps(overrides, "CategoryCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              products,
              resources,
              color,
              blogposts,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              products: values,
              resources,
              color,
              blogposts,
            };
            const result = onChange(modelFields);
            values = result?.products ?? values;
          }
          setProducts(values);
          setCurrentProductsValue(undefined);
          setCurrentProductsDisplayValue("");
        }}
        currentFieldValue={currentProductsValue}
        label={"Products"}
        items={products}
        hasError={errors?.products?.hasError}
        errorMessage={errors?.products?.errorMessage}
        getBadgeText={getDisplayValue.products}
        setFieldValue={(model) => {
          setCurrentProductsDisplayValue(
            model ? getDisplayValue.products(model) : ""
          );
          setCurrentProductsValue(model);
        }}
        inputFieldRef={productsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Products"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Product"
          value={currentProductsDisplayValue}
          options={productRecords
            .filter((r) => !productsIdSet.has(getIDValue.products?.(r)))
            .map((r) => ({
              id: getIDValue.products?.(r),
              label: getDisplayValue.products?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentProductsValue(
              productRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentProductsDisplayValue(label);
            runValidationTasks("products", label);
          }}
          onClear={() => {
            setCurrentProductsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.products?.hasError) {
              runValidationTasks("products", value);
            }
            setCurrentProductsDisplayValue(value);
            setCurrentProductsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("products", currentProductsDisplayValue)
          }
          errorMessage={errors.products?.errorMessage}
          hasError={errors.products?.hasError}
          ref={productsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "products")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              products,
              resources: values,
              color,
              blogposts,
            };
            const result = onChange(modelFields);
            values = result?.resources ?? values;
          }
          setResources(values);
          setCurrentResourcesValue(undefined);
          setCurrentResourcesDisplayValue("");
        }}
        currentFieldValue={currentResourcesValue}
        label={"Resources"}
        items={resources}
        hasError={errors?.resources?.hasError}
        errorMessage={errors?.resources?.errorMessage}
        getBadgeText={getDisplayValue.resources}
        setFieldValue={(model) => {
          setCurrentResourcesDisplayValue(
            model ? getDisplayValue.resources(model) : ""
          );
          setCurrentResourcesValue(model);
        }}
        inputFieldRef={resourcesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Resources"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Resources"
          value={currentResourcesDisplayValue}
          options={resourcesRecords
            .filter((r) => !resourcesIdSet.has(getIDValue.resources?.(r)))
            .map((r) => ({
              id: getIDValue.resources?.(r),
              label: getDisplayValue.resources?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentResourcesValue(
              resourcesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentResourcesDisplayValue(label);
            runValidationTasks("resources", label);
          }}
          onClear={() => {
            setCurrentResourcesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.resources?.hasError) {
              runValidationTasks("resources", value);
            }
            setCurrentResourcesDisplayValue(value);
            setCurrentResourcesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("resources", currentResourcesDisplayValue)
          }
          errorMessage={errors.resources?.errorMessage}
          hasError={errors.resources?.hasError}
          ref={resourcesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "resources")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Color"
        isRequired={false}
        isReadOnly={false}
        value={color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              products,
              resources,
              color: value,
              blogposts,
            };
            const result = onChange(modelFields);
            value = result?.color ?? value;
          }
          if (errors.color?.hasError) {
            runValidationTasks("color", value);
          }
          setColor(value);
        }}
        onBlur={() => runValidationTasks("color", color)}
        errorMessage={errors.color?.errorMessage}
        hasError={errors.color?.hasError}
        {...getOverrideProps(overrides, "color")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              products,
              resources,
              color,
              blogposts: values,
            };
            const result = onChange(modelFields);
            values = result?.blogposts ?? values;
          }
          setBlogposts(values);
          setCurrentBlogpostsValue(undefined);
          setCurrentBlogpostsDisplayValue("");
        }}
        currentFieldValue={currentBlogpostsValue}
        label={"Blogposts"}
        items={blogposts}
        hasError={errors?.blogposts?.hasError}
        errorMessage={errors?.blogposts?.errorMessage}
        getBadgeText={getDisplayValue.blogposts}
        setFieldValue={(model) => {
          setCurrentBlogpostsDisplayValue(
            model ? getDisplayValue.blogposts(model) : ""
          );
          setCurrentBlogpostsValue(model);
        }}
        inputFieldRef={blogpostsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Blogposts"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BlogPost"
          value={currentBlogpostsDisplayValue}
          options={blogPostRecords
            .filter((r) => !blogpostsIdSet.has(getIDValue.blogposts?.(r)))
            .map((r) => ({
              id: getIDValue.blogposts?.(r),
              label: getDisplayValue.blogposts?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBlogpostsValue(
              blogPostRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBlogpostsDisplayValue(label);
            runValidationTasks("blogposts", label);
          }}
          onClear={() => {
            setCurrentBlogpostsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.blogposts?.hasError) {
              runValidationTasks("blogposts", value);
            }
            setCurrentBlogpostsDisplayValue(value);
            setCurrentBlogpostsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("blogposts", currentBlogpostsDisplayValue)
          }
          errorMessage={errors.blogposts?.errorMessage}
          hasError={errors.blogposts?.hasError}
          ref={blogpostsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "blogposts")}
        ></Autocomplete>
      </ArrayField>
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
