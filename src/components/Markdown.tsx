import { LazyLoadImageProps } from 'react-lazy-load-image-component';
import okaidia from 'prism-react-renderer/themes/okaidia';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
// icons
import quotesIcon from '@iconify/icons-carbon/quotes';
// next
import NextLink, { LinkProps } from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import {
  Link,
  Stack,
  Divider,
  BoxProps,
  Typography,
  DividerProps,
  TypographyProps,
  LinkProps as MUILinkProps,
} from '@mui/material';
// components
import { Image, Iconify } from '../components';

// ----------------------------------------------------------------------

const MARGIN = {
  marginTop: 24,
  marginBottom: 16,
};

type RootStyleProps = {
  firstLetter?: boolean;
};

export const RootStyle = styled('div', {
  shouldForwardProp: (prop) => prop !== 'firstLetter',
})<RootStyleProps>(({ firstLetter, theme }) => ({
  // Heading
  '& h1': { ...MARGIN, ...theme.typography.h1 },
  '& h2': { ...MARGIN, ...theme.typography.h2 },
  '& h3': { ...MARGIN, ...theme.typography.h3 },
  '& h4': { ...MARGIN, ...theme.typography.h4 },
  '& h5': { ...MARGIN, ...theme.typography.h5 },
  '& h6': { ...MARGIN, ...theme.typography.h6 },
  '& p': { marginBottom: theme.spacing(2) },

  // Code
  '& code': {
    color: theme.palette.secondary.main,
  },
  '& pre': {
    margin: theme.spacing(5, 0),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 900 : 800],
    '& > pre': {
      overflow: 'auto',
      padding: theme.spacing(3, 3, 0, 3),
    },
  },

  // List
  '& ul, & ol': {
    marginBottom: theme.spacing(2),
    '& li': {
      lineHeight: 2,
    },
  },

  // First Letter
  ...(firstLetter && {
    '& > p:first-of-type': {
      '&:first-letter': {
        float: 'left',
        fontSize: 80,
        lineHeight: 1,
        paddingRight: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
      },
    },
  }),
}));

// ----------------------------------------------------------------------

type Props = {
  firstLetter?: boolean;
  content: MDXRemoteSerializeResult;
};

export default function Markdown({ content, firstLetter = false }: Props) {
  return (
    <RootStyle firstLetter={firstLetter}>
      <MDXRemote {...content} components={components} />
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

export const components: any = {
  p: (props: TypographyProps) => <Typography {...props} />,
  hr: (props: DividerProps) => <Divider {...props} />,
  a: LinkMDX,
  blockquote: BlockquoteMDX,
  img: ImageMDX,
  code: CodeMDX,
};

// ----------------------------------------------------------------------

type LinkMDXProps = LinkProps & MUILinkProps;

function LinkMDX(props: LinkMDXProps) {
  return !props.href.includes('http') ? (
    <NextLink href={props.href} passHref>
      <Link {...props}>{props.children}</Link>
    </NextLink>
  ) : (
    <Link {...props} href={props.href} target="_blank" rel="noopener">
      {props.children}
    </Link>
  );
}

// ----------------------------------------------------------------------

function ImageMDX(props: LazyLoadImageProps & BoxProps) {
  return <Image alt={props.alt} ratio="16/9" sx={{ borderRadius: 2, my: 5 }} {...props} />;
}

// ----------------------------------------------------------------------

function BlockquoteMDX(props: TypographyProps) {
  return (
    <Stack
      direction="row"
      spacing={{ xs: 3, md: 5 }}
      sx={{
        my: 5,
        p: { xs: 3, md: 5 },
      }}
    >
      <Iconify
        icon={quotesIcon}
        sx={{ width: 48, height: 48, color: 'text.disabled', opacity: 0.48 }}
      />
      <Typography variant="h5">{props.children}</Typography>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type CodeMDXProps = {
  children: string;
  className?: string;
};

function CodeMDX(props: CodeMDXProps) {
  const { children, className } = props;
  const language = className?.replace(/language-/, '') as Language;
  return (
    <Highlight {...defaultProps} code={children} theme={okaidia} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, backgroundColor: 'transparent' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
