import ThemeRtlLayout from './ThemeRtlLayout';
import ThemeColorPresets from './ThemeColorPresets';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeSettings({ children }: Props) {
  return (
    <ThemeColorPresets>
      <ThemeRtlLayout>{children}</ThemeRtlLayout>
    </ThemeColorPresets>
  );
}
