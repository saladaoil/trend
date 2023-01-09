import React, { useState } from "react";
import Button from '@material-ui/core/Button';

const MyForm = () => {
  const initializedData = {
    themeColor: "default"
  };

  const [data, setData] = useState(initializedData);

  const handleThemeColorChange = (e) => {
    const newData = { ...data, themeColor: e.target.value };
    setData(newData);
  };

  return (
    <form>
      テーマ：
      <input
        type="checkbox"
        id="themeDeafault"
        value="default"
        checked={data.themeColor === "default"}
        onChange={handleThemeColorChange}
      />
      <label htmlFor="themeDeafault">デフォルト　</label>
      <input
        type="checkbox"
        id="themeRibbon"
        value="ribbon"
        checked={data.themeColor === "ribbon"}
        onChange={handleThemeColorChange}
      />
      <label htmlFor="themeRibbon"><Button color="primary">決定</Button></label>
      <label><Button color="primary">決定</Button></label>    
      <input
        type="checkbox"
        id="themeDog"
        value="dog"
        checked={data.themeColor === "dog"}
        onChange={handleThemeColorChange}
      />
      <label htmlFor="themeDog">犬　</label>
      <input
        type="checkbox"
        id="themeNature"
        value="nature"
        checked={data.themeColor === "nature"}
        onChange={handleThemeColorChange}
      />
      <label htmlFor="themeNature">自然　</label>
    </form>
  );
};
export default MyForm