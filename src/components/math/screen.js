export default function getTilwindScreenSize(width) {
    if (width < 640) {
        return 'sm'; // Small screens
      } else if (width >= 640 && width < 768) {
        return 'md'; // Medium screens
      } else if (width >= 768 && width < 1024) {
        return 'lg'; // Large screens
      } else if (width >= 1024 && width < 1280) {
        return 'xl'; // Extra large screens
      } else if (width >= 1280) {
        return '2xl'; // 2x Extra large screens
      }
}

