/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { BlogPost } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import MyPost from "./MyPost";
import { Collection } from "@aws-amplify/ui-react";
export default function MyPostList(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: BlogPost,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={2}
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "MyPostList")}
      {...rest}
    >
      {(item, index) => (
        <MyPost
          blogPost={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></MyPost>
      )}
    </Collection>
  );
}
