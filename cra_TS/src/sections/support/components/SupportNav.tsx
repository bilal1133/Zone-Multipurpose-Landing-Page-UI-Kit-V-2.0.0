// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Tab,
  Tabs,
  Stack,
  Drawer,
  Typography,
  CardActionArea,
  StackProps,
} from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { NAV } from 'src/config-global';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

interface ContactButtonStyleProps extends StackProps {
  children?: React.ReactNode;
}

const StyledContactButton = styled((props: ContactButtonStyleProps) => (
  <CardActionArea sx={{ borderRadius: 1 }}>
    <Stack direction="row" alignItems="center" spacing={2} {...props} />
  </CardActionArea>
))(({ theme }) => ({
  ...theme.typography.subtitle2,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  border: `solid 1px ${theme.palette.divider}`,
}));

// ----------------------------------------------------------------------

type Props = {
  sidebarConfig: {
    title: string;
    icon: string;
  }[];
  isOpenSidebar: boolean;
  onCloseSidebar: VoidFunction;
  topic: string;
  onChangeTopic: (event: React.SyntheticEvent, newValue: string) => void;
};

export default function SupportNav({
  topic,
  sidebarConfig,
  onChangeTopic,
  isOpenSidebar,
  onCloseSidebar,
}: Props) {
  const isMdUp = useResponsive('up', 'md');

  const renderContent = (
    <Scrollbar
      sx={{
        py: { xs: 3, md: 0 },
      }}
    >
      <Tabs
        value={topic}
        onChange={onChangeTopic}
        orientation="vertical"
        sx={{
          pl: { xs: 2.5, md: 0 },
        }}
      >
        {sidebarConfig.map((item) => (
          <Tab
            key={item.title}
            value={item.title}
            label={item.title}
            icon={
              <Image
                disabledEffect
                alt={item.icon}
                src={item.icon}
                sx={{ width: 28, height: 28, mr: `20px !important` }}
              />
            }
            sx={{
              height: 56,
              typography: 'body2',
              justifyContent: 'flex-start',
              '&.Mui-selected': { typography: 'subtitle2' },
            }}
          />
        ))}
      </Tabs>

      <Box
        sx={{
          mt: { xs: 2.5, md: 5 },
          pl: { xs: 2.5, md: 0 },
          pr: { xs: 2.5, md: 5 },
        }}
      >
        <Typography variant="h4" paragraph>
          Do you still need help?
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
          Always support whenever you need (24/7).
        </Typography>

        <Stack spacing={2}>
          <StyledContactButton>
            <Iconify icon="carbon:email" width={24} />
            <Typography variant="subtitle2">Email</Typography>
          </StyledContactButton>

          <StyledContactButton>
            <Iconify icon="carbon:chat" width={24} />
            <Typography variant="subtitle2">Chat Now</Typography>
          </StyledContactButton>

          <StyledContactButton>
            <Iconify icon="carbon:mobile" width={24} />
            <Typography variant="subtitle2">
              {`Call `}
              <Box component="span" sx={{ color: 'primary.main' }}>
                552-917-1454
              </Box>
            </Typography>
          </StyledContactButton>
        </Stack>
      </Box>
    </Scrollbar>
  );

  return isMdUp ? (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: {
          width: NAV.W_DRAWER,
          position: 'unset',
          bgcolor: 'background.default',
        },
      }}
    >
      {renderContent}
    </Drawer>
  ) : (
    <Drawer
      open={isOpenSidebar}
      onClose={onCloseSidebar}
      ModalProps={{ keepMounted: true }}
      PaperProps={{
        sx: { width: NAV.W_DRAWER },
      }}
    >
      {renderContent}
    </Drawer>
  );
}
