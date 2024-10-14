import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select';

const UseFlag = () => {
  const [selected, setSelected] = useState("");

  <ReactFlagsSelect
    selected={selected}
    onSelect={(code) => setSelected(code)}
  />;
};


export default UseFlag