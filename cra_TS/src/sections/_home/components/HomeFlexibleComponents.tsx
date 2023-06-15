import { m } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import {
  Tab,
  Fab,
  Chip,
  Tabs,
  Card,
  Stack,
  Alert,
  Radio,
  Avatar,
  Rating,
  Button,
  Switch,
  Slider,
  Tooltip,
  Checkbox,
  TextField,
  Container,
  Typography,
  StackProps,
  IconButton,
  AvatarGroup,
  ToggleButton,
  CircularProgress,
  FormControlLabel,
  ToggleButtonGroup,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';
// routes
import { paths } from 'src/routes/paths';
// _mock
import _mock from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const FASHION_CATEGORY = [
  { value: 'clothes', label: 'Clothes' },
  { value: 'footwear', label: 'Footwear' },
  { value: 'jean', label: 'Jean' },
];

// ----------------------------------------------------------------------

const StyledBlock = styled((props: StackProps) => (
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

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
    <Container
      sx={{
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={{ xs: 6, md: 3 }} justifyContent={{ md: 'space-between' }}>
        <Grid xs={12} md={4}>
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
              <Typography variant="h2" sx={{ my: 3 }}>
                Flexible Components
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                Pre-set components are easy to customize and use. We collected most popular
                elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Button
                component={RouterLink}
                to={paths.components.root}
                color="inherit"
                size="large"
                variant="outlined"
                endIcon={<Iconify icon="carbon:chevron-right" width={16} />}
              >
                Browse Components
              </Button>
            </m.div>
          </MotionViewport>
        </Grid>

        <Grid xs={12} md={7}>
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
            <StyledBlock>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                startIcon={<Iconify icon="carbon:add" />}
              >
                Add to cart
              </Button>

              <Fab variant="extended" color="inherit" aria-label="upload">
                <Iconify icon="carbon:cloud-upload" width={24} />
                Upload
              </Fab>

              <Fab color="info" aria-label="media">
                <Iconify icon="carbon:media-library" />
              </Fab>

              <div>
                <CircularProgress
                  color="warning"
                  variant="determinate"
                  aria-label="Progress"
                  value={progress}
                />
              </div>
            </StyledBlock>

            <StyledBlock>
              <Tabs value={tab} onChange={handleChangeTab}>
                <Tab value="angular" label="Angular" />
                <Tab value="react" label="React" />
                <Tab value="vue" label="Vue" />
              </Tabs>

              <br />
              <ToggleButtonGroup
                exclusive
                color="primary"
                value={alignment}
                onChange={handleChangeAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="left" aria-label="alignment left">
                  <Iconify icon="carbon:align-horizontal-left" />
                </ToggleButton>
                <ToggleButton value="center" aria-label="alignment center">
                  <Iconify icon="carbon:align-horizontal-center" />
                </ToggleButton>
                <ToggleButton value="right" aria-label="alignment right">
                  <Iconify icon="carbon:align-horizontal-right" />
                </ToggleButton>
              </ToggleButtonGroup>

              <Chip
                variant="soft"
                color="primary"
                label="Pamela"
                onDelete={() => {}}
                avatar={<Avatar alt="Pamela">P</Avatar>}
              />
            </StyledBlock>

            <StyledBlock>
              <Avatar alt="Remy Sharp" src={_mock.image.avatar(4)} sx={{ width: 64, height: 64 }} />

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
            </StyledBlock>

            <StyledBlock flexWrap="unset" direction={{ xs: 'column', md: 'row' }}>
              <Slider
                size="small"
                defaultValue={72}
                valueLabelDisplay="on"
                aria-label="demo slider"
              />

              <Alert
                severity="success"
                sx={{ width: 1 }}
                action={
                  <IconButton color="inherit" size="small" aria-label="close" onClick={() => {}}>
                    <Iconify icon="carbon:close" />
                  </IconButton>
                }
              >
                This is a <strong>success</strong> alert
              </Alert>
            </StyledBlock>

            <StyledBlock spacing={{ xs: 0, sm: 3, md: 5 }}>
              {mounted && (
                <Card sx={{ boxShadow: (theme) => theme.customShadows.z24 }}>
                  <DateCalendar value={date} onChange={(newDate) => setDate(newDate)} />
                </Card>
              )}

              <Stack spacing={2.5} flexGrow={1}>
                <FormControlLabel control={<Switch defaultChecked />} label="Switch" />

                <FormControlLabel control={<Checkbox />} label="Checkbox" />

                <FormControlLabel
                  value="Radio"
                  control={<Radio defaultChecked />}
                  label="Radio Button"
                />

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
            </StyledBlock>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
