import { ReactElement } from 'react';
// icons
import chevronRight from '@iconify/icons-carbon/chevron-right';
// next
import NextLink from 'next/link';
// @mui
import {
  Box,
  Link,
  Typography,
  Breadcrumbs as MUIBreadcrumbs,
  BreadcrumbsProps,
} from '@mui/material';
//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

type TLink = {
  href?: string;
  name: string | undefined;
  icon?: ReactElement;
};

interface Props extends BreadcrumbsProps {
  links: TLink[];
  activeLast?: boolean;
  onDark?: boolean;
}

export default function Breadcrumbs({
  links,
  activeLast = false,
  onDark = false,
  ...other
}: Props) {
  const currentLink = links[links.length - 1].name;

  const listDefault = links.map((link) => <LinkItem key={link.name} link={link} onDark={onDark} />);

  const listActiveLast = links.map((link) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} onDark={onDark} />
      ) : (
        <Typography
          noWrap
          variant="body3"
          sx={{
            color: 'text.disabled',
            ...(onDark && {
              opacity: 0.48,
              color: 'common.white',
            }),
          }}
        >
          {currentLink || ''}
        </Typography>
      )}
    </div>
  ));

  return (
    <MUIBreadcrumbs
      separator={
        <Iconify
          icon={chevronRight}
          sx={{
            width: 16,
            height: 16,
            ...(onDark && {
              opacity: 0.48,
              color: 'common.white',
            }),
          }}
        />
      }
      {...other}
    >
      {activeLast ? listDefault : listActiveLast}
    </MUIBreadcrumbs>
  );
}

// ----------------------------------------------------------------------

type LinkItemProps = {
  link: TLink;
  onDark?: boolean;
};

function LinkItem({ link, onDark }: LinkItemProps) {
  const { href = '', name, icon } = link;
  return (
    <NextLink key={name} href={href} passHref>
      <Link
        variant="body3"
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'text.primary',
          '& > div': { display: 'inherit' },
          ...(onDark && {
            color: 'common.white',
          }),
        }}
      >
        {icon && (
          <Box
            sx={{
              mr: 1,
              '& svg': { width: 20, height: 20 },
            }}
          >
            {icon}
          </Box>
        )}
        {name}
      </Link>
    </NextLink>
  );
}
