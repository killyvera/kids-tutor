import MyTag from "./MyTag";
const MyTagList = ({ tagList }) => {
    console.log(tagList)
    const tagString = tagList?.split(', ')
  
    const removeSpacesAndCommas = (tagString) => {
      return tagString?.replace(/[\s,]+/g, '');
    };
  
    const tags = tagString?.map((tag, index) => (
      <MyTag key={index} tagName={tag} />
    ));
  
    return <div className="pt-4" >{tags}</div>;
  };

  export default MyTagList;