export function formatCount(count: number): string {
  const ranges = [
    { divider: 1, suffix: "" },
    { divider: 1e3, suffix: "K" },
    { divider: 1e6, suffix: "M" },
    // Add more ranges for B (billions), T (trillions), etc. if needed
  ];

  const range = ranges.find((range) => count < range.divider * 1e3);

  if (range) {
    let formattedCount = (count / range.divider).toFixed(
      count % (range.divider * 1000) === 0 ? 0 : 1
    );

    // Remove decimal part if it's .0
    formattedCount = formattedCount.replace(/\.0$/, "");

    // Special handling for the 999.5K to 1M edge case
    if (formattedCount.startsWith("1000") && range.suffix === "K") {
      formattedCount = "1";
      return formattedCount + "M"; // Use the next suffix ("M")
    }
    return formattedCount + range.suffix;
  }

  return "";
}
