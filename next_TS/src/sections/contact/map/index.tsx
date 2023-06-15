import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
// @mui
import { BoxProps, Box } from '@mui/material';
// config
import { GOOGLE_MAP_API } from 'src/config-global';
// types
import { IOfficeMapProps } from 'src/types/contact';
//
import MapPopup from './MapPopup';
import MapMarker from './MapMarker';
import { mapStyle } from './styles';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  offices: IOfficeMapProps[];
}

export default function ContactMap({ offices, sx, ...other }: Props) {
  const [tooltip, setTooltip] = useState<IOfficeMapProps | any>(null);

  const [centerMap, setCenterMap] = useState({
    lat: offices[0].latlng[0],
    lng: offices[0].latlng[1],
  });

  const handleOpen = (lat: number, lng: number, office: IOfficeMapProps) => {
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
        bootstrapURLKeys={{ key: GOOGLE_MAP_API as string }}
        center={centerMap}
        zoom={2}
        options={{
          styles: mapStyle,
          disableDefaultUI: true,
        }}
      >
        {offices.map((office, index) => (
          <MapMarker
            key={index}
            lat={office.latlng[0]}
            lng={office.latlng[1]}
            onOpen={() => handleOpen(office.latlng[0], office.latlng[1], office)}
          />
        ))}

        {tooltip && (
          <MapPopup
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
