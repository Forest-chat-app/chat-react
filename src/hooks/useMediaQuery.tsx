import { useEffect, useState } from "react";

// 媒体查询断点
const breakpoints = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)"
};

const mediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // 初始化匹配状态
    setMatches(media.matches);
    
    // 添加监听器
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    // 清理监听器
    return () => media.removeEventListener('change', listener);
  }, [query]); // 只有当查询字符串改变时才重新执行

  return matches;
};

export const useMediaQuery = () => {
  const isMobile = mediaQuery(breakpoints.mobile);
  const isTablet = mediaQuery(breakpoints.tablet);
  const isDesktop = mediaQuery(breakpoints.desktop);

  return { isMobile, isTablet, isDesktop };
};