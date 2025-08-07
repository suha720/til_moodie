import { useEffect, useState } from "react";

// 최소 로딩 시간 보장 (기본: 500ms)
function useFakeLoading(realLoading, delay = 500) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let timeout;

    if (!realLoading) {
      timeout = setTimeout(() => {
        setShowLoader(false);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [realLoading, delay]);

  return realLoading || showLoader;
}

export default useFakeLoading;
