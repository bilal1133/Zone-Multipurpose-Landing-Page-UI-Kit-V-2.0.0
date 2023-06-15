import { Helmet } from 'react-helmet-async';
// @mui
import { Box, Card, Container, CardContent } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const content = `

<h1>h1</h1>

<h2>h2</h2>

<p> <strong>Paragraph</strong> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>

<p>
  <a href='https://www.google.com/'>Link (https://www.google.com/)</a>
</p>

<h6>Lists</h6>

<ul>
  <li>
    <input type="checkbox" disabled="" checked=""> Write the press release
  </li>
  <li>
    <input type="checkbox" disabled=""> Update the website
  </li>
  <li>
    <input type="checkbox" disabled=""> Contact the media
  </li>
</ul>

<hr/>

<h6>A table:</h6>

<table>
  <thead>
    <tr>
      <th style="text-align: left;">Syntax</th>
      <th style="text-align: center;">Description</th>
      <th style="text-align: right;">Test Text</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">Header</td>
      <td style="text-align: center;">Title</td>
      <td style="text-align: right;">Here's this</td>
    </tr>
    <tr>
      <td style="text-align: left;">Paragraph</td>
      <td style="text-align: center;">Text</td>
      <td style="text-align: right;">And more</td>
    </tr>
  </tbody>
</table>

<img alt='cover' src='/assets/images/travel/travel_post_01.jpg'>

<blockquote> <p>A block quote with <s>strikethrough</s> and a URL: <a href='https://reactjs.org'>https://reactjs.org</a>.</p> </blockquote>
`;

export default function DemoMarkdownPage() {
  return (
    <>
      <Helmet>
        <title>Extra Components: Markdown | ZONE UI</title>
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
            heading="Markdown"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Markdown' },
            ]}
          />
        </Container>
      </Box>

      <Container sx={{ my: 10 }}>
        <Card>
          <CardContent>
            <Markdown content={content} />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
