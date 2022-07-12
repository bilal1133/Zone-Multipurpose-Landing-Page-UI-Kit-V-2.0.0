// icons
import informationIcon from '@iconify/icons-carbon/information';
import checkmarkOutline from '@iconify/icons-carbon/checkmark-outline';
import warningAlt from '@iconify/icons-carbon/warning-alt';
import warningIcon from '@iconify/icons-carbon/warning';
import closeFilled from '@iconify/icons-carbon/close-filled';
// @mui
import { SvgIcon, SvgIconProps } from '@mui/material';
// components
import { Iconify } from '../../components';

// ----------------------------------------------------------------------

// Close
export const CloseIcon = <Iconify icon={closeFilled} />;

// Alert
export const ErrorIcon = <Iconify icon={warningIcon} />;
export const InfoIcon = <Iconify icon={informationIcon} />;
export const SuccessIcon = <Iconify icon={checkmarkOutline} />;
export const WarningIcon = <Iconify icon={warningAlt} />;

// Using for Rating
export function StarIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <polygon points="12 1.5 8.5875 8.415 0.96 9.5175 6.48 14.9025 5.175 22.5 12 18.915 18.825 22.5 17.52 14.9025 23.04 9.525 15.4125 8.415" />
    </SvgIcon>
  );
}

// Using for Checkbox
export function CheckboxIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M16.2169 2.25H7.7822C4.4649 2.25 2.25 4.6262 2.25 8.0264v7.9472c0 3.4034 2.209 5.7764 5.5322 5.7764h8.4337c3.3241 0 5.5341-2.373 5.5341-5.7764V8.0264c0-3.4032-2.2098-5.7764-5.5331-5.7764Zm-8.4347 1.5h8.4347c2.47 0 4.0331 1.6787 4.0331 4.2764v7.9472c0 2.5978-1.5632 4.2764-4.0341 4.2764H7.7822c-2.4698 0-4.0322-1.6784-4.0322-4.2764V8.0264C3.75 5.432 5.3178 3.75 7.7822 3.75Z" />
    </SvgIcon>
  );
}

export function CheckboxCheckedIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M16.2169 2.25c3.3233 0 5.5331 2.3732 5.5331 5.7764v7.9472c0 3.4033-2.21 5.7764-5.5341 5.7764H7.7822c-3.3232 0-5.5322-2.373-5.5322-5.7764V8.0264C2.25 4.6262 4.4649 2.25 7.7822 2.25h8.4347Zm0 1.5H7.7822C5.3178 3.75 3.75 5.432 3.75 8.0264v7.9472c0 2.598 1.5624 4.2764 4.0322 4.2764h8.4337c2.4709 0 4.0341-1.6786 4.0341-4.2764V8.0264c0-2.5977-1.563-4.2764-4.0331-4.2764Zm-.127 5.3469a.7502.7502 0 0 1 .0725.9765l-.0726.0841-4.746 4.746a.7502.7502 0 0 1-.9764.0727l-.0841-.0726-2.374-2.373a.75.75 0 0 1 .9762-1.1334l.0842.0726 1.8433 1.8422 4.2162-4.2151a.75.75 0 0 1 1.0606 0Z" />
    </SvgIcon>
  );
}

export function CheckboxIndeterminateIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M16.2169 2.25c3.3233 0 5.5331 2.3732 5.5331 5.7764v7.9472c0 3.4033-2.21 5.7764-5.5341 5.7764H7.7822c-3.3232 0-5.5322-2.373-5.5322-5.7764V8.0264C2.25 4.6262 4.4649 2.25 7.7822 2.25h8.4347Zm0 1.5H7.7822C5.3178 3.75 3.75 5.432 3.75 8.0264v7.9472c0 2.598 1.5624 4.2764 4.0322 4.2764h8.4337c2.4709 0 4.0341-1.6786 4.0341-4.2764V8.0264c0-2.5977-1.563-4.2764-4.0331-4.2764ZM15 11.25a.75.75 0 0 1 .1018 1.4932L15 12.75H9a.75.75 0 0 1-.1018-1.4932L9 11.25h6Z" />
    </SvgIcon>
  );
}

// Using for Radio Button
export function RadioIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12.946 1.75c-5.66 0-10.25 4.59-10.25 10.25s4.59 10.25 10.25 10.25c5.661 0 10.25-4.59 10.25-10.25S18.607 1.75 12.946 1.75Zm0 1.5a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5Z" />
    </SvgIcon>
  );
}

export function RadioCheckedIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75Zm0 1.5a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
    </SvgIcon>
  );
}

// Using for Select Input
export function InputSelectIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: 18,
        height: 18,
        right: 12,
        fontSize: 'unset',
        position: 'absolute',
        top: 'calc(50% - 8px)',
        pointerEvents: 'none',
      }}
    >
      <path d="M12 16.5 4.5 9l1.05-1.05L12 14.4l6.45-6.45L19.5 9z" />
    </SvgIcon>
  );
}

// Using for Autocomplete DropDown
export function AutocompleteIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} sx={{ width: 18, height: 18 }}>
      <path d="M12 16.5 4.5 9l1.05-1.05L12 14.4l6.45-6.45L19.5 9z" />
    </SvgIcon>
  );
}

//  Using for TreeView
export function TreeViewCollapseIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M18,2.25 C20.0042592,2.25 21.6412737,3.82236105 21.744802,5.80084143 L21.75,6 L21.75,18 C21.75,20.0042592 20.1776389,21.6412737 18.1991586,21.744802 L18,21.75 L6,21.75 C3.99574083,21.75 2.35872626,20.1776389 2.25519801,18.1991586 L2.25,18 L2.25,6 C2.25,3.99574083 3.82236105,2.35872626 5.80084143,2.25519801 L6,2.25 L18,2.25 Z M18,3.75 L6,3.75 C4.80913601,3.75 3.83435508,4.67516159 3.75519081,5.84595119 L3.75,6 L3.75,18 C3.75,19.190864 4.67516159,20.1656449 5.84595119,20.2448092 L6,20.25 L18,20.25 C19.190864,20.25 20.1656449,19.3248384 20.2448092,18.1540488 L20.25,18 L20.25,6 C20.25,4.80913601 19.3248384,3.83435508 18.1540488,3.75519081 L18,3.75 Z M16,11 L16,12.6 L8,12.6 L8,11 L16,11 Z" />
    </SvgIcon>
  );
}

export function TreeViewExpandIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M18,2.25 C20.0042592,2.25 21.6412737,3.82236105 21.744802,5.80084143 L21.75,6 L21.75,18 C21.75,20.0042592 20.1776389,21.6412737 18.1991586,21.744802 L18,21.75 L6,21.75 C3.99574083,21.75 2.35872626,20.1776389 2.25519801,18.1991586 L2.25,18 L2.25,6 C2.25,3.99574083 3.82236105,2.35872626 5.80084143,2.25519801 L6,2.25 L18,2.25 Z M18,3.75 L6,3.75 C4.80913601,3.75 3.83435508,4.67516159 3.75519081,5.84595119 L3.75,6 L3.75,18 C3.75,19.190864 4.67516159,20.1656449 5.84595119,20.2448092 L6,20.25 L18,20.25 C19.190864,20.25 20.1656449,19.3248384 20.2448092,18.1540488 L20.25,18 L20.25,6 C20.25,4.80913601 19.3248384,3.83435508 18.1540488,3.75519081 L18,3.75 Z M12.5,8 L12.5,11.25 L15.75,11.25 L15.75,12.75 L12.5,12.75 L12.5,16 L11,16 L11,12.75 L7.75,12.75 L7.75,11.25 L11,11.25 L11,8 L12.5,8 Z" />
    </SvgIcon>
  );
}

export function TreeViewEndIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M18,2.25 C20.0042592,2.25 21.6412737,3.82236105 21.744802,5.80084143 L21.75,6 L21.75,18 C21.75,20.0042592 20.1776389,21.6412737 18.1991586,21.744802 L18,21.75 L6,21.75 C3.99574083,21.75 2.35872626,20.1776389 2.25519801,18.1991586 L2.25,18 L2.25,6 C2.25,3.99574083 3.82236105,2.35872626 5.80084143,2.25519801 L6,2.25 L18,2.25 Z M18,3.75 L6,3.75 C4.80913601,3.75 3.83435508,4.67516159 3.75519081,5.84595119 L3.75,6 L3.75,18 C3.75,19.190864 4.67516159,20.1656449 5.84595119,20.2448092 L6,20.25 L18,20.25 C19.190864,20.25 20.1656449,19.3248384 20.2448092,18.1540488 L20.25,18 L20.25,6 C20.25,4.80913601 19.3248384,3.83435508 18.1540488,3.75519081 L18,3.75 Z M14.048097,8.64124279 L15.1087572,9.70190296 L12.8106602,12 L15.1087572,14.298097 L14.048097,15.3587572 L11.75,13.0606602 L9.45190296,15.3587572 L8.39124279,14.298097 L10.6893398,12 L8.39124279,9.70190296 L9.45190296,8.64124279 L11.75,10.9393398 L14.048097,8.64124279 Z" />
    </SvgIcon>
  );
}
