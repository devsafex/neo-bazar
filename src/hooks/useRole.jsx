import { useState } from "react";

const useRole = () => {
      const [role]= useState('admin')
      return  role
};

export default useRole;