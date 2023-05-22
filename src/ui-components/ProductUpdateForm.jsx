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
import { Product, Category, ProductCategory } from "../models";
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
export default function ProductUpdateForm(props) {
  const {
    id: idProp,
    product: productModelProp,
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
    description: "",
    sku: "",
    price: "",
    stock: "",
    dimensions: "",
    weight: "",
    rating: "",
    cover: "",
    categories: [],
    top: "",
    bottom: "",
    front: "",
    back: "",
    marketplaces: "",
    images: "",
    type: "",
    tags: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [sku, setSku] = React.useState(initialValues.sku);
  const [price, setPrice] = React.useState(initialValues.price);
  const [stock, setStock] = React.useState(initialValues.stock);
  const [dimensions, setDimensions] = React.useState(initialValues.dimensions);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [rating, setRating] = React.useState(initialValues.rating);
  const [cover, setCover] = React.useState(initialValues.cover);
  const [categories, setCategories] = React.useState(initialValues.categories);
  const [top, setTop] = React.useState(initialValues.top);
  const [bottom, setBottom] = React.useState(initialValues.bottom);
  const [front, setFront] = React.useState(initialValues.front);
  const [back, setBack] = React.useState(initialValues.back);
  const [marketplaces, setMarketplaces] = React.useState(
    initialValues.marketplaces
  );
  const [images, setImages] = React.useState(initialValues.images);
  const [type, setType] = React.useState(initialValues.type);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = productRecord
      ? { ...initialValues, ...productRecord, categories: linkedCategories }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setSku(cleanValues.sku);
    setPrice(cleanValues.price);
    setStock(cleanValues.stock);
    setDimensions(cleanValues.dimensions);
    setWeight(cleanValues.weight);
    setRating(cleanValues.rating);
    setCover(cleanValues.cover);
    setCategories(cleanValues.categories ?? []);
    setCurrentCategoriesValue(undefined);
    setCurrentCategoriesDisplayValue("");
    setTop(cleanValues.top);
    setBottom(cleanValues.bottom);
    setFront(cleanValues.front);
    setBack(cleanValues.back);
    setMarketplaces(
      typeof cleanValues.marketplaces === "string"
        ? cleanValues.marketplaces
        : JSON.stringify(cleanValues.marketplaces)
    );
    setImages(
      typeof cleanValues.images === "string"
        ? cleanValues.images
        : JSON.stringify(cleanValues.images)
    );
    setType(
      typeof cleanValues.type === "string"
        ? cleanValues.type
        : JSON.stringify(cleanValues.type)
    );
    setTags(cleanValues.tags);
    setErrors({});
  };
  const [productRecord, setProductRecord] = React.useState(productModelProp);
  const [linkedCategories, setLinkedCategories] = React.useState([]);
  const canUnlinkCategories = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Product, idProp)
        : productModelProp;
      setProductRecord(record);
      const linkedCategories = record
        ? await Promise.all(
            (
              await record.categories.toArray()
            ).map((r) => {
              return r.category;
            })
          )
        : [];
      setLinkedCategories(linkedCategories);
    };
    queryData();
  }, [idProp, productModelProp]);
  React.useEffect(resetStateValues, [productRecord, linkedCategories]);
  const [currentCategoriesDisplayValue, setCurrentCategoriesDisplayValue] =
    React.useState("");
  const [currentCategoriesValue, setCurrentCategoriesValue] =
    React.useState(undefined);
  const categoriesRef = React.createRef();
  const getIDValue = {
    categories: (r) => JSON.stringify({ id: r?.id }),
  };
  const categoriesIdSet = new Set(
    Array.isArray(categories)
      ? categories.map((r) => getIDValue.categories?.(r))
      : getIDValue.categories?.(categories)
  );
  const categoryRecords = useDataStoreBinding({
    type: "collection",
    model: Category,
  }).items;
  const getDisplayValue = {
    categories: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    description: [],
    sku: [],
    price: [],
    stock: [],
    dimensions: [],
    weight: [],
    rating: [],
    cover: [],
    categories: [],
    top: [],
    bottom: [],
    front: [],
    back: [],
    marketplaces: [{ type: "JSON" }],
    images: [{ type: "JSON" }],
    type: [{ type: "JSON" }],
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
          name,
          description,
          sku,
          price,
          stock,
          dimensions,
          weight,
          rating,
          cover,
          categories,
          top,
          bottom,
          front,
          back,
          marketplaces,
          images,
          type,
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
          categories.forEach((r) => {
            const count = categoriesMap.get(getIDValue.categories?.(r));
            const newCount = count ? count + 1 : 1;
            categoriesMap.set(getIDValue.categories?.(r), newCount);
          });
          linkedCategories.forEach((r) => {
            const count = linkedCategoriesMap.get(getIDValue.categories?.(r));
            const newCount = count ? count + 1 : 1;
            linkedCategoriesMap.set(getIDValue.categories?.(r), newCount);
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
            const productCategoryRecords = await DataStore.query(
              ProductCategory,
              (r) =>
                r.and((r) => {
                  const recordKeys = JSON.parse(id);
                  return [
                    r.categoryId.eq(recordKeys.id),
                    r.productId.eq(productRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(productCategoryRecords[i]));
            }
          });
          categoriesToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new ProductCategory({
                    product: productRecord,
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
            name: modelFields.name,
            description: modelFields.description,
            sku: modelFields.sku,
            price: modelFields.price,
            stock: modelFields.stock,
            dimensions: modelFields.dimensions,
            weight: modelFields.weight,
            rating: modelFields.rating,
            cover: modelFields.cover,
            top: modelFields.top,
            bottom: modelFields.bottom,
            front: modelFields.front,
            back: modelFields.back,
            marketplaces: modelFields.marketplaces,
            images: modelFields.images,
            type: modelFields.type,
            tags: modelFields.tags,
          };
          promises.push(
            DataStore.save(
              Product.copyOf(productRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProductUpdateForm")}
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
              description,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type,
              tags,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type,
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
      <TextField
        label="Sku"
        isRequired={false}
        isReadOnly={false}
        value={sku}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku: value,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.sku ?? value;
          }
          if (errors.sku?.hasError) {
            runValidationTasks("sku", value);
          }
          setSku(value);
        }}
        onBlur={() => runValidationTasks("sku", sku)}
        errorMessage={errors.sku?.errorMessage}
        hasError={errors.sku?.hasError}
        {...getOverrideProps(overrides, "sku")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price: value,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Stock"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={stock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock: value,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.stock ?? value;
          }
          if (errors.stock?.hasError) {
            runValidationTasks("stock", value);
          }
          setStock(value);
        }}
        onBlur={() => runValidationTasks("stock", stock)}
        errorMessage={errors.stock?.errorMessage}
        hasError={errors.stock?.hasError}
        {...getOverrideProps(overrides, "stock")}
      ></TextField>
      <TextField
        label="Dimensions"
        isRequired={false}
        isReadOnly={false}
        value={dimensions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock,
              dimensions: value,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.dimensions ?? value;
          }
          if (errors.dimensions?.hasError) {
            runValidationTasks("dimensions", value);
          }
          setDimensions(value);
        }}
        onBlur={() => runValidationTasks("dimensions", dimensions)}
        errorMessage={errors.dimensions?.errorMessage}
        hasError={errors.dimensions?.hasError}
        {...getOverrideProps(overrides, "dimensions")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={weight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock,
              dimensions,
              weight: value,
              rating,
              cover,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
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
              name,
              description,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating: value,
              cover,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type,
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
        label="Cover"
        isRequired={false}
        isReadOnly={false}
        value={cover}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover: value,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories: values,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type,
              tags,
            };
            const result = onChange(modelFields);
            values = result?.categories ?? values;
          }
          setCategories(values);
          setCurrentCategoriesValue(undefined);
          setCurrentCategoriesDisplayValue("");
        }}
        currentFieldValue={currentCategoriesValue}
        label={"Categories"}
        items={categories}
        hasError={errors?.categories?.hasError}
        errorMessage={errors?.categories?.errorMessage}
        getBadgeText={getDisplayValue.categories}
        setFieldValue={(model) => {
          setCurrentCategoriesDisplayValue(
            model ? getDisplayValue.categories(model) : ""
          );
          setCurrentCategoriesValue(model);
        }}
        inputFieldRef={categoriesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Categories"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Category"
          value={currentCategoriesDisplayValue}
          options={categoryRecords
            .filter((r) => !categoriesIdSet.has(getIDValue.categories?.(r)))
            .map((r) => ({
              id: getIDValue.categories?.(r),
              label: getDisplayValue.categories?.(r),
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
            runValidationTasks("categories", label);
          }}
          onClear={() => {
            setCurrentCategoriesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.categories?.hasError) {
              runValidationTasks("categories", value);
            }
            setCurrentCategoriesDisplayValue(value);
            setCurrentCategoriesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("categories", currentCategoriesDisplayValue)
          }
          errorMessage={errors.categories?.errorMessage}
          hasError={errors.categories?.hasError}
          ref={categoriesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "categories")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Top"
        isRequired={false}
        isReadOnly={false}
        value={top}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top: value,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.top ?? value;
          }
          if (errors.top?.hasError) {
            runValidationTasks("top", value);
          }
          setTop(value);
        }}
        onBlur={() => runValidationTasks("top", top)}
        errorMessage={errors.top?.errorMessage}
        hasError={errors.top?.hasError}
        {...getOverrideProps(overrides, "top")}
      ></TextField>
      <TextField
        label="Bottom"
        isRequired={false}
        isReadOnly={false}
        value={bottom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom: value,
              front,
              back,
              marketplaces,
              images,
              type,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.bottom ?? value;
          }
          if (errors.bottom?.hasError) {
            runValidationTasks("bottom", value);
          }
          setBottom(value);
        }}
        onBlur={() => runValidationTasks("bottom", bottom)}
        errorMessage={errors.bottom?.errorMessage}
        hasError={errors.bottom?.hasError}
        {...getOverrideProps(overrides, "bottom")}
      ></TextField>
      <TextField
        label="Front"
        isRequired={false}
        isReadOnly={false}
        value={front}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom,
              front: value,
              back,
              marketplaces,
              images,
              type,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.front ?? value;
          }
          if (errors.front?.hasError) {
            runValidationTasks("front", value);
          }
          setFront(value);
        }}
        onBlur={() => runValidationTasks("front", front)}
        errorMessage={errors.front?.errorMessage}
        hasError={errors.front?.hasError}
        {...getOverrideProps(overrides, "front")}
      ></TextField>
      <TextField
        label="Back"
        isRequired={false}
        isReadOnly={false}
        value={back}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom,
              front,
              back: value,
              marketplaces,
              images,
              type,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.back ?? value;
          }
          if (errors.back?.hasError) {
            runValidationTasks("back", value);
          }
          setBack(value);
        }}
        onBlur={() => runValidationTasks("back", back)}
        errorMessage={errors.back?.errorMessage}
        hasError={errors.back?.hasError}
        {...getOverrideProps(overrides, "back")}
      ></TextField>
      <TextAreaField
        label="Marketplaces"
        isRequired={false}
        isReadOnly={false}
        value={marketplaces}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces: value,
              images,
              type,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.marketplaces ?? value;
          }
          if (errors.marketplaces?.hasError) {
            runValidationTasks("marketplaces", value);
          }
          setMarketplaces(value);
        }}
        onBlur={() => runValidationTasks("marketplaces", marketplaces)}
        errorMessage={errors.marketplaces?.errorMessage}
        hasError={errors.marketplaces?.hasError}
        {...getOverrideProps(overrides, "marketplaces")}
      ></TextAreaField>
      <TextAreaField
        label="Images"
        isRequired={false}
        isReadOnly={false}
        value={images}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images: value,
              type,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.images ?? value;
          }
          if (errors.images?.hasError) {
            runValidationTasks("images", value);
          }
          setImages(value);
        }}
        onBlur={() => runValidationTasks("images", images)}
        errorMessage={errors.images?.errorMessage}
        hasError={errors.images?.hasError}
        {...getOverrideProps(overrides, "images")}
      ></TextAreaField>
      <TextAreaField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type: value,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextAreaField>
      <TextField
        label="Tags"
        isRequired={false}
        isReadOnly={false}
        value={tags}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              sku,
              price,
              stock,
              dimensions,
              weight,
              rating,
              cover,
              categories,
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
              type,
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
          isDisabled={!(idProp || productModelProp)}
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
              !(idProp || productModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
