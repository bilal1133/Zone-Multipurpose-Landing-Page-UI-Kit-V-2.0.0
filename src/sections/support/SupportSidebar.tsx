// icons
import emailIcon from '@iconify/icons-carbon/email';
import chatIcon from '@iconify/icons-carbon/chat';
import mobileIcon from '@iconify/icons-carbon/mobile';
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
import useResponsive from '../../hooks/useResponsive';
// utils
import { DRAWER_WIDTH } from '../../config';
// components
import { Scrollbar, Iconify, Image } from '../../components';

// ----------------------------------------------------------------------

interface ContactButtonStyleProps extends StackProps {
  children?: React.ReactNode;
}

const ContactButtonStyle = styled((props: ContactButtonStyleProps) => (
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

type SupportSidebarProps = {
  sidebarConfig: {
    title: string;
    icon: string;
  }[];
  isOpenSidebar: boolean;
  onCloseSidebar: VoidFunction;
  topic: string;
  onChangeTopic: (event: React.SyntheticEvent, newValue: string) => void;
};

export default function SupportSidebar({
  topic,
  sidebarConfig,
  onChangeTopic,
  isOpenSidebar,
  onCloseSidebar,
}: SupportSidebarProps) {
  const isDesktop = useResponsive('up', 'md');

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
        {sidebarConfig.map((topic) => (
          <Tab
            key={topic.title}
            value={topic.title}
            label={topic.title}
            icon={
              <Image
                alt={topic.icon}
                src={topic.icon}
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
          <ContactButtonStyle>
            <Iconify icon={emailIcon} sx={{ width: 24, height: 24 }} />
            <Typography variant="subtitle2">Email</Typography>
          </ContactButtonStyle>

          <ContactButtonStyle>
            <Iconify icon={chatIcon} sx={{ width: 24, height: 24 }} />
            <Typography variant="subtitle2">Chat Now</Typography>
          </ContactButtonStyle>

          <ContactButtonStyle>
            <Iconify icon={mobileIcon} sx={{ width: 24, height: 24 }} />
            <Typography variant="subtitle2">
              Call{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                552-917-1454
              </Box>
            </Typography>
          </ContactButtonStyle>
        </Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <>
      {isDesktop ? (
        <Drawer
          variant="permanent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
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
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}
