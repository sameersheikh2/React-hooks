import React, { useState , useEffect} from "react";

//import { ThemeContext, LocaleContext} from './components'

function Name() {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  //const theme = useContext(ThemeContext);

  useEffect(() =>{
      document.title= Name + '' + Number;
  });
const [Width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener ('resize', handleResize);
     return () => {
      window.removeEventListener ('resize', handleResize);}
  })
  function onChangeHandler(e) {
    setName(e.target.value);
  }

  function onChangeNumber(e) {
    setNumber(e.target.value);
  }

  return (
      <div>
          <input
              type="text"
              value={Name}
              placeholder="Sameer sheikh"
              onChange={onChangeHandler}
          />
          <h1>Name={Name}</h1>
          <input
              type="number"
              value={Number}
              placeholder="123456789"
              onChange={onChangeNumber}
          />
          <h1>Number={Number}</h1>
          <h3>width={Width}</h3>
      </div>
  );
}

export default Name;
