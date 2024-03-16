import { useEffect } from "react";

const useLifeCycleDebug = (prefix: string) => {
  useEffect(() => {
    console.log(`${prefix} MOUNT`);
    return () => {
      console.log(`${prefix} UNMOUNT`);
    };
  }, [prefix]);

  useEffect(() => {
    console.log(`${prefix} RENDER`);
  });

  return {};
};

export default useLifeCycleDebug;
