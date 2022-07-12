import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
// @mui
import { BoxProps, Box, SxProps } from '@mui/material';
// config
import { GOOGLE_API } from '../../config';
// @types
import { OfficeMapProps } from '../../@types/map';
//
import Popup from './Popup';
import Marker from './Marker';
import MapStyle from './MapStyle';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  offices: OfficeMapProps[];
  sx?: SxProps;
}

export default function ContactMap({ offices, sx, ...other }: Props) {
  const [tooltip, setTooltip] = useState<OfficeMapProps | any>(null);

  const [centerMap, setCenterMap] = useState({
    lat: offices[0].latlng[0],
    lng: offices[0].latlng[1],
  });

  const handleOpen = (lat: number, lng: number, office: OfficeMapProps) => {
    setCenterMap({
      ...centerMap,
      lat: lat - 32,
      lng,
    });
    setTooltip(office);
  };

  return (
    <Box sx={{ height: 480, overflow: 'hidden', ...sx }} {...other}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API as string }}
        center={centerMap}
        zoom={2}
        options={{
          styles: MapStyle,
          disableDefaultUI: true,
        }}
      >
        {offices.map((office, index) => (
          <Marker
            key={index}
            lat={office.latlng[0]}
            lng={office.latlng[1]}
            onOpen={() => handleOpen(office.latlng[0], office.latlng[1], office)}
          />
        ))}

        {tooltip && (
          <Popup
            lat={tooltip.latlng[0]}
            lng={tooltip.latlng[1]}
            office={tooltip}
            onClose={() => setTooltip(null)}
          />
        )}
      </GoogleMapReact>
    </Box>
  );
}
