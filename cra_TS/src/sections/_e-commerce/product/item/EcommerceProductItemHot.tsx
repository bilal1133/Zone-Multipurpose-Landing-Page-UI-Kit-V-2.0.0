import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Theme } from '@mui/material/styles';
import { Stack, Paper, Typography, LinearProgress, SxProps, Link } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// types
import { IProductItemProps } from 'src/types/product';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
//
import { ProductPrice } from '../../components';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItemProps;
  hotProduct?: boolean;
  sx?: SxProps<Theme>;
};

export default function EcommerceProductItemHot({ product, hotProduct = false, sx }: Props) {
  return (
    <Link component={RouterLink} to={paths.eCommerce.product} color="inherit" underline="none">
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: 'background.default',
          transition: (theme) =>
            theme.transitions.create('background-color', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),
          '&:hover': {
            bgcolor: 'background.neutral',
          },
          ...sx,
        }}
      >
        <Image
          src={product.coverImg}
          sx={{
            mb: 2,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
          }}
        />

        <Stack spacing={0.5}>
          <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
            {product.name}
          </TextMaxLine>

          <ProductPrice
            price={product.price}
            sx={{
              ...(hotProduct && {
                color: 'error.main',
              }),
            }}
          />
        </Stack>

        {hotProduct && (
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
            <LinearProgress
              color="inherit"
              variant="determinate"
              value={(product.sold / product.inStock) * 100}
              sx={{ width: 1 }}
            />

            <Typography
              variant="caption"
              sx={{ flexShrink: 0, color: 'text.disabled' }}
            >{`🔥 ${product.sold} Sold`}</Typography>
          </Stack>
        )}
      </Paper>
    </Link>
  );
}
