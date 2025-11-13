import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { colorScale, countries } from './Countries';

function WorldMap() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
        backgroundColor="transparent"
        zoomOnScroll={false}
        zoomButtons={false}
        // Disable all interactivity to reduce JS calculations
        hoverOpacity={1}          // Disables hover effects
        selectedRegions={[]}       // Disables region selection
        containerClassName="jvectormap-container" // For CSS optimizations
        series={{
          regions: [{
            scale: colorScale,
            values: countries,
            attribute: 'fill',
            min: 0,
            max: 100,
          }],
        }}
        onRegionTipShow={(event, label, code) => {
          // Simplify tooltip to reduce DOM manipulations
          label.html(`
            <div style="
              background-color: black;
              border-radius: 6px;
              padding: 4px 8px;
              color: white;
              font-size: 12px;
            ">
              ${label.html()}
            </div>
          `);
        }}
        onMarkerTipShow={() => false} // Disable markers entirely
      />
    </div>
  );
}

export default WorldMap;