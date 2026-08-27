import { SvgIcon, SvgIconProps } from '@mui/material';

export const EraseIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_10926_65583)'>
          <path
            d='M7 21L2.7 16.7C1.7 15.7 1.7 14.2 2.7 13.3L12.3 3.70001C13.3 2.70001 14.8 2.70001 15.7 3.70001L21.3 9.30001C22.3 10.3 22.3 11.8 21.3 12.7L13 21'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M22 21H7'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M5 11L14 20'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_10926_65583'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
