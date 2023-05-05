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
import { Product } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProductUpdateForm(props) {
  const {
    id: idProp,
    product,
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
    top: "",
    bottom: "",
    front: "",
    back: "",
    marketplaces: "",
    images: "",
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
  const [top, setTop] = React.useState(initialValues.top);
  const [bottom, setBottom] = React.useState(initialValues.bottom);
  const [front, setFront] = React.useState(initialValues.front);
  const [back, setBack] = React.useState(initialValues.back);
  const [marketplaces, setMarketplaces] = React.useState(
    initialValues.marketplaces
  );
  const [images, setImages] = React.useState(initialValues.images);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = productRecord
      ? { ...initialValues, ...productRecord }
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
    setErrors({});
  };
  const [productRecord, setProductRecord] = React.useState(product);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Product, idProp) : product;
      setProductRecord(record);
    };
    queryData();
  }, [idProp, product]);
  React.useEffect(resetStateValues, [productRecord]);
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
    top: [],
    bottom: [],
    front: [],
    back: [],
    marketplaces: [{ type: "JSON" }],
    images: [{ type: "JSON" }],
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
          top,
          bottom,
          front,
          back,
          marketplaces,
          images,
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
            Product.copyOf(productRecord, (updated) => {
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
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
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
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
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
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
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
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
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
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
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
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
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
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
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
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
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
              top,
              bottom,
              front,
              back,
              marketplaces,
              images,
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
              top: value,
              bottom,
              front,
              back,
              marketplaces,
              images,
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
              top,
              bottom: value,
              front,
              back,
              marketplaces,
              images,
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
              top,
              bottom,
              front: value,
              back,
              marketplaces,
              images,
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
              top,
              bottom,
              front,
              back: value,
              marketplaces,
              images,
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
              top,
              bottom,
              front,
              back,
              marketplaces: value,
              images,
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
              top,
              bottom,
              front,
              back,
              marketplaces,
              images: value,
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
          isDisabled={!(idProp || product)}
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
              !(idProp || product) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
