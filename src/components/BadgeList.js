import { useState, useEffect } from 'react';
import { Badge, useTheme} from '@aws-amplify/ui-react';

export default function BadgeList({ categories }) {
  const [categoryList, setCategoryList] = useState([]);
  const { tokens } = useTheme();

  useEffect(() => {
    async function getCategoryList() {
      const categoriesArray = await categories.toArray();
      const list = await Promise.all(categoriesArray.map(async (category) => {
        const categoryData = await category.category;
        return { id: categoryData.id, name: categoryData.name };
      }));
      setCategoryList(list);
    }

    getCategoryList();
  }, [categories]);

  return (
    <div className='scale-75' style={{ textAlign: "center"}} >
      {categoryList.map((category) => (
        <Badge style={{margin: '3px'}}
        backgroundColor={tokens.colors.pink[60]}
        color={tokens.colors.neutral[10]}
         className={'flagged'} key={category.id}>{category.name}</Badge>
      ))}
    </div>
  );
}
