import { useState, useEffect } from "react";
import { Badge, useTheme } from "@aws-amplify/ui-react";
import { DataStore, withSSRContext } from "aws-amplify";
import { CategoryResources } from "@/models";

export default function BadgeList({ categories }) {
  const [categoryList, setCategoryList] = useState(categories);
  const { tokens } = useTheme();
  // console.log(categories);
  return (
    <div className="scale-75" style={{ textAlign: "center" }}>
      {categories ? (
        categoryList.map((category) => (
          <Badge
            style={{ margin: "3px" }}
            backgroundColor={tokens.colors.pink[60]}
            color={tokens.colors.neutral[10]}
            className={"flagged"}
            key={category.id}
          >
            {category.name}
          </Badge>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
