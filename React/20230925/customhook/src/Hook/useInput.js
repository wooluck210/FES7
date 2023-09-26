import { useState } from "react";

function useInput(inistate) {
  const [value, setValue] = useState(inistate)
  function onChange(e) {
    setValue(e.target.value)
  }
  return [value, onChange]
}

export default useInput