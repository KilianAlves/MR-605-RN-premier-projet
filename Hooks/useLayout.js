export default function useLayout(nativeEvent) {
  const { x, y, width, height } = nativeEvent.layout;
  if (height < width) {
    return height;
  } else {
    return width;
  }
}
