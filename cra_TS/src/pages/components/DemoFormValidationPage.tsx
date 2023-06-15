import { useState } from 'react';

import { Helmet } from 'react-helmet-async';
// @mui
import {
  Box,
  Stack,
  Switch,
  Divider,
  Container,
  Typography,
  FormControlLabel,
} from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// sections
import { ReactHookForm } from 'src/sections/examples/form';

// ----------------------------------------------------------------------

export default function DemoFormValidationPage() {
  const [debug, setDebug] = useState(true);

  const handleChangeDebug = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDebug(event.target.checked);
  };

  return (
    <>
      <Helmet>
        <title>Components: Form Validation | ZONE UI</title>
      </Helmet>

      <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Form Validation"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Form Validation' },
            ]}
            moreLink={['https://react-hook-form.com/', 'https://github.com/jquense/yup']}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h4"> React Hook Form + Yup </Typography>
          <FormControlLabel
            control={<Switch checked={debug} onChange={handleChangeDebug} />}
            label="Show Debug"
            labelPlacement="start"
          />
        </Stack>

        <Divider sx={{ my: 5 }} />

        <ReactHookForm debug={debug} />
      </Container>
    </>
  );
}
