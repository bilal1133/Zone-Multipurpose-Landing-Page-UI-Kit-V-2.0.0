import { m } from 'framer-motion';
import { useEffect, useState } from 'react';
// icons
import addIcon from '@iconify/icons-carbon/add';
import cloudUpload from '@iconify/icons-carbon/cloud-upload';
import mediaLibrary from '@iconify/icons-carbon/media-library';
import chevronRight from '@iconify/icons-carbon/chevron-right';
import alignHorizontalLeft from '@iconify/icons-carbon/align-horizontal-left';
import alignHorizontalRight from '@iconify/icons-carbon/align-horizontal-right';
import alignHorizontalCenter from '@iconify/icons-carbon/align-horizontal-center';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import {
  Tab,
  Chip,
  Grid,
  Tabs,
  Card,
  Stack,
  Alert,
  Radio,
  Avatar,
  Rating,
  Button,
  Switch,
  Tooltip,
  Checkbox,
  TextField,
  Container,
  Typography,
  StackProps,
  AvatarGroup,
  ToggleButton,
  CircularProgress,
  FormControlLabel,
  ToggleButtonGroup,
  Slider as MUISlider,
} from '@mui/material';
import { CalendarPicker } from '@mui/x-date-pickers';
// routes
import Routes from '../../routes';
// _data
import _mock from '../../../_data/mock';
// components
import { FabButtonAnimate, Iconify } from '../../components';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const FASHION_CATEGORY = [
  { value: 'clothes', label: 'Clothes' },
  { value: 'footwear', label: 'Footwear' },
  { value: 'jean', label: 'Jean' },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const BlockStyle = styled((props: StackProps) => (
  <Stack
    spacing={5}
    width={1}
    direction="row"
    alignItems="center"
    justifyContent="center"
    flexWrap="wrap"
    {...props}
  />
))({
  '& > *': {
    marginTop: '20px !important',
    marginBottom: '20px !important',
  },
});

// ----------------------------------------------------------------------

export default function HomeFlexibleComponents() {
  const [tab, setTab] = useState('angular');
  const [progress, setProgress] = useState(0);
  const [alignment, setAlignment] = useState('left');
  const [category, setCategory] = useState('clothes');
  const [rating, setRating] = useState<number | null>(5);
  const [date, setDate] = useState<Date | null>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const handleChangeAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={{ xs: 6, md: 3 }} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <MotionViewport
              sx={{
                pt: { md: 10 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Interface Starter Kit
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
                  Flexible Components
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                  Pre-set components are easy to customize and use.
                  <br />
                  We collected most popular elements. Menu, sliders, buttons, inputs etc. are all
                  here. Just dive in!
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <NextLink href={Routes.componentsUI} passHref>
                  <Button
                    color="inherit"
                    size="large"
                    variant="outlined"
                    endIcon={<Iconify icon={chevronRight} sx={{ width: 16, height: 16 }} />}
                  >
                    Browse Components
                  </Button>
                </NextLink>
              </m.div>
            </MotionViewport>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              alignItems="center"
              sx={{
                px: { xs: 0, sm: 4 },
                py: { sm: 2 },
                borderRadius: 3,
                borderWidth: { xs: 0, sm: 1 },
                borderColor: 'divider',
                borderStyle: 'dashed',
              }}
            >
              <BlockStyle>
                <Button size="large" variant="contained" startIcon={<Iconify icon={addIcon} />}>
                  Add to cart
                </Button>
                <FabButtonAnimate variant="extended" color="default">
                  <Iconify icon={cloudUpload} />
                  Upload
                </FabButtonAnimate>
                <FabButtonAnimate color="secondary">
                  <Iconify icon={mediaLibrary} />
                </FabButtonAnimate>
                <div>
                  <CircularProgress color="warning" variant="determinate" value={progress} />
                </div>
              </BlockStyle>

              <BlockStyle>
                <Tabs value={tab} onChange={handleChangeTab}>
                  <Tab value="angular" label="Angular" />
                  <Tab value="react" label="React" />
                  <Tab value="vue" label="Vue" />
                </Tabs>

                <br />
                <ToggleButtonGroup
                  exclusive
                  value={alignment}
                  onChange={handleChangeAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="left">
                    <Iconify icon={alignHorizontalLeft} />
                  </ToggleButton>
                  <ToggleButton value="center">
                    <Iconify icon={alignHorizontalCenter} />
                  </ToggleButton>
                  <ToggleButton value="right">
                    <Iconify icon={alignHorizontalRight} />
                  </ToggleButton>
                </ToggleButtonGroup>

                <Chip
                  variant="outlined"
                  color="primary"
                  label="Pamela"
                  onDelete={() => {}}
                  avatar={<Avatar alt="Pamela">P</Avatar>}
                />
              </BlockStyle>

              <BlockStyle>
                <Avatar
                  alt="Remy Sharp"
                  src={_mock.image.avatar(4)}
                  sx={{ width: 64, height: 64 }}
                />

                <AvatarGroup max={4}>
                  {[...Array(8)].map((_, index) => (
                    <Avatar
                      key={index}
                      alt={_mock.name.fullName(index)}
                      src={_mock.image.avatar(index)}
                    />
                  ))}
                </AvatarGroup>

                <Tooltip title="Add" placement="top" arrow>
                  <Button color="inherit">Hover Me</Button>
                </Tooltip>

                <Rating
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </BlockStyle>

              <BlockStyle>
                <Grid container spacing={5} alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <MUISlider
                      size="small"
                      defaultValue={72}
                      valueLabelDisplay="on"
                      sx={{ width: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Alert severity="success">
                      This is a <strong>success</strong> alert
                    </Alert>
                  </Grid>
                </Grid>
              </BlockStyle>

              <BlockStyle spacing={{ xs: 0, sm: 3, md: 5 }}>
                <Card sx={{ boxShadow: (theme) => theme.customShadows.z24 }}>
                  <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
                </Card>

                <Stack spacing={2.5} flexGrow={1}>
                  <FormControlLabel control={<Switch defaultChecked />} label="Switch" />
                  <FormControlLabel
                    value="Radio"
                    control={<Radio defaultChecked />}
                    label="Radio"
                  />

                  <FormControlLabel control={<Checkbox />} label="Checkbox" />
                  <FormControlLabel control={<Checkbox indeterminate />} label="Checkbox" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Checkbox" />

                  <TextField label="Full Name" defaultValue="Pamela Mclellan" />

                  <TextField
                    select
                    label="Category"
                    value={category}
                    onChange={handleChangeCategory}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {FASHION_CATEGORY.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Stack>
              </BlockStyle>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
