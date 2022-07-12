// icons
import moneyIcon from '@iconify/icons-carbon/money';
import carFront from '@iconify/icons-carbon/car-front';
import devicesIcon from '@iconify/icons-carbon/devices';
import airport01 from '@iconify/icons-carbon/airport-01';
import directLink from '@iconify/icons-carbon/direct-link';
import personFavorite from '@iconify/icons-carbon/person-favorite';
import skillLevelBasic from '@iconify/icons-carbon/skill-level-basic';
import groupPresentation from '@iconify/icons-carbon/group-presentation';
import skillLevelAdvanced from '@iconify/icons-carbon/skill-level-advanced';
import skillLevelIntermediate from '@iconify/icons-carbon/skill-level-intermediate';
//
import { Iconify } from '../components';

// ----------------------------------------------------------------------

const levelIconStyle = {
  mr: 1,
  width: 20,
  height: 20,
};

export function getLevelIcon(level: string) {
  let icon;

  switch (level) {
    case 'Beginner':
      icon = <Iconify icon={skillLevelBasic} sx={{ ...levelIconStyle }} />;
      break;
    case 'Intermediate':
      icon = <Iconify icon={skillLevelIntermediate} sx={{ ...levelIconStyle }} />;
      break;
    default:
      icon = <Iconify icon={skillLevelAdvanced} sx={{ ...levelIconStyle }} />;
  }
  return icon;
}

// ----------------------------------------------------------------------

const BenefitIconStyle = {
  mr: 1.5,
  width: 24,
  height: 24,
  color: 'primary.main',
};

export function getBenefitIcon(benefit: string) {
  let icon;

  switch (benefit) {
    case 'Free parking':
      icon = <Iconify icon={carFront} sx={{ ...BenefitIconStyle }} />;
      break;
    case 'Bonus commission':
      icon = <Iconify icon={moneyIcon} sx={{ ...BenefitIconStyle }} />;
      break;
    case 'Travel':
      icon = <Iconify icon={airport01} sx={{ ...BenefitIconStyle }} />;
      break;
    case 'Training':
      icon = <Iconify icon={groupPresentation} sx={{ ...BenefitIconStyle }} />;
      break;
    case 'Device support':
      icon = <Iconify icon={devicesIcon} sx={{ ...BenefitIconStyle }} />;
      break;
    case 'Health care':
      icon = <Iconify icon={personFavorite} sx={{ ...BenefitIconStyle }} />;
      break;
    default:
      icon = <Iconify icon={directLink} sx={{ ...BenefitIconStyle }} />;
  }
  return icon;
}
